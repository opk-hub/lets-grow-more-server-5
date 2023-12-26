const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5001;

const students = [
  { id: 1, name: "John Doe", rollNumber: "A123", grade: "A" },
  { id: 2, name: "Jane Smith", rollNumber: "B456", grade: "B" },
  { id: 3, name: "Alice Johnson", rollNumber: "C789", grade: "C" },
  { id: 4, name: "Bob Williams", rollNumber: "D012", grade: "A" },
  { id: 5, name: "Eva Davis", rollNumber: "E345", grade: "B" },
  { id: 6, name: "Michael Brown", rollNumber: "F678", grade: "C" },
  { id: 7, name: "Olivia Smith", rollNumber: "G901", grade: "A" },
  { id: 8, name: "William Johnson", rollNumber: "H234", grade: "B" },
  { id: 9, name: "Sophia Taylor", rollNumber: "I567", grade: "C" },
  { id: 10, name: "James Martin", rollNumber: "J890", grade: "A" },
  { id: 11, name: "Emma Wilson", rollNumber: "K123", grade: "B" },
  { id: 12, name: "Daniel Davis", rollNumber: "L456", grade: "C" },
  { id: 13, name: "Ava Smith", rollNumber: "M789", grade: "A" },
  { id: 14, name: "Noah Johnson", rollNumber: "N012", grade: "B" },
  { id: 15, name: "Mia Harris", rollNumber: "O345", grade: "C" },
  { id: 16, name: "Liam Taylor", rollNumber: "P678", grade: "A" },
  { id: 17, name: "Isabella Brown", rollNumber: "Q901", grade: "B" },
  { id: 18, name: "Lucas Martin", rollNumber: "R234", grade: "C" },
  { id: 19, name: "Sophie Johnson", rollNumber: "S567", grade: "A" },
  { id: 20, name: "Oliver Wilson", rollNumber: "T890", grade: "B" },
  // Add more sample data as needed
];

app.use(bodyParser.json());

// API to get all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// API to get a specific student by ID
app.get("/api/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.json(student);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
