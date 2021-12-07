import "./App.css";
import AddBookForm from "./containers/AddBookForm";
import { useState, useEffect } from "react";
import BookTable from "./containers/BookTable";
import PageHeader from "./containers/PageHeader";
import { usePrevious } from "./usePrevious";

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [books, setBooks] = useState([]);

  const handleShowModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const handleChangeStatus = (e) => {
    const newBooks = [...books];
    newBooks[parseInt(e.target.id)].read =
      !newBooks[parseInt(e.target.id)].read;
    setBooks(newBooks);
  };

  const handleAddBook = (title, author, pages, read) => {
    const book = new Book(title, author, pages, read);
    setBooks(books.concat(book));
    setModalIsVisible(false);
    console.log("book", book);
    console.log("books", books);
    console.log(books);
  };

  const handleDeleteBook = (e) => {
    const newBooks = [...books];
    newBooks.splice(parseInt(e.target.id), 1);
    setBooks(newBooks);
  };

  useEffect(() => {
    const localStorageBooks = localStorage.getItem("books");

    if (localStorageBooks) {
      setBooks(JSON.parse(localStorageBooks));
    }
  }, []);

  const prevBooks = usePrevious(books);
  useEffect(() => {
    if (prevBooks !== books) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books]);

  return (
    <div className="h-full w-full">
      {" "}
      {/* DO NOT MAKE A FLEX */}
      {/* Enter info for book modal */}
      {modalIsVisible ? (
        <div className="absolute w-full h-full">
          {/* black background for the modal */}
          <div
            onClick={handleShowModal}
            className="absolute w-full h-full bg-black bg-opacity-30"
          ></div>
          <div className="absolute-center">
            <AddBookForm handleAddBook={handleAddBook} />
          </div>
        </div>
      ) : null}
      <div className="flex flex-col gap-14">
        <PageHeader handleShowModal={handleShowModal} />
        <div className="flex justify-center">
          <BookTable
            books={books}
            handleChangeStatus={handleChangeStatus}
            handleDeleteBook={handleDeleteBook}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
