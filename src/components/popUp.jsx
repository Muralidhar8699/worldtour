import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function PopUp({ message, isOpen, onClose, props }) {
  if (!isOpen) return;

  return (
    <div>
      <Modal {...props} centered>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <button onClick={onClose}>Close</button>
      </Modal>
    </div>
  );
}
