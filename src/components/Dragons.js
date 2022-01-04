import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dragon from './Dragon';
import { getDragonFromApi } from '../redux/reducers';

const Dragons = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducers);

  useEffect(() => {
    if (!data.dragons[0]) {
      dispatch(getDragonFromApi());
    }
  }, []);

  return (
    <div className="rockets">
      {data.dragons.map((dragon) => (
        <Dragon key={dragon.id} data={dragon} />
      ))}
    </div>
  );
};

export default Dragons;
