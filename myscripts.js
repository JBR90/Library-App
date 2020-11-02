class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
  }

function bookDisplay(){

    // removes all div's and resets display

    let cardContainer = document.querySelector('#card-container');
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.lastChild);
    }

    // loop round each book in library

    myLibrary.forEach((book,index) => {
        let content = document.createElement('div');
        content.classList.add('card');
        content.dataset.cardNumber = index;
   ;



        //loop round detail of each book
        for(const details in book){
            let detailOnCard = document.createElement('p');
            detailOnCard.classList.add('detail')
            if(book[details] == "no"){
              content.classList.remove('read-yes')
            }else{
              content.classList.add('read-yes')
            }
            detailOnCard.textContent = ` ${details} :
                                         ${book[details]}`
            content.appendChild(detailOnCard);
            
        }
     
        cardContainer.appendChild(content);

        //create delete button
        let btnOnCard = document.createElement('button');
        btnOnCard.classList.add('btn-card')
        btnOnCard.dataset.index = index;
        btnOnCard.textContent = "Delete"

        //create read button
        let btnOnCardRead = document.createElement('button');
        btnOnCardRead.classList.add('btn-card-read')
        btnOnCardRead.dataset.index = index;
        btnOnCardRead.textContent = "Read"

        //creates button holder for styling
        let buttonHolder = document.createElement('div');
        buttonHolder.classList.add('btn-holder')
        buttonHolder.appendChild(btnOnCard);
        buttonHolder.appendChild(btnOnCardRead);
        content.appendChild(buttonHolder);
    } )

}

// toggle add book form

function ToggleBook(){
    let form = document.getElementById('form-container');
    if (form.style.display === "flex") {
      form.style.display = "none";
    } else {
      form.style.display = "flex";
    }
}

// #Clear input values in form
function ClearForm(){
    let elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
    if (elements[ii].type == "text") {
        elements[ii].value = "";
    }
}
}




//toggle add form button

const btnAddBook = document.querySelector('#btn-add-book');
btnAddBook.addEventListener('click', () => {
    ToggleBook()

});

// submit new book

const btnSubmit = document.querySelector('#btn-submit');
btnSubmit.addEventListener('click', () => {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let check = document.getElementById('read').checked;
  console.log(check)
  let read = "no"
  check == true? read="yes":read="no";
 

  console.log(title)
  addBookToLibrary(title, author, pages, read)
  bookDisplay()
  ToggleBook()
  ClearForm()
  let buttons = document.querySelectorAll('button');
});

// array to hold book objects

let myLibrary = [];

// test books

// addBookToLibrary("my book","joe Baker","20","read")
// addBookToLibrary("helo","serd metop","340","not read")
// addBookToLibrary("my book","joe Baker","20","read")
// addBookToLibrary("helo","serd metop","340","not read")
// addBookToLibrary("my book","joe Baker","20","read")
// addBookToLibrary("helo","serd metop","340","not read")
// addBookToLibrary("my book","joe Baker","20","read")
// addBookToLibrary("helo","serd metop","340","not read")

bookDisplay()


// delete book button

const wrapper = document.getElementById('card-container');

wrapper.addEventListener('click', (event) => {
   
  let isButton = event.target.nodeName === 'BUTTON';
  console.log(event.target.classList.contains('btn-card-read'))
  if ((isButton) && event.target.classList.contains('btn-card')){
     
    let cardIndex = event.target.dataset.index;
    myLibrary.splice(cardIndex, 1);
    console.table(myLibrary)
    
    // bookDisplay()
  }else if((isButton) && event.target.classList.contains('btn-card-read')){
    console.log("yes")

    let cardIndex = event.target.dataset.index;
    if(myLibrary[cardIndex].read == "yes"){
      myLibrary[cardIndex].read = "no"
    }else{
      myLibrary[cardIndex].read = "yes"
    }
   
  }
  bookDisplay()
})










