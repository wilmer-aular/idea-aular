import { DetailItem } from '@src/app/components/customs';
import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';
import { list } from "@src/utils/data"
import { custonFetch } from "@src/services/custonFetch"
import { useCallback, useEffect, useState } from 'react';

export const ItemDetailContainer = (props) => {
    const { id, indexImg } = props?.match.params;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const promise = useCallback(async (index, indexImg) => {
        setLoading(true);
        const newData = await custonFetch(2000, list[index]);
        setLoading(false);
        newData.imgUrl = `/media/images/${newData.type}/${indexImg}.jpg`;
        setData(newData)
    }, [setData])

    useEffect(() => {
        promise(id, indexImg)
    }, [promise, id, indexImg])

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