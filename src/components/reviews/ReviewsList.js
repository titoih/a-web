import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import { Skeleton, List, Rate, Comment, Tooltip, Avatar, Icon } from 'antd';
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
              extra={
                (
                  <img
                    width={'100%'}
                    alt="logo"
                    src={item.resource.imageURL}
                  />
                )
              }
            >
              <Skeleton loading={false} active avatar>
                <List.Item.Meta
                  author={'Han Solo'}
                  title={item.resource.kind + ' - ' + item.resource.title}
                  description={item.description}
                />
                <Comment
                author={item.user.nickName}
                avatar={
                  <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                  />}
                  content={
          <p>
            {item.comment}
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
                />
                <Rate disabled defaultValue={Number(item.rate)}/>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ReviewsList;