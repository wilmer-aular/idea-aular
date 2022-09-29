import { ModalCheckout } from "./modals/ModalCkeckout";
import { useCartContent } from "@src/contexts/CartContext";
import { conectorServices } from '@src/services/api-conector';
import { useNotifyContent } from "@src/contexts/NotifyProvider";
import { increment } from 'firebase/firestore/lite';
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
    const { handleNotify } = useNotifyContent();
    const { getTotal, setTaxes, setDiscount, taxes, discount, getSubTotal, listCart, clear } = useCartContent();

    const handleCheckout = async (buyer) => {
        const data = {
            buyer,
            items: listCart.map(mapItem),
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
        } catch (error) {
            handleNotify('Task Error', 'error')
        }
    }

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
                <ModalCheckout handleCheckout={handleCheckout} />
            </div>
        </>
    )
}

export default Financial;