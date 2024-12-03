import CommentList from "./Commentlist";
import AddComment from "./AddComment";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  // state = {
  //   reviews: []
  // };

  const [reviews, setReviews] = useState([]);

  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4N2RlODA2ZmM4YzAwMTU2Yjg3MzEiLCJpYXQiOjE3MzI4MDQwNzMsImV4cCI6MTczNDAxMzY3M30.1H79z_u2sVpY2cGcDlfI_8HzekltCZVso28SH131mI8"
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((reviews) => {
        // this.setState({ reviews });
        setReviews(reviews);
      });
  };

  // componentDidMount() {
  //   this.fetchComments();
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.selected !== this.props.selected) {
  //     this.fetchComments();
  //   } else {
  //     console.log("Update non effettuato");
  //   }
  // }

  useEffect(() => {
    fetchComments();
  }, [props.asin]);

  return (
    <>
      <CommentList reviews={reviews} />
      <AddComment id={props.asin} />
    </>
  );
};

export default CommentArea;
