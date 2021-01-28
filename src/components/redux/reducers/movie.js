import {  SEARCH_MOVIE, 
    SHOW_DETAILS,
    ADD_FAVORITES,
    DELETE_FAVORITE,
    LIST_FAVORITES,
    LIST_MOVIES } from "../actions/types";

const INITIAL_STATE = [];

const movie = (state = INITIAL_STATE,actions) => {
    const {type, payload} = actions;

    switch (type){
        case SEARCH_MOVIE:
            return [payload, ...state];

        case SHOW_DETAILS:

            return ;
        
        case ADD_FAVORITES:
            return ;

        case ADD_DETAILS:
            return ;
        
        case DELETE_FAVORITE:
            return ;

        case LIST_FAVORITES:
            return ;

        case LIST_MOVIES:
            return ;

    }
}

export default movie;