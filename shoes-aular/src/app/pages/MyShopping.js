import { useCallback, useEffect, useState } from 'react';
import { ShoppingDetail } from '@src/app/components/customs';
import { Link } from 'react-router-dom';
import { conectorServices } from '@src/services/api-conector'
import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';
import { useParams } from 'react-router-dom';

const shoppingServ = conectorServices('Mappings');

export const MyShopping = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    const promise = useCallback(async (id) => {
        setLoading(true);
        const items = await shoppingServ.find('userId', id);
        setItems(items);
        setLoading(false);
    }, [setItems]);

    const reset = () => promise(id);

    useEffect(() => {
        promise(id)
    }, [promise, id])

    return (
        <>
            {
                loading ? <LoadingLottie loading={loading} /> :

                    <section id="" className="features features-2 container" >
                        <div className="text-center" style={{ marginTop: 50 }}>
                            <h1>All your purchases</h1>
                        </div>
                        {

                            items.length ?
                                <>
                                    <div className='mt-4 text-center'>
                                        <Link to="/" className="btn btn-success"> CONTINUE SHOPPING </Link>
                                    </div>
                                    <div className='row d-flex' style={{ marginTop: '50px' }}>
                                        <div className='col-md-12'>
                                            {items?.map(i => (
                                                <ShoppingDetail key={i.id} order={i} reset={reset} />
                                            ))}
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

export default MyShopping;