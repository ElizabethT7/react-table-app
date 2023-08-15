import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { characteristicsSlice } from '../../store/reducers/characteristicsSlice';

interface SpeedCellProps {
  speed: number;
  id: number
}

function SpeedCell ({speed, id}: SpeedCellProps){
  const dispatch = useAppDispatch();
  const {setIsActive} = characteristicsSlice.actions;
  const {setId} = characteristicsSlice.actions;
  const {setSpeed} = characteristicsSlice.actions;
  const [error, setError] = useState(false);
  const [value, setValue] = useState(speed.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    dispatch(setId(id));
  }

  const validateValue = () => {
    if (Number.isInteger(+value) && +value >= 0) {
      dispatch(setSpeed(+value));
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

export default SpeedCell;
       