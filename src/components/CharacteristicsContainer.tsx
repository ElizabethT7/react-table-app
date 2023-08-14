import CharacteristicsTable from '../components/tables/CharacteristicsTable';
import SubmitButton from '../components/SubmitButton';


function CharacteristicsContainer(){
  return (
    <div className='container'>
      <CharacteristicsTable />
      <SubmitButton />
    </div>
  )
}

export default CharacteristicsContainer;