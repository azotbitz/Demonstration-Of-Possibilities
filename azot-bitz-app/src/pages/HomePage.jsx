import React, { useEffect, useState } from "react";
import { db as firebaseDB } from "../components/Firebase";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";

const HomePage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    firebaseDB.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      firebaseDB.child(`contacts/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact deleted successfully");
        }
      });
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>No.</TableCell>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Email</TableCell>
            <TableCell align='center'>Contact</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(data).map((id, index) => {
            return (
              <TableRow key={id}>
                <TableCell component='th' scope={"row"}>{index + 1}</TableCell>
                <TableCell align='center'>{data[id].name}</TableCell>
                <TableCell align='center'>{data[id].email}</TableCell>
                <TableCell align='center'>{data[id].contact}</TableCell>
                <TableCell align='center'>
                  <Link to={`/update/${id}`}>
                    <Button variant='contained' color='primary'>Edit</Button>
                  </Link>
                  <Button
                     variant='contained' color='error'
                    onClick={() => onDelete(id)}
                  >
                    Delete
                  </Button>
                  <Link to={`/view/${id}`}>
                    <Button variant='contained' color='success'>View</Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default HomePage;
