import { ModalSave, Button, Input } from "../../commons"
import { useState } from "react";
import { generateErrorForm } from '@src/utils/util'

export const buyerError = {
    name: true,
    email: true,
    phone: true,
};

export const ModalCheckout = ({ handleCheckout }) => {
    const [err, setErr] = useState({});
    const [isShow, setIsShow] = useState(false);
    const [buyer, setBuyer] = useState({})
    const handleClose = () => setIsShow(false);
    const handleShow = () => setIsShow(true);

    const handleValue = (key, value) => {
        buyer[key] = value;
        setBuyer({
            ...buyer,
        });
        delete err[key];
    };

    const handleSave = () => {
        const error = generateErrorForm(buyerError, buyer);
        if (error) {
            setErr(error);
            return;
        }
        handleCheckout(buyer);
        handleClose();
        // setBuyer({})
    }

    const props = { isShow, handleClose, handleSave, title: 'Checkout' };
    return (
        <>
            <Button variant="warning" textButton="CHECKOUT NOW" click={() => handleShow()} />
            <ModalSave {...props}>
                <Input
                    title="Name"
                    error={err.name}
                    value={buyer?.name}
                    onChange={(e) => handleValue("name", e.target.value)}
                />
                <Input
                    title="Email"
                    type="email"
                    error={err.email}
                    value={buyer?.email}
                    onChange={(e) => handleValue("email", e.target.value)}
                />
                <Input
                    title="Phone"
                    type="phone"
                    error={err.phone}
                    value={buyer?.phone}
                    onChange={(e) => handleValue("phone", e.target.value)}
                />
            </ModalSave>
        </>
    )
} 