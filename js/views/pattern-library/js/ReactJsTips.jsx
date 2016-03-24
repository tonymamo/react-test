import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from '../Nav.jsx';

export default class ReactJsTips extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pattern-library">
                <Nav />
                <main className="pattern-library__content">
                    <article>
                        <h2 className="pattern-library__heading">ReactJS Tips</h2>
                    </article>
                    <section>
                        <h3>BaseComponent</h3>

                        <p> BaseComponent automagically binds each function call to "this", making it easier to call your
                        functions in your ES6 class.</p>
                        <pre>
                            <code>
                                {'import BaseComponent from '}'{'../../../../controls/BaseComponent.jsx'}'{';'}{'\n'}{'\n'}
                                {'export default class CarrierDetails extends BaseComponent {'}{'\n'}
                                {'}'}

                            </code>
                        </pre>
                    </section>
                </main>
            </div>

        );
    }
}