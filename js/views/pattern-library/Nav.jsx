import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <nav className="pattern-library__nav">
                <h1 className="h3"><Link to={'/pattern-library'}>Pattern Library</Link></h1>
                <hr />
                <h2 className="sr-only">Table of Contents</h2>
                <ul className="list-unstyled">
                    <li><Link to={'/pattern-library/how-to-use'}>Using the Framework</Link></li>
                    <li><Link to={'/pattern-library/guidelines'}>CSS Guidelines</Link></li>
                    <li><Link to={'/pattern-library/js/guidelines'}>JS Guidelines</Link></li>
                </ul>
                <hr />
                <ul className="list-unstyled">
                    <li><Link to={'/pattern-library/alerts'}>Alerts</Link></li>
                    <li><Link to={'/pattern-library/buttons'}>Buttons</Link></li>
                    <li><Link to={'/pattern-library/colors'}>Colors</Link></li>
                    <li><Link to={'/pattern-library/form-controls'}>Form Controls</Link></li>
                    <li><Link to={'/pattern-library/grid'}>Grid</Link></li>
                    <li><Link to={'/pattern-library/modals'}>Modals</Link></li>
                    <li><Link to={'/pattern-library/managed-item-list'}>Managed Item List</Link></li>
                    <li><Link to={'/pattern-library/pagination'}>Pagination</Link></li>
                    <li><Link to={'/pattern-library/progress'}>Progress Bar</Link></li>
                    <li><Link to={'/pattern-library/typography'}>Typography</Link></li>
                    <li><Link to={'/pattern-library/utilities'}>Utilities</Link></li>
                    <li><Link to={'/pattern-library/variables'}>Variables</Link></li>
                </ul>
                <hr />
                <ul className="list-unstyled">
                    <li><Link to={'/pattern-library/js/api-calls'}>API calls</Link></li>
                    <li><Link to={'/pattern-library/js/reactjs-tips'}>ReactJS tips</Link></li>
                    <li><Link to={'/pattern-library/js/ecmascript6-tips'}>ECMAScript 6 tips</Link></li>
                    <li><Link to={'/pattern-library/js/blank-component'}>Blank Component</Link></li>
                </ul>
                <hr />
            </nav>
        );
    }
}
