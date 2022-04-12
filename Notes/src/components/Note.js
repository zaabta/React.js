import {MdOutlineDeleteOutline} from 'react-icons/md';

const Note = ({id, text, date, handleDeletNote}) =>{
    return(
        <div>
            <div className='note'>
                <span className='text'>{text}</span>
                <div className='note-footer'>
                    <small>{date}</small>
                    <MdOutlineDeleteOutline
                        className='delete-icon'
                        onClick={() => handleDeletNote(id)}
					    size='1.3em'
				/></div>
            </div>
        </div>
    );
};

export default Note;