const books = [];
let id = 0;

module.exports = {
    create(req, res) {
        books.push({
            id: id,
            title: req.body.title,
            author: req.body.author,
        });
        id++
        console.log('books', books);
        res.status(200).json(books);
    },

    read(req, res) {
        res.status(200).json(books);
    },

    update(req, res) {
        console.log('Tacos!!');
        var index = req.params.id
        books[index] = {
            title: req.body.title || books[index].title,
            author: req.body.author || books[index].author
        }
        res.json(books);
    },

    update(req, res) {
        const bookId = req.params.id;
        const bookIndex = books.findIndex(book => book.id === +bookId);
        books[bookIndex] = {
            title: req.body.title,
            author: req.body.author
        }
        res.json(books);
    },

    delete(req, res) {
        const bookId = req.params.id;
        const bookIndex = books.findIndex(book => book.id === +bookId);
        books.splice(bookIndex, 1);
        res.json(books)
    }
}