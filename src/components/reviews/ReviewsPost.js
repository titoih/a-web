import React from 'react';
import authenticationService from '../../services/AuthenticationService';
import SearchBar from './SearchBar';
import TitleList from './TitleList'


class ReviewsPost extends React.Component {
  state={
    data:[],
    resources:[],
    text:'',
    resourceSelection: []
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
    if(!text) {
      this.fetchResources() 
    }
  }

  getResource = (event) => {
    this.setState({
      resourceSelection:event
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <SearchBar 
        searchText ={this.searchText} 
        textState = {this.state.text}
        getResource={this.getResource}
        />
        <ul>
        {
          this.state.text ? this.state.resources.map((element, index) => {
          return <TitleList key={index} element={element}/>}) : ''
        }
        </ul>
      </div>
    )
  }
}
export default ReviewsPost;
