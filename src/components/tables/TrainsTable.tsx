import TrainsList from '../lists/TrainsList';

function TrainsTable(){
  return (
    <table className='trains'>
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