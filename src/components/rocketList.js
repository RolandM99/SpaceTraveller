import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketFromApi } from '../redux/reducers';

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
      <h1>Hello world</h1>
    </div>
  );
};

export default Rockets;
