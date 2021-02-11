import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      num: 0
    };
    this.randomNum = this.randomNum.bind(this);
  }

  render() {
    const listText = this.state.quotes.map(t => {
      return (
        <p key={this.state.quotes.indexOf(t)}>{t.text}</p>
      );
    });

    const listAuth = this.state.quotes.map(t => {
      return (
        <i key={this.state.quotes.indexOf(t)}>- {t.author}</i>
      );
    });

    return (
      <div className="container-fluid vh-100">
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <div className="col-md-5">
            <div id="quote-box" className="card mt-4">
              <div className="card-body">
                <div id="text">
                  {listText[this.state.num]}
                </div>
                <div id="author" className="text-end">
                  {listAuth[this.state.num]}
                </div>
                <div className="btn-group">
                  <button id="new-quote" onClick={this.randomNum} className="btn btn-primary">New Quote</button>
                  <button className="btn btn-primary">
                    <a href="twitter.com/intent/tweet" id="tweet-quote"><i className="fab fa-twitter"></i> Tweet</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  componentDidMount() {
    axios.get(`https://type.fit/api/quotes`)
      .then(res => {
        const quotes = res.data;
        this.setState({ quotes });
      });
  };

  randomNum() {
    const n = Math.trunc(Math.random() * 1000);
    this.setState({
      num: n
    });
  }
}

export default App;
