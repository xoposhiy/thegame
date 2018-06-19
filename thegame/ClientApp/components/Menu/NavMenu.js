import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './menu.css';

export default class NavMenu extends React.Component {
    render () {
        return (
            <div className={styles.root}>
                <NavLink to={'/'} exact activeClassName='active'>
                    <span className='glyphicon glyphicon-home'></span> Home
                </NavLink>
                <NavLink to={'/counter'} activeClassName='active'>
                    <span className='glyphicon glyphicon-education'></span> Counter
                </NavLink>
                <NavLink to={'/fetchdata'} activeClassName='active'>
                    <span className='glyphicon glyphicon-th-list'></span> Fetch data
                </NavLink>
            </div>
        );
    }
}
