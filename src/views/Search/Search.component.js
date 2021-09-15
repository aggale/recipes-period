import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInputField } from '../../hooks/input-field-hook';

import { fetchRecipes, fetchImageUrl } from '../../redux/recipes/recipes.slice';
import { selectLoadingStatus, selectRecipesForSummary, selectImageUrls } from '../../redux/recipes/recipes.selectors';

import SummaryCardList from '../../components/containers/SummaryCardList/SummaryCardList.component';

import searchIcon from '../../assets/images/search.png';

import './Search.styles.css';

const SearchPage = () => { 
    const dispatch = useDispatch();
    const {value: searchInputValue, reset: searchInputReset, bind: searchInputBind} = useInputField('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const loading = useSelector(selectLoadingStatus);
    const recipes = useSelector(selectRecipesForSummary);
    const imageUrls = useSelector(selectImageUrls);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, []);

    /**
     * Fetch the Firebase storage urls 
     */
     useEffect( () => {
        for (let recipe of Object.values(recipes)) {
            dispatch(fetchImageUrl(recipe));
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setFilteredRecipes(recipes.filter(recipe => recipe.title.toLowerCase().includes(searchInputValue.toLowerCase())));
    }

    return (
        <div className='search-page'>
            <div className='search-area'>
                <form onSubmit={handleSubmit} className="form">
                    <input type="search" placeholder="What's cooking?" className="search-field" {...searchInputBind} />
                    <button type="submit" className="search-button">
                        <img src={searchIcon} alt="enter search" />
                    </button>
                </form>
            </div>
            <SummaryCardList loading={loading} recipes={filteredRecipes} imageUrls={imageUrls} />           
        </div>
    );
}

export default SearchPage;