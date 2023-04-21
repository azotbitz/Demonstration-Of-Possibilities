import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { db as firebaseDB } from "../components/Firebase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddContactPage = () => {
  const [state, setState] = useState(initialState);

  const { name, email, contact } = state;

  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      alert("Please provide value into each input field");
    } else {
      if (!id) {
        firebaseDB.child("contacts").push(state, (err) => {
          if (err) {
            alert('err' + err);
          } else {
            alert("Contact added successfully");
          }
        });
      } else {
        firebaseDB.child(`contacts/${id}`).set(state, (err) => {
          if (err) {
            alert(err);
          } else {
            alert("Contact updated successfully");
          }
        });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: 100 }}>
      <h2>Add Contact Page</h2>
      <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }
          }}
          autoComplete="off"
      >
        <form style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'}} onSubmit={handleSubmit}>
        <label htmlFor={"name"}>Name</label>
        <TextField
          id={"name"}
          type={"text"}
          placeholder={"Your Name Is.."}
          name={"name"}
          value={name || ""}
          onChange={handleInputChange}
        ></TextField>
        <label htmlFor={"email"}>Email</label>
        <TextField
          placeholder={"Your Email Is..."}
          id={"email"}
          type={"email"}
          name={"email"}
          value={email || ""}
          onChange={handleInputChange}
        ></TextField>
        <label htmlFor={"contact"}>Contact</label>
        <TextField
          id={"contact"}
          type={"number"}
          placeholder={"Your number is..."}
          name={"contact"}
          value={contact || ""}
          onChange={handleInputChange}
        ></TextField>
      <br/>
        <input type={"submit"} value={id ? "update" : "save"} />
      </form>
      </Box>
    </div>
  );
};

export default AddContactPage;
