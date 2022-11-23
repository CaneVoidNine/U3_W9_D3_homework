import { Card, Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import books from "../assets/fantasy.json";
class SingleBook extends Component {
  render() {
    return (
      <Container>
        <h2>Fantasy books</h2>
        <Row>
          {books.map((book) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
