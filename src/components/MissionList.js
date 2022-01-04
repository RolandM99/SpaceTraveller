import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionsComponent from './MissionItem';
import { getMissionFromApi } from '../redux/reducers';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.reducers);

  useEffect(() => {
    if (!missions.missions[0]) {
      dispatch(getMissionFromApi());
    }
  }, []);
  return (
    <div className="missions">
      <table className="miss-table">
        <thead>
          <tr>
            <td className=" col-head">Mission</td>
            <td className=" col-head">Description</td>
            <td className=" col-head">Status</td>
            <td className=" col-head">Join</td>
          </tr>
        </thead>
        <tbody>
          {missions.missions.map((mission) => (
            <MissionsComponent key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionList;
