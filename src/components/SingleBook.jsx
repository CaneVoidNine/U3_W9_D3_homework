import { Card, Container, Row, Col, Form } from "react-bootstrap";
import { Component } from "react";
import books from "../assets/fantasy.json";
class SingleBook extends Component {
  render() {
    return (
      <Container>
        <h2>Fantasy books</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control type="email" placeholder="Type here" />
            <Form.Text className="text-muted">
              Type here to search a book
            </Form.Text>
          </Form.Group>
        </Form>
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
