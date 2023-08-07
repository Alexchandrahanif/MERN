import axios from "axios";
import Swal from "sweetalert2";
const basrURL = "http://localhost:3000";

export function fetchUser() {
  return (dispatch) => {
    axios
      .get(`${basrURL}/user`)
      .then((response) => {
        dispatch({
          type: "Fetch/GetAllUser",
          payload: response,
        });
      })
      .catch((error) => {
        console.log(error);
        console.error(error.message);
      });
  };
}

export function fetchUserById(id) {
  return (dispatch) => {
    axios
      .get(`${basrURL}/user/${id}`)
      .then((response) => {
        dispatch({
          type: "Fetch/GetOneUser",
          payload: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function AddUser(body) {
  const navigate = useNavigate();
  return (dispatch) => {
    axios
      .post(`${basrURL}/user`, body)
      .then((response) => {
        dispatch({
          type: "Fetch/AddUser",
          payload: response,
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      })

      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      });
  };
}

export function UpdateUser({ id, body }) {
  return (dispatch) => {
    axios
      .patch(`${basrURL}/user/${id}`, body)
      .then((response) => {
        dispatch(fetchUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function DeleteUser(id) {
  return (dispatch) => {
    axios
      .delete(`${basrURL}/user/${id}`)
      .then((response) => {
        dispatch(fetchUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
