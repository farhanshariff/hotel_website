import React from "react";
import { hotelData } from "../data/hotelData";
import { DropdownButton } from "react-bootstrap";
import DeluxeOccupancy from "./DeluxeOccupancy";
import DeluxePrice from "./DeluxePrice";

const RoomDetails = () => {
  return (
    <>
      {hotelData.map((data) => {
        return (
          <>
            <DropdownButton
              id="dropdown-basic-button"
              title="Occupancy"
              variant="info"
            >
              <DeluxeOccupancy />
            </DropdownButton>
            <DropdownButton
              id="dropdown-basic-button"
              title="Price"
              variant="info"
            >
              <DeluxePrice />
            </DropdownButton>
          </>
        );
      })}
    </>
  );
};

export default RoomDetails;
