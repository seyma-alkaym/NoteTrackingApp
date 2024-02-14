import axios from "axios";
import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaSortNumericDownAlt } from "react-icons/fa";
import { Container, Row, Col, Form, Table, Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import DetailModal from "./DetailModal";

function Home() {
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    const handleShowDetailModal = (note) => {
        setSelectedNote(note);
        setShowDetailModal(true);
    };

    const handleCloseDetailModal = () => {
        setSelectedNote(null);
        setShowDetailModal(false);
    };

    const [notes, setNotes] = useState([]);
    let number = 0;

    const [showDeleteModal, setShow] = useState(false);

    const [refresh, setRefresh] = useState(false);

    const [avg, setAvg] = useState(0);

    const [selectedNoteId, setSelectedNoteId] = useState(null);

    const handleDeleteClick = (noteId) => {
        setSelectedNoteId(noteId);
        setShow(true);
    };

    const handleCloseDeleteModal = () => {
        setShow(false);
        setSelectedNoteId(null); // Reset selected note id
    };

    useEffect(() => {
        axios.get(`/api/v1/notes`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => {
                setNotes(response.data);
                setRefresh(false);
            })
            .catch((error) => {
                console.error("Error fetching notes: ", error);
            });

        axios.get(`/api/v1/notes/average-calculation`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => {
                setAvg(response.data);
            })
            .catch((error) => {
                console.error("Error fetching average notes: ", error);
            });
    }, [refresh])


    const sortNotes = () => {
        axios.get(`/api/v1/notes?orderBy=note`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => {
                setNotes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching notes: ", error);
            })
    };

    return (
        <Container className="mt-4">
            <Card bg="light">
                <Card.Body>
                    <Row className="justify-content-center">
                        <Col md="8" lg="6">
                            <Form.Label className="fs-5">List Of Notes</Form.Label>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col md="10">
                            <Table bordered striped hover size="sm" className="mt-3">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Student First Name</th>
                                        <th>Student Last Name</th>
                                        <th>Note</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {notes.map(note =>
                                        <tr key={note.id}>
                                            <td>{++number}</td>
                                            <td>{note.studentFirstname}</td>
                                            <td>{note.studentLastname}</td>
                                            <td>{note.note}</td>
                                            <td>

                                                <Button className="me-2" size="sm" onClick={() => handleShowDetailModal(note)}><FaInfoCircle /></Button>

                                                <Button variant="danger" size="sm" onClick={() => handleDeleteClick(note.id)}>
                                                    <MdDeleteForever />
                                                </Button>

                                                <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Delete Note</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>Are you sure you want to delete this note?
                                                        <br />(It cannot be retrieved if you click Save)</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleCloseDeleteModal}>
                                                            Close
                                                        </Button>
                                                        <Button
                                                            variant="danger"
                                                            onClick={() => {
                                                                axios.delete(`/api/v1/notes/delete_note/${selectedNoteId}`, {
                                                                    headers: {
                                                                        "Content-Type": "application/json",
                                                                    }
                                                                })
                                                                    .then(response => {
                                                                        setShow(false);
                                                                        alert(response.headers.get("Delete-Massage"));
                                                                        setRefresh(true);
                                                                    })
                                                                    .catch((error) => {
                                                                        console.error("Error fetching note delete: ", error);
                                                                    });
                                                            }}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </td>
                                        </tr>
                                    )}

                                    <DetailModal show={showDetailModal} handleClose={handleCloseDetailModal} note={selectedNote} />


                                    <tr className="mt-5">
                                        <td></td>
                                        <td colSpan={2}>Average</td>
                                        <td>{avg}</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col md="8" lg="6" className="d-grid gap-2">
                            <Button
                                onClick={sortNotes}
                                size="lg">Sort Notes <FaSortNumericDownAlt /></Button>
                            <Button as={Link} to="/add-note" variant="primary" size="lg">Add Note <IoIosAddCircle /> </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Home;
