import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class Colors extends Component {
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
                    <h2 className="pattern-library__heading">Colors</h2>

                    <section>
                        <h3>Brand Palette</h3>
                        <div className="grid">
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette brand-primary">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$brand-primary</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette brand-secondary">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$brand-secondary</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette accent-one">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$accent-one</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette accent-two">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$accent-two</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette brand-success">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$brand-success</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette brand-info">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$brand-info</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette brand-warning">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$brand-warning</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette brand-danger">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$brand-danger</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>





                    <section>
                        <h3>Grayscale</h3>
                        <div className="grid">
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette black">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$black</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette gray-dark">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$gray-dark</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette gray">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$gray</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette gray-light">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$gray-light</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette gray-lighter">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$gray-lighter</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette gray-lightest">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$gray-lightest</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette white">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$white</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>





                    <section>
                        <h3>Defaults</h3>
                        <p><span className="label label--warning">Note</span> These colors typically will be referencing a color variable above, so use discretion when choosing whether to use something like <code>$base-border-color</code> over <code>$gray-lighter</code> as a variable reference. They may compile to the same thing, but think about potential maintenance in the future. For example, try to limit the <code>$base-border-color</code> usage to styling a border color on an element, and use the <code>$gray-lighter</code> variable for a background or text color.</p>
                        <div className="grid">
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette body-bg">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$body-bg</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette body-color">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$body-color</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette base-border-color">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$base-border-color</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette text-light">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$text-light</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette text-dark">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$text-dark</code>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette link-color">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$link-color</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="grid__md-4">
                                <div className="card">
                                    <div className="card__block">
                                        <div className="palette link-hover-color">
                                        </div>
                                    </div>
                                    <div className="card__footer align--center text--truncate">
                                        <code>$link-hover-color</code>
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