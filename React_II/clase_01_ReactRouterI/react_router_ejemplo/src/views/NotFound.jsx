import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>404</h1>
          <p>Página no encontrada</p>

          <div className="d-grid gap-2 mt-4">
            <Button variant="secondary" size="lg" to="/" as={Link}>
              Volver a Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
