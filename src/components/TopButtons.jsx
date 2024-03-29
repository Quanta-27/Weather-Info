import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Bangalore",
    },
    {
      id: 2,
      title: "Kolkata",
    },
    {
      id: 3,
      title: "Sydney",
    },
    {
      id: 4,
      title: "Mumbai",
    },
    {
      id: 5,
      title: "Italy",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;