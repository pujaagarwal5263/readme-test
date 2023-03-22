const express = require('express');
const app= express();
const { generateReadme} = require("my-readme-latest")


 generateReadme();


app.listen(8000, () => {
   // console.log("server running at 8000");
});
 