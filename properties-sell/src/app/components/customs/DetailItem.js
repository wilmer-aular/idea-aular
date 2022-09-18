import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom';

const DetailItem = ({ property, onAdd, qty }) => {

    return (
        <>
            <section id="property" className="features features-2" >
                <div className="container">
                    <div className="features features-10">
                        <div className="container">
                            <h1 className="text-center" >Your ideal {property?.type}</h1>
                            <div className="row v-align-children" style={{ marginTop: '50px' }}>
                                <div className="col-md-6">
                                    <div className="wrapper">
                                        <div className="hover" style={{ backgroundImage: `url(${property?.imgUrl})`, paddingTop: "55%", backgroundPosition: "top center", backgroundSize: "100%", maxHeight: "100%" }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-md-offset-1">
                                    <ul className="bulletPoints">
                                        <li><strong>Price:</strong> $ {property?.price}</li>
                                        <li><strong>Country:</strong> {property?.country}</li>
                                        <li><strong>City: </strong>{property?.city}</li>
                                        <li><strong>Address:</strong> {property?.address}</li>
                                        <li><strong>Number of rooms:</strong> {property?.numberOfRooms}</li>
                                        <li><strong>Number of bathrooms:</strong> {property?.numberOfBathrooms}</li>
                                        <li><strong>Stock:</strong> {property?.stock}</li>
                                    </ul>
                                    <div style={{ marginLeft: "24px" }}>
                                        All the measures listed are merely indicative, the exact measures will be those that are expressed in the respective property title of each property. All photos, images and videos are merely illustrative and not contractual. The prices listed are merely indicative and not contractual.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {qty === 0 ?
                    <ItemCount product={property} initial={0} onAdd={onAdd} /> :
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link className='btn btn-danger' to='/cart'>CHECKOUT</Link>
                    </div>
                }

            </section>

        </>
    );
};

export default DetailItem;