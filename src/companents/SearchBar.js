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
                    <div className="col-8">
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