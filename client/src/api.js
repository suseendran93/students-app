const addStudent = async (formdata) => {
  return fetch("http://localhost:5000/api/v1/students/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formdata.name,
      email: formdata.email,
      age: formdata.age,
      dob: formdata.dob,
    }),
  })
    .then((response) => response.json())

    .catch((error) => {
      console.log(error);
    });
};
const getStudents = async () => {
  return fetch("http://localhost:5000/api/v1/students/")
    .then((response) => response.json())

    .catch((error) => {
      console.log(error);
    });
};

export { addStudent, getStudents };
