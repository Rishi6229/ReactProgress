import { useState } from "react";


function Formobject() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    pincode: "",
  });

  return (
    <>
      <label>
        First Name:
        <input
          type={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <br></br>
      <label>
        LastName:
        <input
          type={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <br></br>
      <label>
        Address:
        <input
          type={form.address}
          onChange={(e) => {
            setForm({
              ...form,
              address: e.target.value,
            });
          }}
        />
      </label>
      <br></br>
      <label>
        email:
        <input
          type={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
              email: e.target.value,
            });
          }}
        />
      </label>

      <p>
        {form.firstName} {form.lastName} {form.address} {form.email}{" "}
      </p>
    </>
  );
}

export default Formobject;