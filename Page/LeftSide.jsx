import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className=" space-y-8  ">
      {/* <h1 className="text-xl font-bold">All Caterogy</h1> */}
      <div className="indicator">
        <span className="indicator-item badge badge-primary">
          {categories.length}
        </span>
        <div className="bg-gray-300 p-2  grid text-xl font-bold ">
          All Category
        </div>
      </div>
      <h1 className="text-xl font-bold text-center bg-amber-100 p-3 m-3">
        National News
      </h1>
      {categories.map((categorie) => (
        <Link
          className=" block ml-20"
          key={categorie.id}
          to={`/${categorie.id}`}
        >
          {categorie.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSide;
