import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import './userPage.css';
import { uploadPhoto } from './userPageSlice';

function UploadFile(): JSX.Element {
  const dispatch = useDispatch();
  // const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.files);
    // setSelectedFile(event.target.files);
  };

  const handleUpload = async (): Promise<void> => {
    if (!selectedFile) {
      alert('Please, select a file');
      return;
    }

    // const data = new FormData();
    // data.append('file', selectedFile);

    // dispatch(uploadPhoto(data));
  };

  // const handlePick = (): void => {
  //   filePicker.current.click();
  // };

  return (
    <div>
      {/* <button onClick={handlePick}> Выбрать фото</button> */}
      <input
        type="file"
        name="image"
        onChange={() => handleChange}
        accept="image/*,.png.jpg"
      />
      <button type="button" onClick={handleUpload}>
        Загрузить фото
      </button>
    </div>
  );
}

export default UploadFile;
