import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";


const HandleModal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  // const handleModal = (event: any, id: any) => {
  //   if (event.key === "F12") {
  //     setShowModal(true);
  //   }
  // };
  return (
    <div>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Triggered by Key Press</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This modal was triggered by pressing the 'f12' key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  )
}

export default HandleModal