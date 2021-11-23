import axios from "axios";

import { DETAILS_LOADING, DETAILS_LOADING_FAIL, DETAILS_LOADING_SUCCESS } from '../constants/DetailsConstant';

const DetailsActions = (id) => {
    return async (dispatch) => {
        dispatch({
            type: DETAILS_LOADING,
            loading: false,
            productss: {},
            error: ""
        })
        try {
            const { data } = await axios.get(`http://localhost:8080/product/${id}`);
            console.log(data)
            dispatch({
                type: DETAILS_LOADING_SUCCESS,
                loading: true,
                productss: data,
                error: ""
            })
        } catch (err) {
            dispatch({
                type: DETAILS_LOADING_FAIL,
                loading: true,
                productss: {},
                error: err.message
            })
        }
    }
}
export default DetailsActions;