// class Batsman {
//     constructor(firstName, lastName, runsMade, numberOfFours, numberOfSixes) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.runsMade = runsMade;
//         this.numberOfFours = numberOfFours;
//         this.numberOfSixes = numberOfSixes;
//     }

//     displayInfo() {
//         console.log(`Batsman: ${this.firstName} ${this.lastName}\nRuns Made: ${this.runsMade}\nNumber of Fours: ${this.numberOfFours}\nNumber of Sixes: ${this.numberOfSixes}`);
//     }

   
// }

// const batsman = new Batsman("Virat", "Kohli", 12000, 1000, 300);
// batsman.displayInfo();



class Book {
 
    constructor(bookNumber, bookName, author, publisher, price, copiesAvailable) {
        this.bookNumber = bookNumber;
        this.bookName = bookName;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.copiesAvailable = copiesAvailable;
        this.copiesIssued = 0;
    }

   
    issueBook() {
        if (this.copiesAvailable > this.copiesIssued) {
            this.copiesIssued++;
            console.log(`Book issued successfully. Copies issued: ${this.copiesIssued}, Copies available: ${this.copiesAvailable - this.copiesIssued}`);
        } else {
            console.log('No copies available to issue.');
        }
    }

   
    returnBook() {
        if (this.copiesIssued > 0) {
            this.copiesIssued--;
            console.log(`Book returned successfully. Copies issued: ${this.copiesIssued}, Copies available: ${this.copiesAvailable - this.copiesIssued}`);
        } else {
            console.log('No copies are issued to return.');
        }
    }

   
    displayInfo() {
        console.log(`Book Information:
        Book Number: ${this.bookNumber}
        Book Name: ${this.bookName}
        Author: ${this.author}
        Publisher: ${this.publisher}
        Price: $${this.price}
        Copies Available: ${this.copiesAvailable - this.copiesIssued}
        Copies Issued: ${this.copiesIssued}`);
    }
}


const book = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford", "O'Reilly Media", 29.99, 10);


book.displayInfo();


book.issueBook();
book.issueBook();

book.displayInfo();

// Returning a book
book.returnBook();

// Displaying book information after returning
book.displayInfo();






