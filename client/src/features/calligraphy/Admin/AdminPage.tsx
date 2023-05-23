import React from 'react';
import DeleteUpdateCourse from '../../courses/DeleteUpdateCourse';

function AdminPage(): JSX.Element {
  return (
    <div>
      <div>
        <a href="#">Управление курсами</a>
        <a href="#">Редактирование блога</a>
        <a href="#">Информация об оплатах</a>
      </div>
      <DeleteUpdateCourse />
    </div>
  );
}

export default AdminPage;
