import '../User/user.css'
import ava from '../../img/userIcon.png'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

function User(props) {
  return (
    <div className='user'>
      <div className='user-ava'>
      {props.profile && props.profile.photos.small 
        ? <img src={props.profile.photos.small}/> 
        : <img src={ava} alt="" />}
      </div>
      <div className='user-info'>
        <div className='user-name'>Oleg Lis</div>
        <div>
          <ProfileStatusWithHooks {...props} />
          <div className='user-person-info'>Date of Birth:<span>9 May</span></div>
          <div className='user-person-info'>City:<span>Dnipro</span></div>
          <div className='user-person-info'>Education:<span>DDUVS</span></div>
          <div className='user-person-info'>Web Site:<span>https://github.com/MrBushido21</span></div>
        </div>
      </div>
    </div>
  );
}

export default User