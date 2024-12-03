import { Button, Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  /*  state = {
    selected: false
  }; */

  return (
    <Col className="mb-3">
      <Card className={props.selectedAsin === props.book.asin ? "border border-danger" : ""}>
        <Card.Img
          variant="top"
          src={props.book.img}
          onClick={() => {
            props.changeAsin(props.book.asin);
          }}
        />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the content.</Card.Text>
          <Button variant="success" className="pb-2">
            Buy it!
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
