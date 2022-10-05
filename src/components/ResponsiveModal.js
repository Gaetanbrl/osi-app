import React from "react";
import { Modal } from 'react-bootstrap';
const ResponsiveModal = ({
    visible,
    title = null,
    body = null,
    footer = null, change = () => { },
    className,
    backdrop = false,
    showCloseBtn,
    size
}) => {
    return (
        <>
            {
                visible &&
                <Modal
                    backdrop={backdrop ? visible : false}
                    className={className}
                    show={visible}
                    onHide={change}
                    size={size}
                >
                    {(title || showCloseBtn) && (
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                    )}
                    <Modal.Body>{body}</Modal.Body>
                    {footer && <Modal.Footer>{footer}</Modal.Footer>}
              </Modal>
            }
        </>
    )
};
export default ResponsiveModal;