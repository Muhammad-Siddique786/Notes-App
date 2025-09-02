import React, { useState} from "react";
import { NotebookPen, PenLine, Trash } from "lucide-react";

const Index = () => {
  const [notes, setNotes] = useState([]); // notes ka array

  const createNotes = () => {
    const newNote = { id: Date.now(), text: "" }; // har note ka unique id
    setNotes([newNote, ...notes]); // upar naya note add hoga
  };

  const updateNote = (id, value) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: value } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="bg-gradient-to-r from-emerald-400 to-teal-600 min-h-screen flex flex-col items-center py-10">
      {/* Title Section */}
      <div className="text-4xl font-bold text-white flex flex-row gap-2 items-center mb-8">
        <NotebookPen size={34} className="text-blue-500" />
        <p>Notes</p>
      </div>

      {/* Button Section */}
      <button
        className="px-6 py-3 text-xl font-semibold flex flex-row gap-2 items-center bg-pink-500 text-white rounded-xl shadow-md hover:bg-pink-600 transition"
        onClick={createNotes}
      >
        <PenLine size={28} />
        <p>Add Note</p>
      </button>

      {/* Notes List */}
      <div className="container mt-6 w-full max-w-lg flex flex-col gap-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="relative bg-white rounded-2xl shadow-md p-2"
          >
            <input
              type="text"
              value={note.text}
              onChange={(e) => updateNote(note.id, e.target.value)}
              className="w-full p-2 rounded-xl border-0 outline-0"
              placeholder="Write your note..."
            />
            <Trash
              size={22}
              className="text-gray-500 absolute top-3 right-3 cursor-pointer hover:text-red-500"
              onClick={() => deleteNote(note.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
