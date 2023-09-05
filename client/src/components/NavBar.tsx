import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar className="bg-black shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link className="text-white" to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link className="text-white" to="/Trips" as={NavLink}>
            Trips
          </Nav.Link>
          <Nav.Link className="text-white" to="/UserRegistration" as={NavLink}>
            Register
          </Nav.Link>
          <Nav.Link className="text-white" to="/UserLogin" as={NavLink}>
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
