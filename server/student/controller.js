const pool = require("../db.js");
const queries = require("./queries.js");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  console.log(req.body);
  //check if email already exists in table
  pool.query(queries.checkEmailExists, [email], (err, results) => {
    if (results.rows.length) {
      res.send("Email already exists.");
    }
    // add student to db
    pool.query(queries.addStudent, [name, email, age, dob], (err, results) => {
      if (err) {
        console.log(err);
        throw err;
      }
      res.status(201).send("Student created successfully!");
    });
  });
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (err, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student not found");
    }
    pool.query(queries.removeStudent, [id], (err, result) => {
      if (err) throw err;
      res.status(200).send("Student removed successfully!");
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(queries.getStudentById, [id], (err, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student not found");
    }
    pool.query(queries.updateStudent, [name, id], (err, result) => {
      if (err) throw err;
      res.status(200).send("Student name updated!");
    });
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};
