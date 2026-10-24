import { useState } from "react";

const App = () => {

  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || details.trim() === "") {
    setError("Title and details both are required to add a note!");
    return;
  }
  setError("");

    setTitle("");
    setDetails("");
    
    const newNote = [...notes, { title, details }]; // and this is shortcut of newNote.push({ title, details });

    // setNotes([...notes, { title, details }]); we can also write the whole thing in this line
    
    setNotes(newNote);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  }

  return (
    <div className="h-screen lg:flex bg-gray-100 text-black">
      <form
        className="flex flex-col lg:w-1/2 items-center lg:items-start gap-2 p-10 "
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
          className="px-5 font-medium w-full py-2 bg-blue-500 text-white cursor-pointer active:bg-blue-700 hover:scale-98 rounded"
          type="submit"
        >
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-4 p-6 overflow-y-auto flex flex-col items-center lg:items-start ">
        <h1 className="text-3xl font-bold text-gray-800 mb-5 ">My Notes</h1>
        {error && <p className="text-red-500 font-semibold mb-3">{error}</p>}
        <div className="flex flex-wrap items-start gap-5 lg:justify-start justify-center">
          {notes.map((note, index) => (
            <div
              key={index}
              className="w-45 h-70 bg-[url('https://i.pinimg.com/736x/ca/66/14/ca6614bc04cff1e4d6b013c9f55fff08.jpg')] bg-cover rounded shadow-xl p-4 flex flex-col justify-between border-b-2 hover:scale-105 transition-transform duration-300"
            > 
            <div className="flex flex-col items-start mt-3">
              <h2 className="text-sm font-bold text-gray-800">{date.toLocaleDateString()}</h2>
              <h2 className="text-xl leading-tight font-bold">{note.title}</h2>
            </div>
              <p className="text-gray-800 font-semibold leading-tight">{note.details}</p>
              <button onClick={() => deleteNote(index)} className="py-1 bg-red-500 text-white cursor-pointer active:bg-red-600 active:scale-98 rounded">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
