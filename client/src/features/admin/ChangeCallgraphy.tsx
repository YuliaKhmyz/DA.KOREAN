import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import AddCalligraphyForm from '../calligraphy/AddCalligraphyForm';
import UpdateDeleteCalligraphies from '../calligraphy/UpdateDeleteCalligraphies';

function ChangeCallgraphy(): JSX.Element {
  return (
    <div>
      <AddCalligraphyForm />
      <UpdateDeleteCalligraphies />
    </div>
  );
}

export default ChangeCallgraphy;
