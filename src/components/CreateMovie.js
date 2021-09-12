import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      main_actor:'',
      director:'',
      description:'',
      released_date:'',
      producer:''
    };
  }

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
      .post('http://localhost:5000/api/movies', data)
      .then(res => {
        this.setState({
          title: '',
          main_actor:'',
          director:'',
          description:'',
          released_date:'',
          producer:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateMovie!");
      })
  };

  render() {
    return (
      <div className="CreateMovie">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Movie List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Movie</h1>
              <p className="lead text-center">
                  Create new movie
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Producer of this Movie'
                    name='producer'
                    className='form-control'
                    value={this.state.producer}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMovie;
