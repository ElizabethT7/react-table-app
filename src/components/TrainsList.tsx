import TrainItem from './item/TrainItem';
import { getTrainsApi } from '../services/getTrains';
import Spinner from './Spinner';
import Error from './Error';

function TrainsList(){
  const {data: trains, error, isLoading} = getTrainsApi.useFetchAllTrainsQuery('');
  console.log(trains);
  return (
    <>
      {isLoading && <Spinner />}
      {error && <Error />}
      {trains && trains.map(train => (
        <TrainItem train={train} key={train.name}/>
      ))}
    </>
  )
}

export default TrainsList;
