import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (props) => {
  // state = {
  //   inputText: "",
  //   formSubmitted: false,
  //   asin: ""
  // };

  const [inputText, setInputText] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedAsin, setSelectedAsin] = useState("");

  const handleChange = (propertyValue) => {
    setInputText(propertyValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setInputText("");
    setFormSubmitted(false);
  };

  const changeAsin = (asin) => {
    if (selectedAsin === asin) {
      setSelectedAsin("");
    } else {
      setSelectedAsin(asin);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="col-6">
          <Form onSubmit={handleSubmit} className="mb-3">
            <Form.Label htmlFor="bookTitle" className="d-flex justify-justify-content-start fw-bold fs-5">
              Title
            </Form.Label>
            <Form.Control
              type="text"
              id="bookTitle"
              placeholder="Inserisci il titolo del libro"
              autoComplete="off"
              value={inputText}
              onChange={(e) => handleChange(e.target.value)}
            />
            <Button type="reset" variant="danger" onClick={handleReset} className="m-3 d-flex justify-content-start">
              Reset
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col className="col-8">
          {selectedAsin ? (
            <CommentArea
              /* asin={this.state.book.asin} */
              asin={selectedAsin}
            />
          ) : (
            <Alert variant="warning">Selezionare una card</Alert>
          )}
        </Col>
      </Row>

      <Row sm={2} lg={3}>
        {!formSubmitted && props.books.map((book) => <SingleBook key={book.asin} book={book} selectedAsin={selectedAsin} changeAsin={changeAsin} />)}
        {formSubmitted &&
          props.books
            .filter((book) => book.title.toLowerCase().includes(inputText.toLowerCase()))
            .map((book) => <SingleBook key={book.asin} book={book} selectedAsin={selectedAsin} changeAsin={changeAsin} />)}
      </Row>
    </Container>
  );
};

export default BookList;
