import React from 'react';
import { Link } from 'react-router-dom';

class MovieList extends React.Component {

  


    render() {
        return (

            <div className="row">


                {
                    this.props.movies.map((movie,i) => (

                        <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                            <div className="card mb-4 shadow-sm">
                                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} className="card-img-top" alt="tezxt"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">  {movie.overview.substring(0,100)}...</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to={`/${movie.id}`} type="button" className="btn btn-primary" >Detail</Link>

                                        <h2><span className="badge badge-info text-primary">{movie.vote_average}</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }





            </div>


        );

    }


}

export default MovieList;