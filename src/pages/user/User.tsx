import Single from '../../components/single/Single';
import { singleUser } from '../../data';
import './User.scss';

const user = () => {
  // Fetch data and send to single Component

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default user;
