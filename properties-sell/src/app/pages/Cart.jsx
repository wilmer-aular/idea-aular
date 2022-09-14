import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';
import { useEffect, useState } from 'react';

export const Cart = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <>
            {
                loading ? <LoadingLottie loading={loading} /> :
                    <div className="text-center" style={{ marginTop: 100 }}>
                        <h1>I'am cart</h1>
                    </div>
            }
        </>
    )
}

export default Cart;