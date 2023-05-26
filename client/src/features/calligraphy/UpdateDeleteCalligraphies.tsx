import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Section from '../../Components/Section/Section';
import { useAppDispatch } from '../../store';
import { selectCalligraphies } from './selectors';
import { deleteCalligraphy, loadCalligraphies } from './calligraphiesSlice';
import ChangeCalligraphyItem from './ChangeCalligraphyItem';
import { CalligraphyId } from './types/Calligraphy';

function UpdateDeleteCalligraphies(): JSX.Element {
  const dispatch = useAppDispatch();
  const calligraphies = useSelector(selectCalligraphies);
  useEffect(() => {
    dispatch(loadCalligraphies());
  }, [dispatch]);

  const handleDelete = (id: CalligraphyId): void => {
    dispatch(deleteCalligraphy(id));
    console.log(id);
  };

  return (
    <Container className="change-calligraphy">
      <h3 className="calligraphy-page-title">Список каллиграфий</h3>

      <div className="calligraphies">
        {calligraphies.map((calligraphy) => (
          <div className="calligraphy-item admin" key={calligraphy.id}>
            <ChangeCalligraphyItem calligraphy={calligraphy} handleDelete={() => handleDelete(calligraphy.id)} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default UpdateDeleteCalligraphies;
