import { useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { IoArrowBackOutline } from "react-icons/io5";

function AddNote() {

    const [studentFirstname, setStudentFirstname] = useState("");
    const [studentLastname, setStudentLastname] = useState("");
    const [note, setNote] = useState("");

    function sendAddRequest() {
        if (studentFirstname && studentLastname && note && note >= 0 && note <= 100) {
            axios.post(`/api/v1/notes/new_note`, {
                studentFirstname: studentFirstname,
                studentLastname: studentLastname,
                note: note
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((response) => {
                    setStudentFirstname("");
                    setStudentLastname("");
                    setNote("");

                    alert(response.headers.get("Create-Massage"));
                })
                .catch((error) => {
                    console.error("Error fetching note add: ", error);
                })
        } else if (note < 0 || note > 100) {
            alert("Note must be less than or equal to 100 and must be greater than or equal to 0");
            setNote("");
        } else {
            alert("Invalid add attempt");
            return false;
        }
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md="8" lg="6">
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="studentFirstname">
                                    <Form.Label className="fs-4 mt-2">Student First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        size="lg"
                                        placeholder="Jane"
                                        value={studentFirstname}
                                        onChange={(e) => setStudentFirstname(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="studentLastname">
                                    <Form.Label className="fs-4 mt-2">Student Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        size="lg"
                                        placeholder="Deo"
                                        value={studentLastname}
                                        onChange={(e) => setStudentLastname(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="note">
                                    <Form.Label className="fs-4 mt-2">Note</Form.Label>
                                    <Form.Control
                                        type="number"
                                        size="lg"
                                        placeholder="0"
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                    />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button
                                        id="submit"
                                        type="button"
                                        size="lg"
                                        onClick={() => sendAddRequest()}
                                        block="true"
                                        className="mt-2"
                                    >
                                        Add Note
                                    </Button>

                                    <Button
                                        id="back"
                                        type="button"
                                        variant="secondary"
                                        size="lg"
                                        onClick={() => { window.location.href = "/"; }}
                                        block="true"
                                        className="mt-2"
                                    >
                                        <IoArrowBackOutline />
                                    </Button>
                                </div>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AddNote;