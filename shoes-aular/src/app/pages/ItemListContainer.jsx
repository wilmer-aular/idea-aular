import { useCallback, useEffect, useState } from 'react';
import { conectorServices } from '@src/services/api-conector'
import { ListItems } from '@src/app/components/customs';
import LoadingLottie from '@src/app/components/commons/loading/LoadingLottie';
import { useParams } from 'react-router-dom';

const serviceItems = conectorServices('Items');

export const ItemListContainer = (props) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    const promise = useCallback(async (id) => {
        const promise = id ? serviceItems.find('categoryId', Number(id)) : serviceItems.getAll()
        setLoading(true);
        const items = await promise;
        setItems(items);
        setLoading(false);
    }, [setItems]);


    useEffect(() => {
        promise(id)
    }, [promise, id])

    return (
        <>
            {
                loading ? <LoadingLottie loading={loading} /> :
                    <div id='home' className="estimateNew">
                        <ListItems list={items} />
                    </div>
            }
        </>
    )
}

export default ItemListContainer;