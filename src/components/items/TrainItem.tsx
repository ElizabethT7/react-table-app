import { ITrain } from '../../types/ITrain';
import { useAppDispatch } from '../../hooks/redux';
import { characteristicsSlice } from '../../store/reducers/characteristicsSlice';

interface TrainItemProps {
  train: ITrain;
}

function TrainItem ({train}: TrainItemProps){
  const dispatch = useAppDispatch();
  const { submitTitle } = characteristicsSlice.actions;
  const { submitCharacteristics } = characteristicsSlice.actions;
  const onClick = (event: React.MouseEvent) => {
    event.preventDefault;
    dispatch(submitTitle(train.name));
    dispatch(submitCharacteristics(train.characteristics));
  };

  return (
    <tr onClick={onClick} className='link'>
      <td className='item'>{train.name}</td>
      <td className='item'>{train.description}</td>
    </tr>
  )
}

export default TrainItem;