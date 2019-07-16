import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import SearchBar from './SearchBar';
import ListPost from './ListPost'


class ReviewsPost extends React.Component {
  state={
    data:[],
    resources:[],
    text:'',
    show:'',
    selection:[]
  }

  fetchResources = () => {
    authenticationService.getResources()
      .then(response => {
        this.setState({
          data:response,
          resources:response
        })
      })
  }

  componentDidMount() {
    this.fetchResources()
  }


  searchText = (text) => {
    this.setState({
      resources:this.state.data.filter(eachElement => eachElement.title.toLowerCase().includes(text.toLowerCase())),
      text:text
    })
  }

  addTitle = (event) => {
    this.setState({
      text:event.title
    })
    this.setState({
      show:'none'
    })
    this.setState({
      resources:[event]
    })

  }

  render() {
    return (
      <div>
        <SearchBar 
        searchText ={this.searchText} 
        textState = {this.state.text}
        showList={this.state.show}
        />
        <ListPost
        text={this.state.text}
        resources={this.state.resources}
        addTitle={this.addTitle}   
        showList={this.state.show}      
        />
      </div>
    )
  }
}
export default ReviewsPost;