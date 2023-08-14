import { ITrain } from '../../types/ITrain';
import './style.css';

interface TrainItemProps {
  train: ITrain;
}

function TrainItem ({train}: TrainItemProps){
  return (
    <tr>
      <td className='item'>{train.name}</td>
      <td className='item'>{train.description}</td>
    </tr>
  )
}

export default TrainItem;