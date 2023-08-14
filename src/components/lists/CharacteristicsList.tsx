import CharacteristicsItem from '../items/CharacteristicsItem';
import { useAppSelector } from '../../hooks/redux';
import { generateCode } from '../../utils';


function CharacteristicsList(){
  const { characteristics } = useAppSelector((state) => state.characteristicsReducer);
  console.log(characteristics)

  return (
    <>
      {characteristics && characteristics.map(characteristicsItem => (
        <CharacteristicsItem characteristicsItem={characteristicsItem} key={generateCode()}/>
      ))}
    </>
  )
}

export default CharacteristicsList;