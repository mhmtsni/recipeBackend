const express = require("express")
const bodyParser = require("body-parser")

const server = express()
const port = 7000
let bookmarks = []
server.use(bodyParser.json())

server.get("/", (req, res) => {
    res.send("selamaleyküm")
})
server.get("/bookmarks", (req, res) => {
    res.send(bookmarks)
})
server.post("/bookmarks/add", (req, res) => {
    const newBookmark = req.body
    console.log(newBookmark)
    if(!bookmarks.some(bookmark => bookmark.id == newBookmark.id)){
        bookmarks.push(newBookmark)
        res.status(200).json(newBookmark)
    }else{
    return
        
    }
})
server.delete("/bookmarks/delete/:id", (req, res) => {
    const {id} = req.params
    const found = bookmarks.some(bookmark => bookmark.id === id);
    if(!found){
        res.status(400).json({msg: "No id found"})
    }else{
    bookmarks = bookmarks.filter((bookmark) => bookmark.id !== id)
    res.json(bookmarks)
    }
})
server.listen(port, () => {
    console.log("geldik kanka")
})