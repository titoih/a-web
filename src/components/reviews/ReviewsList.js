import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import Favourite from './Favourite';
import { List, Rate, Comment, Tooltip, Avatar, Icon } from 'antd';
import moment from 'moment';
import TheAntifuckingOne from '../misc/TheAntiFuckingOne';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ReviewsList extends React.Component  {
  state = {
    reviews:[]
  };

  fetchFriendsReviews = () => {
    authenticationService.getReviews().then(
      response => {
        this.setState({ reviews: response })
      }
    )
  }

  fetchUserReviews = (id) => {
    authenticationService.getUserReviews(id).then(
      response => {
        this.setState({ reviews: response })
      }
    )
  }

  componentDidMount() {
    if(!this.props.theProps) {
        this.fetchFriendsReviews()
    } else {
        this.fetchUserReviews(this.props.theProps)
      }
  }
    
  render() {
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.state.reviews}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={
                [
                  <Favourite />,
                  <IconText type="message" text="2" />,
                ]
              }
            >
               <Comment
                author={item.user.nickName}
                avatar={
                  <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt={item.user.nickName}
                  />}
                content={
                  <p style={{textAlign:"left"}}><i>"{item.comment}"</i></p>
                }
                datetime={
                  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                  </Tooltip>
                }     
                />
              <div>
              {item.resource.kind + ' / ' + item.resource.title}
              </div>
              <Rate disabled defaultValue={Number(item.rate)}/>
              <img
                style={{display: 'block', margin:'auto'}}
                alt="logo"
                src={item.resource.imageURL}
              />
            </List.Item>
          )}
        />
        <TheAntifuckingOne/>
      </div>
    );
  }
}

export default ReviewsList;