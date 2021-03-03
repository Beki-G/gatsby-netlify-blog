import React, { useState, useEffect } from "react";

function Card({ data }) {
  const [color, setColors] = useState({});

  useEffect(() => {
    cardColor();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function cardColor() {
    let classes, typeColor, subTypeColor;

    switch (data.type) {
      case "Browser":
        classes = "bg-tuscany";
        typeColor = "text-black"
        subTypeColor = "text-white"
        break;
      case "Framework":
        classes = "bg-midGreen";
        typeColor = "text-aquamarine"
        subTypeColor = "text-white"
        break;
      case "DevTools":
        classes = "bg-sky";
        typeColor = "text-eagleGreen";
        subTypeColor = "text-black"
        break;
      case "Databases":
        classes = "bg-aquamarine";
        typeColor = "text-gray-700"
        break;
      default:
        classes = "bg-slateGray";
        typeColor = "text-black";
        subTypeColor  = "text-gray-600"
        break;
    }
    setColors({ cardColor: classes , titleText:typeColor, subTitle:subTypeColor });

    return classes;
  }

  return (
    <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 lg:w-1/3 xl:w-1/4 ">
      <div className="rounded h-full flex justify-center items-center">
        <div
          className={`rounded shadow-md h-48 w-48 p-6 flex flex-col justify-around ${color.cardColor}`}
        >
          <div>
            <p className={`text-base mb-2 ${color.titleText}`}>{data.type}</p>
          </div>
          <div className="text-center content-center mt-2 mx-auto">
            <img className="h-20 mb-2 mx-auto content-center" src={data.image} alt={data.name + " logo"} />
            <p className={`text-2xl ${color.subTitle}`}>{data.name}</p>

          </div>
          <div>
          </div>
          {/* <div class="text-sm">
            <p class="text-green-500 mb-1 flex item-center">
              <i class="material-icons">arrow_drop_up</i> 5.77%
            </p>
            <p class="text-gray-600">Since last month</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
