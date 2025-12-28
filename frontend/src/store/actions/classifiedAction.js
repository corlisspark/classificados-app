import { GET_CLASSIFIEDS, GET_CLASSIFIEDBYID, CREATE, UPDATE, DELETE, CLASSIFIEDS_ERROR } from '../types';
/* create all our actions like here it’s creating an action to fetch data from the API using the Axios library */

import api from './../../services/api';

export const getClassifieds = () => async (dispatch) => {
    api.classifieds().fetchAll()
    .then(res => {
        dispatch({
            type : GET_CLASSIFIEDS, // calls reducer() with the received type
            payload: res.data
        })
    })
    .catch(error => getError(error, dispatch))
}

export const getClassifiedById = (id) => async (dispatch) => {
    api.classifieds().fetchById(id)
    .then(res => {
        dispatch({
            type : GET_CLASSIFIEDBYID, // calls reducer() with the received type
            payload: res.data
        })
    })
    .catch(error => getError(error, dispatch))
}

export const createClassified = (data, onSuccess) => dispatch => {
    console.log(data)

    api.classifieds().create(data)
        .then(res => {
            console.log('Status', res.status, res.statusText)
            console.log(res.data)

            dispatch({
                type: CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(error => getError(error, dispatch))
}

export const updateClassified = (id, data, onSuccess) => dispatch => {
    api.classifieds().update(id, data)
        .then(res => {
            dispatch({
                type: UPDATE,
                payload: { id, ...data }
            })
            onSuccess()
        })
        .catch(error => getError(error, dispatch))
}

export const deleteClassified = (id, onSuccess) => dispatch => {
    api.classifieds().delete(id)
        .then(res => {
            dispatch({
                type: DELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(error => getError(error, dispatch))
        //.catch(err => console.log(err))
}

const getError = (error, dispatch) => {
    console.warn(error)
    dispatch({
        type: CLASSIFIEDS_ERROR,
        payload: error,
    })
}
