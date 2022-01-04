import { useSelector } from 'react-redux';

const Myprofile = () => {
  const globaState = useSelector((state) => state.reducers);
  const reservedItems = globaState.rockets.filter((item) => item.reserve === true);
  const missionItems = globaState.missions.filter((item) => item.join === true);
  const dragonRervation = globaState.dragons.filter((dragon) => dragon.reservation === true);

  return (
    <div className="wrapper_profile">
      <div className="profile">
        <h3>My Rockets</h3>
        <ul className="list">
          {reservedItems.map((rock) => <li key={rock.rocket_name}>{rock.rocket_name}</li>)}
        </ul>
      </div>
      <div className="profile">
        <h3>My Missions</h3>
        <ul className="list">
          {
            missionItems.map((mission) => (
              <li key={mission.mission_name}>{mission.mission_name}</li>
            ))
          }
        </ul>
      </div>
      <div className="profile">
        <h3>My Dragons</h3>
        <ul className="list">
          {
            dragonRervation.map((dragon) => (
              <li key={dragon.id}>{dragon.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Myprofile;
