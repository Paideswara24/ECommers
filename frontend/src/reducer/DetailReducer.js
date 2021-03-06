import { DETAILS_LOADING, DETAILS_LOADING_FAIL, DETAILS_LOADING_SUCCESS } from "../constants/DetailsConstant";

const initialState = {
    loading: false,
    productss: {},
    error: ""
}
const DetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case DETAILS_LOADING:
        case DETAILS_LOADING_SUCCESS:
        case DETAILS_LOADING_FAIL:
            return {
                ...state,
                loading: action.loading,
                productss: action.productss,
                error: action.error
            }
        default:
            return state;
    }

}
export default DetailReducer;