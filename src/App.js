import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LibrarianLogin from './components/LibrarianLogin';
import SignUp from './components/SignUp';
import Admin from './components/Admin';
import StudentTeacher from './components/StudentTeacher';
import NewBook from './components/NewBook';
import HomePage from './components/HomePage';
import StudentLogin from './components/StudentLogin';
import TeacherSignup from './components/TeacherSignup';
import TeacherLogin from './components/TeacherLogin';
import BookList from './components/BookList';
import EnterNewIssue from './components/EnterNewIssue';
import RequestNewBook from './components/RequestNewBook';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/librarianLogin" element={<LibrarianLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/studentTeacher" element={<StudentTeacher />} />
        <Route path="/req" element={<NewBook />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/studentLogin" element={<StudentLogin />} />
        <Route path="/teachersignup" element={<TeacherSignup/>} />
        <Route path="/teacherLogin" element={<TeacherLogin />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/newissue" element={<EnterNewIssue />} />
        <Route path="/newbook" element={<RequestNewBook />} />
      </Routes>
    </Router>
  );
}

export default App;
