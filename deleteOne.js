const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
//const uri = "mongodb+srv://matsunami2:password@test.lfwohhl.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://2201100184yh:V9xeM!VfwTT!m&@cluster0.acmku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const notes = database.collection('notes');
// idが2のドキュメントを削除
const note = await notes.deleteOne({ id: 2});
console.log(note);
// 最後にクロースする
await client.close();
}
run();
