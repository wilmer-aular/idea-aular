import { useState } from "react";
import { Button } from '@src/app/components/commons/Button';


export const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <div className='flex'>
                        <Button disabled={count === initial} variant="outline-success" textButton="-" click={() => setCount(count - 1)} />
                        <span style={{ margin: '13px' }}> {count}</span>
                        <Button disabled={count === stock} variant="outline-warning" textButton="+" click={() => setCount(count + 1)} />

                    </div>
                    <Button style={{ marginTop: '10px' }} textButton="Add to cart" click={() => onAdd(count)} disabled={count === 0} />
                </div>
            </div>
        </>
    )
}