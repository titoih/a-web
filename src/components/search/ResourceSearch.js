import React from 'react';
import { List, Rate, Comment, Tooltip, Avatar, Icon } from 'antd';
import moment from 'moment';
import TheAntifuckingOne from '../misc/TheAntiFuckingOne';
import AuthenticationService from '../../services/AuthenticationService';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ResourceSearch extends React.Component {
  state={
    resources:[]
  }

  fetchReviews = () => {
    AuthenticationService.getAllReviews().then(
      response => {
        this.setState({
          resources:response
        })
      }
    )
  }

  componentDidMount = () => {
    this.fetchReviews()
  }
  
  render() {
    console.log(this.state.resources)
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.state.resources}
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
        <TheAntifuckingOne/>
      </div>
    );
  }
} 

export default ResourceSearch;

