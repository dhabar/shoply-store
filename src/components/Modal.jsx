import React, { useState } from "react";
import Modal from "react-modal";

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)} // close on overlay click or ESC
        contentLabel="Example Modal"
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: { maxWidth: "600px", margin: "auto", borderRadius: "8px",marginTop: "100px", backdropFilter: "blur(10px)"},
        }}
      >
        <h2>React Modal</h2>
        <p>This is a modal using react-modal.</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default ModalComponent;