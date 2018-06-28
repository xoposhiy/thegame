import React from 'react';
import NavMenu from '../Menu';
import styles from './layout.css'

export default class Layout extends React.Component {
    render() {
        return <div className={styles.root}>
            <div className={styles.nav}>
                <NavMenu />
            </div>
            <div className='col-sm-9'>
                { this.props.children }
            </div>
        </div>;
    }
}
