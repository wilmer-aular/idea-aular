import { ModalCheckout } from "./modals/ModalCkeckout";
import { Button } from "../commons"
import { useCartContent } from "@src/contexts/CartContext";
import { conectorServices } from '@src/services/api-conector';
import { useNotifyContent } from "@src/contexts/NotifyProvider";
import { increment } from 'firebase/firestore/lite';
import { getOuth } from '@src/services/storage.service';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const serviceMappigns = conectorServices('Mappings');
const serviceItems = conectorServices('Items');

const mapItem = (item) => {
    const { id, brand, price, qty, categoryName, model } = item
    return {
        id,
        price,
        quantity: qty,
        title: `${categoryName} ${brand} ${model}`
    };
}

const Financial = () => {
    const navegate = useNavigate();
    const outh = getOuth();
    const [isShow, setIsShow] = useState(false);
    const [message, setMessage] = useState('');
    const { handleNotify } = useNotifyContent();
    const { getTotal, getDiscount, getTaxes, getSubTotal, listCart, clear } = useCartContent();

    const handleClose = () => setIsShow(false)
    const handleCheckout = async () => {
        if (!outh) {
            navegate('/login?url=cart');
            return;
        }
        const data = {
            userId: outh.id,
            items: listCart.map(mapItem),
            subTotal: getSubTotal(),
            discount: getDiscount(),
            taxes: getTaxes(),
            total: getTotal(),
        }
        try {
            await serviceMappigns.create(data);
            listCart.map(async (i) => {
                const data = { stock: increment(- i.qty) }
                await serviceItems.update(i.id, data);
            })
            handleNotify();
            clear();
            navegate(`/myShopping/${outh.id}`);
        } catch (error) {
            handleNotify('Task Error', 'error')
        }
    }
    const handleShow = () => {
        let message = 'Are you sure to complete the purchase?'
        if (!outh) {
            message = 'You must log in to complete the purchase'
        }
        setMessage(message);
        setIsShow(true);
    }
    const props = { handleClose, isShow, handleCheckout, message }
    return (
        <>
            <ModalCheckout {...props} />
            <div className="card">
                <div className="card-header text-center">
                    <h3>ORDER SUMMARY</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className='col-md-7 mt-2 mb-2'>Sub Total $</div>
                        <div className='col-md-5 mt-2 mb-2'> {getSubTotal()} </div>
                        <div className='col-md-7 mt-2'>Taxes 16%</div>
                        <div className='col-md-5 mt-2 mb-2'> {getTaxes()} </div>
                        <div className='col-md-7 mt-2'>Discount {listCart.length}%</div>
                        <div className='col-md-5 mt-2 mb-2'> {getDiscount()} </div>
                    </div>
                    <div className="card-footer bg-transparent border-success mt-2 row">
                        <div className='col-md-7 mt-2'>Total $</div>
                        <div className='col-md-5 mt-2'>{getTotal()}</div>
                    </div>
                </div>
            </div>
            <div className="mt-2 text-center">
                <Button variant="warning" textButton="CHECKOUT NOW" click={() => handleShow()} />
            </div>
        </>
    )
}

export default Financial;