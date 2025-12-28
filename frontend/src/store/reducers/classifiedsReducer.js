import { GET_CLASSIFIEDS, GET_CLASSIFIEDBYID, CREATE, UPDATE, DELETE, CLASSIFIEDS_ERROR } from '../types';

const InitialState = {
    classifieds: [],
    classified: {},
    loading: true
};

export default function reducer(state = InitialState, action) {
    
    switch(action.type) {
        case GET_CLASSIFIEDS:
            return {
                ...state,
                classifieds: action.payload, // [{title: 'title', description: 'description...'}, {...}]
                loading: false
            }

        case GET_CLASSIFIEDBYID:
            return {
                ...state,
                classified: action.payload, // {title: 'title', description: 'description...'}
                loading: false
            }

        case CREATE:
            return {
                ...state,
                classifieds: [...state.classifieds, action.payload],
                loading: false
            }

        case UPDATE:
            return {
                ...state,
                classifieds: state.classifieds.map(x => x.id === action.payload.id ? action.payload : x),
                loading: false
            }
        
        case DELETE:
            return {
                ...state,
                classifieds: state.classifieds.filter(x => x.id !== action.payload),
                loading: false
            }

        case CLASSIFIEDS_ERROR:
            return {
                loading: false,
                error: action.payload
            }    

        default: return state;
    }
}