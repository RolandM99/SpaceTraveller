import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketFromApi } from '../redux/reducers';
import Rock from './rocketItem';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.reducers);
  console.log(rockets);

  useEffect(() => {
    if (!rockets.rockets[0]) {
      dispatch(getRocketFromApi());
    }
  }, []);
  return (
    <div className="rockets">
      {rockets.rockets.map((rock) => (
        <Rock key={rock.id} rock={rock} />
      ))}
    </div>
  );
};

export default Rockets;
