import { ListItems } from '@src/app/components/customs';
import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';
import { list } from "@src/utils/data"
import { custonFetch } from "@src/services/custonFetch"
import { useCallback, useEffect, useState } from 'react';


export const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const promise = useCallback(async (data) => {
        setLoading(true);
        const newData = await custonFetch(3000, list);
        setLoading(false);
        setData(newData)
    }, [setData])

    useEffect(() => {
        promise(data)
    }, [promise, data])

    return (
        <>
            {
                loading ? <LoadingLottie loading={loading} /> :
                    <div className="estimateNew">
                        <ListItems list={data} />
                    </div>
            }
        </>
    )
}

export default ItemListContainer;