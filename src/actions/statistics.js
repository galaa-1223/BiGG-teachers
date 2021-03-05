import statisticAPI from "../services/statisticAPI";
import { GET_STATISTICS, STATISTICS_ERROR } from '../actions/types';

export const getStatistics = () => async dispatch => {
    return statisticAPI.getStatistics().then(
        (data) => {
            dispatch({
                type: GET_STATISTICS,
                payload: { data: data },
            });
        },
        (error) => {
            dispatch( {
                type: STATISTICS_ERROR,
                payload: error,
            })
        }
    );
};




// export const getStatistics = () => async dispatch => {
//     // return statisticAPI.getStatistics().then(
//         try{
//             const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
//             dispatch( {
//                 type: GET_STATISTICS,
//                 payload: res.data
//             })
//         }
//         catch(error){
//             dispatch( {
//                 type: STATISTICS_ERROR,
//                 payload: error,
//             })
//         }
//     // );
// };