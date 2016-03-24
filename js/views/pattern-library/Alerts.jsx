import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class Alerts extends Component {
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
                    <h2 className="pattern-library__heading">Alerts</h2>
                    <p>Alerts are quick messages to notify the user of success, errors, warnings, and other information. They are set up to fade away after a few seconds, can be dismissable via a close button, can contain helpful links, and come in four different color variations. These variations are for Success, Error/Danger, Information, and Warning.</p>

                    <section>
                        <h3>React Usage</h3>
                        <p>Alerts are available as a standalone React component, but they are best used as part of the Global Alerts system built in to application. In this system, the alerts automatically queue up in order and only show one at a time to the user. No matter which page the user is on, the Global Alerts are part of the Single Page Application architecture and can accept an alert from anywhere.</p>
                        <p>To propogate an alert to the Global Alerts container, simply pass some properties in one of the lifecycles provided by React, such as <code>componentDidMount</code> or <code>componentDidUpdate</code>. In the following example, we will pass a Success Alert with a message to the Global Alerts container on <code>componentDidUpdate</code>, as if we just submitted a form and the POST was successful.</p>
                        <p>The first step is to add the <code>addAlert</code> function to the Container for the page we are adding the alert to. This is handled by importing the action from the corresponding ducks file (in this case, globalAlerts.jsx), and then exporting the addAlert.</p>

                        <h5>Container.jsx</h5>
                        <pre>
                            <code>
{`import { addAlert } from '../redux/ducks/globalAlerts.jsx';

export default connect(
    (dispatch) => ({
        addAlert: (alert) => dispatch(addAlert(alert))
    })
)(Container);`}             
                            </code>
                        </pre>
                        <p>Then, the second step is to simply wrap some logic regarding a successful post around the addAlert function, and then pass the <code>type</code> and <code>message</code> as props to the Alert. The alert will automatically be added to the Global Alert queue if there are already more alerts firing.</p>
                        <h5>Render.jsx</h5>
                        <pre>
                            <code>
{`componentDidUpdate(previousProps, previousState) {
    const id = this.props.params.id;

    if (!previousProps.example.postSuccess && this.props.example.postSuccess) {
        this.props.addAlert({type: "success", message: "Save successful!"});
    }
}
`}
                            </code>
                        </pre>
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
                                    <td>.alert</td>
                                    <td>For showing alert messages</td>
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
                                    <td>.alert__link</td>
                                    <td>Provides better visual distinction to links within an alert</td>
                                </tr>
                                <tr>
                                    <td>.alert__close</td>
                                    <td>Close button within a <code>.alert--dismissable</code></td>
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
                                    <td>.alert--hidden</td>
                                    <td>Applied by default to keep alert hidden until called, and after clicking close button</td>
                                </tr>
                                <tr>
                                    <td>.alert--success</td>
                                    <td>Success state</td>
                                </tr>
                                <tr>
                                    <td>.alert--info</td>
                                    <td>Info state</td>
                                </tr>
                                <tr>
                                    <td>.alert--warning</td>
                                    <td>Warning state</td>
                                </tr>
                                <tr>
                                    <td>.alert--danger</td>
                                    <td>Danger/error state</td>
                                </tr>
                                <tr>
                                    <td>.alert--dismissable</td>
                                    <td>Provides extra padding for a <code>.alert__close</code> button</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h3>Markup</h3>
                        <pre>
                            <code>
                                {'<div className="alert alert--danger alert--dismissable" role="alert">'}{'\n'}
                                {'    <button type="button" className="alert__close" aria-label="Close">'}{'\n'}
                                {'        <span aria-hidden="true">&times;</span>'}{'\n'}
                                {'        <span className="sr-only">Close</span>'}{'\n'}
                                {'    </button>'}{'\n'}
                                {'    <p><strong>Alert!</strong> Message text and <a href="" className="alert__link">link</a>.</p>'}{'\n'}
                                {'</div>'}
                            </code>
                        </pre>
                    </section>

                    <section>
                        <h3>Examples</h3>
                        <div className="alert alert--success alert--dismissable" role="alert">
                            <button type="button" className="alert__close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <p>
                                <strong>Well done!</strong> You successfully read <a href="" className="alert__link">this important alert message</a>.
                            </p>
                        </div>
                        <div className="alert alert--info alert--dismissable" role="alert">
                            <button type="button" className="alert__close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <p>
                                <strong>Heads up!</strong> This <a href="" className="alert__link">alert needs your attention</a>, but it is not super important.
                            </p>
                        </div>
                        <div className="alert alert--warning alert--dismissable" role="alert">
                            <button type="button" className="alert__close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <p>
                                <strong>Warning!</strong> Better check yourself, you are <a href="" className="alert__link">not looking too good</a>.
                            </p>
                        </div>
                        <div className="alert alert--danger alert--dismissable" role="alert">
                            <button type="button" className="alert__close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <p>
                                <strong>Oh snap!</strong> <a href="" className="alert__link">Change a few things up</a> and try submitting again.
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}