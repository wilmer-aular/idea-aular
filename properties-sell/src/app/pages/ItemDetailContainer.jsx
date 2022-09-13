import { DetailItem } from '@src/app/components/customs';
import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';
import { list } from "@src/utils/data"
import { custonFetch } from "@src/services/custonFetch"
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const promise = useCallback(async (index) => {
        setLoading(true);
        const newData = await custonFetch(2000, list[index]);
        setLoading(false);
        setData(newData)
    }, [setData])

    useEffect(() => {
        promise(id)
    }, [promise, id])

    return (
        <>
            {
                loading ? <LoadingLottie loading={loading} /> :
                    <div className="estimateNew">
                        <DetailItem property={data} />
                    </div>
            }
        </>
    )
}

export default ItemDetailContainer;