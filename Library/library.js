const myLibrary = [];

function Book(title) {
    this.title = title
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayLibrary() {
    // Create table header

    for (let book of myLibrary) {
        // Add rows of books here
    }
}

const form = document.getElementById("add-book-form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let bookInput = document.getElementById("book-input");
    
    if (bookInput.value === '') {
        alert("Input cannot be blank")
    } else {
        let book = new Book(bookInput.value);
        addBookToLibrary(book);
        bookInput.value = '';
    };
});

displayLibrary(myLibrary);
