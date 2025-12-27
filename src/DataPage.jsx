import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DataPage() {
  const [usersData, setUsersData] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setUsersData(users);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <button onClick={() => nav("/")}>Back To Form</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {usersData?.map((val, index) => (
          <div
            style={{
              border: "1px solid white",
              padding: "20px",
              borderRadius: "20px",
              textAlign: "start",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
            key={index}
          >
            <p>
              Name : <span style={{ fontWeight: "400" }}>{val.name}</span>{" "}
            </p>
            <p>
              Mobile Number :{" "}
              <span style={{ fontWeight: "400" }}>{val.mobile}</span>{" "}
            </p>
            <p>
              Email : <span style={{ fontWeight: "400" }}>{val.email}</span>{" "}
            </p>
            <p>
              Location :{" "}
              <span style={{ fontWeight: "400" }}>{val.location}</span>{" "}
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              <button style={{ padding: "7px 30px", fontSize: "1.2rem" }}>
                Edit
              </button>
              <button
                style={{
                  padding: "7px 30px",
                  fontSize: "1.2rem",
                  backgroundColor: "red",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataPage;
