import React, { useEffect } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments } from "../../redux/action";

const Comments = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { data, loading, error } = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(getComments(postId));
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
                  <Card.Header>{item.email}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.body}</Card.Text>
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

export default Comments;
