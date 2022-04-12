import React from "react";

const Header = ({ handleDarkMode }) =>{
    return<div className='header'>
        <h1>Note</h1>
        <button 
            onClick={()=> 
                handleDarkMode(
                    (perviousDarkMode) => !perviousDarkMode
                )
            }
        >
            Toggle Mode
        </button>
    </div>
};

export default Header;