import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Logged In Successfully !!');
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        toast.error("Error 404 ", err);
      });
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box flex flex-col justify-center items-center space-y-12">
        <h3 className="font-bold text-xl mt-6">Login</h3>
        <div className="w-[80%] space-y-8">
          <label className="input input-bordered flex justify-center items-center gap-2 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-[6%] h-[70%]"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <br />
          </label>
          {errors.email && (
            <span className="text-red-500 text-sm p-1">
              This field is required
            </span>
          )}
          <label className="input input-bordered  flex justify-center items-center gap-2 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-[6%] h-[70%]"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <br />
          </label>
          {errors.password && (
            <span className="text-red-500 text-sm p-1">
              This field is required
            </span>
          )}
        </div>
        <div className="w-[80%] flex justify-around items-center mb-6 pb-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button className="btn btn-outline btn-success w-20 hover:scale-110 duration-200">
              Login
            </button>
          </form>
          <div className="">
            New User ?{" "}
            <Link to="/signup">
              <span className="font-semibold underline hover:text-lg cursor-pointer">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Login;
