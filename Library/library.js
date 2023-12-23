const myLibrary = [new Book("The Odyssey"), new Book("Before They are Hanged")];

function Book(title) {
    this.title = title
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    const tableBody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    tableBody.appendChild(tr);

    for (let property of Object.keys(book)) {
        let td = document.createElement("td");
        let tdText = document.createTextNode(book[property])
        
        td.appendChild(tdText);
        tr.appendChild(td);
    }
}

function displayLibrary() {
    const tableBody = document.querySelector("tbody");
    for (let book of myLibrary) {
        const tr = document.createElement("tr");
        tableBody.appendChild(tr);
        
        for (let property of Object.keys(book)) {
            let td = document.createElement("td");
            let tdText = document.createTextNode(book[property]);
            
            td.appendChild(tdText);
            tr.appendChild(td);
        }
    }
}
displayLibrary()

const modal = document.querySelector('.modal');
const button = document.querySelector('.add-book')
const library = document.querySelector('.library-container')

button.addEventListener('click', (e) => {
    modal.classList.add("show")
    library.classList.add("hide")
})

// Form options:
// Author, title, # of pages, Read: Boolean

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

