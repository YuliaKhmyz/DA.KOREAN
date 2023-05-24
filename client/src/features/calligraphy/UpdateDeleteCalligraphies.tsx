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
    <Section>
      <Container>
        <h3>Список каллиграфий для админа</h3>

        <div>
          {calligraphies.map((calligraphy) => (
            <div key={calligraphy.id}>
              <ChangeCalligraphyItem
                calligraphy={calligraphy}
                handleDelete={() => handleDelete(calligraphy.id)}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default UpdateDeleteCalligraphies;
