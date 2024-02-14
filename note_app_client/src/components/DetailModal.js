import { format } from 'date-fns';
import { Modal, Button, ListGroup } from 'react-bootstrap';

function DetailModal({ show, handleClose, note }) {
    if (!note) {
        return null;
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Note Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className="justify-content-center align-items-center">
                <Modal.Title><strong>Student Information</strong></Modal.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        First Name: <cite>{note.studentFirstname}</cite>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Last Name: <cite>{note.studentLastname}</cite>
                    </ListGroup.Item>
                </ListGroup>

                <Modal.Title><strong>Note</strong></Modal.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item className="fs-5">
                        {note.note}
                    </ListGroup.Item>
                </ListGroup>

                <br/>
                <p><strong>Created At:</strong>  {format(new Date(note.createdAt), 'dd/MM/yyyy HH:mm:ss')}</p>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailModal;
