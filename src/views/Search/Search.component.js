import React from 'react';

import { useInputField } from '../../hooks/input-field-hook';

import searchIcon from '../../assets/images/search.png';

import './Search.styles.css';

const SearchPage = () => { 
    const {value: searchInputValue, reset: searchInputReset, bind: searchInputBind} = useInputField('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchInputReset();
    }

    return (
        <div className='search-page'>
            <div className='search-area'>
                <form onSubmit={handleSubmit} className="form">
                    <input type="search" placeholder="What's cooking?" class="search-field" {...searchInputBind} />
                    <button type="submit" class="search-button">
                        <img src={searchIcon} alt="enter search" />
                    </button>
                </form>
            </div>           
        </div>
    );
}

export default SearchPage;