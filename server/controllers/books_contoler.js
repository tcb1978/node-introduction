const books = [];
let id = 0;

module.exports = {
    create(req, res) {
        console.log('You sent me this data ', req.body);
        books.push({
            id: id,
            title: req.body.title,
            author: req.body.author,
        });
        id++
        console.log('books', books);
        res.status(200).json(books)
    }

    //delete(req, res) {

    //}
}

// app.delete('/api/books/:id', (req, res) => {
//     const bookId = req.params.id;
//     const bookIndex = books.findIndex(book => book.id === parseInt(bookId,));
//     books.splice(bookIndex, 1);
//     res.json(books)
// })