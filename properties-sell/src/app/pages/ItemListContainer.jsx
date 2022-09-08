import { ListItems } from '@src/app/components/customs';
import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';
import { list } from "@src/utils/data"
import { custonFetch } from "@src/services/custonFetch"
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const getType = (id) => {
    return {
        1: "House",
        2: "Apartments",
        3: "Office"
    }[id];
}

export const ItemListContainer = (props) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const promise = useCallback(async (id) => {
        let newList = list;

        if (id) newList = list.filter(i => i.type === getType(id))

        setLoading(true);
        const newData = await custonFetch(2000, newList);
        setLoading(false);
        setData(newData)
    }, [setData]);


    useEffect(() => {
        promise(id)
    }, [promise, id])

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