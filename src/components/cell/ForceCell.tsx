import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { characteristicsSlice } from '../../store/reducers/characteristicsSlice';

interface ForceCellProps {
  force: number;
}

function ForceCell ({force}: ForceCellProps){
  const dispatch = useAppDispatch();
  const {setIsActive} = characteristicsSlice.actions;
  const [error, setError] = useState(false);
  const [value, setValue] = useState(force.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/,/, '.'); 
    setValue(newValue);
  }
  const validateValue = () => {
    const number = Number(value.replace(/,/, '.'));
    if (!isNaN(number) && number >= 0) {
      setError(false);
      dispatch(setIsActive(true));
    } else {
      setError(true);
      dispatch(setIsActive(false));
    }
    if (value === '') {
      setError(true);
      dispatch(setIsActive(false));
    }
  }

  return (
    <td>
      <input
        value={value}
        onChange={(e) => handleChange(e)}
        type='number'
        min='0'
        onBlur={validateValue}
        className={error ? 'error' : 'input'}
      >
      </input>
    </td>
  )
}

export default ForceCell;
       