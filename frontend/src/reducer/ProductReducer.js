import { LIST_PRODUCTS, LIST_PRODUCTS_SUCCESS, LIST_PRODUCTS_FAIL } from '../constants/ProductsConstants';
const init = {
    loading: false,
    products: [],
    error: ""
}
export function ProductReducer(state = init, action) {
    switch (action.type) {
        case LIST_PRODUCTS:
        case LIST_PRODUCTS_SUCCESS:
        case LIST_PRODUCTS_FAIL:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
                products: action.products
            }
        default:
            return state;

    }
}