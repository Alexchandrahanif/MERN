import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddUser } from "../redux/action/userAction";
import { useDispatch } from "react-redux";

const AddPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");

  let body = {
    username,
    email,
    password,
    phoneNumber,
    address,
    role,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddUser(body));
  };

  return (
    <div className=" w-full flex flex-col p-10 justify-center items-center">
      <h1 className="font-bold text-xl">Tambah User</h1>
      <div className="min-w-[500px] py-5 justify-center items-center  ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center p-5 border-[2px] border-slate-700 rounded-xl"
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-100 h-10 p-4 border border-slate-500 rounded-lg my-2"
            autoComplete="off"
            placeholder="Masukkan Username"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-100 h-10 p-4 border border-slate-500 rounded-lg my-2"
            autoComplete="off"
            placeholder="Masukkan Email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-100 h-10 p-4 border border-slate-500 rounded-lg my-2"
            autoComplete="off"
            placeholder="Masukkan Password"
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-100 h-10 p-4 border border-slate-500 rounded-lg my-2"
            autoComplete="off"
            placeholder="Masukkan Phone Number"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-100 h-10 p-4 border border-slate-500 rounded-lg my-2"
            autoComplete="off"
            placeholder="Masukkan Address"
          />
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="selectOption"
          >
            Pilih Role:
          </label>
          <select
            id="selectOption"
            name="selectOption"
            onChange={(e) => setRole(e.target.value)}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value=" " disabled selected>
              -- Pilih Role --
            </option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Client">Client</option>
            <option value="Customer">Customer</option>
          </select>

          <div className="flex justify-around mt-5">
            <button
              className="w-32 border border-slate-300 p-1 rounded-lg bg-slate-100"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button
              className="w-32 border border-slate-300 p-1 rounded-lg bg-slate-100"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
