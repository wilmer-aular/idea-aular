import { ModalSave } from "../../commons"

export const ModalCheckout = ({ handleCheckout, isShow, handleClose, message, variant = 'warning' }) => {
    const handleSave = () => {
        handleCheckout();
        handleClose();
    }

    const props = { isShow, handleClose, handleSave, title: 'Checkout', variant };
    return (
        <>
            <ModalSave {...props}>
                <h4>{message}</h4>
            </ModalSave>
        </>
    )
} 