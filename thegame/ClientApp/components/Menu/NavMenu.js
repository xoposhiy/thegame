import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './menu.css';

export default class NavMenu extends React.Component {
    render () {
        return (
            <div className={styles.root}>
                <NavLink to={'/'} exact activeClassName={styles.active}>
                    <span className={styles.link}>Home</span>
                </NavLink>
                <NavLink to={'/counter'} activeClassName={styles.active}>
                    <span className={styles.link}>Counter</span>
                </NavLink>
                <NavLink to={'/fetchdata'} activeClassName={styles.active}>
                    <span className={styles.link}>Fetch data</span>
                </NavLink>
                <a href='slides/index.html'>
                    <span className={styles.link}>Slides</span>
                </a>
            </div>
        );
    }
}
