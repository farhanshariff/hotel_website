import React from "react";
import { hotelData } from "../data/hotelData";
import { DropdownButton } from "react-bootstrap";
import DeluxeOccupancy from "./Deluxe";
import SuitOccupancy from "./Suit";

const RoomDetails = () => {
  return (
    <>
      {hotelData.map((data) => {
        return (
          <>
            <DropdownButton
              id="dropdown-basic-button"
              title={data.rooms[0].name}
              variant="info"
            >
              <DeluxeOccupancy />
            </DropdownButton>
            <DropdownButton
              id="dropdown-basic-button"
              title={data.rooms[1].name}
              variant="info"
            >
              <SuitOccupancy />
            </DropdownButton>
          </>
        );
      })}
    </>
  );
};

export default RoomDetails;
