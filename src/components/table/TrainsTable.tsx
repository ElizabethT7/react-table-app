import TrainsList from '../TrainsList';
import './style.css';

function TrainsTable(){
  return (
    <table>
      <caption className='caption'>
        Поезда
      </caption>
      <thead>
        <tr>
          <th className='head'>Название</th>
          <th className='head'>Описание</th>
        </tr>
      </thead>
      <tbody>
        <TrainsList />
      </tbody>
    </table>
  )
}

export default TrainsTable;