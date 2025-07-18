const route = require("express").Router();
const dotenv = require("dotenv");
const querystring = require("querystring");
const axios = require("axios");
const jwt = require("jsonwebtoken");
// Load environment variables first
dotenv.config();
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

// Step 1: Redirect to Google Auth
route.get("/google", (req, res) => {
  const qs = querystring.stringify({
    client_id,
    redirect_uri,
    response_type: "code",
    scope: "openid email profile",
    access_type: "offline",
    prompt: "consent",
  });

  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${qs}`);
});

// Step 2: Handle callback from Google
route.get("/google/callback", async (req, res) => {
  const code = req.query.code;

  if (!code) return res.send("No code provided!");

  try {
    // Step 3: Exchange code for token
    const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id,
      client_secret,
      redirect_uri,
      grant_type: "authorization_code",
    });

    const { access_token, id_token } = tokenRes.data;
 
    // Step 4: Use token to get user info
    const userRes = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const user = userRes.data;
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
    req.session.token = token;
 res.send(`
  <script>
    window.opener.postMessage({ login: true }, 'http://localhost:5173');
    window.close();
  </script>
`);
  } catch (err) {
    console.error(
      "Error during authentication:",
      err.response?.data || err.message
    );
    res.status(500).send("Authentication failed.");
  }
});

module.exports = route;
