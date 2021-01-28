import {  SEARCH_MOVIE, 
    SHOW_DETAILS,
    ADD_FAVORITES,
    DELETE_FAVORITE,
    LIST_FAVORITES,
    LIST_MOVIES } from "./types";

    export const searchMovie = (name) => ({
        type: SEARCH_MOVIE,
        payload: {}
    });

    export const showDetails = (id) => ({
        type: SHOW_DETAILS,
        payload: {}
    });

    export const addFavoriteMovie = ({object}) => ({
        type: ADD_FAVORITES,
        payload: {}
    });

    export const deleteFavoriteMovie = (id) => ({
        type: DELETE_FAVORITE,
        payload: {}
    });

    export const listFavoritesMovies = () => ({
        type: LIST_FAVORITES,
        payload: {}
    });

    export const listMovies = () => ({
        type: LIST_MOVIES,
        payload: {}
    });