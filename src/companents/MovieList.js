import React from 'react';

class MovieList extends React.Component {

  


    render() {
        return (

            <div className="row">


                {
                    this.props.movies.map((movie => (

                        <div className="col-lg-3 col-md-4 col-sm-6" key={movie.id}>
                            <div className="card mb-4 shadow-sm">
                                <img src={movie.imageURL} className="card-img-top" alt="tezxt"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.name}</h5>
                                    <p className="card-text">  {movie.overview.substring(0,100)}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="button" className="btn btn-md btn-outline-danger" onClick={(event)=> this.props.deleteMovieProp(movie) }>Delete</button>
                                        <h2><span className="badge badge-info text-primary">{movie.rating}</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )))
                }





            </div>


        );

    }


}

export default MovieList;