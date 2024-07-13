class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);	// this.favoriteBooks.length is number is not iteratable
		for (let bookName of this.favoriteBooks) {	
			console.log(bookName);
		}
	}
}	
	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
function loadBooks(myBooks) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API, (bookNames) => { // use arrow function instead of function(bookNames)
		for(let bookName of bookNames) {
			myBooks.addFavoriteBook(bookName);
		}
		myBooks.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();
loadBooks(myBooks);


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
