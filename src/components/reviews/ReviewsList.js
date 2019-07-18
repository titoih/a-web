import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import { List, Rate, Comment, Tooltip, Avatar, Icon } from 'antd';
import moment from 'moment';

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

  fetchPosts = () => {
    authenticationService.getReviews().then(
      response => {
        this.setState({ reviews: response })
      }
    )
  }

  componentDidMount() {
    this.fetchPosts()
  }


  render() {
    console.log(this.state)
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
                  <IconText type="heart" text="156" />,
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
        <div style={{display:'block',clear:'both', margin:'2em 0em'}}></div>
      </div>
    );
  }
}

export default ReviewsList;