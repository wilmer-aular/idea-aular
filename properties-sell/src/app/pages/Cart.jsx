import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';
import { ItemCart } from '@src/app/components/customs';
import { useEffect, useState } from 'react';
import { useCartContent } from "../../context/CartContext";
import { Button } from '../components/commons/Button';

export const Cart = () => {
    const [loading, setLoading] = useState(false);
    const { listCart, removeItem, clear } = useCartContent();

    useEffect(() => {
        setLoading(false)
    }, [listCart])

    return (
        <>
            {
                loading ? <LoadingLottie loading={loading} /> :

                    <section id="" className="features features-2" >
                        <div className="text-center" style={{ marginTop: 50 }}>
                            <h1>Shopping cart</h1>
                        </div>
                        {

                            listCart.length ?
                                <>
                                    <div className='text-center'> <Button variant="danger" style={{ marginTop: 20 }} textButton="Remove all" click={() => clear()} /></div>
                                    {listCart?.map((i, index) => (
                                        <ItemCart key={index} product={i} remove={removeItem} />
                                    ))}
                                </>
                                : (
                                    <div className="col-sm-12 text-center feature" style={{ marginTop: 100 }}>
                                        <h4 style={{ color: "#898585" }}>No data to display</h4>
                                    </div>
                                )
                        }
                    </section>

            }
        </>
    )
}

export default Cart;