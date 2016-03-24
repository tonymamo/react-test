import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from '../Nav.jsx';

export default class Guidelines extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pattern-library">
                <Nav />
                <main className="pattern-library__content">
                    <article>
                        <h2 className="pattern-library__heading">JS Guidelines</h2>
                    </article>
                    <section>
                        <h3>Naming Conventions</h3>
                        <p>A folder that matches a Route -> <b>dashed-inbetween-thing</b></p>
                        <p>ES6 Classes -> <b>CapitalCaseThing</b></p>
                        <p>Anything else -> <b>camelCaseThing</b></p>
                    </section>
                    <section>
                        <h3>Babel</h3>
                        <p>Converts ES6 scripts to ES5.</p>
                    </section>
                    <section>
                        <h3>ECMAScript 6 (ES6 or ES2015)</h3>
                        <p>It defines the standard for JavaScript implementation. Currently, web browsers use ECMAScript 5.
                            To stay ahead and plan for the future, we are using it now with the help of a plugin called Babel.</p>
                    </section>
                    <section>
                        <h3>Express</h3>
                        <p>Spins up a server for us.</p>
                    </section>
                    <section>
                        <h3>Gulp</h3>
                        <p>Gulp is a streaming build system that helps automate and enhance your workflow.</p>
                    </section>
                    <section>
                        <h3>Isomorphic Fetch</h3>
                        <p>Makes API calls.</p>
                    </section>
                    <section>
                        <h3>Node.js</h3>
                        <p>Handles server side events with JS.</p>
                    </section>
                    <section>
                        <h3>ReactJS</h3>
                        <p>It is a JavaScript library for building user interfaces created by Facebook and Instagram.</p>
                        <ul>
                            <li>Makes code highly reusable</li>
                            <li>Implements a one-way reactive data flow
                                <ul>
                                    <li>This means that when data changes, React knows to only update the changed parts.
                                    </li>
                                </ul>
                            </li>
                            <li>Super fast</li>
                        </ul>
                    </section>
                    <section>
                        <h3>React Router</h3>
                        <p>It is a route handler for React.</p>
                    </section>
                    <section>
                        <h3>Redux</h3>
                        <p>A predictable state container.</p>
                    </section>
                    <section>
                        <h3>Webpack</h3>
                        <p>A module bundler.</p>
                    </section>
                </main>

            </div>

        );
    }
}