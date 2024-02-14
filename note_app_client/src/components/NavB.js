import { Navbar, Container, Nav } from "react-bootstrap";


function NavB() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Note App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/add-note">New Note</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavB;