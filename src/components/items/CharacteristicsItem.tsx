import { ICharacteristics } from '../../types/ICharacteristics';
import EngineAmperageCell from '../cell/EngineAmperageCell';
import ForceCell from '../cell/ForceCell';
import Speed from '../cell/Speed';

interface CharacteristicsItemProps {
  characteristicsItem: ICharacteristics;
  id: number;
}

function TrainItem ({characteristicsItem, id}: CharacteristicsItemProps){
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
    </tr>
  )
}

export default TrainItem;