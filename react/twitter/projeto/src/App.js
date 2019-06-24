import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {
  constructor() {
    super();
    this.state = {
      novoTweet: '',
      tweets: []
    }
  }

  adicionaTweet = (event) => {
    event.preventDefault();
    this.setState(stateAnterior => ({
      tweets: [stateAnterior.novoTweet, ...stateAnterior.tweets],
      novoTweet: ''
    }))
  }

  render() {
    console.log(this.state.tweets)
    return (
      <Fragment>
        <Cabecalho>
          <NavMenu usuario="@ninasolon" />
        </Cabecalho>
        <div className="container">
          <Dashboard>
            <Widget>
              <form className="novoTweet" onSubmit={this.adicionaTweet}>
                <div className="novoTweet__editorArea">
                  <span className={`${this.state.novoTweet.length > 140 ? 'novoTweet__status novoTweet__status--invalido' : 'novoTweet__status'}`}>
                    {this.state.novoTweet.length}/{140 - this.state.novoTweet.length}
                  </span>
                  <textarea
                    className="novoTweet__editor"
                    value={this.state.novoTweet}
                    placeholder="O que está acontecendo?"
                    onChange={(event) => this.setState({ novoTweet: event.target.value })}>
                  </textarea>
                </div>
                <button
                  type="submit"
                  className="novoTweet__envia"
                  disabled={this.state.novoTweet.length > 140}
                >
                  Tweetar
                </button>
              </form>
            </Widget>
            <Widget>
              <TrendsArea />
            </Widget>
          </Dashboard>
          <Dashboard posicao="centro">
            <Widget>
              <div className="tweetsArea">
                {
                  this.state.tweets.length > 0 ? 
                  this.state.tweets.map((item, index) => ( <Tweet texto={item} key={index} usuario="@ninasolon"/> )) :
                  <p>Compartilhe seu primeiro tweet!</p>
                }
              </div>
            </Widget>
          </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
