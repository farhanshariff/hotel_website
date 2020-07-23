import React from "react";
import { hotelData } from "../data/hotelData";
import { Dropdown } from "react-bootstrap";

const PriceDetails = () => {
  return (
    <>
      {hotelData.map((data) => {
        return (
          <>
            <Dropdown.Item>Sell Rate : {data.total_price}</Dropdown.Item>
            <Dropdown.Item>Total tax : {data.total_tax}</Dropdown.Item>
            <Dropdown.Item>Total payment : {data.total_payment}</Dropdown.Item>
          </>
        );
      })}
    </>
  );
};

export default PriceDetails;
