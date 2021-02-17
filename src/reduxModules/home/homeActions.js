
import axios from 'axios';
import { PENDING, SUCCESS, ERROR } from '../../constants/actionStatus';

import { SET_IMAGES, SET_SEARCH_IMAGES } from './index';

import errorHandler from '../../utils/apiErrorHandler';
import api from '../../utils/api';
import isEmpty from '../../utils/isEmpty';

export const actionFetchNewestData = () => async (dispatch, getState) => {
    try {
        dispatch({ type: SET_IMAGES + PENDING });

        const { data } = await
            api({
                baseURL: 'https://images-assets.nasa.gov/',
                method: 'get',
                url: '/recent.json'
            });
        
        let ret = [];

        if(!isEmpty(data) && !isEmpty(data.collection) && !isEmpty(data.collection.items)){
            ret = data.collection.items;
        }

        dispatch({ type: SET_IMAGES + SUCCESS, payload: ret });
        
    } catch (error) {
        errorHandler(error, dispatch);
        dispatch({ type: SET_IMAGES + ERROR, payload: error });
    }
}

export const actionFetchPopularData = () => async (dispatch, getState) => {
    try {
        dispatch({ type: SET_IMAGES + PENDING });

        const { data } = await
            api({
                baseURL: 'https://images-assets.nasa.gov/',
                method: 'get',
                url: '/popular.json'
            });
        
        let ret = [];

        if(!isEmpty(data) && !isEmpty(data.collection) && !isEmpty(data.collection.items)){
            ret = data.collection.items;
        }

        dispatch({ type: SET_IMAGES + SUCCESS, payload: ret });
        
    } catch (error) {
        errorHandler(error, dispatch);
        dispatch({ type: SET_IMAGES + ERROR, payload: error });
    }
}

export const actionFetchSearchData = search => async (dispatch, getState) => {
    try {
        dispatch({ type: SET_SEARCH_IMAGES + PENDING });

        // CORS Problem pre-flight
        // const { data } = await
        //     api({
        //         method: 'get',
        //         url: `/search?q=${search}&media_type=image`
        //     });

        await axios
            .get(`https://images-api.nasa.gov/search?q=${search}&media_type=image`)
                .then(({ data }) => {
                    let ret = [];

                    if(!isEmpty(data) && !isEmpty(data.collection) && !isEmpty(data.collection.items)){
                        ret = data.collection.items;
                    }

                    dispatch({ type: SET_SEARCH_IMAGES + SUCCESS, payload: ret });
                })
                .catch((err) => {
                    console.log(err);
                });
        
    } catch (error) {
        errorHandler(error, dispatch);
        dispatch({ type: SET_SEARCH_IMAGES + ERROR, payload: error });
    }
}
