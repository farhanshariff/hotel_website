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
              Adult : {data.rooms[0].occupancy.adult}
            </Dropdown.Item>
            <Dropdown.Item>
              Child : {data.rooms[0].occupancy.child}
            </Dropdown.Item>
          </>
        );
      })}
    </>
  );
};

export default PriceDetails;
