import { Accordion } from "react-bootstrap";

const Plans = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Plan - Básico</Accordion.Header>
        <Accordion.Body>
          3 Noches por solo $20.000 CLP, habitación compartida
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Plan - Estándar </Accordion.Header>
        <Accordion.Body>
          5 Noches por solo $25.000 CLP, habitación privada
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Plan - Guauf</Accordion.Header>
        <Accordion.Body>
          7 Noches + Adiestramiento canino por solo $35.000 CLP, habitación
          privada o compartida a elección
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default Plans;
