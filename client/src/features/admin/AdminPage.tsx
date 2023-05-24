import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import DeleteUpdateCourse from '../courses/DeleteUpdateCourse';
import AddCourseForm from '../courses/AddCourseForm';
import SideBar from './SideBar';
import Section from '../../Components/Section/Section';

function AdminPage(): JSX.Element {
  return (
    <Section>
      <Container>
        <div></div>
        <SideBar />
      </Container>
    </Section>
  );
}

export default AdminPage;
