import React from "react";
import lol from "../../images/nft-ticket.jpg";

function Ticket(props) {
  return (
    <div className="container flex-col mx-20  my-10 text-center items-center justify-center border w-3/4 relative h-fit ml-1/4 border-solid">
      <img src={lol} className=""></img>
      <p className="font-bold">Event name</p>
      <p>Price</p>
      <button className="bg-red-bg-btn w-full p-3 text-white font-bold hover:bg-red-500">
        View Event
      </button>
    </div>
  );
}

export default Ticket;
