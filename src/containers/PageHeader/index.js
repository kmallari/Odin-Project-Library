import React from "react";

const PageHeader = ({ handleShowModal }) => {
  return (
    <div className="flex pt-24 m-auto content-start gap-6 flex-col w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-1/2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <h1 className="text-4xl">📚</h1>
          <h1 className="text-4xl font-bold"> My Library</h1>
        </div>
        <button
          className="rounded-full bg-blue-600 w-10 h-10 text-white text-3xl pb-6 hover:bg-blue-700 transition-all"
          onClick={handleShowModal}
        >
          +
        </button>
      </div>
      <div>
        <p className="text-gray-600">
          This was made for a project on{" "}
          <a
            className="text-blue-400 underline hover:text-blue-500 transition-all"
            href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/library"
          >
            The Odin Project
          </a>
          , in which I need to make a "library" of books.
        </p>
        <p className="text-gray-600">
          You can view the source code for the project on{" "}
          <a
            className="text-blue-400 underline hover:text-blue-500 transition-all"
            href=""
          >
            Github.
          </a>
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
