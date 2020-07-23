import React, { Component } from "react";
import { hotelData } from "../data/hotelData";
import TableHeaders from "./TableHeaders";
import { DropdownButton } from "react-bootstrap";
import PriceDetails from "./PriceDetails";
import Comments from "./Comments";
import BookedBy from "./BookedBy";
import RoomDetails from "./RoomDetails";

class HotelData extends Component {
  render() {
    return (
      <div>
        {hotelData.map((data) => {
          return (
            <table>
              <thead>
                <TableHeaders />
              </thead>

              <tbody>
                <tr>
                  <td>{data.hotel_name}</td>
                  <td>{data.bookingId}</td>
                  <td>{data.status}</td>
                  <td>{data.booked_on}</td>
                  <td>{data.source}</td>
                  <td>{data.check_in}</td>
                  <td>{data.check_out}</td>
                  <td>{data.channel}</td>
                  <td>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Price details"
                      variant="info"
                    >
                      <PriceDetails />
                    </DropdownButton>
                  </td>
                  <td>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Comments"
                      variant="info"
                    >
                      <Comments />
                    </DropdownButton>
                  </td>
                  <td>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Booked by"
                      variant="info"
                    >
                      <BookedBy />
                    </DropdownButton>
                  </td>

                  <td>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Room Details"
                      variant="info"
                    >
                      <RoomDetails />
                    </DropdownButton>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    );
  }
}

export default HotelData;
