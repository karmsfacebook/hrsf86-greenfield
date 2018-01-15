import React from 'react';
import { Divider, Header, List, Icon, Grid, Image } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

class Profile_friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view,
      redirect: false,
      username: ''
    }
  }
  handleClickedFriend(event) {
    // console.log('This is the friend', event.target);
    // this.setState({
    //   username: event.target.id,
    //   redirect: true
    // })
    this.props.getFriendName(event.target.id);
  }
  render() {
    let friendUrl = '/' + this.props.friend + '/profile/' + this.props.user;
    console.log('This is the friend URL', friendUrl);
    // if (this.state.redirect) {
    //   console.log(this.state.redirect);
    //   return <Redirect push to={friendUrl} />;
    // }
    return (
      <div className={this.props.view === 'Timeline' ? "friendsList" : "hide"}>
        <Header className="header"> 
          <Icon name="users"></Icon>
          Friends
        </Header>
        <span className="friendsCount">
          &nbsp; · &nbsp; {this.props.friends.length} {(this.props.friends.length === 1) ? 'friend' : 'friends'}
        </span>
        <div className="friends">
          {
            this.props.friends.slice(0, 9).map((friend, index) => (
              <div className="friend">
                <Link to={friendUrl}><img src={friend.picture_url} id={friend.username} onClick={(event) => this.handleClickedFriend(event) }/></Link>
                <Link to={friendUrl}><span className="friendName" id={friend.username} onClick={(event) => this.handleClickedFriend(event) }><strong> {friend.first_name} {friend.last_name} </strong> </span></Link>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Profile_friends;