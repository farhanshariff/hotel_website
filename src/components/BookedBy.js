import React from "react";
import { hotelData } from "../data/hotelData";
import { Dropdown } from "react-bootstrap";

const BookedBy = () => {
  return (
    <>
      {hotelData.map((data) => {
        return (
          <>
            <Dropdown.Item>
              First name : {data.booked_by.firstName}
            </Dropdown.Item>
            <Dropdown.Item>Last name : {data.booked_by.lastName}</Dropdown.Item>
            <Dropdown.Item>
              Country : {data.booked_by.address.country}
            </Dropdown.Item>
            <Dropdown.Item>Email : {data.booked_by.email}</Dropdown.Item>
            <Dropdown.Item>Phone : {data.booked_by.phone}</Dropdown.Item>
          </>
        );
      })}
    </>
  );
};

export default BookedBy;
