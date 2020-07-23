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
              Sell rate : {data.rooms[1].price.sell_rate}
            </Dropdown.Item>
            <Dropdown.Item>Tax : {data.rooms[1].price.tax}</Dropdown.Item>
          </>
        );
      })}
    </>
  );
};

export default PriceDetails;
