import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import DeleteUpdateCourse from '../courses/DeleteUpdateCourse';
import AddCourseForm from '../courses/AddCourseForm';
import SideBar from './SideBar';
import Section from '../../Components/Section/Section';
import { selectUser } from '../auth/selectors';
import Layout from '../../App/Layout';

function AdminPage(): JSX.Element {
  const user = useSelector(selectUser);
  return (
    <div>
      {user?.isAdmin ? (
        <Section>
          <Container>
            <div></div>
            <SideBar />
          </Container>
        </Section>
      ) : (
        <Section>
          <Container>
            <div>У вас нет прав</div>
          </Container>
        </Section>
      )}
    </div>
  );
}

export default AdminPage;
