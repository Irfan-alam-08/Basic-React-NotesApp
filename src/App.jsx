import { useState } from "react";

const App = () => {

  
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Title:", title);
    console.log("Details:", details);

    setTitle("");
    setDetails("");
    // setNotes([...notes, { title, details }]);
    const newNote = [...notes, { title, details }];
    setNotes(newNote);
  };

  return (
    <div className="h-screen lg:flex bg-gray-100 text-black">
      <form
        className="flex flex-col w-1/2 items-start gap-2 p-10 "
        onSubmit={handleSubmit}
      >
        {/* first input for heading */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter note..."
          className="px-5 py-2 w-full font-medium rounded border-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        {/* second input for details */}
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          type="text"
          id="noteDetails"
          placeholder="Write note details..."
          className="px-5 py-2 w-full h-30 rounded border-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        <button
          className="px-5 font-medium w-full py-2 bg-blue-500 text-white cursor-pointer active:bg-blue-600 active:scale-98 rounded"
          type="submit"
        >
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-4 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 sm:mb-5">My Notes</h1>
        <div className="flex flex-wrap items-start gap-5 ">
          <div className="h-50 w-40 rounded bg-gray-700"></div>
          <div className="h-50 w-40 rounded bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
