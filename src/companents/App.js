import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, withRouter} from 'react-router-dom';
import EditMovie from './EditMovie';


class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ""
    };


    async componentDidMount() {
        const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=e3dc751e20c11234caa35ab467e81f3f&language=en-US&page=1");
        this.setState({ movies: response.data.results })
    }


    GetTopRatedMovies=async()=>{
        const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=e3dc751e20c11234caa35ab467e81f3f&language=en-US&page=1");
        console.log(response.data.results );
        this.setState(state => ({ movies: response.data.results }))
    }
    
    GetPopularMovies=async()=>{
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e3dc751e20c11234caa35ab467e81f3f&language=en-US&page=1");
        console.log(response.data.results );
        this.setState(state => ({ movies: response.data.results }))
    }
    GetUpcomingMovies=async()=>{
        const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=e3dc751e20c11234caa35ab467e81f3f&language=en-US&page=1");
       
        this.setState(state => ({ movies: response.data.results }))
    }


    SearchMovie = (event) => {

        this.setState(state => ({ searchQuery: event.target.value }))

    };





    render() {

        let filteredMovies = this.state.movies.filter((movie) => {
            return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
        });
        return (
            <Router>
                <div>
                    <div className="container">
                    <Routes>
        
                        <Route path='/' element={<React.Fragment><div className="row">
                                <div className="col">
                                    <SearchBar
                                        searchMovieProp={this.SearchMovie}
                                        popularMoviesProp={this.GetPopularMovies}
                                        topRatedMoviesProp={this.GetTopRatedMovies}
                                        upcomingMoviesProp={this.GetUpcomingMovies}
                                       />
                                </div>
                            </div><div className="row">
                                    <div className="col">
                                        <MovieList
                                            movies={filteredMovies}
                                            />
                                    </div>
                                </div></React.Fragment>}>

                        </Route>
                        
                        <Route path='/:id' element={<EditMovie
                        />}/>

                        </Routes>      
                    </div>




                </div>
            </Router>
        );
    }

}

export default App;