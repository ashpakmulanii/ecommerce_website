import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        id="search_box"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-3 ml-sm-5 "
        placeholder="Search product here.."
      ></Form.Control>
      <input type="submit" className="nav__btn" value="Search" />
    </Form>
  );
}

export default SearchBox;
