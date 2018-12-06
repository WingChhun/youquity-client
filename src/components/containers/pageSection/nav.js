import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import '../../../css/components/containers/pageSection/nav.scss';

export class Nav extends React.Component {
    renderNavElements() {
        const elements = [];
        for (const property in this.props.links) {
            if(this.props.links.hasOwnProperty(property)) {
                const link = this.props.links[property];
                const classString = (link.selected ? ` ${link.class} selected` : ` ${link.class}`);
                elements.push(
                    <li className={`nav-element${classString}`} key={property}>
                        <Link 
                            to={link.destination}
                            className={`nav-link${classString}`}>{link.name}</Link>
                    </li>
                );
            }
        }
        return elements;
    }

    render() {
        const elements = this.renderNavElements();
                return (
            <nav className="top-nav">
                <ul className="nav-list">
                    {elements}
                </ul>
            </nav>
        );
    }
}

export const mapStateToProps = state => ({
    links: state.investment.navData
});

export default connect(mapStateToProps)(Nav);