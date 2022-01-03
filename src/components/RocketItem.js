import { useDispatch } from 'react-redux';
import { createReserve } from '../redux/reducers';

const Rock = (props) => {
  const rocket = props;
  const dispatch = useDispatch();
  const { reserve } = rocket.rock;
  const handleReserve = () => {
    const toggle = !reserve;
    const setReserve = (() => ({ ...rocket.rock, reserve: toggle }));
    dispatch(createReserve(setReserve()));
  };
  return (
    <div className="wrapper">
      <div className="image">
        <img src={rocket.rock.flickr_images[0]} alt={rocket.rocket_name} className="rocketImage" />
      </div>
      <div className="details">
        <h1>{rocket.rock.rocket_name}</h1>
        <p>
          {reserve && <small> Reserved </small>}
          {rocket.rock.description}
        </p>
        <button onClick={handleReserve} type="button">{reserve ? 'cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </div>
  );
};

export default Rock;
