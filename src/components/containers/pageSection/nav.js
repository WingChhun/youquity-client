import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {slide as Menu} from 'react-burger-menu';

import '../../../css/components/containers/pageSection/nav.scss';

export class Nav extends React.Component {
    renderNavElements() {
        const elements = [];
        for (const property in this.props.links) {
            if(this.props.links.hasOwnProperty(property)) {
                const link = this.props.links[property];
                const classString = (link.selected ? ` ${link.class} selected` : ` ${link.class}`);
                elements.push(
                        <Link 
                            to={link.destination}
                            className={`nav-link menu-item${classString}`}>
                                {link.name}
                            </Link>
                );
            }
        }
        return elements;
    }

    render() {
        const elements = this.renderNavElements();
                return (
            <nav className="top-nav">
                <Menu right>
                    {elements}
                </Menu>
            </nav>
        );
    }
}

export const mapStateToProps = state => ({
    links: state.investment.navData
});

export default connect(mapStateToProps)(Nav);