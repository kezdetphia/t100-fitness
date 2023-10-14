import React from "react";

const Challenge = () => {
  const data = [
    {
      Hungary: "Budapest",
    },
    {
      England: "London",
    },
  ];

 return (
    <div className="h-screen w-screen">
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {Object.entries(item).map(([key, value]) => (
              <div key={key} >
                <button>{key}</button>
                <button>{value}</button>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Challenge;
