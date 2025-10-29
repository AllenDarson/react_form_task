import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";
import Swal from "sweetalert2";

export default function Viewdetails() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // ✅ Get data from localStorage
  const [storedData, setStoredData] = React.useState(
    JSON.parse(localStorage.getItem("employeeDatabase") || "[]")
  );

  const columns = [
    { id: "name", label: "Name", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 150 },
    { id: "department", label: "Department", minWidth: 100 },
    { id: "password", label: "Password", minWidth: 100 },
    { id: "address", label: "Address", minWidth: 170 },
    { id: "state", label: "State", minWidth: 100 },
    { id: "city", label: "City", minWidth: 100 },
    { id: "pincode", label: "Pincode", minWidth: 100 },
  ];

  // ✅ Handle delete
  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this employee record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#0d6efd",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = storedData.filter((_, i) => i !== index);
        setStoredData(updatedData);
        localStorage.setItem("employeeDatabase", JSON.stringify(updatedData));

        Swal.fire({
          title: "Deleted!",
          text: "Employee record has been deleted.",
          icon: "success",
          confirmButtonColor: "#0d6efd",
        });
      }
    });
  };

  // ✅ Handle update (basic demo popup)

  // ✅ Compact and neat SweetAlert update popup
const handleUpdate = (index) => {
  const selected = storedData[index];

  Swal.fire({
    title: "Edit Employee",
    html: `
      <style>
        .swal2-popup {
        margin-top: 50px;
          width: 350px !important;
          padding: 15px !important;
        }
        .swal2-title {
          font-size: 18px !important;
          margin-bottom: 10px;
        }
        .swal2-input {
          width: 95% !important;
          height: 28px !important;
          margin: 3px 0 8px 0 !important;
          border-radius: 4px !important;
          font-size: 13px !important;
          padding: 3px 6px !important;
        }
        .swal2-field-label {
          font-weight: 600;
          font-size: 12px;
          display: block;
          text-align: left;
          margin-bottom: 2px;
        }
      </style>
      <div>
        <label class="swal2-field-label">Name:</label>
        <input id="name" class="swal2-input" value="${selected.name}" placeholder="Name">

        <label class="swal2-field-label">Email:</label>
        <input id="email" class="swal2-input" value="${selected.email}" placeholder="Email">

        <label class="swal2-field-label">Department:</label>
        <input id="department" class="swal2-input" value="${selected.department}" placeholder="Department">

        <label class="swal2-field-label">Password:</label>
        <input id="password" class="swal2-input" type="password" value="${selected.password}" placeholder="Password">

        <label class="swal2-field-label">Address:</label>
        <input id="address" class="swal2-input" value="${selected.address}" placeholder="Address">

        <label class="swal2-field-label">State:</label>
        <input id="state" class="swal2-input" value="${selected.state}" placeholder="State">

        <label class="swal2-field-label">City:</label>
        <input id="city" class="swal2-input" value="${selected.city}" placeholder="City">

        <label class="swal2-field-label">Pincode:</label>
        <input id="pincode" class="swal2-input" value="${selected.pincode}" placeholder="Pincode">
      </div>
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: "Save",
    confirmButtonColor: "#0d6efd",
    cancelButtonColor: "#6c757d",
    preConfirm: () => {
      return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        password: document.getElementById("password").value,
        address: document.getElementById("address").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        pincode: document.getElementById("pincode").value,
      };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const updatedList = [...storedData];
      updatedList[index] = result.value;

      setStoredData(updatedList);
      localStorage.setItem("employeeDatabase", JSON.stringify(updatedList));

      Swal.fire({
        title: "Updated!",
        text: "Employee details have been updated successfully.",
        icon: "success",
        confirmButtonColor: "#0d6efd",
      });
    }
  });
};



  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container className="mt-5">
      <Card style={{ marginTop: "70px", padding: "20px" }}>
        <h4 className="text-center mb-3">Submitted Employee Details</h4>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell style={{ fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {storedData.length > 0 ? (
                  storedData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow hover key={index}>
                        {columns.map((column) => (
                          <TableCell key={column.id}>{row[column.id]}</TableCell>
                        ))}
                        <TableCell>
                          <Button
                            variant="success"
                            size="sm"
                            className="me-2"
                            onClick={() => handleUpdate(index)}
                          >
                            Update
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} align="center">
                      No submitted data found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          
        </Paper>
      </Card>
    </Container>
  );
}
