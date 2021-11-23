import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import DetailsActions from '../actions/DetailsActions';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import { NavLink } from 'react-router-dom'
import Reating from '../component/Reating';

function DetailsScreen(props) {
    const [qty, setqty] = useState(1)
    const id = props.match.params.id;

    const result = useSelector(state => state.details);
    const { loading, productss, error } = result;
    console.log(result);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailsActions(id))
    }, [])
    return (
        <React.Fragment>
            {!loading ? (<LoadingBox></LoadingBox>) : error === "Network Error" ? (<MessageBox variant="danger">{error}</MessageBox>) :
                (<div>
                    <NavLink to="/" exact={true} strict><i className="fa fa-arrow-circle-left" style={{ color: "blue" }}> Back</i></NavLink>
                    <div className="row top">
                        <div className="col-2">
                            <img src={productss.image} className="large" alt={productss.name}></img>
                        </div>
                        <div className="col-1">
                            <ul>
                                <li>
                                    <h1>{productss.name}</h1>
                                </li>
                                <li>{productss.brand}</li>
                                <li>
                                    <Reating rating={productss.rating} numReviews={productss.numReviews}></Reating>
                                </li>
                                <li>
                                    ${productss.price}
                                </li>
                                <li>
                                    {productss.description}
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>Name</div>
                                            <div>{productss.name}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Price</div>
                                            <div className="price">${productss.price}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="row">Status</div>
                                            <div>{productss.countinStack > 0 ? (<div className="success">In Stack</div>) : (<div className="danger">Out of Stack</div>)}</div>
                                        </div>
                                        <div className="row">
                                            <div></div>
                                            <div>{productss.countinStack <= 3 ? (<div className="danger">few item Left</div>) : (<div className="danger"></div>)}</div>
                                        </div>
                                    </li>
                                    {productss.countinStack > 0 && (<>
                                        <li>
                                            <div className="row">
                                                <div>Qty</div>
                                                <select value={qty}
                                                    onChange={(e) => { setqty(e.target.value) }}>
                                                    {[...Array(productss.countinStack).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <button>Add To Cart</button>
                                        </li>
                                    </>)}

                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <h1>{JSON.stringify(productss)}</h1> */}
                </div>
                )
            }

        </React.Fragment >
    )
}
export default DetailsScreen