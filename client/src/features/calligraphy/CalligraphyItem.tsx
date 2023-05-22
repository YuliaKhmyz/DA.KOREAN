import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { selectCalligraphies } from './selectors';
import {
  createCalligraphy,
  deleteCalligraphy,
  loadCalligraphies,
} from './calligraphiesSlice';
import { Calligraphy, CalligraphyId } from './types/Calligraphy';

interface FormInput {
  title: string;
  link: string;
  koreantitle: string;
}

function CalligraphyItem({
  calligraphy,
}: {
  calligraphy: Calligraphy;
}): JSX.Element {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  const dispatch = useAppDispatch();
  const calligraphies = useSelector(selectCalligraphies);
  // const [showForm, setShowForm] = useState(false);
  const [elementId, setElementId] = useState<null | number>(null);
  const [changeKoreanTitle, setChangeKoreanTitle] = useState('');
  const [changeTitle, setChangechangeTitle] = useState('');
  const [changeLink, setChangeLink] = useState('');

  // const onSubmit: SubmitHandler<FormInput> = async (data) => {
  //   console.log(data);
  //   const dispatchResult = await dispatch(createCalligraphy(data));
  //   if (createCalligraphy.fulfilled.match(dispatchResult)) {
  //     reset();
  //   }
  // };

  const handleDelete = (id: CalligraphyId): void => {
    dispatch(deleteCalligraphy(id));
    console.log(id);
  };

  const handleUpdate = (newCalligraphy: Calligraphy): void => {
    console.log(newCalligraphy);

    // dispatch(updateCalligraphy(newCalligraphy));
    // console.log('update');
  };

  const addInput = (id: CalligraphyId): void => {
    calligraphies.filter((calligraphy) => {
      if (calligraphy.id === id) {
        console.log('id', id);
        // setShowForm((prev) => !prev);
        setElementId(id);
      }
    });
  };

  useEffect(() => {
    dispatch(loadCalligraphies());
  }, [dispatch]);
  console.log(calligraphies);

  return (
    <div>
      <h4>{calligraphy.koreantitle}</h4>
      <p>{calligraphy.title}</p>
      <button type="button">
        <a href={calligraphy.link}>Купить</a>
      </button>
    </div>
  );
}

export default CalligraphyItem;
