import { ICharacteristics } from '../../types/ICharacteristics';
import EngineAmperageCell from '../cell/EngineAmperageCell';
import ForceCell from '../cell/ForceCell';
import Speed from '../cell/Speed';
import { useAppDispatch } from '../../hooks/redux';
import { characteristicsSlice } from '../../store/reducers/characteristicsSlice';

interface CharacteristicsItemProps {
  characteristicsItem: ICharacteristics;
  id: number;
}

function TrainItem ({characteristicsItem, id}: CharacteristicsItemProps){
  const dispatch = useAppDispatch();
  const {addPow} = characteristicsSlice.actions;
  const {setId} = characteristicsSlice.actions;
  const handleClick = () => {
    dispatch(setId(id))
    dispatch(addPow());
  }

  return (
    <tr>
      {
      characteristicsItem.engineAmperage &&
        <EngineAmperageCell engineAmperage={characteristicsItem.engineAmperage}/>
      }
      {characteristicsItem.force &&
        <ForceCell force={characteristicsItem.force}/>
      }
      <Speed speed={characteristicsItem.speed} id={id}/>
      <td>
      <button onClick={handleClick}>↓</button>
      </td>
    </tr>
  )
}

export default TrainItem;