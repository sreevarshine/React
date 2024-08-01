import React from 'react';
import './App.css';

const StudentGradeList = ({ students }) => {
  return (
    <div>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Numerical Grade</th>
            <th>Letter Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.numericalGrade}</td>
              <td>{student.letterGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentGradeList;
