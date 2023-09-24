import React, { useState, useEffect } from "react";
import { getStudents } from "../api";

function StudentList() {
  const [startDate, setStartDate] = useState(new Date("2000-01-01"));
  const [endDate, setEndDate] = useState(new Date("2002-12-31"));
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [students, setStudents] = useState();
  useEffect(() => {
    getStudents()
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Filter students based on the date range
    const filtered = students?.filter((student) => {
      const studentDate = new Date(student.dob);
      return studentDate >= startDate && studentDate <= endDate;
    });
    setFilteredStudents(filtered);
  }, [students, startDate, endDate]);

  return (
    <div>
      <h1>Student Management</h1>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate.toISOString().split("T")[0]}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate.toISOString().split("T")[0]}
          onChange={(e) => setEndDate(new Date(e.target.value))}
        />
      </div>
      <div>
        <h2>Students List</h2>
        <ul className="student-list">
          {filteredStudents?.map((student, index) => (
            <li key={index} className="student-item">
              {student.name} - {student.dob}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentList;
