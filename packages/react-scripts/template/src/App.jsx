import React, { Component } from 'react'
import logo from './logo.svg'
import styles from './App.module.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>@gxl/react-scripts</h1>
          <p>A configurable version of create react app</p>
        </header>
        <div className={styles.intro}>
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
      </div>
    )
  }
}

export default App
