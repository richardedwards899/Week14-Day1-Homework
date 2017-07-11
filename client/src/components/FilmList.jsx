import React from 'react';
import Film from './Film.jsx'

class FilmList extends React.Component {

  render(){
    const filmNodes = this.props.data.map( (film) => {
      return (
        <Film title={film.title} key={film.id}>
          {film.title}, {film.year}
        </Film>
      );
    })

    return (
      <div className="film-list">
        { filmNodes }
      </div>
    )
  }//render
}//filmList

export default FilmList;
