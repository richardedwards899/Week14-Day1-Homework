import React from 'react';
import ReactDOM from 'react-dom';
import FilmContainer from './components/FilmContainer';

window.addEventListener('load', function () {

  const film_data = [
    {
      title: "Film A",
      year: 2006,
      id: 1
    },
    {
      title: "Film B",
      year: 2007,
      id: 2
    },
    {
      title: "Film C",
      year: 2008,
      id: 3
    }
  ];

  ReactDOM.render(
    <FilmContainer data={film_data}/>,
    document.getElementById('app')
  );
});
