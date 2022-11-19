import react, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import axios from "axios";
import withStyles from "@mui/material";
import { styled } from "@mui/system";
function HooksUseEffect() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Hooks UseEffect</h2>

      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "black" }}>
            <TableCell style={{ color: "white" }}>S/N</TableCell>
            <TableCell style={{ color: "white" }}>Name</TableCell>
            <TableCell style={{ color: "white" }}>UserName</TableCell>
            <TableCell style={{ color: "white" }}>Email</TableCell>
            <TableCell style={{ color: "white" }}>Company</TableCell>
            <TableCell style={{ color: "white" }}>Address</TableCell>
            <TableCell style={{ color: "white" }}>Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.company.name}</TableCell>
                <TableCell>{user.address.city}</TableCell>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default HooksUseEffect;
