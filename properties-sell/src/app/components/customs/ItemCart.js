import { Button } from "../commons/Button";

const ItemCart = ({ product, remove }) => {
    return (
        <>
            <div className="container">
                <div className="row v-align-children" style={{ marginTop: '50px' }}>
                    <div className="col-md-3">
                        <div className="wrapper">
                            <div className="hover" style={{ backgroundImage: `url(${product?.imgUrl})`, paddingTop: "55%", backgroundPosition: "top center", backgroundSize: "100%", maxHeight: "100%" }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <ul className="bulletPoints">
                            <li className="mt-2"><strong>Price:</strong> $ {product?.price}</li>
                            <li className="mt-2"><strong>Address:</strong> {product?.country} / {product?.city} / {product?.address}</li>
                            <li className="mt-2"><strong>Number of rooms:</strong> {product?.numberOfRooms}</li>
                            <li className="mt-2"><strong>Number of bathrooms:</strong> {product?.numberOfBathrooms}</li>
                            <li className="mt-2"><strong>Quantity:</strong> {product?.qty}</li>
                        </ul>
                    </div>
                    <div className="col-md-4" style={{ textAlign: "end" }}>
                        <Button variant="danger" style={{ marginTop: 136 }} textButton="remove from cart" click={() => remove(product.id)} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default ItemCart;