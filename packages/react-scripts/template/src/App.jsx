import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">@gxl/react-scripts</h1>
          <p>A configurable version of create react app</p>
        </header>
        <div className="intro">
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            This project is created with @gxl/react-scripts, which is a fork of{' '}
            <a href="https://github.com/facebookincubator/create-react-app">
              Create React App
            </a>. Added features includes:
          </p>
          <ul>
            <li>scss support</li>
            <li>
              css modules support (filename ends with <code>.module.css</code>{' '}
              or <code>.module.scss</code> will have css modules enabled)
            </li>
            <li>
              alias <code>@</code> -&gt; <code>src</code>
            </li>
            <li>css source map support in development</li>
            <li>
              added config.js to support customizing webpack and webpack dev
              server
            </li>
          </ul>
          <a href="https://github.com/gaoxiaoliangz/create-react-app/tree/master/packages/react-scripts">Read the full documentation</a>
        </div>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
        `}</style>
        <style jsx>{`
          .app {
            text-align: center;
          }
          
          .logo {
            animation: App-logo-spin infinite 20s linear;
            height: 80px;
          }
          
          .header {
            background-color: #222;
            padding: 20px;
            color: #fff;
          }
          
          .title {
            font-size: 1.5em;
          }
          
          .intro {
            font-size: large;
            text-align: left;
            padding: 20px;
            max-width: 700px;
            margin: auto;
          }
          
          @keyframes App-logo-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }          
        `}</style>
      </div>
    )
  }
}

export default hot(module)(App)
