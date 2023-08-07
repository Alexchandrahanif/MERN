import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Add, Delete, Edit } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser, fetchUser } from "../redux/action/userAction";
import Swal from "sweetalert2";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.UserReducer.Users);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(DeleteUser(id));
        Swal.fire("Deleted!", "Your Data has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <div className="w-full flex justify-center flex-col items-center flex-wrap">
        <h2 className="mt-5 text-xl font-bold">Tabel User</h2>
        <div className="w-full flex flex-col relative justify-center items-center px-20">
          <div className="flex justify-end w-full p-5">
            <button className="active:opacity-50">
              <Link to={"/add"}>
                <img src={Add} alt="" title="Tambah" />
              </Link>
            </button>
          </div>
          <table className="w-full bg-white shadow-md rounded-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 border border-gray-300">Username</th>
                <th className="px-6 py-3 border border-gray-300">Email</th>
                <th className="px-6 py-3 border border-gray-300">Address</th>
                <th className="px-6 py-3 border border-gray-300">Role</th>
                <th className="px-6 py-3 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((el) => {
                return (
                  <tr key={el.id}>
                    <td className="px-6 py-4 text-center border border-gray-300">
                      {el.username}
                    </td>
                    <td className="px-6 py-4 text-center border border-gray-300">
                      {el.email}
                    </td>
                    <td className="px-6 py-4 text-center border border-gray-300">
                      {el.address}
                    </td>
                    <td className="px-6 py-4 text-center border border-gray-300">
                      {el.role}
                    </td>
                    <td className="px-6 py-4 text-center border border-gray-300 flex justify-around">
                      <Link to={`/edit/${el.id}`} className="active:opacity-80">
                        <img src={Edit} alt="" title="Edit" />
                      </Link>
                      <button
                        className="active:opacity-75"
                        onClick={() => handleDelete(el.id)}
                      >
                        <img src={Delete} alt="" title="Hapus" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
