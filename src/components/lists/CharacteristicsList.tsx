import CharacteristicsItem from '../items/CharacteristicsItem';
import { useAppSelector } from '../../hooks/redux';


function CharacteristicsList(){
  const { characteristics } = useAppSelector((state) => state.characteristicsReducer);
  const generateCode = (function (start = 0) {
    return () => ++start;
  }());

  return (
    <>
      {characteristics && characteristics.map(characteristicsItem => {
        const id = generateCode();
        return <CharacteristicsItem characteristicsItem={characteristicsItem} key={id} id={id}/> 
        })}
    </>
  )
}

export default CharacteristicsList;