import React, { useEffect } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../../redux/action";

const Users = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="loader"></span>
        </div>
      ) : error ? (
        <div
          style={{
            width: "100%",
            height: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge bg="danger">{error}</Badge>
        </div>
      ) : (
        <Container>
          <Row>
            {data.map((item) => (
              <Col key={item.id} xs="4" className="mb-4">
                <Card className="text-center">
                  <Card.Header>{item.username}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.email}</Card.Text>
                    <Button
                      variant="dark"
                      as={Link}
                      // to={`${item.id}`}
                      to={`${item.id}-${item.username}`}
                      // state={{ userId: item.id }}
                    >
                      posts
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Users;
