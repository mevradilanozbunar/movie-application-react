import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends React.Component {

    state={
        movies: [],
        searchQuery: ""
    };


    deleteMovie = (movie) => {

        const newMovieList=this.state.movies.filter(m => m.id !== movie.id)
        this.setState(state => ({movies:newMovieList}))
    
    };

    SearchMovie = (event) => {

      this.setState(state => ({searchQuery: event.target.value}))
  
  };

    render() {

      let filteredMovies=this.state.movies.filter((movie) => {return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !==-1
      }).sort((a, b) => {
        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
    });
        return(
            <div>
                    <div className="container px-4">
                        <div className="row">
                            <div className="col-mb-12">
                                <SearchBar
                                searchMovieProp={this.SearchMovie}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-mb-12 ">
                                <MovieList
                                movies={filteredMovies}
                                deleteMovieProp={this.deleteMovie}
                                />
                            </div>
                        </div>
                    </div>


               

            </div>
        );
    }

}

export default App;