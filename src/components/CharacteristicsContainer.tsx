import CharacteristicsTable from '../components/tables/CharacteristicsTable';
import SubmitButton from '../components/SubmitButton';
import { useAppSelector } from '../hooks/redux';


function CharacteristicsContainer(){
  const { characteristics } = useAppSelector((state) => state.characteristicsReducer);

  const handleClick = () => {
      const arr = [...characteristics];
      const sorted = arr.sort((characteristicsItem1, characteristicsItem2) => characteristicsItem1.speed > characteristicsItem2.speed ? 1 : -1);
      sorted.map(characteristic => {
        console.log(characteristic.speed);
      });
  }

  return (
    <div className='container'>
      <CharacteristicsTable />
      <SubmitButton handleClick={handleClick} />
    </div>
  )
}

export default CharacteristicsContainer;