import React, { useEffect } from 'react'
import { listProducts } from '../actions/ProductActions';
import { useSelector, useDispatch } from 'react-redux'

import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import Products from '../component/Products';


function HomeScreen() {

    const result = useSelector(state => state.products);

    const dispatch = useDispatch();
    const { loading, products, error } = result;

    //data main
    useEffect(() => {
        dispatch(listProducts());
    }, [])

    return (
        <React.Fragment>

            {/* <h1>{JSON.stringify(loading)}....{JSON.stringify(products)}....{error}</h1> */}

            {!loading ? (<LoadingBox></LoadingBox>) : error === "Network Error" ? (<MessageBox variant="danger">{error}</MessageBox>) :
                (<Products x={products}></Products>)}
        </React.Fragment>
    )
}
export default HomeScreen;