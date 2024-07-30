import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/place4.jpeg";
import Img2 from "../../assets/places/place5.jpeg";
import Img3 from "../../assets/places/place6.jpeg";
import Img4 from "../../assets/places/place7.jpg";
import Img5 from "../../assets/places/camping.jpg";
import Img6 from "../../assets/places/place5.jpeg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "Burera",
    description:
      " Traditional wooden boats, crafted with local materials and expertise, glide across the calm waters, reflecting the harmonious relationship between the residents and their natural environment.",
    price: 20000,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Hills",
    location: "Burera",
    description:
      "The hills are also home to diverse flora and fauna, contributing to the region's rich biodiversity. The climate is generally cool and pleasant, making it an attractive destination for nature lovers and hikers. ",
    price: 15000,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "Burera",
    description:
      "The underwater world of Lake Burera in Burera District is a hidden gem, teeming with aquatic life and natural beauty.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Island",
    location: "Burera",
    description:
      "Burera District is home to several enchanting islands within the serene waters of Lake Burera. These islands, surrounded by crystal-clear waters, offer a tranquil escape and a sense of seclusion.",
    price: 13000,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Burera Camping",
    location: "Burera ",
    description:
      "Camping in Burera District offers an unforgettable experience amidst the stunning natural landscapes of northern Rwanda.",
    price: 35000,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Hicking",
    location: "Burera",
    description:
      "Hiking in Burera District is a captivating experience, offering a blend of adventure and natural beauty. ",
    price: 50000,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
