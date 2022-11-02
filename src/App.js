import logo from './logo.svg';
import React from 'react';

import ReactDOM from 'react-dom/client';
import './App.css';




class Notification extends React.Component {

  constructor(props){
    super(props);
    this.state = props.value;
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
    if(this.state.read === "false"){
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

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = { notifs : props.value, newNotificationsCount : 0 };

    console.log(this.state.notifs);

    for(let i = 0; i< this.state.notifs.length; i++){
      if(this.state.notifs[i].read === "false"){
        this.state.newNotificationsCount = this.state.newNotificationsCount + 1;
      }
    }

  }

  render(){
    return(
    <div id='root-div'>
      <div className='notification-page-header'>
        <div className='notification-title-container'>
          <h2>Notifications</h2>
          {this.renderNewNotificationsCount()}
          
        </div>

        <button className='mark-as-read-button' onClick={() => this.markAllAsRead()}>
          Mark all as read
        </button>

      </div>
      <ul className='notification-list'>

        {this.printNotifications()}

      </ul>
    </div>
  )
  }

  renderNewNotificationsCount(){
    if(this.state.newNotificationsCount > 0) return <div className='notification-count'>{this.state.newNotificationsCount}</div>;
  }

  markAllAsRead(){
    console.log(this.state);
    for(let i = 0 ; i< this.state.notifs.length; i++){
      this.state.notifs[i].read = "true";
      console.log(this.state.notifs[i]);
    }

    let newNotifs = this.state.notifs;
    let newNotificationsCount = 0;
    this.setState({notifs : newNotifs, newNotificationsCount});
  }

  printNotifications(){
    let i = 0;
    let notifs = [];
    while(i < this.state.notifs.length){
      notifs.push(<Notification value={this.state.notifs[i]}></Notification>);
      i= i+1;
    }
    return notifs;
  }
}





export default App;
