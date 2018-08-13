import React from 'react'
import styles from './Content.module.css'
import styles2 from './Content.module.scss'
import './Content.scss'

const Content = props => {
  return (
    <div className="wrap">
      <div className={styles.content}>
        <p>css-modules is great! This div's class is `{styles.content}`.</p>
        <p className={styles2.para}>This is another style rule from a scss file.</p>
      </div>
    </div>
  )
}

Content.propTypes = {}

export default Content
