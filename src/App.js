import React from 'react';
import uploadNew from './components/uploadNew';
import landing from './components/landing';
import newAccount from './components/newAccount';
import telePrompt from './components/telePrompt';
import listText from './components/listText';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

class App extends React.Component {

  render() {

    return (
      <main className='App'>
        <header role="banner">
          <Link to="/" className="link">
            <img className="logo" src="LogoLinePlease.png" alt="Logo of the Line Please! app" ></img>
          </Link>
          <p>Making sure you know your words</p>
        </header>
        <section>
          <Link to='/teleprompt'><button>Start Practicing</button></Link>
          <Link to='/upload'><button>Upload New</button></Link>
          <Link to='/listText'><button>View/Delete Texts</button></Link>
        </section>
        <Route exact path='/' component={landing} />
        <Route path='/new-account' component={newAccount} />
        <Route path='/upload' component={uploadNew} />
        <Route path='/teleprompt' component={telePrompt} />
        <Route path='/listText' component={listText} />
      </main>
    );
  }
}

export default App;