import axios from "axios";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const toast = useToast();
  let navigate = useNavigate();
  console.log(`${import.meta.env.REACT_APP_API_URL}user/signIn`);
  let [loginData, setLoginData] = useState({ password: "", email: "" });
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      //for development
      let res = await axios.post("http://localhost:3000/user/signIn",loginData)
      // for production
      // let res = await axios.post(
      //   `${import.meta.env.REACT_APP_API_URL}user/signIn`,
      //   loginData
      // );
      console.log(res);
      localStorage.setItem("token", res.data.token);
      setLoginData({ password: "", email: "" });
      toast({
        title: "Login Success",
        description: `Hello, ${res.data.name}! Good to see you again.`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/admin-dashboard");
    } catch (error) {
      console.log("error in login time");
    }
  };
  
  return (
    <div>
      <div className="">
        <div className="max-w-xl py-6 px-8 h-96 mt-20 bg-white rounded shadow-xl mx-auto">
        <h1 className="text-center text-bold text-xl mb-5">Admin Login Page</h1>
          <form method="POST" onSubmit={handleClick}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={loginData.email}
                autoComplete="username"
                required
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                placeholder="@email"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 font-bold">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={loginData.password}
                autoComplete="current-password"
                required
                placeholder="@password"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
              <a
                href="#"
                className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600"
              >
                Forget Password
              </a>
            </div>
            <button
              type="submit"
              className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
