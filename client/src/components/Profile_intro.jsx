import React from 'react';
import { Divider, Header, List, Icon } from 'semantic-ui-react';

class Profile_intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view
    }
  }

  render() {
    return (
      <div className={this.props.view === 'Timeline' ? "intro" : "hide"}>
        <Header className="header"> 
          <Icon loading name="globe"></Icon>
          Intro 
        </Header>
        <List className="items">
          <div className="introduction"> 
            {this.props.profilePageInfo.intro}
          </div>
          <Divider fitted></Divider>
          {this.props.profilePageInfo.residence ?
            <List.Item>
              <Icon name="home"></Icon>
              &nbsp; {this.props.profilePageInfo.residence}
            </List.Item>
            :
            <span></span>
          }  
          {this.props.profilePageInfo.work ?
            <List.Item>
              <Icon name="industry"></Icon>
              &nbsp; {this.props.profilePageInfo.work}
            </List.Item>
            :
            <span></span>
          }  
          {this.props.profilePageInfo.education ?
            <List.Item>
              <Icon name="student"></Icon>
              &nbsp; {this.props.profilePageInfo.education}
            </List.Item>
            :
            <span></span>
          } 
          {this.props.profilePageInfo.relationship_status ?
            <List.Item>
              <Icon name="heart outline"></Icon>
              &nbsp; {this.props.profilePageInfo.relationship_status}
            </List.Item>
            :
            <span></span>
          } 
          {this.props.profilePageInfo.birthday ?
            <List.Item>
              <Icon name="birthday"></Icon>
              &nbsp; {this.props.profilePageInfo.birthday}
            </List.Item>
            :
            <span></span>
          } 
          </List>
        </div>
    );
  }
}

export default Profile_intro;