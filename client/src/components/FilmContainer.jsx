import React from 'react';
import FilmList from './FilmList';

class FilmContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: this.props.data
    }
  }

  render(){
    return (
      <div className="film-container">
        <FilmList data={ this.state.data }/>
      </div>
    );
  }
}

export default FilmContainer;
