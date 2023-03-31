import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import AddMovie from './AddMovie';
import { BrowserRouter as Router, Route, Routes, withRouter} from 'react-router-dom';
import EditMovie from './EditMovie';


class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    };

    //get with fetch
    // async componentDidMount() {
    //     const response = await fetch("http://localhost:3002/movies");
    //     const data = await response.json();
    //     this.setState({ movies: data })
    // }
//npx json-server --watch src/api/dB.json --port 3002
    //get with axios
    // async componentDidMount() {
    //     const response = await axios.get("http://localhost:3002/movies");
    //     this.setState({ movies: response.data })
    // }

    async componentDidMount() {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e3dc751e20c11234caa35ab467e81f3f&language=en-US&page=1");
        this.setState({ movies: response.data.results })
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
        const newMovieList = this.state.movies.filter(m => m.id !== movie.id)
        this.setState(state => ({ movies: newMovieList }))

    };

    SearchMovie = (event) => {

        this.setState(state => ({ searchQuery: event.target.value }))

    };

    addMovie= async(movie) =>{
        await axios.post("http://localhost:3002/movies/",movie);
        this.setState(state => ({ movies: state.movies.concat([movie]) }));
    }

     // EDIT MOVIE
     editMovie = async (id, updatedMovie) => {
        await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie)
        this.getMovies();
    }

    async getMovies() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })
    }

    render() {

        let filteredMovies = this.state.movies.filter((movie) => {
            return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
        }).sort((a, b) => { return a.id < b.id ? 1 : a.id > b.id ? -1 : 0; });
        return (
            <Router>
                <div>
                    <div className="container">
                    <Routes>
        
                        <Route path='/' element={<React.Fragment><div className="row">
                                <div className="col">
                                    <SearchBar
                                        searchMovieProp={this.SearchMovie} />
                                </div>
                            </div><div className="row">
                                    <div className="col">
                                        <MovieList
                                            movies={filteredMovies}
                                            deleteMovieProp={this.deleteMovie} />
                                    </div>
                                </div></React.Fragment>}>

                        </Route>
                        <Route path='/add' element={<AddMovie
                        onAddMovie={(movie)=>{this.addMovie(movie)
                         
                           

                        }}
                        />}/>

                        <Route path='/edit/:id' element={<EditMovie
                         onEditMovie={(id, movie) => {
                            this.editMovie(id, movie)
                        }}
                        />}/>

                        </Routes>      
                    </div>




                </div>
            </Router>
        );
    }

}

export default App;