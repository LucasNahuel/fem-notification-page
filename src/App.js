import logo from './logo.svg';
import './App.css';

import avatarMarkWebber from './assets/images/avatar-mark-webber.webp';
import avatarAngelaGray from './assets/images/avatar-angela-gray.webp';
import avatarJacobThompson from './assets/images/avatar-jacob-thompson.webp';
import avatarRizkyHasanuddin from './assets/images/avatar-rizky-hasanuddin.webp';
import avatarKimberlySmith from './assets/images/avatar-kimberly-smith.webp';
import avatarNathanPeterson from './assets/images/avatar-nathan-peterson.webp';
import avatarAnnaKim from './assets/images/avatar-anna-kim.webp';
import imageChess from './assets/images/image-chess.webp';

function App() {
  return (
    <div id='root-div'>
      <div className='notification-page-header'>
        <div className='notification-title-container'>
          <h2>Notifications</h2>
          <div className='notification-count'>3</div>
        </div>

        <button className='mark-as-read-button'>
          Mark all as read
        </button>
        
      </div>
      <ul className='notification-list'>
        <li>
          <img className='notification-profile-pic' src={avatarMarkWebber}></img>
          <div>
            <p className='notification-description'>
              <a>Mark Webber</a>
              {' reacted to your recent post '}
              <a className='notif-post-link'>My first tournament today!</a>
              <div className='notification-point'></div>
            </p>
            <div>1m ago</div>
          </div>
          
          
        </li>
        <li>
          <img className='notification-profile-pic' src={avatarAngelaGray}></img>
          <div>
            <p className='notification-description'>
              <a>Angela Gray</a>
              {' followed you '}
              <div className='notification-point'></div>
            </p>
            <div>5 m ago</div>
          </div>
          
          
        </li>
        <li>
          <img className='notification-profile-pic' src={avatarJacobThompson}></img>
          <div>
            <p className='notification-description'>
              <a>Jacob Thompson</a>
              {' has joined your group '}
              <a className='notif-group-link'>Chess Club</a>
              <div className='notification-point'></div>
            </p>
            <div>1 day ago</div>
          </div>
          
          
        </li>

        <li>
          <img className='notification-profile-pic' src={avatarRizkyHasanuddin}></img>
          <div>
            <p className='notification-description'>
              <a>Rizky Hasanuddin</a>
              {' sent you a private message '}

            </p>
            <div>5 days ago</div>
            <div className='notification-message-preview'>

              <p>
                Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lost of fun and improving my game.
              </p>

            </div>
          </div>
          
          
        </li>

        <li className='notif-picture-li'>
          <div className='notif-picture-container'>
            <img className='notification-profile-pic' src={avatarKimberlySmith}></img>
            <div>
              <p className='notification-description'>
                <a>Kimberly Smith</a>
                {' commented on your picture '}
              </p>
              <div>1 week ago</div>
            </div>
          </div>
          

          <div className='notif-picture'>
            <img className='notification-profile-pic' src={imageChess}></img>
          </div>
          
          
        </li>

        <li>
          <img className='notification-profile-pic' src={avatarNathanPeterson}></img>
          <div>
            <p className='notification-description'>
              <a>Nathan Peterson</a>
              {' reacted to your recent post '}
              <a className='notif-post-link'>5 end-game strategies to increase your win rate</a>
            </p>
            <div>2 weeks ago</div>
          </div>
          
          
        </li>

        <li>
          <img className='notification-profile-pic' src={avatarAnnaKim}></img>
          <div>
            <p className='notification-description'>
              <a>Anna Kim</a>
              {' left the group '}
              <a className='notif-group-link'>Chess Club</a>
            </p>
            <div>2 weeks ago</div>
          </div>
          
          
        </li>
      </ul>
    </div>
  );
}

export default App;
