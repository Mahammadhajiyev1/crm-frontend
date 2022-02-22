import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchedTickets } from "../../pages/ticket-listing/ticketsAction";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { value } = e.target;
    dispatch(filterSearchedTickets(value));
  };
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column='true' sm='2'>
            Search:
          </Form.Label>
          <Col sm='9'>
            <Form.Control
              name='searchStr'
              onChange={handleOnChange}
              // value={"value"}
              placeholder='search ...'
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
