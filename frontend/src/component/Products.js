import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Reating'
function Products({ x }) {
    return (
        <React.Fragment>
            {
                <div className="first second">
                    {
                        x.map((prod) => {
                            return (
                                <div className="mainCard" key={prod._id}>
                                    <Link to={`/details/${prod._id}`}>
                                        <img src={prod.image} className="XYZ" ></img>
                                    </Link>
                                    <div className="card-bo">
                                        <h2>{prod.name}
                                            <Rating rating={prod.rating} numReviews={prod.numReviews}></Rating>
                                            <div className="pri">
                                                Price ${prod.price}
                                            </div>
                                        </h2>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            }
        </React.Fragment >
    )
}
export default Products;