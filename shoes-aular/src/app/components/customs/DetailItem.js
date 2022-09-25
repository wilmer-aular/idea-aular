import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom';

const DetailItem = ({ item, onAdd, qty }) => {
    return (
        <>
            <section id="item" className="features features-2" >
                <div className="container">
                    <div className="features features-10">
                        <div className="container">
                            <h1 className="text-center" >Your ideal {item?.categoryName}</h1>
                            <div className="row v-align-children" style={{ marginTop: '50px' }}>
                                <div className="col-md-6">
                                    <div className="wrapper">
                                        <div className="hover" style={{ backgroundImage: `url(${item?.imageURL})`, paddingTop: "55%", backgroundPosition: "top center", backgroundSize: "100%", maxHeight: "100%" }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-md-offset-1">
                                    <ul className="bulletPoints">
                                        <li><strong>Price: </strong>{item?.price} {item.currency}</li>
                                        <li><strong>Brand: </strong>{item?.brand}</li>
                                        <li><strong>Model: </strong>{item?.model}</li>
                                        <li><strong>Origin: </strong> {item?.origin}</li>
                                        <li><strong>Color: </strong>{item?.color}</li>
                                        <li><strong>Size: </strong>{item?.size}</li>
                                        <li><strong>Stock: </strong> {item?.stock} units</li>
                                    </ul>
                                    <div style={{ marginLeft: "24px" }}>
                                        {item?.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {qty === 0 ?
                    <ItemCount product={item} initial={0} onAdd={onAdd} /> :
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link className='btn btn-danger' to='/cart'>CHECKOUT</Link>
                    </div>
                }

            </section>

        </>
    );
};

export default DetailItem;