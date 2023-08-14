import { useState } from 'react';
import { ICharacteristics } from '../../types/ICharacteristics';

interface CharacteristicsItemProps {
  characteristicsItem: ICharacteristics;
}

function TrainItem ({characteristicsItem}: CharacteristicsItemProps){
  const [engineAmperage, setEngineAmperage] = useState(characteristicsItem.engineAmperage);
  const [force, setForce] = useState(characteristicsItem.force);
  const [speed, setSpeed] = useState(characteristicsItem.speed);

  return (
    <tr>
      <td>
        <input
          value={engineAmperage}
          onChange={({ target }) => setEngineAmperage(+target.value)}
          type="number"
          className='input'
        >
        </input>
      </td>
      <td>
        <input
          value={force}
          onChange={({ target }) => setForce(+target.value)}
          className='input'
        >
        </input>
      </td>
      <td>
        <input
          value={speed}
          onChange={({ target }) => setSpeed(+target.value)}
          type="number"
          className='input'
        >
        </input>
      </td>
    </tr>
  )
}

export default TrainItem;