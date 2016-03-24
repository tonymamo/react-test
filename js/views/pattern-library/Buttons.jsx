import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class Buttons extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {

    }

    render() {
        return (
             <div className="pattern-library">
                <Nav />
                <main className="pattern-library__content">
                    <h2 className="pattern-library__heading">Buttons</h2>

                    <section>
                        <h3>BEM Notation</h3>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Block Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>.button</td>
                                    <td>Styling for links, buttons, and other actionable items</td>
                                </tr>
                            </tbody>
                            <thead className="thead--default">
                                <tr>
                                    <th>Elements</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><em>(none)</em></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <thead className="thead--default">
                                <tr>
                                    <th>Color Modifiers</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>.button--success</td>
                                    <td>Success state</td>
                                </tr>
                                <tr>
                                    <td>.button--info</td>
                                    <td>Info state</td>
                                </tr>
                                <tr>
                                    <td>.button--warning</td>
                                    <td>Warning state</td>
                                </tr>
                                <tr>
                                    <td>.button--danger</td>
                                    <td>Danger/error state</td>
                                </tr>
                            </tbody>
                            <thead className="thead--default">
                                <tr>
                                    <th>Size Modifiers</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>.button--lg</td>
                                    <td>Makes button larger</td>
                                </tr>
                                <tr>
                                    <td>.button--sm</td>
                                    <td>Makes button smaller</td>
                                </tr>
                                <tr>
                                    <td>.button--block</td>
                                    <td>Makes button be 100% of its parent</td>
                                </tr>
                                <tr>
                                    <td>.button--link</td>
                                    <td>Makes a <code>&lt;button&gt;</code> look like a link while retaining button behavior</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h3>Markup</h3>
                        <pre>
                            <code>
                                {'// Link'}{'\n'}
                                {'<a href="#" className="button">Link</a>'}{'\n'}
                                {''}{'\n'}
                                {'// Button'}{'\n'}
                                {'<button type="button" className="button">Button</button>'}
                            </code>
                        </pre>
                    </section>

                    <section>
                        <h3>Examples</h3>
                        <h4>Filled Buttons</h4>
                        <p>
                            <a href="" className="button">.button</a>
                            <a href="" className="button button--primary">.button--primary</a>
                            <a href="" className="button button--secondary">.button--secondary</a>
                        </p>
                        <p>
                            <a href="" className="button button--success">.button--success</a>
                            <a href="" className="button button--info">.button--info</a>
                            <a href="" className="button button--warning">.button--warning</a>
                            <a href="" className="button button--danger">.button--danger</a>
                        </p>
                        <h4>Outlined Buttons</h4>
                        <p>
                            <a href="" className="button button--primary-outline">.button--primary-outline</a>
                            <a href="" className="button button--secondary-outline">.button--secondary-outline</a>
                        </p>
                        <p>
                            <a href="" className="button button--success-outline">.button--success-outline</a>
                            <a href="" className="button button--info-outline">.button--info-outline</a>
                            <a href="" className="button button--warning-outline">.button--warning-outline</a>
                            <a href="" className="button button--danger-outline">.button--danger-outline</a>
                        </p>
                        <h4>Sized Variations</h4>
                        <p>
                            <a href="" className="button button--link">.button--link</a>
                            <a href="" className="button button--sm">.button--sm</a>
                            <a href="" className="button button--lg">.button--lg</a>
                        </p>
                        <p>
                            <a href="" className="button button--block">.button--block</a>
                        </p>
                    </section>
                </main>
            </div>
        );
    }
}