import { useAppSelector } from '../hooks/redux';

interface SubmitButtonProps {
  handleClick: () => void;
}

function SubmitButton ({handleClick}: SubmitButtonProps){
  const { isActive } = useAppSelector((state) => state.characteristicsReducer);

  return (
    <button
      onClick={() => handleClick()}
      className={!isActive ? 'disabled' : ''}
    >
      Отправить данные
    </button>
  )
}
  
export default SubmitButton;