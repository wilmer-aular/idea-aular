import { Button } from "../commons";
import { useCartContent } from "@src/contexts/CartContext";
import { useState } from "react";


const Financial = () => {
    const [isShow, setIsShow] = useState(false)
    const { getTotal, setTaxes, setDiscount, taxes, discount, getSubTotal } = useCartContent();
    const handleClose = () => setIsShow(false);
    const checkoutNow = () => setIsShow(true);

    const props = { isShow, handleClose, title: 'Checkout' };

    return (
        <>
            <div className="card">
                <div className="card-header text-center">
                    <h3>ORDER SUMMARY</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className='col-md-7 mt-2 mb-2'>Sub Total $</div>
                        <div className='col-md-5 mt-2 mb-2'> {getSubTotal()} </div>
                        <div className='col-md-7 mt-2'>Taxes</div>
                        <div className='col-md-5 mt-2'>
                            <input type="number" className="form-control" placeholder="taxes"
                                onChange={(e) => setTaxes(e.target.value)} defaultValue={taxes} />
                        </div>
                        <div className='col-md-7 mt-2'>Discount $</div>
                        <div className='col-md-5 mt-2'>
                            <input type="number" className="form-control" placeholder="discount"
                                onChange={(e) => setDiscount(e.target.value)} defaultValue={discount} />
                        </div>

                    </div>
                    <div className="card-footer bg-transparent border-success mt-2 row">
                        <div className='col-md-7 mt-2'>Total $</div>
                        <div className='col-md-5 mt-2'>{getTotal()}</div>
                    </div>
                </div>
            </div>
            <div className="mt-2 text-center">
                <Button variant="warning" textButton="CHECKOUT NOW" click={() => checkoutNow()} />
            </div>
        </>
    )
}

export default Financial;