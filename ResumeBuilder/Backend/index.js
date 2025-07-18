const express = require("express");
const Auth = require('./routes/Auth');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();

//middlewwarees 
app.use(cors({
    origin:process.env.ALLOWED_ORIGIN,
    credentials:true
}));
app.use(cookieParser());
app.use(session({
    name:'Crodous_Cv',
    secret:process.env.SESSION_SECRET,
    resave:false,
    cookie:{
        httpOnly:true,
        secure:!!process.env.PRODUCTION,
        sameSite:process.env.PRODUCTION?'none':'lax',
          maxAge: 24 * 60 * 60 *4 * 1000 
    }
}))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/Auth',Auth);



app.listen(3000, () => {
  console.log("✅ Server started on http://localhost:3000");
});
