import { useAppSelector } from '../../hooks/redux';
import CharacteristicsList from '../lists/CharacteristicsList';

function CharacteristicsTable(){
  const { title } = useAppSelector((state) => state.characteristicsReducer);

  return (
    <table className='characteristics'>
      <caption className='caption'>
        Характеристики
      </caption>
      <caption className='caption'>
        {title}
      </caption>
      <thead>
        <tr>
          <th className='head'>Ток двигателя</th>
          <th className='head'>Сила тяги</th>
          <th className='head'>Скорость</th>
          <th className='head'>Добавить строку</th>
        </tr>
      </thead>
      <tbody>
      <CharacteristicsList />
      </tbody>
    </table>
  )
}

export default CharacteristicsTable;