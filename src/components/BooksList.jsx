import { Component } from "react";
import { Container, Form, FormControl, Row } from "react-bootstrap";
import Fantasy from "../assets/fantasy.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container fluid>
        <Form className="d-flex w-20 text-center">
          <FormControl
            type="search"
            placeholder="Search for Books"
            className="mr-2 mb-3"
            aria-label="Search"
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
        </Form>
        <Row>
          {Fantasy.filter((book) =>
            book.title.toLowerCase().includes(this.state.searchQuery)
          ).map((book) => (
            <SingleBook
              Cardimg={book.img}
              Cardtitle={book.title}
              Cardtext={book.category}
              key={book.asin}
            />
          ))}
        </Row>
        <Row>
          {Fantasy.slice(0, 20).map((book) => (
            <SingleBook
              Cardimg={book.img}
              Cardtitle={book.title}
              Cardtext={book.category}
              key={book.asin}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
