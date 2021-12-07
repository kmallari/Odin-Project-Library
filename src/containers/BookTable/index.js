import React from "react";

const BookTable = ({ books, handleChangeStatus, handleDeleteBook }) => {
  return (
    <table className="w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-1/2">
      <thead>
        <tr>
          <th className="px-4 py-3 text-blue-600 text-left">Title</th>
          <th className="px-4 py-3 text-blue-600 text-left">Author</th>
          <th className="px-4 py-3 text-blue-600 text-left">Status</th>
          <th className="px-4 py-3 text-blue-600 text-left">Pages</th>
          <th className="px-4 py-3 text-blue-600 text-left"></th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, i) => {
          if (i % 2 != 0) {
            return (
              <tr className="border-t-2 bg-blue-100" id={i}>
                <td className="border-t-2 border-blue-500 px-4 py-3 text-blue-600 font-medium">
                  {book.title}
                </td>
                <td className="border-t-2 border-blue-500 px-4 py-3 text-blue-600 font-medium">
                  {book.author}
                </td>
                <td
                  className="border-t-2 border-blue-500 px-4 py-3 text-blue-600 font-medium"
                  id={i}
                >
                  <button
                    id={i}
                    className="border border-blue-300 text-blue-400 px-3 py-1 rounded hover:bg-gray-100 hover:text-blue-600 transition-all"
                    onClick={handleChangeStatus}
                  >
                    {book.read ? "Read" : "Not Read"}
                  </button>
                </td>
                <td className="border-t-2 border-blue-500 px-4 py-3 text-blue-600 font-medium">
                  {book.pages}
                </td>
                <td className="border-t-2 border-blue-500 px-4 py-3 text-white text-sm ">
                  <button
                    id={i}
                    className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition-all"
                    onClick={handleDeleteBook}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          } else {
            return (
              <tr className="border-t-2" id={i}>
                <td className="border-t-2 border-blue-500 px-4 py-3 text-blue-600 font-medium">
                  {book.title}
                </td>
                <td className="border-t-2 border-blue-500 px-4 py-3 text-blue-600 font-medium">
                  {book.author}
                </td>
                <td className="border-t-2 border-blue-500 px-4 py-3 text-blue-600 font-medium">
                  <button
                    id={i}
                    className="border border-blue-300 text-blue-400 px-3 py-1 rounded hover:bg-gray-100 hover:text-blue-600 transition-all"
                    onClick={handleChangeStatus}
                  >
                    {book.read ? "Read" : "Not Read"}
                  </button>
                </td>
                <td className="border-t-2 border-blue-500 px-4 py-3 text-blue-600 font-medium">
                  {book.pages}
                </td>
                <td className="border-t-2 border-blue-500 px-4 py-3 text-white text-sm ">
                  <button
                    id={i}
                    className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition-all"
                    onClick={handleDeleteBook}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default BookTable;
