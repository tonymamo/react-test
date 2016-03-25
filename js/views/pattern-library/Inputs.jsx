import React, {Component} from 'react';
import { Link } from 'react-router';

import Nav from './Nav.jsx';
import Input from '../../controls/form/Input.jsx';

export default class Inputs extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="pattern-library">
                <Nav />
                <main className="pattern-library__content">
                    <h2 className="pattern-library__heading">Inputs</h2>

                    <section>
                        <h3>Usage</h3>
                        <p>Import the control from ./js/controls/form/Input.jsx</p>
                        <pre>
                            <code>import Input from './js/controls/form/Input.jsx'</code>
                        </pre>
                        <p>Use this {'<Input />'} anywhere that you would use a standard html {'<input />'} control would be used.</p>
                        <p>-- label, type and field attributes have to be specified. But then from there your field validation will pick up and show in an error text below the input.</p>
                        <br/>
                        <Input field={''} label="Example Input Label" type="text"/>

                    </section>
                </main>
            </div>
        );
    }
}
