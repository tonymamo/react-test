import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class Utilities extends Component {
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
                    <h2 className="pattern-library__heading">Utilities</h2>
                    <p>Use utility classes as much as possible in the HTML markup to avoid repeating common properties in the CSS. These classes are typically single purpose, and designed specifically to be used in conjuction with other classes. Repeated selectors in the markup is gzipped and therefore much faster than repeated declarations in the CSS.</p>





                    <section>
                        <h3>Content Utility Classes</h3>
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
                                        <td>.clearfix</td>
                                        <td>Clear floats with the micro clearfix by Nicolas Gallagher</td>
                                        <td><em>no example</em></td>
                                    </tr>
                                    <tr>
                                        <td>.center-block</td>
                                        <td>Set display to block and use margins to center</td>
                                        <td><span className="align--center center-block">Centered</span></td>
                                    </tr>
                                    <tr>
                                        <td>.float-right</td>
                                        <td>Float an element to the right</td>
                                        <td><p className="float-right">Floated Right</p></td>
                                    </tr>
                                    <tr>
                                        <td>.float-left</td>
                                        <td>Float an element to the left</td>
                                        <td><p className="float-left">Floated Left</p></td>
                                    </tr>
                                </tbody>
                                <thead className="thead--default">
                                    <tr>
                                        <th>Screenreader &amp; Hiding Utility Class Name</th>
                                        <th>Usage</th>
                                        <th>View Source for Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>.sr-only</td>
                                        <td>Hide element but allow screenreaders to read it</td>
                                        <td className="sr-only">.sr-only class applied here</td>
                                    </tr>
                                    <tr>
                                        <td>.sr-only--focusable</td>
                                        <td>Only show when actually focused</td>
                                        <td><a href="" className="sr-only sr-only--focusable">focus me</a></td>
                                    </tr>
                                    <tr>
                                        <td>[hidden] <em>(attribute)</em></td>
                                        <td>HTML5 way of hiding something in the DOM</td>
                                        <td><div hidden></div></td>
                                    </tr>
                                    <tr>
                                        <td>.invisible</td>
                                        <td>Visually hide something without affect its <code>display</code> property</td>
                                        <td><div className="invisible">I am invisible, but still take up space</div></td>
                                    </tr>
                                    <tr>
                                        <td>.text--hide</td>
                                        <td>Replace an element{"'"}s text content with a background image</td>
                                        <td className="text--hide">This text is hidden</td>
                                    </tr>
                                    <tr>
                                        <td>.hidden</td>
                                        <td>Brute force to display: none something with !important</td>
                                        <td><div className="hidden">I am hidden</div></td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                    </section>





                    <section>
                        <h3>Text Utility Classes</h3>
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
                                    <tr>
                                        <td>.text--hide</td>
                                        <td>Replace an element{"'"}s text content with a background image</td>
                                        <td className="text--hide">This text is hidden</td>
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
                                <thead className="thead--default">
                                    <tr>
                                        <th>Background Coloring Class Name</th>
                                        <th>Usage</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>.background--faded</td>
                                        <td>To make a subtle difference in background color</td>
                                        <td className="background--faded">This background is faded</td>
                                    </tr>
                                    <tr>
                                        <td>.background--primary</td>
                                        <td>Make the background be the primary brand color</td>
                                        <td className="background--primary">This background is primary brand color</td>
                                    </tr>
                                    <tr>
                                        <td>.background--success</td>
                                        <td>Make the background be the primary brand color</td>
                                        <td className="background--success">This background is the success brand color</td>
                                    </tr>
                                    <tr>
                                        <td>.background--info</td>
                                        <td>Make the background be the info brand color</td>
                                        <td className="background--info">This background is the info brand color</td>
                                    </tr>
                                    <tr>
                                        <td>.background--warning</td>
                                        <td>Make the background be the warning brand color</td>
                                        <td className="background--warning">This background is the warning brand color</td>
                                    </tr>
                                    <tr>
                                        <td>.background--danger</td>
                                        <td>Make the background be the danger brand color</td>
                                        <td className="background--danger">This background is the danger brand color</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>





                    <section>
                        <h3>Responsive Utility Classes</h3>
                        <div className="responsive-table">
                            <table className="table table--hover table--sm">
                                <thead className="thead--default">
                                    <tr>
                                        <th>Class Name</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>.align--(bp)-left</td>
                                        <td>Align text left at specifed breakpoint and above, where BP is the grid breakpoint</td>
                                    </tr>
                                    <tr>
                                        <td>.align--(bp)-right</td>
                                        <td>Align text right at specified breakpoint and above</td>
                                    </tr>
                                    <tr>
                                        <td>.align--(bp)-center</td>
                                        <td>Center align text at specified breakpoint and above</td>
                                    </tr>
                                    <tr>
                                        <td>.hidden-(bp)-up</td>
                                        <td>Hide something at specified breakpoint and above</td>
                                    </tr>
                                    <tr>
                                        <td>.hidden-(bp)-down</td>
                                        <td>Hide something at specified breakpoint and down</td>
                                    </tr>
                                    <tr>
                                        <td>.embed-responsive</td>
                                        <td>Wrapper used when embedding an iframe, video, or object, to enable it to scale properly</td>
                                    </tr>
                                    <tr>
                                        <td>.embed-responsive__item</td>
                                        <td>Class used on the actual embedded element</td>
                                    </tr>
                                    <tr>
                                        <td>.embed-responsive--<em>X</em></td>
                                        <td>Where <em>X</em> is 21by9, 16by9, or 4by3, which are the aspect ratios of an embedded item</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>





                    <section>
                        <h3>Print Utility Classes</h3>
                        <div className="responsive-table">
                            <table className="table table--hover table--sm">
                                <thead className="thead--default">
                                    <tr>
                                        <th>Class Name</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>.visible-print-block</td>
                                        <td>Display block when printing</td>
                                    </tr>
                                    <tr>
                                        <td>.visibile-print-inline</td>
                                        <td>Display inline when printing</td>
                                    </tr>
                                    <tr>
                                        <td>.visibile-print-inline-block</td>
                                        <td>Display inline-block when printing</td>
                                    </tr>
                                    <tr>
                                        <td>.hidden-print</td>
                                        <td>Hidden when printing</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>





                    <section>
                        <h3>Image Utility Classes</h3>
                        <div className="responsive-table">
                            <table className="table table--hover table--sm">
                                <thead className="thead--default">
                                    <tr>
                                        <th>Class Name</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>.img--fluid</td>
                                        <td>Make an image scale up fully without overflowing</td>
                                    </tr>
                                    <tr>
                                        <td>.img--rounded</td>
                                        <td>Add a large border-radius to an image</td>
                                    </tr>
                                    <tr>
                                        <td>.img--thumbnail</td>
                                        <td>add a border, padding, and other small styling elements</td>
                                    </tr>
                                    <tr>
                                        <td>.img--circle</td>
                                        <td>Make a perfect cirle with an image</td>
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