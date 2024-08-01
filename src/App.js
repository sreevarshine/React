import React, { useState } from 'react';
import StudentGradeList from './StudentGradeList';
import './App.css';

const App = () => {
  const [students] = useState([
    { name: 'Alice', numericalGrade: 90 },
    { name: 'Bob', numericalGrade: 85 },
    { name: 'Charlie', numericalGrade: 78 },
    { name: 'David', numericalGrade: 62 },
    { name: 'Eve', numericalGrade: 58 },
  ]);
  
  const convertToLetterGrade = (grade) => {
    if (grade >= 90) return 'A';
    else if (grade >= 80) return 'B';
    else if (grade >= 70) return 'C';
    else if (grade >= 60) return 'D';
    else return 'F';
  };

  const studentsWithLetterGrades = students.map(student => ({
    ...student,
    letterGrade: convertToLetterGrade(student.numericalGrade),
  }));

  return (
    <div className="App">
      <h1>Student Grades</h1>
      <StudentGradeList students={studentsWithLetterGrades} />
    </div>
  );
};

export default App;
