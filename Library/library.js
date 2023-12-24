const myLibrary = [new Book("Joe Abercrombie", "Before They are Hanged", 400, "No")];

function Book(author, title, pageCount, read) {
    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.read = (read === 'read') ? 'Yes' : 'No'
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

    let td = document.createElement("td");
    td.classList.add("remove-book")
    td.id = myLibrary.length-1;
    let tdText = document.createTextNode("X");
    td.appendChild(tdText);
    tr.appendChild(td);
}

function removeBookFromLibrary() {

}

function displayLibrary() {
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
        }

        let td = document.createElement("td");
        td.classList.add("remove-book")
        td.id = bookNumber;
        let tdText = document.createTextNode("X");
        td.appendChild(tdText);
        tr.appendChild(td);
        bookNumber++;
    }
}
displayLibrary()

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

