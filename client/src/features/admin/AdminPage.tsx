import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import DeleteUpdateCourse from '../courses/DeleteUpdateCourse';
import AddCourseForm from '../courses/AddCourseForm';
import SideBar from './SideBar';

function AdminPage(): JSX.Element {
  return (
    <Container>
      <div></div>
      <SideBar />
    </Container>
  );
}

export default AdminPage;
