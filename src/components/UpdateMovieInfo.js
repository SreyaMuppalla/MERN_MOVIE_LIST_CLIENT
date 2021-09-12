import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateMovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      main_actor:'',
      director:'',
      description:'',
      released_date:'',
      producer:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/movies/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, movie: res.data})
        this.setState({
          title: this.state.title,
          main_actor: this.state.main_actor,
          director: this.state.director,
          description: this.state.description,
          released_date: this.state.released_date,
          producer: this.state.producer
        })
      })
      .catch(err => {
        console.log("Error from UpdateMovieInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      main_actor: this.state.main_actor,
      director: this.state.director,
      description: this.state.description,
      released_date: this.state.released_date,
      producer: this.state.producer
    };

    axios
      .put('http://localhost:5000/api/movies/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-movie/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateMovieInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateMovieInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Movie List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Movie</h1>
              <p className="lead text-center">
                  Update Movie's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Movie'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="main_actor">Main Actor</label>
              <input
                type='text'
                placeholder='Main Actor'
                name='main_actor'
                className='form-control'
                value={this.state.main_actor}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="director">Director</label>
              <input
                type='text'
                placeholder='Director'
                name='director'
                className='form-control'
                value={this.state.director}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this movie'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="released_date">Released Date</label>
              <input
                type='date'
                placeholder='released_date'
                name='released_date'
                className='form-control'
                value={this.state.released_date}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="producer">Producer</label>
              <input
                type='text'
                placeholder='Producer of this Movie'
                name='producer'
                className='form-control'
                value={this.state.producer}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Movie</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateMovieInfo;
