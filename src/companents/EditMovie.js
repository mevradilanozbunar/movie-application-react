import React from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';


class EditMovie extends React.Component {

    state = {
        cast: [],
        crew: [],
        genres: [],
        movies: [],
        production_companies: [],
        production_countries: [],
        movieVideo: "",
        title: "",
        budget: "",
        overview: "",
        genres: "",
        imdb_id: "",
        original_language: "",
        popularity: "",
        poster_path: "",
        production_companies: "",
        production_countries: "",
        vote_average: "",
        vote_count: "",
        status: "",


    }





    async componentDidMount() {

        const id = window.location.pathname.replace("/", "")


        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=e3dc751e20c11234caa35ab467e81f3f`);
        const movie = response.data;

        const similar = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=e3dc751e20c11234caa35ab467e81f3f&language=en-US&page=1`);
        const SimilarMovies = similar.data.results;


        const video = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=e3dc751e20c11234caa35ab467e81f3f`);
        const movieVideo = video.data.results[0].key;

        const detail = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=e3dc751e20c11234caa35ab467e81f3f&language=en-US
        `);
        const movieDetail = detail.data;
        console.log(movieDetail);

        this.setState({
            cast: movieDetail.cast,
            crew: movieDetail.crew,
            movies: SimilarMovies,
            movieVideo: movieVideo,
            genres: movie.genres,
            production_companies: movie.production_companies,
            production_countries: movie.production_countries,
            title: movie.title,
            budget: movie.budget,
            overview: movie.overview,
            imdb_id: movie.imdb_id,
            popularity: movie.popularity,
            poster_path: movie.poster_path,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
            status: movie.status,
        })

    }

    onInputChange = (e) => {
        //    console.log(e.target.name);
        //    console.log(e.target.value);

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();








    }


    render() {

        const writers = this.state.crew.filter((writer) => writer.known_for_department === "Writing");
        const Productors = this.state.crew.filter((productor) => productor.known_for_department === "Production");
        const Directors = this.state.crew.filter((director) => director.known_for_department === "Directing");
        const Editors = this.state.crew.filter((editor) => editor.known_for_department === "Editing");
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return (




            <div className="row" style={{ paddingTop: '20px' }}>
                <div className="col-3">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.state.poster_path}`} alt="#" />
                </div>
                <div className="col-8" style={{ paddingBottom: '30px' }}>
                    <h2 className="movie-title">{this.state.title}</h2>

                    <div className="movie-summary">
                        <p>{this.state.overview}</p>
                    </div>
                    <ul className="movie-meta">
                        <li><strong>Rating: </strong>{this.state.vote_average} </li>
                        <li><strong>Number of Rating Votes: </strong>{this.state.vote_count}</li>
                        <li><strong>Budget: </strong>{this.state.budget}</li>
                        <li><strong>Imdb Id: </strong>{this.state.imdb_id}</li>
                        <li><strong>Popularity: </strong>{this.state.popularity}</li>
                        <li><strong>Status: </strong>{this.state.status}</li>
                    </ul>
                    <ul className="starring">
                        <li>
                            <strong>Genre: </strong>
                            {Array.isArray(this.state.genres) && this.state.genres.map((genre, index) => (
                                <span key={genre.id}>
                                    {index === 0 ? genre.name : ` , ${genre.name}`}
                                </span>
                            ))}
                        </li>
                        <li>
                            <strong>Production Company: </strong>
                            {Array.isArray(this.state.production_companies) && this.state.production_companies.map((company, index) => (
                                <span key={company.id}>
                                    {index === 0 ? company.name : ` , ${company.name}`}
                                </span>
                            ))}
                        </li>
                        <li>
                            <strong>Production Country: </strong>
                            {Array.isArray(this.state.production_countries) && this.state.production_countries.map((country, index) => (
                                <span key={country.id}>
                                    {index === 0 ? country.name : ` , ${country.name}`}
                                </span>
                            ))}
                        </li>


                    </ul>
                </div>
                <div className="col-1">
                    <button onClick={() => window.location.href = "/"} class="btn btn-outline-primary">HomePage</button>
                </div>

                <div className='row' style={{ paddingTop: '20px' }}>
                    <div className='col-6'>
                        <YouTube videoId={this.state.movieVideo} opts={opts} onReady={this._onReady} />
                    </div>
                    <div className='col-6'>
                        <ul className="starring">
                            <li>
                                <strong>Stars: </strong>
                                {Array.isArray(this.state.cast) && this.state.cast.map((actor, index) => (
                                    <span key={actor.id}>
                                        {index === 0 ? actor.name : ` , ${actor.name}`}
                                    </span>
                                ))}
                            </li>
                            <li>
                                <strong>Writer: </strong>
                                {Array.isArray(writers) && writers.map((writer, index) => (
                                    <span key={writer.id}>
                                        {index === 0 ? writer.name : ` , ${writer.name}`}
                                    </span>
                                ))}
                            </li>
                            <li>
                                <strong>Productor: </strong>
                                {Array.isArray(Productors) && Productors.map((producter, index) => (
                                    <span key={producter.id}>
                                        {index === 0 ? producter.name : ` , ${producter.name}`}
                                    </span>
                                ))}
                            </li>
                            <li>
                                <strong>Director: </strong>
                                {Array.isArray(Directors) && Directors.map((director, index) => (
                                    <span key={director.id}>
                                        {index === 0 ? director.name : ` , ${director.name}`}
                                    </span>
                                ))}
                            </li>
                            <li>
                                <strong>Editor: </strong>
                                {Array.isArray(Editors) && Editors.map((editor, index) => (
                                    <span key={editor.id}>
                                        {index === 0 ? editor.name : ` , ${editor.name}`}
                                    </span>
                                ))}
                            </li>


                        </ul>
                    </div>

                </div>


                <div className="row">
                    {this.state.movies[0] ? (
                        <>
                            <h2 className="title" style={{ paddingTop: '50px' }}>Similar Movies</h2>
                            {Array.isArray(this.state.movies) && this.state.movies.map((movie, i) => (
                                <div style={{ paddingTop: '20px', }} className="col-lg-3 col-md-4 col-sm-6" key={i}>
                                    <div className="card mb-4 shadow-sm">
                                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} className="card-img-top" alt="tezxt"></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.title}</h5>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <button onClick={() => window.location.href = `/${movie.id}`} type="button" className="btn btn-primary">Detail</button>

                                                <h2><span className="badge badge-info text-primary">{movie.vote_average}</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : null}
                </div>

            </div>




        );
    }


}


export default EditMovie;