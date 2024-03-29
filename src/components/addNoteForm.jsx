import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { dispatch } = useContext(NotesContext);

  const addNote = e => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", note: { title, body } });
    // setNotes([
    //     ...notes,
    //     {
    //         title,
    //         body
    //     }
    // ])
    setTitle("");
    setBody("");
  };

  return (
    <>
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          rows="5"
          cols="33"
        />
        <button>Add note</button>
      </form>
    </>
  );
};

export default AddNoteForm;
