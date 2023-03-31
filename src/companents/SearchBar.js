import React from 'react';
import { Link } from 'react-router-dom';


class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    
    render() {
        return (

            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row">
                    <div className="col-12https://api.themoviedb.org/3/movie/popular?api_key=e3dc751e20c11234caa35ab467e81f3f&language=en-US&page=1">
                        <input
                            onChange={this.props.searchMovieProp} 
                            type="text" className="form-control"
                            placeholder="Seach a movie"
                        />
                    </div>
                    <div className="col-4">
                        <Link to="/add" type="button" class="btn btn-md btn-primary">Add Movie</Link>
                    </div>
                </div>
            </form>

        );

    }


}

export default SearchBar;