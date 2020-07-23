import React from "react";
import { hotelData } from "../data/hotelData";
import { DropdownButton } from "react-bootstrap";
import SuitOccupancy from "./SuitOccupancy";
import SuitPrice from "./SuitPrice";

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
              <SuitOccupancy />
            </DropdownButton>
            <DropdownButton
              id="dropdown-basic-button"
              title="Price"
              variant="info"
            >
              <SuitPrice />
            </DropdownButton>
          </>
        );
      })}
    </>
  );
};

export default RoomDetails;
