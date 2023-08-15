import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { characteristicsSlice } from '../../store/reducers/characteristicsSlice';

interface EngineAmperageCellProps {
  engineAmperage: number;
}

function EngineAmperageCell ({engineAmperage}: EngineAmperageCellProps){
  const dispatch = useAppDispatch();
  const {setIsActive} = characteristicsSlice.actions;
  const [error, setError] = useState(false);
  const [value, setValue] = useState(engineAmperage.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  }
  const validateValue = () => {
    if (typeof(+value) === 'number' && +value > 0 && Number.isInteger(+value)) {
      dispatch(setIsActive(true));
      setError(false);
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
        min='1'
        onBlur={validateValue}
        className={error ? 'error' : 'input'}
      >
      </input>
    </td>
  )
}

export default EngineAmperageCell;
       