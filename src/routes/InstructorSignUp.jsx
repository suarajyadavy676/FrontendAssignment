import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function InstructorSignUp() {
  const toast = useToast();
  let navigate = useNavigate();
  let [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  let [alResData, setAlResData] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userData);
    try {
      //for development
      // let res = await axios.post(
      //   "http://localhost:3000/user/register",
      //   {...userData,role:"instructor"}
      // );

      // for production
      let res = await axios.post(
        `${import.meta.env.REACT_APP_API_URL}user/register`,
        userData
      );
      console.log(res);
      if (res.data == "user already present") {
        return setAlResData(res.data);
      }
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      return navigate("/instructor-login");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      <div>
        <div className=" flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="bg-white shadow-md rounded-md p-6">
              <img
                className="mx-auto h-12 w-auto"
                src="https://www.svgrepo.com/show/499664/user-happy.svg"
                alt=""
              />

              <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign up for Instructor
              </h2>

              <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      name="username"
                      type="username"
                      value={userData.username}
                      onChange={(e) =>
                        setUserData({ ...userData, username: e.target.value })
                      }
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      name="email"
                      type="email-address"
                      autoComplete="email-address"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      name="password"
                      type="password"
                      autoComplete="password"
                      value={userData.password}
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      name="confirm_password"
                      type="password"
                      autoComplete="confirm-password"
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                  >
                    Register Account
                  </button>
                  <h2 className='text-center my-2'>If You Have Already Account Please <span className='hover:text-red-500 underline text-blue-500'> <Link to="/instructor-login">Login</Link> </span></h2>
                  {alResData == "" ? null : (
                    <h1 className="text-center text-red-600 text-lg">
                      {alResData}
                    </h1>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorSignUp
