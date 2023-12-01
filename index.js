const {addBook,update,remove,findById,display} = require("./controller/bookController");

// const{add}=booksDatabase;

var added={
    title:"My Possessive Deal",
    author:"mochacapri",
    year:2023
};

addBook(added);

update(2,'year',2005);
remove(4);
findById(1);
display();