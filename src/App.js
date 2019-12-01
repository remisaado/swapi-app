// By Remi Saado
import React, {Component} from 'react';
import './App.css';
import {Card, Window, Spinner} from './components';

const API = "https://swapi.co/api/films/";

class App extends Component {
  state = {loading: true, clickedMovie: "", movies: [], characters: []};

  showCharacters(id) {
    this.setState({loading: true, clickedMovie: this.state.movies[id].title})
    /* Fetches the characters data of the specific movie card
    that was clicked and sets it to the state */
    this.state.movies[id].characters.map(characterAPI =>
      fetch(characterAPI)
      .then(res => res.json())
      .then(json =>
        this.setState({
        loading: false,
        characters: this.state.characters.concat(json.name)})))
      }

  closeWindow = () => {
    /* Empties the state of clickedMovie to hide the Window component
    and display the Card components again. */
      this.setState({clickedMovie: "", characters: []});
    };

  componentDidMount() {
    // Fetches the data of the swapi and sets it to state, sorted based on the release date
    fetch(API)
    .then(res => res.json())
    .then(json =>
      this.setState({
        loading: false,
        movies: json.results
        .sort((a, b) => a.release_date > b.release_date)}))
      }

  render() {

    var {loading, clickedMovie, movies} = this.state;

    if (loading)
    {
      /* If state of loading is true, a loading spinner will be displayed otherwise,
      when data has been fetched the content of the app will display */
      return <Spinner/>
    } else {
      /* If clickedMovie has a value, the Window component will be rendered
       displaying the characters of the clicked movie, otherwise if empty
       the Card components with the movie titles and dates will be displayed */
      return (
        <div className="App">
        {clickedMovie
          ?
          (<Window
              className="windowStyle"
              clickedMovie={clickedMovie}>
              <span className="closeTag" onClick={this.closeWindow}>Close</span>
              <div className="characterContainer">
              {this.state.characters.map((character, i) => (
                <li key={i}>{character}</li>
              ))}
              </div>
          </Window>)
          :
          <div className="cardContainer">
          {(movies.map((movie, i) => (
            <Card
              className="cardStyle"
              key={i}
              onClick={(e) => this.showCharacters(i, e)}
              title={movie.title}
              releaseDate={movie.release_date} />
          )))}
        </div>}
        </div>
      );
    }
  }
}

export default App;
