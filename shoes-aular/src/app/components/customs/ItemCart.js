import { Button } from "../commons/Button";
import { Link } from 'react-router-dom';

const ItemCart = ({ product, remove }) => {

    return (
        <>
            <div className="row v-align-children mt-4">
                <div className="col-md-4">
                    <div className="wrapper">
                        <div className="hover" style={{ backgroundImage: `url(${product?.imgUrl})`, paddingTop: "55%", backgroundPosition: "top center", backgroundSize: "100%", maxHeight: "100%" }}>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <ul className="bulletPoints">
                            <li className="mt-2"><strong>type:</strong> {product?.type}</li>
                            <li className="mt-2"><strong>Country:</strong> {product?.country}</li>
                            <li className="mt-2"><strong>City:</strong> {product?.city}</li>
                        </ul>
                    </div>
                    <div style={{ margin: "30px 30px 30px 30px" }}>
                        <Link to={`/detail/${product.id}`} className="btn btn-success" style={{ marginRight: 10 }}> DETAIL </Link>
                        <Button variant="danger" textButton="DELETE" click={() => remove(product)} />
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="mt-4">
                        <span style={{ fontSize: 20 }}>{product?.qty} <strong>Item(s)</strong> / <strong>$</strong> {product?.price}</span>
                    </div>
                    <div className="mt-4">
                        <span style={{ fontSize: 30 }} >$ {product?.total}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemCart;