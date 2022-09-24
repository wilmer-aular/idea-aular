import { DetailItem } from '@src/app/components/customs';
import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';
import { list } from "@src/utils/data"
import { custonFetch } from "@src/services/custonFetch"
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContent } from "../../context/CartContext";

export const ItemDetailContainer = () => {
    const { addItem } = useCartContent();
    const { id } = useParams();
    const [data, setData] = useState({});
    const [qty, setQty] = useState(0);
    const [loading, setLoading] = useState(false);

    const promise = useCallback(async (id) => {
        setLoading(true);
        const newData = await custonFetch(500, list.find(i => i.id === Number(id)));
        setLoading(false);
        setData(newData)
    }, [setData])


    const onAdd = (product, qty) => {
        alert(`You have selected ${qty} ${product.type}`)
        setQty(product.qty);
        addItem(product, qty)
    }

    useEffect(() => {
        promise(id)
    }, [promise, id])

    return (
        <>
            {
                loading ? <LoadingLottie loading={loading} /> :
                    <div className="estimateNew">
                        <DetailItem item={data} onAdd={onAdd} qty={qty} />
                    </div>
            }
        </>
    )
}

export default ItemDetailContainer;