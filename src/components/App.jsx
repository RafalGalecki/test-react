// import { useState, useEffect } from 'react';
import ButtonIncreasingValue from './Button/Button';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <p>You clicked {value} times</p> */}
      <ButtonIncreasingValue />
    </div>
  );
};
