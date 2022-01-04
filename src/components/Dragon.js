import { useDispatch } from 'react-redux';
import { createReservation } from '../redux/reducers';

const Dragon = (props) => {
  const dragon = props;
  const dispatch = useDispatch();
  const { reservation } = dragon.data;
  const handleReservation = (e) => {
    e.target.classList.toggle('reservedButton');
    const toggle = !reservation;
    const setReserve = (() => ({ ...dragon.data, reservation: toggle }));
    dispatch(createReservation(setReserve()));
  };
  return (
    <div className="wrapper">
      <div className="image">
        <img src={dragon.data.flickr_images[0]} alt={dragon.name} className="rocketImage" />
      </div>
      <div className="details">
        <h1>{dragon.data.name}</h1>
        <p>
          {reservation && <small> Reserved </small>}
          {dragon.data.type}
        </p>
        <button onClick={(e) => handleReservation(e)} type="button">{reservation ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>

    </div>
  );
};

export default Dragon;
