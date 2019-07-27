import React from 'react';
import TheAntifuckingOne from '../misc/TheAntiFuckingOne';
import ReviewsList from '../reviews/ReviewsList';

class ReviewSearch extends React.Component {
  state={
    reviews:[]
  }

  
  render() {
    return (
      <React.Fragment>
        <ReviewsList allReviews={true}/>
        <TheAntifuckingOne/>
      </React.Fragment>
    );
  }
} 

export default ReviewSearch;

