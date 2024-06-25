import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Bienvenido a Home</h1>
          <p>Esta es la página principal de la aplicacion</p>

          <div className="d-grid gap-2">
            <Button variant="dark" size="lg" to="/login" as={Link}>
              Iniciar Sesión
            </Button>
            <Button variant="secondary" size="lg" to="/registro" as={Link}>
              Registrarse
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
