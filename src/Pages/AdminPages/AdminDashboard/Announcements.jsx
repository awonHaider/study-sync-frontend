import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi"; // Icon for the menu button
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Icons for dropdown items

const Announcements = () => {
  const [menuIndex, setMenuIndex] = useState(null); // Tracks the open menu for each card
  const [isModalOpen, setIsModalOpen] = useState(false); // Tracks modal visibility

  // Array of card data
  const cards = [
    {
      id: 1,
      title: "Version 2 !!!",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa in pretium accumsan dolor ac. Suscipit malesuada enim mi tortor.",
      date: "September 5, 2024",
    },
    {
      id: 2,
      title: "Version 3 !!!",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa in pretium accumsan dolor ac. Ut malesuada enim mi tortor.",
      date: "October 10, 2024",
    },
    {
      id: 3,
      title: "Version 4 !!!",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa in pretium accumsan dolor ac. Pellentesque malesuada enim mi tortor.",
      date: "November 15, 2024",
    },
  ];

  const toggleMenu = (index) => {
    setMenuIndex(menuIndex === index ? null : index); // Toggle menu for each card
  };

  const closeMenu = () => {
    setMenuIndex(null);
  };

  return (
    <>
      <section className="p-4">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold mb-5">Announcements</h1>

          <button
            type="button"
            className=" bg-blue-600 text-white rounded-full px-10 font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            Create New
          </button>
        </div>

        {/* Announcements Cards */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="relative max-w-sm p-4 bg-white border rounded-lg shadow hover:shadow-md"
              >
                {/* Card Content */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700">{card.description}</p>
                <p className="mt-4 text-xs text-[#8A8A8A] flex items-center">
                  <span className="mr-1">📅</span> {card.date}
                </p>

                {/* Menu Button */}
                <button
                  className="absolute top-4 right-4 p-2 text-gray-500 hover:bg-gray-100 rounded-full"
                  onClick={() => toggleMenu(index)}
                >
                  <FiMoreVertical size={20} />
                </button>

                {/* Dropdown Menu */}
                {menuIndex === index && (
                  <div
                    className="absolute top-12 right-4 z-10 bg-white border rounded-lg shadow-md"
                    onBlur={closeMenu}
                  >
                    <ul className="text-sm">
                      <li
                        className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          closeMenu();
                          alert(`Edit action for card: ${card.id}`);
                        }}
                      >
                        <FaEdit className="mr-2" /> Edit
                      </li>
                      <li
                        className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          closeMenu();
                          alert(`Delete action for card: ${card.id}`);
                        }}
                      >
                        <FaTrashAlt className="mr-2" /> Delete
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <h2 className="text-lg font-semibold mb-2">
              Create New Announcement
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              Lorem ipsum dolor sit amet consectetur. Ut dignissim justo nibh
              diam adipiscing nullam cum. Nisl accumsan arcu faucibus lectus.
            </p>
            <form>
              <div className="mb-2">
                <label className="block text-sm font-semibold mb-1">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Enter title"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold mb-1">Date</label>
                <input type="date" className="w-full border rounded-md p-2" />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold mb-1">
                  Message
                </label>
                <textarea
                  className="w-full border rounded-md p-2"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Not more than 500 words
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Announcements;
