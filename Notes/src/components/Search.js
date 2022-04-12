import react from 'react';
import {BsSearch} from 'react-icons/bs';

const Search = ({ handleSearchNote }) =>{
    return <div className="search">
        <input className="input" onChange={evet =>
                 handleSearchNote(evet.target.value)}/>
        <BsSearch 
            className='icon' 
            size='1.3em'
        />
    </div>
};

export default Search;