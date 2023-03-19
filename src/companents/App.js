import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';


class App extends React.Component {

    state={
        movies: [],
        searchQuery: ""
    };

    //get with fetch
    // async componentDidMount() {
    //     const response = await fetch("http://localhost:3002/movies");
    //     const data = await response.json();
    //     this.setState({ movies: data })
    // }

    //get with axios
    async componentDidMount() {
        const response=await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })
    }


    //delete with fetch
    // deleteMovie = async (movie) => {
    //     await fetch(`http://localhost:3002/movies/${movie.id}`,{
    //         method:"DELETE"
    //     });
    //     const newMovieList=this.state.movies.filter(m => m.id !== movie.id)
    //     this.setState(state => ({movies:newMovieList}))
    
    // };

        //delete with axios
        deleteMovie = async (movie) => {
            await axios.delete(`http://localhost:3002/movies/${movie.id}`);           
            const newMovieList=this.state.movies.filter(m => m.id !== movie.id)
            this.setState(state => ({movies:newMovieList}))
        
        };

    SearchMovie = (event) => {

      this.setState(state => ({searchQuery: event.target.value}))
  
  };

    render() {

      let filteredMovies=this.state.movies.filter((movie) => {return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !==-1
      }).sort((a, b) => { return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;});
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