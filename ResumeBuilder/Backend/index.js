const express = require("express");
const Auth = require('./routes/Auth');

const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();

//middlewwarees 
app.use(cors({
    origin:process.env.ALLOWED_ORIGIN,
    credentials:true
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/Auth',Auth);



app.listen(3000, () => {
  console.log("✅ Server started on http://localhost:3000");
});
