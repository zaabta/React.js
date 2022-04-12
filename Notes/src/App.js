import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from './components/Search';
import Header from './components/Header';
import './index.css';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text:'this is the first note',
      date:'15/04/2021'
    },
    { 
      id: nanoid(),
      text:'this is the secound note',
      date:'15/04/2021'
    },
    {
      id: nanoid(),
      text:'this is the third note',
      date:'15/04/2021'
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const SavedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    if(SavedNotes) setNotes(SavedNotes);
    const SavedMode = JSON.parse(
      localStorage.getItem('dark-mode')
      );
    if(SavedMode) setDarkMode(SavedMode);  
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
    localStorage.setItem(
      'dark-mode',
      JSON.stringify(darkMode)
    );
  }, [notes, darkMode]);

  

  

  const addNote = (text)=>{
    const data = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    };

    const newNote = [...notes, data];
    setNotes(newNote);
  };

  const deleteNote = id => {
    setNotes(notes.filter( note => note.id !== id));
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter( note =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
          )} 
          handleAddNote={addNote}
          handleDeletNote={deleteNote}
        />
      </div>
    </div>
     );
}

export default App;