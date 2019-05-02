import React, { useEffect, useState, useReducer } from "react";
import NoteList from "./noteList";
import notesReducer from "../reducers/notes";
import AddNoteForm from "./addNoteForm";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
  // const [notes, setNotes] = useState([])
  const [notes, dispatch] = useReducer(notesReducer, []);

  //comp did mount
  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));

    if (notesData) {
      dispatch({ type: "POPULATE_NOTES", notes: notesData });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
};

export default NoteApp;

// const App = (props) => {
//     const iniCount = props.initialCount ? props.initialCount : 0
//     const [count, setCount] = useState(iniCount)
//     const [text, setText] = useState('')

//     // to use as comp did mount (load 1 time)
//     useEffect(() => {
//         console.log('this should run once')
//     }, []);

//     useEffect(() => {
//         console.log('use effect ran')
//         document.title = count
//     }, [count])

//     const increment = () => {
//         setCount(count +1)
//     }

//     return (
//         <div>
//             <p>The current {text || 'count'} is {count}</p>
//         <button onClick={increment}>+1</button>
//         <button onClick={() => setCount(count - 1)}>-1</button>
//         <button onClick={() => setCount(iniCount)}>Reset</button>
//         <input value={text} onChange={(e) => setText(e.target.value)} />
//         </div>
//      );
// }
