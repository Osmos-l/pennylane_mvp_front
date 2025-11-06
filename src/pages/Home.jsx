import IngredientContainer from "@components/features/home/ingredientContainer";
import Recommendations from "@components/features/home/recommendations";
import { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const [error, setError] = useState(null);

  return (
    <div className="bg-white container-fluid">
        <Row className="min-vh-100 max-vh-100 py-4">
          <Col xs={3}>
            <IngredientContainer />
          </Col>
          <Col xs={1}></Col>
          <Col xs={8}>
            <Recommendations />
          </Col>
        </Row>
        {error && <div className="text-danger small mt-3">{error}</div>}
    </div>
  );
}