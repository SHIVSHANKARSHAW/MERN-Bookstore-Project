import { Link } from "react-router-dom";
import img from "../assets/Banner.jpg";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex md:flex-row cursor-pointer">
      <div className="order-1 w-full mt-10 md:order-2 md:w-1/2 ">
        <img
          src={img}
          alt="Banner Image"
          className="w-full h-full relative -z-1"
        />
      </div>
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-16 px-6 space-y-8">
        <h1 className="text-3xl font-bold">
          Hello, Stop By & Indulge In The{" "}
          <span className="text-pink-500 font-semibold">
            Fountain Of Knowledge
          </span>{" "}
          , The Incredible{" "}
          <span className="text-pink-500 font-semibold">Magic Of Fantasy</span>{" "}
          And In The{" "}
          <span className="text-pink-500 font-semibold">
            Stunning Mythological Thriller
          </span>
          .
        </h1>
        <label className="input input-bordered w-[60%] flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Enter Email To Join Us"
          />
        </label>
        <Link to="/signup">
          <button className="btn btn-outline btn-info font-semibold hover:scale-105 mt-4">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
