import { Modal } from "react-bootstrap";
import { Button } from '.'

export const ModalSave = ({ isShow, handleClose, title, children, handleSave, variant }) => {
    return (
        <>
            <Modal
                show={isShow}
                onHide={handleClose}
                scrollable={false}
            >
                <Modal.Header closeButton className={`bg-${variant}`}>
                    <Modal.Title className="text-dark font-weight-bolder">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>

                <Modal.Footer className={`bg-${variant}`}>
                    <Button variant="danger" click={handleClose} textButton="Close" />
                    <Button variant="success" click={handleSave} textButton="Accept" />
                </Modal.Footer>

            </Modal>

        </>
    )
}