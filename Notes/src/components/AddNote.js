import { useState } from "react";

const AddNote = (props) =>{
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;
    const handleChange = evet =>{
        if(characterLimit - noteText.length >= 0)
            setNoteText(evet.target.value);
    };

    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            props.handleAddNote(noteText);
            setNoteText('');
        }
            
    }; 

    return(
    <div className="note new">
        <textarea 
            rows={8}
            cols={10}
            placeholder=' Type to add a note...'
            onChange={handleChange}
            value={noteText}
        ></textarea>
        <div className="note-footer">
            <small>{characterLimit - noteText.length} Remainig</small>
            <button 
                className="Save"
                onClick={handleSaveClick}
            >Save</button>
        </div>
    </div>)
};

export default AddNote;