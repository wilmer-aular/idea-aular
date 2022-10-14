import { useNavigate } from 'react-router-dom';
import { ItemCount } from './ItemCount'
import { Button } from "../commons"
import { Link } from 'react-router-dom';
import { getOuth } from '@src/services/storage.service';
import { useNotifyContent } from "@src/contexts/NotifyProvider";
import { conectorServices } from '@src/services/api-conector';
import { ModalCheckout } from "./modals/ModalCkeckout";
import { useState } from 'react';

const serviceItems = conectorServices('Items');

const DetailItem = ({ item, onAdd, qty }) => {
    const navegate = useNavigate();
    const outh = getOuth();
    const [isShow, setIsShow] = useState(false);
    const { handleNotify } = useNotifyContent();

    const handleClose = () => setIsShow(false)
    const handleCheckout = async () => {
        try {
            await serviceItems.detele(item.id)
            navegate(`/`);
        } catch (err) {
            console.error(err);
            handleNotify("Task Error", "error");
        }
    }
    const props = { handleClose, isShow, handleCheckout, message: 'Are you sure to remove this product?', variant: 'danger' }
    return (
        <>
            <ModalCheckout {...props} />
            <section id="item" className="features features-2" >
                <div className="container">
                    <div className="features features-10">
                        <div className="container">
                            <div className='text-center'>
                                <h1>Your ideal {item?.categoryName}</h1>
                                {
                                    outh?.role === 'admin' &&
                                    (<>
                                        <Link to={`/create_product?id=${item.id}`} type="button" className="btn btn-outline-primary" >UPDATE PRODUCT</Link>
                                        <Button variant="outline-danger" textButton="DELETE PRODUCT" style={{ marginLeft: '10px' }} click={() => setIsShow(true)} />
                                    </>)
                                }
                            </div>

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