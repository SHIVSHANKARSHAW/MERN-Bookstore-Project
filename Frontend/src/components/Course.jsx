import { Link } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(()=> {
    const getBook = async() => {
      try {
       const res =  await axios.get("http://localhost:3001/book");
       console.log(res.data);
       setBook(res.data);
      } catch (error){
        console.log("The Error is :", error);
      }
    }
    getBook();
  },[])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col justify-center items-center">
        <div className="space-y-8 my-12  flex flex-col justify-center items-center">
          <h1 className="text-4xl text-center">
            We're Delighted To Have You{" "}
            <span className="text-pink-600"> Here : ) </span>
          </h1>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur consequatur voluptatem at provident a ut placeat,
            excepturi laboriosam sint reprehenderit voluptas suscipit itaque
            aliquid. Vel.
          </p>
          <Link to="/">
            <button className="btn btn-outline btn-error hover:scale-110 ">
              Back
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-4 md:pl-6 ">
          {book.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
