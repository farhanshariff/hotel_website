import React from "react";
import { hotelData } from "../data/hotelData";
import { Dropdown } from "react-bootstrap";

const Comments = () => {
  return (
    <>
      {hotelData.map((data) => {
        return (
          <div>
            <Dropdown.Item>{data.comment[0]}</Dropdown.Item>
            <Dropdown.Item>{data.comment[1]}</Dropdown.Item>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
