import React, {Component} from 'react';
import { Link } from 'react-router';
import { RouteHandler } from 'react-router';
import Nav from './Nav.jsx';
import Alerts from './Alerts.jsx';
import Grid from './Grid.jsx';
import Buttons from './Buttons.jsx';
import Modals from './Modals.jsx';


export default class PatternLibrary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="pattern-library" id="top">
                <Nav />
                <main className="pattern-library__content">
                    <article>
                        <h2 className="pattern-library__heading">Merlin Pattern Library</h2>
                        <section>
                            <h3>What is a Pattern Library?</h3>
                            <p>A pattern library a collection of user interface design patterns. It includes solutions that solve common design problems that can be reused, extended, or modified to quickly build out a scalable application. A pattern library is <strong>a visual way to see the parts that make up the whole</strong>, and are essential in building and maintaining applications within a large team. Key benefits include:</p>
                            <ul>
                                <li>Consistency in user experience</li>
                                <li>Reusability of components and utilities</li>
                                <li>Maintainability of large projects</li>
                                <li>Time-saving due to reuse and variablization</li>
                            </ul>
                        </section>

                        <section>
                            <h3>Bringing It All Together</h3>
                            <p>Because every project is unique, it makes sense to create a new Pattern Library for each project. This pattern library is meant to show how the Rainier Framework (<a href="#rainier">see next section</a>) has been customized and used specifically for the Merlin Scalability project. It includes the colors, typography, custom components, utilities, and more, allowing for any developer to quickly {'get'} up to speed and understand the project.</p>
                        </section>

                        <section id="rainier">
                            <h3>The Rainier Framework</h3>
                            <p>Merlin is built on top of an internal framework called Rainier. The Rainier Framework is a lightweight, mobile-first, extensible boilerplate of abstractions and utilities that will allow for rapid development while maintaining cross-browser consistency and the ability to theme a site quickly by simply editing a few <abbr title="Syntactically Awesome Style Sheets">Sass</abbr> variables. It includes the following:</p>
                            <ul>
                                <li>Cross-browser normalization</li>
                                <li>Responsive, mobile-first grid system</li>
                                <li>A fluid typographic scale</li>
                                <li>Components classes for buttons, form elements, tables, and more</li>
                                <li>Utility classes for easy reuse in markup of repeated properties</li>
                                <li>Extensible modifier classes for an <abbr title="Object Oriented Cascading Style Sheets">OOCSS</abbr> approach</li>
                                <li>Optional features enabled or disabled via the Sass variables</li>
                            </ul>
                            <p>See the <Link to={'/pattern-library/how-to-use'}>Using the Framework</Link> page to learn more about getting started with Rainier.</p>
                            
                        </section>
                    </article>
                </main>
            </div>
        );
    }
}