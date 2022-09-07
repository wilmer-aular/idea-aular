import { ListProperties } from '@src/app/components/customs';
import { list } from "@src/utils/data"
import { custonFetch } from "@src/services/custonFetch"
import { useCallback, useEffect, useState } from 'react';
export const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const promise = useCallback(async (data) => {
        const newData = await custonFetch(3000, list);
        setData(newData)
    }, [setData])

    useEffect(() => {
        promise(data)
    }, [promise, data])

    return (
        <>
            <div className="estimateNew">
                <ListProperties list={data} />
            </div>

        </>
    )
}

export default ItemListContainer;