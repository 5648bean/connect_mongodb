const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://2201100184yh:V9xe;M!VfwTT!m&@cluster0.acmku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("データベース接続に成功しました"))
.catch((err) => console.log(err));

app.listen(3000, () => {
console.log("サーバが起動しました。")
})
