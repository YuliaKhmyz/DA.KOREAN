// import React, { useEffect, useMemo, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { useAppDispatch } from '../../store';
// import { loadCalligraphies, deleteCalligraphy } from './calligraphiesSlice';
// import { selectCalligraphies } from './selectors';
// import { CalligraphyId, Calligraphy } from './types/Calligraphy';
// import './calligraphyPage.css';

// interface FormInput {
//   id: number;
//   title: string;
//   link: string;
//   koreantitle: string;
// }
// function ChangeCalligraphy(): JSX.Element {
//   const calligraphies = useSelector(selectCalligraphies);
//   const { register, handleSubmit, reset } = useForm<FormInput>({
//     defaultValues: useMemo(() => {
//       return calligraphy;
//     }, []),
//   });
//   const dispatch = useAppDispatch();
//   const [elementId, setElementId] = useState<null | number>(null);

//   // const handleUpdate = (newCalligraphy: Calligraphy): void => {
//   //   console.log(newCalligraphy);

//   //   // dispatch(updateCalligraphy(newCalligraphy));
//   //   // console.log('update');
//   // };

//   const handleDelete = (id: CalligraphyId): void => {
//     dispatch(deleteCalligraphy(id));
//     console.log(id);
//   };

//   const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

//   const addInput = (id: CalligraphyId): void => {
//     calligraphies.filter((calligraphy) => {
//       if (calligraphy.id === id) {
//         console.log('id', id);
//         // setShowForm((prev) => !prev);
//         setElementId(id);
//       }
//     });
//   };

//   useEffect(() => {
//     dispatch(loadCalligraphies());
//   }, [dispatch]);
//   console.log(calligraphies);

//   return (
//     <div>
//       <h3>Список каллиграфий для админа</h3>
//       <div>
//         {calligraphies.map((calligraphy) => (
//           <div key={calligraphy.id}>
//             <h4>{calligraphy.koreantitle}</h4>
//             <p>{calligraphy.title}</p>
//             {/* <button
//               type="button"
//               data-set={calligraphy.id}
//               onClick={() => addInput(calligraphy.id)}
//             >
//               Редактировать
//             </button>
//             {showForm && (
//               <div>
//                 <input defaultValue={calligraphy.koreantitle} />
//                 <input defaultValue={calligraphy.title} />
//                 <input defaultValue={calligraphy.link} />
//                 <button type="submit">Сохранить изменения</button>
//               </div>
//             )} */}
//             {/* {!showForm ? (
//               <button
//                 type="button"
//                 data-set={calligraphy.id}
//                 onClick={() => addInput(calligraphy.id)}
//               >
//                 Редактировать
//               </button>
//             ) : (
//               <div className="active">
//                 <input defaultValue={calligraphy.koreantitle} />
//                 <input defaultValue={calligraphy.title} />
//                 <input defaultValue={calligraphy.link} />
//                 <button type="submit">Сохранить изменения</button>
//               </div>
//             )} */}

//             <button
//               type="button"
//               data-set={calligraphy.id}
//               onClick={() => addInput(calligraphy.id)}
//               className={
//                 calligraphy.id === elementId
//                   ? 'hidden-element'
//                   : 'hidden-element active'
//               }
//             >
//               Редактировать
//             </button>

//             <div
//               className={
//                 calligraphy.id === elementId
//                   ? 'hidden-element active'
//                   : 'hidden-element'
//               }
//             >
//               {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//                 <input {...register('koreantitle')} />
//                 {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//                 <input {...register('title')} />
//                 {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//                 <input {...register('link')} />
//                 <button type="submit">Сохранить изменения</button>
//               </form>
//             </div>

//             <button type="submit" onClick={() => handleDelete(calligraphy.id)}>
//               Удалить
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ChangeCalligraphy;
export {};
