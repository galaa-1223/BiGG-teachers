import { GET_STATISTICS, STATISTICS_ERROR } from "../actions/types";

const initialState = {
    data: [],
    loading: false
};

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_STATISTICS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };

        case STATISTICS_ERROR:
            return {
                loading: false,
                error: action.payload
            };
        
        default:
            return state;
        }
}

