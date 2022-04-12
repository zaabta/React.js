import Note from './Note';
import AddNote from "./AddNote";

const NotesList = (props) =>{ 
    return(
        <div className='note-list'>
            {props.notes.map( note =>(
                <Note
                    key={note.id} 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeletNote={props.handleDeletNote}/>
            ))}
            <AddNote handleAddNote={props.handleAddNote}/>
        </div>
    );
};


export default NotesList;
