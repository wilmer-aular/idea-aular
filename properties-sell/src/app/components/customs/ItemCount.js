import { useState } from "react";
import { Button } from '@src/app/components/commons/Button';

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)


    return (
        <>
            <div style={{ marginTop: '150px', display: 'flex', justifyContent: 'center' }}>
                <div>
                    <div className='flex'>
                        <Button disabled={count === initial} variant="outline-success" textButton="-" click={() => setCount(count - 1)} />

                        <span style={{ margin: '35px' }}> {count}</span>
                        <Button disabled={count === stock} variant="outline-warning" textButton="+" click={() => setCount(count + 1)} />

                    </div>
                    <Button style={{ marginTop: '10px' }} textButton="Agregar al carrito" click={() => onAdd(count)} />
                </div>
            </div>
        </>
    )
}