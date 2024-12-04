import React, { useState } from "react";

const BookedSessions = ({ sessions }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Booked Sessions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="border border-[#65B2FB] rounded-lg p-4 bg-blue-50"
          >
            <p className="text-xs text-gray-500">{session.date}</p>
            <h3 className="font-semibold text-lg mt-2">{session.title}</h3>
            <div className="flex items-center mt-2">
              <img
                src={session.organizerImage}
                alt="Organizer"
                className="w-6 h-6 rounded-full mr-2"
              />
              <div>
                <p className="text-sm font-medium text-[#666666]">
                  {session.organizerName}
                </p>
                <p className="text-xs text-gray-400">Organizer</p>
              </div>
            </div>
            <div
              className={`text-center text-xs font-semibold mt-3 px-2 py-1 rounded-full ${
                session.status === "Confirmed"
                  ? "bg-green-200 text-green-800"
                  : "bg-yellow-200 text-[#B18500]"
              }`}
            >
              {session.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedSessions;
