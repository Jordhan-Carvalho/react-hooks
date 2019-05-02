import React, { useEffect, useContext } from "react";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  const position = useMousePosition();

  useEffect(() => {
    console.log("setting up effect");

    // comp did unmount // cleaning up effect
    return () => {
      console.log("cleaning up effect");
    };
  }, []);

  const removeNote = title => {
    dispatch({ type: "REMOVE_NOTE", title });
    // setNotes(
    //     notes.filter(note => note.title !== title)
    // )
  };

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>
        {position.x}, {position.y}
      </p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  );
};

export default Note;
