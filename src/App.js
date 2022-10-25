import logo from './logo.svg';
import React from 'react';

import ReactDOM from 'react-dom/client';
import './App.css';

import notificationsData from './assets/data/notifications.json';


class Notification extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
  }


  render(){

    return(
    <li className='notif-root'>
      <div className='notif-picture-li'>
          <div className='notif-picture-container'>
            <img className='notification-profile-pic' src={this.props.value.userProfileImgSrc}></img>
            <div>
              <p className='notification-description'>
                <a>{this.props.value.user}</a>
                {'  '+this.props.value.action+'  '}
                <a>{this.attachTarget()}</a>
                {this.showUnreadPoint()}
              </p>
              <div>{this.props.value.since}</div>
              {this.attachMessagePreview()}
            </div>
          </div>
          

          {this.attachPicture()}

        </div>
          
          
        </li>
    )
  }

  attachPicture(){
    if(this.props.value.relatedImgSrc){
      return <div className='notif-picture'>
              <img className='notification-profile-pic' src='/images/image-chess.webp'></img>
            </div>
    }
  }

  attachTarget(){
    if(this.props.value.target){
      return <a className='notif-post-link'>{this.props.value.target}</a>
    }
  }

  showUnreadPoint(){
    if(this.props.value.read === "false"){
      return <div className='notification-point'></div>
    }

  }

  attachMessagePreview(){
    if(this.props.value.messageAttached){
      return <div className='notification-message-preview'>

        <p>
          {this.props.value.messageAttached} 
        </p>

      </div>
    }
  }

}

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

        {printNotifications()}

      </ul>
    </div>
  );
}

function printNotifications(){
  let i = 0;
  let notifs = [];
  while(i < notificationsData.length){
    notifs.push(<Notification value={notificationsData[i]}></Notification>);
    i= i+1;
  }
  return notifs;
}




export default App;
