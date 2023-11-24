import React from 'react'
export default function Booking() {
    return(
        
              <div className="flex  text-gray-700">
                <div className="w-1/2 p-4">
                  <div className=" rounded-lg p-6 ">
                    <img src="https://images.unsplash.com/photo-1592985684811-6c0f98adb014?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Flight" className="w-full mb-4 rounded-lg" />
                    <p className=" font-bold text-center text-5xl">Booking</p>
                  </div>
                </div>
                <div className="w-1/2 p-4 ">
                  <div className="bg-white rounded-lg p-4 shadow-xl pt-10 mt-12 mr-4">
                    <p className="text-lg font-bold mb-4">Track Your Flights</p>
                    <div className="mb-4">
                      <label htmlFor="carrier" className="block mb-2">Select Carrier:</label>
                      <select id="carrier" className="w-full p-2 border border-gray-700 rounded"
                         
                          
                      >
                        <option value="">Select an option</option>
                        <option value="carrier1">Carrier 1</option>
                        <option value="carrier2">Carrier 2</option>
                        <option value="carrier3">Carrier 3</option>
                        <option value="carrier4">Carrier 4</option>
                        <option value="carrier5">Carrier 5</option>
                        <option value="carrier6">Carrier 6</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="flightNo" className="block mb-2">Flight No:</label>
                      <input type="text" id="flightNo" className="w-full p-2 border border-gray-700 rounded" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="departureDate" className="block mb-2">Departure Date:</label>
                      <input type="date" id="departureDate" className="w-full p-2 border border-gray-700 rounded" />
                    </div>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded">Track Your Flight</button>
                  </div>
                </div>
              </div>
          
         
    );
}