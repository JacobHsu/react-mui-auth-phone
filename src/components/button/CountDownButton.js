import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import useCountDown from '../../hooks/useCountDown';

const CountDownButton = ({ title, getOtp }) => {
  const [content, setContent] = useState(title);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { count, run } = useCountDown();

  const handleBtnClick = (event) => {
    event.preventDefault();
    setContent(`${count}秒後`);
    setBtnDisabled(true);
    run();
    getOtp(event)
  };

  const btnStatusReset = () => {
    setContent(title)
    setBtnDisabled(false)
  }

  useEffect(() => {

    if (btnDisabled) {
      setContent(`${count}秒後`);
    }
    if (count === 0) {
      btnStatusReset()
    }
  }, [count]);

  return (
    <Button
      disabled={btnDisabled}
      variant="outlined"
      size="small"
      onClick={handleBtnClick}
    >
      {content}
    </Button>
  );
};

export default CountDownButton;
