import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-start">
        <Navbar.Brand>Dogstel</Navbar.Brand>
        {/* Links */}

        <Link to="/" className="text-white ms-3 text-decoration-none">
          Home
        </Link>

        <Link to="/planes" className="text-white ms-3 text-decoration-none">
          Planes
        </Link>
      </Container>
    </Navbar>
  );
};
export default Navigation;
