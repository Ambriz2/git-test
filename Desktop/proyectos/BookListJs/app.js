//Book Class: Represents book
class Book{
    constructor(title, author, isbn){
         this.title = title;
         this.author = author;
         this.isbn = isbn;
    }
};
// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(element) {
    if(element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }


        
        static showAlert(message, className) {
            const div = document.createElement('div');
            div.className = `alert alert-${className}`;
            div.appendChild(document.createTextNode(message));
            const container = document.querySelector('.container');
            const form = document.querySelector('#book-form');
            container.insertBefore(div, form);
            //vanish in 4 seconds
            setTimeout(() => document.querySelector('.alert').remove(), 4000);

        }
        static clearFields(){
            document.querySelector('#title').value = "";
            document.querySelector('#author').value = "";
            document.querySelector('#isbn').value = "";
        }
    
};
// Store Class: Handles Storage

class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(isbn) {
      const books = Store.getBooks();
  
      books.forEach((book, index) => {
        if(book.isbn === isbn) {
          books.splice(index, 1);
        }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
// Event: Display Book 
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit',(e) =>{

    //prevent submit from happening

    e.preventDefault();
    //Get form values
    const tittle = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //validate
    if(tittle === '' || author === '' || isbn === ''){
        UI.showAlert('All fields required', 'danger text-center')
        } else{

    //Institiate book
    const book = new Book(tittle, author, isbn);
    console.log(book)

    //add book to UI
    UI.addBookToList(book);

    //add book to store
    Store.addBook(book);

    //Book added message

    UI.showAlert('Book Added', 'success text-center');

    // to clear fields (input text value)
    UI.clearFields();
  }

});



 // Event: Remove a Book
 document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);


//Book delete button
UI.showAlert('Book Deleted', 'warning text-center')


});


