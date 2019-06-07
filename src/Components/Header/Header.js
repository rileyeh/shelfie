import React, { Component } from 'react' 
import './Header.css';
import { Link } from 'react-router-dom'


class Header extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div className="header"> 
                <h2>SHELFIE</h2>
                <Link to='/dashboard'><button>Dashboard</button></Link>
                <Link to='addform'><button>Add Inventory</button></Link>
            </div>
        )
    }
}

export default Header