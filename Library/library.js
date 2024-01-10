class Book {
    constructor(author, title, pageCount, read) {
        this.author = author;
        this.title = title;
        this.pageCount = pageCount;
        this.read = read;
    }
}

// const myLibrary = [new Book("Joe Abercrombie", "Before They are Hanged", 644, "No")];
class Library {
    constructor() {
        this.books = [new Book("Joe Abercrombie", "Before They are Hanged", 644, "No")]
    }

    set addBook(book) {
        this.books.push(book)
    }

    removeBookFromLibrary(index) {
        this.books.splice(index, 1);
    }

    display() {
        const tableBody = document.querySelector("tbody");
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild)
        }
        
        let bookNumber = 0;
        for (let book of this.books) {
            const tr = document.createElement("tr");
            tableBody.appendChild(tr);
            
            for (let property of Object.keys(book)) {
                let td = document.createElement("td");
                let tdText = document.createTextNode(book[property]);
    
                td.appendChild(tdText);
                tr.appendChild(td);
    
                if (property === 'read') {
                    addEditReadStatusListener(property, book, td)
                }
            }
    
            addBookRemovalListener(tr, bookNumber)
            bookNumber++;
        }
    }
}


/*function addBookToLibrary(book) {
    myLibrary.push(book);
    displayLibrary();
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}*/

function addEditReadStatusListener(property, book, td) {    
    td.addEventListener('click', (e) => {
        if (book.read === 'No') {
            book[property] = 'Yes';
            td.textContent = 'Yes';

        } else if (book.read === 'Yes') {
            book[property] = 'No';
            td.textContent = 'No';
        }
    })
}

function addBookRemovalListener(tr, bookNumber) {
    let td = document.createElement("td");
    td.id = bookNumber;
    td.appendChild(document.createTextNode("X"));
    td.addEventListener('click', (e) => {
        // removeBookFromLibrary(e.target.id)
        
    })
    tr.appendChild(td);
}

/*function displayLibrary() {
    const tableBody = document.querySelector("tbody");
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild)
    }
    
    let bookNumber = 0;
    for (let book of myLibrary) {
        const tr = document.createElement("tr");
        tableBody.appendChild(tr);
        
        for (let property of Object.keys(book)) {
            let td = document.createElement("td");
            let tdText = document.createTextNode(book[property]);

            td.appendChild(tdText);
            tr.appendChild(td);

            if (property === 'read') {
                addEditReadStatusListener(property, book, td)
            }
        }

        addBookRemovalListener(tr, bookNumber)
        bookNumber++;
    }
}*/
// displayLibrary()

function allInputsFilled(author, title, pageCount) {
    if (author === '' || title === '' || pageCount === '') {
        alert("All inputs need to be filled")
        return false;
    }
    return true;
}

function dropModal(author, title, pageCount, modal, library) {
    author.value = '';
    title.value = '';
    pageCount.value = '';
    modal.classList.remove("show");
    library.classList.remove("hide");
}

const modal = document.querySelector('.modal');
const button = document.querySelector('.add-book')
const library = document.querySelector('.library-container')

button.addEventListener('click', (e) => {
    modal.classList.add("show");
    library.classList.add("hide");
})

const form = document.getElementById("add-book-form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let author = document.querySelector("#author");
    let title = document.querySelector("#title");
    let pageCount = document.querySelector("#page-count");
    let read = document.querySelector("input[name=has-read]:checked");
    
    if (e.submitter.id === 'add' && allInputsFilled(author.value, title.value, pageCount.value)) {
        addBookToLibrary(new Book(author.value, title.value, pageCount.value, read.id));
        dropModal(author, title, pageCount, modal, library);
    } else if (e.submitter.id === 'discard') {
        dropModal(author, title, pageCount, modal, library);
    }
});

