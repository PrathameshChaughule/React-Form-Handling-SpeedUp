import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FormPage() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
  });
  const nav = useNavigate();

  const formHandel = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, data]);
    setData({
      name: "",
      mobile: "",
      email: "",
      location: "",
    });
    nav("/datapage");
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div
      style={{
        border: "1px solid white",
        padding: "40px",
        borderRadius: "20px",
      }}
    >
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "280px",
          textAlign: "start",
        }}
        onSubmit={(e) => formSubmit(e)}
      >
        <label htmlFor="">Name :</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={data.name}
          onChange={(e) => formHandel(e)}
        />
        <br />

        <label htmlFor="">Mobile Number :</label>
        <input
          type="number"
          name="mobile"
          id="mobile"
          placeholder="Enter your mobile number"
          value={data.mobile}
          onChange={(e) => formHandel(e)}
        />
        <br />

        <label htmlFor="">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => formHandel(e)}
        />
        <br />

        <label htmlFor="">Location :</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter your current location"
          value={data.location}
          onChange={(e) => formHandel(e)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
