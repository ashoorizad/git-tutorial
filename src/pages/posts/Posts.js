import React, { useEffect } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getData } from "../../redux/action";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName } = useParams();
  const { data, loading, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getData(userName.split("-")[0]));
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
                  <Card.Header>{item.id}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.body}</Card.Text>
                    <Button
                      variant="dark"
                      onClick={() => navigate(`${item.id}`)}
                    >
                      comments
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

export default Posts;
