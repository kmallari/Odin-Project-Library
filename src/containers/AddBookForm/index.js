import React from "react";
import { useState } from "react";

const AddBookForm = ({ handleAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [read, setRead] = useState(true);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "pages":
        setPages(e.target.value);
        break;
      case "read":
        if (e.target.value === "yes") {
          setRead(true);
        } else {
          setRead(false);
        }
        break;
      default:
        break;
    }
  };

  return (
    <form className="p-10 shadow-2xl rounded-3xl w-96 gap-6 flex flex-col bg-white">
      <div className="flex flex-col font-bold font-sans gap-3">
        <label htmlFor="title">Title</label>
        <input
          required
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Book Title"
          className="appearance-none border-2 border-gray-100 text-gray-800 p-3 rounded-lg focus:shadow-none focus:outline-none focus:bg-white focus:border-blue-500 bg-gray-100 focus:border-blue-600"
        />
      </div>

      <div className="flex flex-col font-bold font-sans gap-3">
        <label htmlFor="author">Author</label>
        <input
          required
          onChange={handleChange}
          type="text"
          name="author"
          placeholder="Author"
          className="appearance-none border-2 border-gray-100 text-gray-800 p-3 rounded-lg focus:shadow-none focus:outline-none focus:bg-white focus:border-blue-500 bg-gray-100 focus:border-blue-600"
        />
      </div>
      <div className="flex flex-col font-bold font-sans gap-3">
        <label htmlFor="">Number of Pages</label>
        <input
          required
          onChange={handleChange}
          type="number"
          name="pages"
          placeholder="Pages"
          className="appearance-none border-2 border-gray-100 text-gray-800 p-3 rounded-lg focus:shadow-none focus:outline-none focus:bg-white focus:border-blue-500 bg-gray-100 focus:border-blue-600"
        />
      </div>
      <div className="flex flex-col font-bold font-sans gap-3">
        <label htmlFor="yes-no">Read the Book?</label>
        <select
          required
          onChange={handleChange}
          id="yes-no"
          name="read"
          className="appearance-none border-2 border-gray-100 text-gray-800 p-3 rounded-lg focus:shadow-none focus:outline-none focus:bg-white focus:border-blue-500 bg-gray-100 focus:border-blue-600"
        >
          <option value="yes">Yes 😃</option>
          <option value="no" default>
            No 😢
          </option>
        </select>
      </div>
      <button
        onClick={() => handleAddBook(title, author, pages, read)}
        className="bg-blue-500 p-4 rounded-xl text-white transition-all hover:bg-blue-600 hover:text-xs"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBookForm;
