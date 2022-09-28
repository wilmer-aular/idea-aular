import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';
import { ItemCart, Financial } from '@src/app/components/customs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContent } from "@src/contexts/CartContext";
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

                    <section id="" className="features features-2 container" >
                        <div className="text-center" style={{ marginTop: 50 }}>
                            <h1>Shopping cart</h1>
                        </div>
                        {

                            listCart.length ?
                                <>
                                    <div className='mt-4 d-flex'>
                                        <div className='col-md-10'><Link to="/" className="btn btn-success"> CONTINUE SHOPPING </Link></div>
                                        <div className='col-md-2'><Button variant="danger" textButton="REMOVE ALL PRODUCTS" click={() => clear()} /></div>
                                    </div>
                                    <div className='row d-flex' style={{ marginTop: '50px' }}>
                                        <div className='col-md-9'>
                                            {listCart?.map((i, index) => (
                                                <ItemCart key={index} product={i} remove={removeItem} />
                                            ))}
                                        </div>
                                        <div className='col-md-3 mt-4'>
                                            <Financial />
                                        </div>
                                    </div>

                                </>
                                : (
                                    <div className="col-sm-12 text-center feature" style={{ marginTop: 100 }}>
                                        <h4 style={{ color: "#898585" }}>No data to display</h4>
                                        <Link style={{ color: "#898585" }} to="/">click here to go buy</Link>
                                    </div>
                                )
                        }
                    </section>

            }
        </>
    )
}

export default Cart;