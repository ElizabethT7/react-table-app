import TrainsTable from './components/tables/TrainsTable';
import { useAppSelector } from './hooks/redux';
import CharacteristicsContainer from './components/CharacteristicsContainer';

function App() {
  const { isShow } = useAppSelector((state) => state.characteristicsReducer);

  return (
    <div className='wrapper'>
      <TrainsTable />
      <div>
        {isShow &&
          <CharacteristicsContainer />
        }
      </div>
    </div>
  )
}

export default App;
