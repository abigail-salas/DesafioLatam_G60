import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="secondary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link
              to="/"
              className="text-decoration-none text-white me-5"
            >
              <Button variant="light"> Home </Button>
            </Link>
            <Link
              to="/admin"
              className="text-decoration-none text-white"
            >
              <Button variant="dark"> Admin </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
