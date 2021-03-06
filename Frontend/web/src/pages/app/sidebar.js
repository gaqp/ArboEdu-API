import React, { Component } from 'react';
import './sidebar.css';
import sidebar from "./sidebarItems.js"
import welcomeBox from './boxes/welcomeBox'

function setType(type) {
    switch (type) {
        case ("Administrador"):
            return sidebar.admin;

        case ("Professor"):
            return sidebar.teacher;

        case ("Jovem ACE"):
            return sidebar.ace;

        default:
            return sidebar.ace;

    };
}
export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            box: welcomeBox(this.props.type)
        }
    }

    render() {
        const sidebarType = setType(this.props.type);
        return (
            <React.Fragment>
                <div id="sidebar">
                    <div id="sidebar-type">
                        <img src={sidebarType.logo} alt={sidebarType.name}></img>
                        <span id="sidebar-label">{sidebarType.name}</span>
                    </div>
                    <div id="sidebar-menu">
                        {sidebarType.items.map(item => (
                            <div id="sidebar-option" key={item.name} onClick={() => this.setState(item.component? {box: item.component()}:{box: welcomeBox(this.props.type)})}>
                                <img src={item.logo} alt={item.name} key={item.name} />
                                <p ><strong>{item.name}</strong></p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="boxes">
                    {this.state.box}
                </div>
            </React.Fragment>
        );
    }
}