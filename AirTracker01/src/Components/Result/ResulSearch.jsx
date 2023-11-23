import React from "react";
import { useData } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

const ResulSearch = () => {

  const { data } = useData();
  return (
    <div>

      {data.map((flight) => (
        // <div key={flight.id} className="card bg-white rounded-lg p-4 shadow-xl mb-4">
          <div key={flight.id} className= " card bg-white rounded-lg p-4 shadow-xl mb-4 border-spacing-2 border border-slate-700 hover:border-orange-700/100">
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-bold">Departure Time {flight.departureTime}</p>
                <p className="text-sm">Departure Date {flight.departureDateTime.substring(0, 10)}</p>
                <p className="text-xs">Departure Airport Code {flight.departureAirportCode}</p>
                <p className="text-xs">Airlines Code {flight.airlineCodes}</p>
                <p className="text-gray-600">Class: {flight.segments[0].cabin.toUpperCase()}</p>

              </div>
              
              <div>
                <p className="text-lg font-bold text-center"> {flight.duration}</p>
                <div >
                  ---------------
                <FontAwesomeIcon icon={faPlaneDeparture} />
                -----------------

                </div>
              </div>
              <div>
                <p className="text-lg font-bold">Arrival Time {flight.arrivalTime}</p>
                <p className="text-sm">Arrival Date{flight.arrivalDateTime.substring(0, 10)} </p>
                <p className="text-xs">Arrival Airport Code {flight.arrivalAirportCode} </p>
                <div className="flex items-center">
                  <p className="text-lg font-bold mr-2">₹</p>
                  <p className="text-lg font-bold"> {flight.score} </p>
                </div>
              </div>
            </div>
          </div>
        // </div>
      ))}
    </div>
  );
}

export default ResulSearch 