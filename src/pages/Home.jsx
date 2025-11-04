import { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const [error, setError] = useState(null);

  return (
    <div className="bg-dark min-vh-100 py-4">
      <Container>
        <Row className="mb-4">
          <Col>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <div className="main_div">
            </div>
          </Col>
        </Row>

        {error && <div className="text-danger small mt-3">{error}</div>}
      </Container>
    </div>
  );
}