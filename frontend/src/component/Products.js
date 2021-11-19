import React from 'react'
import Rating from './Reating'
function Products({ x }) {
    return (
        <React.Fragment>
            {/* <p>{JSON.stringify(props.x)}</p> */}
            {/* <div className="row center">
                {x.map((prod) => {
                    return (
                        // console.log(props.x);
                        <div className="card" key={prod._id}>
                            <img src={prod.image} className="medium"></img>
                            <div className="card-body">
                                <h2>{prod.name}</h2>
                                <Rating rating={prod.rating} numReviews={prod.numReviews}></Rating>
                                <div className="price">
                                    Price ${prod.price}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> */}
            {
                <div className="first second">
                    {
                        x.map((prod) => {
                            return (
                                <div className="mainCard" key={prod._id}>
                                    <img src={prod.image} className="XYZ"></img>
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
        </React.Fragment>
    )
}
export default Products;