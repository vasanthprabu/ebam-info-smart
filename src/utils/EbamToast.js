import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const EbamToast = (props) => {
    const { position,strong,background,body,flag,dismissible } = props;
    const [notification, setNotification] = useState(false);
    return (
        <ToastContainer position={position}>
        <Toast onClose={() => setNotification(false)} show={flag} 
            dismissible={dismissible}
            bg={background}
            className="d-inline-block m-1"
            key="01"
            autohide="true">
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">{strong} </strong>
                <small>Just now</small>
              </Toast.Header>
              <Toast.Body>{body}</Toast.Body>
        </Toast>
        </ToastContainer>
    )
}
export default EbamToast;