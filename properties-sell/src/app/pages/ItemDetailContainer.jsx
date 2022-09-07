import { DetailProperty } from '@src/app/components/customs';
import { list } from "@src/utils/data"
import { custonFetch } from "@src/services/custonFetch"
import { useCallback, useEffect, useState } from 'react';

export const ItemDetailContainer = (props) => {
    const { id, indexImg } = props?.match.params;
    const [data, setData] = useState({});

    const promise = useCallback(async (index) => {
        const newData = await custonFetch(2000, list[index]);
        newData.imgUrl = `/media/images/${newData.type}/${indexImg}.jpg`;
        setData(newData)
    }, [setData, indexImg])

    useEffect(() => {
        promise(id)
    }, [promise, id])

    return (
        <>
            <div className="estimateNew">
                <DetailProperty property={data} />
            </div>

        </>
    )
}

export default ItemDetailContainer;