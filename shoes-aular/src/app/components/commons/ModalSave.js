import { Modal } from "react-bootstrap";
import { Button } from '.'

export const ModalSave = ({ isShow, handleClose, title, children, handleSave }) => {
    console.log()
    return (
        <>
            <Modal
                show={isShow}
                onHide={handleClose}
                scrollable={false}
            >
                <Modal.Header closeButton style={{ backgroundColor: "#cdcbcb70" }}>
                    <Modal.Title className="text-dark font-weight-bolder">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>

                <Modal.Footer style={{ backgroundColor: "#cdcbcb70" }}>
                    <Button variant="danger" click={handleClose} textButton="CLOSE" />
                    <Button variant="success" click={handleSave} textButton="SAVE" />
                </Modal.Footer>

            </Modal>

        </>
    )
}