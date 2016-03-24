import React, {Component} from 'react';
import GlobalModal from '../../controls/GlobalModal.jsx';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class Modals extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="pattern-library">
                <Nav />
                <main className="pattern-library__content">
                    <h2 className="pattern-library__heading">Modals</h2>

                    <section>
                        <h3>Usage</h3>
                        <p>Limit the use of modals to a simple, small transaction with only a few words and up to two action buttons, like Yes/No, Save/Cancel, and so on.</p>
                    </section>

                    <section>
                        <h3>React Component</h3>
                        <p>To use the React Modal component, simply <code>import</code> <em>Modal</em> with the correct path, and use the <code>&lt;Modal /&gt;</code> element. It accepts a few various attributes with parameters for outputting a
                            complete modal:</p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                            <tr>
                                <th>Attribute</th>
                                <th>Parameter</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>stateClass</th>
                                <td>{'{this.state.modalState}'}</td>
                            </tr>
                            <tr>
                                <th>backDrop</th>
                                <td>{'{this.state.backDrop}'}</td>
                            </tr>
                            <tr>
                                <th>heading</th>
                                <td>The text string to go in the modal header</td>
                            </tr>
                            <tr>
                                <th>bodyText</th>
                                <td>The text string to go in the modal body</td>
                            </tr>
                            <tr>
                                <th>btn1Text</th>
                                <td>The text string to go in the first button in the footer</td>
                            </tr>
                            <tr>
                                <th>btn1Class</th>
                                <td>The CSS class name(s) for the first button</td>
                            </tr>
                            <tr>
                                <th>btn1Click</th>
                                <td>The action for the first button</td>
                            </tr>
                            <tr>
                                <th>btn2Text</th>
                                <td>The text string to go in the second button in the footer</td>
                            </tr>
                            <tr>
                                <th>btn2Class</th>
                                <td>The CSS class name(s) for the second button</td>
                            </tr>
                            <tr>
                                <th>btn2Click</th>
                                <td>The action for the second button</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h3>React Component Markup</h3>
                        <pre>
                            <code>
                                {'import Modal from "../../controls/GlobalModal.jsx";'}{'\n'}
                                {'\n'}
                                {'<Modal ref="refToModal"'}{'\n'}
                                {'    heading="Modal Example"'}{'\n'}
                                {'    bodyText="Your modal text goes here"'}{'\n'}
                                {'    btn1Text="Button 1"'}{'\n'}
                                {'    btn1Class="button button--danger"'}{'\n'}
                                {'    btn1Click= {this.btn1}'}{'\n'}
                                {'    btn2Text="Button 2"'}{'\n'}
                                {'    btn2Class="button button--success"'}{'\n'}
                                {'    btn2Click= {this.btn2}'}{'\n'}
                                {'/>'}
                            </code>
                        </pre>
                    </section>

                    <section>
                        <h3>HTML Version</h3>
                        <p>The modal can be used without the React component as well. First thing you need to do is include a <code>div</code> for the Backdrop and then a sibling <code>div</code> for the Modal itself. You will also have to hook up
                            the Javascipt for the close action and the buttons.</p>
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
                                <td>.modal</td>
                                <td>To show small messages or transactions that require attention</td>
                            </tr>
                            <tr>
                                <td>.modal-backdrop</td>
                                <td>Sibling of <code>.modal</code> to provide screen takeover</td>
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
                                <td>.modal__dialog</td>
                                <td>Provides the spacing and layout of the modal.</td>
                            </tr>
                            <tr>
                                <td>.modal__content</td>
                                <td>Provides background, border, and rounded corners for the modal.</td>
                            </tr>
                            <tr>
                                <td>.modal__header</td>
                                <td>Container for the <code>.modal__heading</code> and <code>.close</code> button.</td>
                            </tr>
                            <tr>
                                <td>.modal__heading</td>
                                <td>The text for the <code>.modal__header</code></td>
                            </tr>
                            <tr>
                                <td>.modal__body</td>
                                <td>The area to put informational text in the modal.</td>
                            </tr>
                            <tr>
                                <td>.modal__footer</td>
                                <td>Container for the buttons or links for the modal.</td>
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
                                <td>.modal--open</td>
                                <td>To toggle the modal to a visible state</td>
                            </tr>
                            <tr>
                                <td>.modal--close</td>
                                <td>To toggle the modal to a hidden state</td>
                            </tr>
                            <tr>
                                <td>.modal--lg</td>
                                <td>A larger, wider modal</td>
                            </tr>
                            <tr>
                                <td>.modal--sm</td>
                                <td>A narrow modal</td>
                            </tr>
                            <tr>
                                <td>.modal-backdrop--open</td>
                                <td>To toggle the modal-backdrop to a visible state</td>
                            </tr>
                            <tr>
                                <td>.modal-backdrop--close</td>
                                <td>To toggle the modal-backdrop to a hidden state</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h3>Markup</h3>
                        <pre>
                            <code>
                                {'// Modal Backdrop'}{'\n'}
                                {'<div className="modal-backdrop modal-backdrop--open"></div>'}{'\n'}
                                {'\n'}
                                {'// The Modal'}{'\n'}
                                {'<div className="modal modal--open">'}{'\n'}
                                {'    <div className="modal__dialog" role="document">'}{'\n'}
                                {'        <div className="modal__content">'}{'\n'}
                                {'            <div className="modal__header">'}{'\n'}
                                {'                <button type="button" className="close" aria-label="Close">'}{'\n'}
                                {'                    <span aria-hidden="true">&times;</span><span className="sr-only">Close</span>'}{'\n'}
                                {'                </button>'}{'\n'}
                                {'                <h4 className="modal__heading">...</h4>'}{'\n'}
                                {'            </div>'}{'\n'}
                                {'            <div className="modal__body">...</div>'}{'\n'}
                                {'            <div className="modal__footer">'}{'\n'}
                                {'                <button type="button" className="button">Button</button>'}{'\n'}
                                {'            </div>'}{'\n'}
                                {'        </div>'}{'\n'}
                                {'    </div>'}{'\n'}
                                {'</div>'}
                            </code>
                        </pre>
                    </section>

                    <section>
                        <h3>Example</h3>
                        <div className="modal-example">
                            <div className="modal-backdrop modal-backdrop--open"></div>
                            <div className="modal modal--open">
                                <div className="modal__dialog" role="document">
                                    <div className="modal__content">
                                        <div className="modal__header">
                                            <button type="button" className="close" aria-label="Close">
                                                <span aria-hidden="true">&times;</span><span className="sr-only">Close</span>
                                            </button>
                                            <h4 className="modal__heading">Modal Heading</h4>
                                        </div>
                                        <div className="modal__body">Modal content</div>
                                        <div className="modal__footer">
                                            <button type="button" className="button button--danger">Cancel</button>
                                            <button type="button" className="button button--success">Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}
