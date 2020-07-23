import React from "react";
import { hotelData } from "../data/hotelData";
import { Dropdown } from "react-bootstrap";

const PriceDetails = () => {
  return (
    <>
      {hotelData.map((data) => {
        return (
          <>
            <Dropdown.Item>
              Adult : {data.rooms[1].occupancy.adult}
            </Dropdown.Item>
            <Dropdown.Item>
              Child : {data.rooms[1].occupancy.child}
            </Dropdown.Item>
          </>
        );
      })}
    </>
  );
};

export default PriceDetails;
