import React from 'react';

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
                        <button type="button" class="btn btn-md btn-primary">Add Movie</button>
                    </div>
                </div>
            </form>

        );

    }


}

export default SearchBar;