const {booksDatabase} = require("../db/books")


//Adding a book

const addBook=(book)=>{
    book.id=booksDatabase.length+1;
    booksDatabase.push(book);
    console.log(booksDatabase);

}



//update a book

const update=(id,key,value)=>{
    // var exists={};
    var exists = booksDatabase.find(element => element.id === id);
    console.log(exists);

    if (!exists) {
        console.log("\nBook not Found\n");
        console.log(booksDatabase);
    }
    else{
        exists[key]=value;
        console.log("\n Book updated\n");
        console.log(exists);
    }
}

//remove

const remove=(id)=>{
    console.log("\n2.FUNCTION TO REMOVE A  BOOK IN THE DB----------------------------------------------------------------\n");
   var exists=booksDatabase.find(ele=>ele.id==id);
   if (!exists) {
    console.log("Book not found");
   }
   else{
    var index=booksDatabase.indexOf(exists);
    booksDatabase.splice(index,1);
    console.log("Book successfully removed\n");
    console.log("Book list now:\n");
    console.log(booksDatabase);
   }

};

//find a book 

const findById=(id)=>{
    let foundbook = {};
    foundbook = booksDatabase.find(ele=>ele.id===id);
    if (!foundbook) {
        console.log("\n Book not Found\n");
    }
    else{
        console.log("\nFound Book:\n");
        console.log(foundbook);
    }
    
}

//Display Book

const display=()=>{
    console.log("\n Books in the Library\n")
    console.log(booksDatabase);
}
module.exports={
    addBook,
    update,
    remove,
    findById,
    display
}