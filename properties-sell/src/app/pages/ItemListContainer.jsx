import { ItemCount } from '@src/app/components/customs/ItemCount';

export const ItemListContainer = () => {

    const onAdd = (qty) => {
        alert(`You hace selected ${qty} items`)
    }
    return (
        <>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}