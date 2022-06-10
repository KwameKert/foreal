import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RestaurantSearch } from "./RestaurantSearch";

function createData(
  name: string,
  location: string,
  country: string,
  invites: number,
  createdAt: string
) {
  return { name, location, country, invites, createdAt };
}

const rows = [
  createData("MacDonalds", "Torino", "Italy", 24, new Date().toISOString()),
  createData("KFC", "Rome", "Italy", 4, new Date().toISOString()),
  createData("Max", "Viena", "Italy", 24, new Date().toISOString()),
];

export default function RestaurantList() {
  return (
    <>
      <RestaurantSearch />
      <div className="card rounded-2xl bg-white p-5">
        <div className="w-full">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Address</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">No. invites</TableCell>
                  <TableCell align="center">Created At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.location}</TableCell>
                    <TableCell align="center">{row.country}</TableCell>
                    <TableCell align="center">{row.invites}</TableCell>
                    <TableCell align="center">{row.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
