import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import AddFavourite from './AddFavourite';
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

  fetchAllReviews = () => {
    authenticationService.getAllReviews().then(
      response => {
        this.setState({
          reviews:response
        })
      }
    )
  }

  componentDidMount() {

    if (this.props.theProps) {
      this.fetchUserReviews(this.props.theProps)
    } else if(this.props.allReviews) {
      this.fetchAllReviews()
    } else {
      this.fetchFriendsReviews()
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
                  <AddFavourite reviewId= {item.id}/>,
                  <IconText type="message" text="2" />,
                ]
              }
            >
               <Comment
                author={item.user.nickName}
                avatar={
                  <Avatar
                    src={
                    item.user.avatarURL 
                    ? item.user.avatarURL 
                    : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    }
                    alt={item.user.nickName + 'imagen de perfil'}
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
                style={{display: 'block', margin:'auto', width:'50%'}}
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