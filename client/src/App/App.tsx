import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';

import './App.css';
import Layout from './Layout';
import CalligraphyPage from '../features/calligraphy/CalligraphyPage';
import MainPage from '../features/main/MainPage';
import MyPage from '../features/userpage/UserPage';
import CoursesPage from '../features/courses/CoursesPage';
import BlogPage from '../features/blog/BlogPage';
import ChangeCourses from '../features/admin/ChangeCourses';
import ChangeCallgraphy from '../features/admin/ChangeCallgraphy';
import AdminPage from '../features/admin/AdminPage';
import ChangeBlog from '../features/admin/ChangeBlog';
import PaymentInfo from '../features/admin/PaymentInfo';
import { selectUser } from '../features/auth/selectors';
import Payment from '../Components/Payment/Payment';

function App(): JSX.Element {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/calligraphy" element={<CalligraphyPage />} />
          <Route path="/blog" element={<BlogPage />} />

          <Route path="/mypage" element={<MyPage />} />
          <Route path="/payment/:type/:id" element={<Payment />} />

          <Route path="/admin" element={<AdminPage />}>
            <Route path="/admin/changecourses" element={<ChangeCourses />} />
            <Route
              path="/admin/changecalligraphy"
              element={<ChangeCallgraphy />}
            />
            <Route path="/admin/updateblog" element={<ChangeBlog />} />
            <Route path="/admin/paymentinfo" element={<PaymentInfo />} />
          </Route>

          <Route path="/courses" element={<CoursesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
