import React from 'react';
import { Link } from 'react-router-dom';


class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
       
    }
    
    render() {
        return (

            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row" style={{paddingBottom: '20px'}}>
                    <div className='row'>
                    <div className="col-12">
                        <input
                            onChange={this.props.searchMovieProp} 
                            type="text" className="form-control"
                            placeholder="Seach a movie"
                        />
                    </div>
                        
                    </div>
                    </div>
                    <div className="row" style={{paddingBottom: '20px'}}>
                        <div className='col-4'>                             
                    </div>
                    <div class="d-grid gap-2">
                    <div class="btn-group mb-2 mb-md-0 btn-block">
                             <button id="buttonPopular" onClick={(event)=> this.props.popularMoviesProp()} type="button" class="btn btn-outline-primary">Popular</button>
                             <button onClick={(event)=> this.props.topRatedMoviesProp()} type="button" class="btn btn-outline-primary">Top Rated</button>
							 <button onClick={(event)=> this.props.upcomingMoviesProp()} type="button" class="btn btn-outline-primary">Upcoming</button>
								</div>
                             
</div>
                </div>
            </form>

        );

    }


}

export default SearchBar;