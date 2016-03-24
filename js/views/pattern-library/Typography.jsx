import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class Typography extends Component {
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
                    <h2 className="pattern-library__heading">Typography</h2>

                    <section>
                        <h3>Font Families</h3>
                        <div className="grid font-families">
                            <div className="grid__md-4">
                                <h4>Sans Serif</h4>
                                <hr />
                                <p className="font-family-sans-serif">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&amp;*()</p>
                            </div>
                            <div className="grid__md-4">
                                <h4>Serif</h4>
                                <hr />
                                <p className="font-family-serif">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&amp;*()</p>
                            </div>
                            <div className="grid__md-4">
                                <h4>Monospace</h4>
                                <hr />
                                <p className="font-family-monospace">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&amp;*()</p>
                            </div>
                        </div>
                    </section>




                    <section>
                        <h3>Text Defaults</h3>
                        <div className="grid">
                            <div className="grid__md-4">
                                <h4>Headings</h4>
                                <hr />
                                <h1>h1 or .alpha</h1>
                                <h2>h2 or .beta</h2>
                                <h3>h3 or .gamma</h3>
                                <h4>h4 or .delta</h4>
                                <h5>h5 or .epsilon</h5>
                                <h6>h6 or .zeta</h6>
                            </div>
                            <div className="grid__md-4">
                                <h4>Paragraph Text</h4>
                                <hr />
                                <p>This line of text is the standard paragprah-level styling treatment.</p>
                                <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                <p><u>This line of text will render as underlined</u></p>
                                <p><small>This line of text is meant to be treated as fine print.</small></p>
                                <p><strong>This line rendered as bold text.</strong></p>
                                <p><em>This line rendered as italicized text.</em></p>
                            </div>
                            <div className="grid__md-4">
                                <h4>Lists</h4>
                                <hr />
                                <ul>
                                    <li>Unordered List Item
                                        <ul>
                                            <li>Nested List Item</li>
                                        </ul>
                                    </li>
                                    <li>Unordered List Item</li>
                                </ul>
                                <ol>
                                    <li>Ordered List Item
                                        <ol>
                                            <li>Nested List Item</li>
                                        </ol>
                                    </li>
                                    <li>Ordered List Item</li>
                                    <li>Ordered List Item</li>
                                </ol>
                                <dl>
                                    <dt>Definition Title</dt>
                                    <dd>Definition description</dd>
                                    <dt>Definition Title 2</dt>
                                    <dd>Definition description 2</dd>
                                </dl>
                            </div>
                        </div>
                    </section>





                    <section>
                        <h3>Typographic Helpers</h3>
                        <div className="grid">
                            <div className="grid__md-4">
                                <h4>Blockquote</h4>
                                <hr />
                                <p>Standard and reversed .blockquote options:</p>
                                <blockquote className="blockquote">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>

                                <blockquote className="blockquote blockquote--reverse">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>
                            </div>

                            <div className="grid__md-4">
                                <h4>Abbreviations</h4>
                                <hr />
                                <p>Wrap abbreviations in an <code>&lt;abbr&gt;</code> with a title attribute.</p>
                                <p><abbr title="attribute">attr</abbr></p>
                                <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
                            </div>

                            <div className="grid__md-4">
                                <h4>Lead</h4>
                                <hr />
                                <p>Make a paragraph of text (or other semantic text element) stand out by appling the .lead class.</p>
                                <p className="lead">
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                                </p>
                            </div>
                        </div>
                    </section>





                    <section>
                        <h3>List Options</h3>
                        <div className="grid">
                            <div className="grid__md-6">
                                <h4>Unstyled</h4>
                                <hr />
                                <p>Remove the default bullet/number styling and margin/padding on list items with the <code>.list-unstyled</code> class.</p>
                                <ul className="list-unstyled">
                                    <li>Unstyled List Item</li>
                                    <li>Unstyled List Item</li>
                                    <li>Unstyled List Item</li>
                                </ul>
                            </div>
                            <div className="grid__md-6">
                                <h4>Inline</h4>
                                <hr />
                                <p>Place list items on a single line with the <code>.list-inline</code> class.</p>
                                <ul className="list-inline">
                                    <li>Inline Item 1</li>
                                    <li>Inline Item 2</li>
                                    <li>Inline Item 3</li>
                                </ul>
                            </div>
                        </div>
                    </section>





                    <section>
                        <h3>Text Options</h3>
                        <div className="responsive-table">
                            <table className="table table--hover table--sm">
                                <thead className="thead--default">
                                    <tr>
                                        <th>Alignment Class Name</th>
                                        <th>Usage</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>.align--left</td>
                                        <td>Align text to the left within its container</td>
                                        <td className="align--left">This text is aligned left</td>
                                    </tr>
                                    <tr>
                                        <td>.align--center</td>
                                        <td>Align text to the center within its container</td>
                                        <td className="align--center">This text is aligned to the center</td>
                                    </tr>
                                    <tr>
                                        <td>.align--right</td>
                                        <td>Align text to the right within its container</td>
                                        <td className="align--right">This text is aligned right</td>
                                    </tr>
                                    <tr>
                                        <td>.align--justify</td>
                                        <td>Justify text within its container</td>
                                        <td className="align--justify">This text is justified</td>
                                    </tr>
                                </tbody>
                                <thead className="thead--default">
                                    <tr>
                                        <th>Text Transformation Class Name</th>
                                        <th>Usage</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>.text--nowrap</td>
                                        <td>Prevent text from wrapping to multiple lines</td>
                                        <td className="text--nowrap">This text will not wrap</td>
                                    </tr>
                                    <tr>
                                        <td>.text--truncate</td>
                                        <td>Truncate text within a block element and append an ellipsis</td>
                                        <td><div className="text--truncate truncate-example">This text will get truncated if it runs out of space</div></td>
                                    </tr>
                                    <tr>
                                        <td>.text--lowercase</td>
                                        <td>Transform text to lowercase regardless of how it is set</td>
                                        <td className="text--lowercase">THIS TEXT WAS SET IN ALL UPPERCASE</td>
                                    </tr>
                                    <tr>
                                        <td>.text--uppercase</td>
                                        <td>Transform text to uppercase regardless of how it is set</td>
                                        <td className="text--uppercase">this text was set in all lowercase</td>
                                    </tr>
                                    <tr>
                                        <td>.text--capitalize</td>
                                        <td>Transform text to all capital letters regardless of how it is set</td>
                                        <td className="text--capitalize">each word is not capitalized in the DOM</td>
                                    </tr>
                                </tbody>
                                <thead className="thead--default">
                                    <tr>
                                        <th>Text Coloring Class Name</th>
                                        <th>Usage</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>.text--muted</td>
                                        <td>To make a subtle difference in text</td>
                                        <td className="text--muted">This text will have a muted appearance</td>
                                    </tr>
                                    <tr>
                                        <td>.text--primary</td>
                                        <td>Display text in the primary brand color</td>
                                        <td className="text--primary">This text is the primary brand color</td>
                                    </tr>
                                    <tr>
                                        <td>.text--success</td>
                                        <td>Use color to portray a positive or successful message</td>
                                        <td className="text--success">This text is a positive or successful message</td>
                                    </tr>
                                    <tr>
                                        <td>.text--info</td>
                                        <td>Use color to portray an informative message</td>
                                        <td className="text--info">This text is an informational message</td>
                                    </tr>
                                    <tr>
                                        <td>.text--warning</td>
                                        <td>Use color to portray a warning message</td>
                                        <td className="text--warning">This text is a warning message</td>
                                    </tr>
                                    <tr>
                                        <td>.text--danger</td>
                                        <td>Use color to portray an error or negative message</td>
                                        <td className="text--danger">This text is an error or negative message</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}