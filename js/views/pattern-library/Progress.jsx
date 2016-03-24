import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class Progress extends Component {
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
                    <h2 className="pattern-library__heading">Progress</h2>

                    <section>
                        <h3>Progress Bars</h3>
                        <p>These provide up-to-date feedback on the progress of a workflow or action, utilizing the HTML5 <code>&lt;progress&gt;</code> element. Mix and match the modifier classes to achieve striped, colored variations.</p>
                    </section>

                    

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
                                    <td>.progress</td>
                                    <td>Add basic styling to <code>&lt;progress&gt;</code> element</td>
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
                                    <td>(none)</td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <thead className="thead--default">
                                <tr>
                                    <th>Modifiers</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>.progress--striped</td>
                                    <td>Add stripe effect to value</td>
                                </tr>
                                <tr>
                                    <td>.progress--success</td>
                                    <td>Success color variation</td>
                                </tr>
                                <tr>
                                    <td>.progress--info</td>
                                    <td>Informative color variation</td>
                                </tr>
                                <tr>
                                    <td>.progress--warning</td>
                                    <td>Warning color variation</td>
                                </tr>
                                <tr>
                                    <td>.progress--danger</td>
                                    <td>Danger color variation</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h3>Markup</h3>
                        <pre>
                            <code>
{`<progress className="progress progress--striped progress--warning" value="75" max="100">75%</progress>`}
                            </code>
                        </pre>
                    </section>

                    <section>
                        <h3>Example</h3>
                        <div className="grid">
                            <div className="grid__md-4">
                                <p><strong>Default at different values</strong></p>
                                <progress className="progress" value="0" max="100">0%</progress>
                                <progress className="progress" value="25" max="100">25%</progress>
                                <progress className="progress" value="50" max="100">50%</progress>
                                <progress className="progress" value="75" max="100">75%</progress>
                                <progress className="progress" value="100" max="100">100%</progress>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Validation Color Variations</strong></p>
                                <progress className="progress progress--success" value="25" max="100">25%</progress>
                                <progress className="progress progress--info" value="50" max="100">50%</progress>
                                <progress className="progress progress--warning" value="75" max="100">75%</progress>
                                <progress className="progress progress--danger" value="100" max="100">100%</progress>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Striped Variations</strong></p>
                                <progress className="progress progress--striped" value="10" max="100">10%</progress>
                                <progress className="progress progress--striped progress--success" value="25" max="100">25%</progress>
                                <progress className="progress progress--striped progress--info" value="50" max="100">50%</progress>
                                <progress className="progress progress--striped progress--warning" value="75" max="100">75%</progress>
                                <progress className="progress progress--striped progress--danger" value="100" max="100">100%</progress>
                            </div>
                            
                            {/* animated class not working, revisit later if needed*/}
                            {/*<div className="grid__md-3">
                                <p><strong>Animated</strong></p>
                                
                                <progress className="progress progress--striped progress--animated" value="25" max="100">25%</progress>
                            </div>*/}
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}