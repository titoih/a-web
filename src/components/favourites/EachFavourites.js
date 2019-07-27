import React from 'react';
import { List, Rate, Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import TheAntifuckingOne from '../misc/TheAntiFuckingOne';

class EachFavourite extends React.Component {

  render(){
    return(
      <React.Fragment>
      <List
          itemLayout="vertical"
          size="large"
          dataSource={this.props.element}
          renderItem={item => (
            <List.Item
              key={item.resource.title}
            >
               <Comment
                author={item.user.nickName}
                avatar={
                  <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt={item.nickName}
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
                <h3>{item.resource.kind}</h3>
                <h4>{item.resource.title}</h4>
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
      </React.Fragment>
    )
  }

}
export default EachFavourite;
