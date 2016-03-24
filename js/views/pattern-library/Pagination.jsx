import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class Pagination extends Component {
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
                    <h2 className="pattern-library__heading">Pagination</h2>
                    <section>
                        <h3>Usage</h3>
                        <p>Pagination takes a list of results and breaks it up in to smaller, more manageable-sized set as to not overwhelm the user. By adding controls at the bottom of the table of items, as in a <Link to={'/pattern-library/managed-item-list'}>Managed Item List</Link>, the user can peruse through the list "pages" by either using directional arrows or page numbers.</p>
                        <p>The Pagination component is so powerful, yet so simple and easy to use, as it automatically handles all of the math and logic to determine how many pages there are, which page you are on, the enabled/disabled states for directional arrows, and even supports the sorting of table columns by header in ascending and descending order.</p>
                        <p>One other feature of Pagination is the ability to use either client-side or server-side logic to handle the pagination. The default is to use client-side, but you can opt-in to server-side by declaring <code>useServicesPagination</code> on the component, which returns the numbers needed to properly configure the pagination.</p>
                    </section>

                    <section>
                        <h3>React Component</h3>

                        <p>This React component is intended to be used primarily with the Managed Item List, but is still available to use elsewhere in the application as a standalone component. First let's take a look at using it within the Managed Item List component.</p>
                        <h4>Usage with Managed Item List</h4>
                        <p>Pagination ties in effortlessly by simply declaring on the <code>ManagedItemList</code> component if you would like to use pagination or not (<code>usePagination="true"</code>, and then the number of pages to paginate after (<code>itemsPerPage="x"</code>).</p>
                        <pre>
                            <code>
{`<ManagedItemList 
    items={items} // each row in the table
    usePagination="true" // enables Pagination for this table
    itemsPerPage="10" // configurable number for how many items for each page
/>`}
                            </code>
                        </pre>

                        <h4>Usage as Standalone component</h4>
                        <p>Pagination can be used without a ManagedItemList if necessary, and is still pretty simple to setup. The configuration requires only three parameters, <code>numberOfPages</code>, <code>activePageNumber</code> (managed with a <code>state</code>), and a function for changing page with <code>onChangePage</code>.
                        </p>
                        <pre>
                            <code>
{`<Pagination 
    numberOfPages={numberOfPages} 
    activePageNumber={this.state.activePageNumber} 
    onChangePage={this.setActivePageNumber.bind(this)}
/>`}
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
                                    <td>.pagination</td>
                                    <td>Container for <code>.pagination__item</code>s</td>
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
                                    <td>.pagination__item</td>
                                    <td>Used for styling each item in the pagination list</td>
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
                                    <td>.pagination__item--active</td>
                                    <td>Active state on a <code>.pagination__item</code></td>
                                </tr>
                                <tr>
                                    <td>.pagination__item--disabled</td>
                                    <td>Disabled state on a <code>.pagination__item</code></td>
                                </tr>
                                <tr>
                                    <td>.pagination--sm</td>
                                    <td>Smaller version of <code>.pagination</code></td>
                                </tr>
                                <tr>
                                    <td>.pagination--lg</td>
                                    <td>Larger version of <code>.pagination</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h3>Markup</h3>
                        <pre>
                            <code>
                                {`
<nav>
    <ul className="pagination">
        <li className="pagination__item pagination__item--disabled">
            <a href="#" aria-label="First">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">First</span>
            </a>
        </li>
        <li className="pagination__item pagination__item--disabled">
            <a href="#" aria-label="Previous">
                <span aria-hidden="true">&lsaquo;</span>
                <span className="sr-only">Previous</span>
            </a>
        </li>
        <li className="pagination__item pagination__item--active"><a href="#">1</a></li>
        <li className="pagination__item"><a href="#">2</a></li>
        <li className="pagination__item"><a href="#">3</a></li>
        <li className="pagination__item"><a href="#">4</a></li>
        <li className="pagination__item"><a href="#">5</a></li>
        <li className="pagination__item">
            <a href="#" aria-label="Next">
                <span aria-hidden="true">&rsaquo;</span>
                <span className="sr-only">Next</span>
            </a>
        </li>
        <li className="pagination__item">
            <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Last</span>
            </a>
        </li>
    </ul>
</nav>`}
                            </code>
                        </pre>
                    </section>

                    <section>
                        <h3>Example</h3>
                        <nav>
                            <ul className="pagination">
                                <li className="pagination__item pagination__item--disabled">
                                    <a href="" aria-label="First">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">First</span>
                                    </a>
                                </li>
                                <li className="pagination__item pagination__item--disabled">
                                    <a href="" aria-label="Previous">
                                        <span aria-hidden="true">&lsaquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="pagination__item pagination__item--active"><a href="">1</a></li>
                                <li className="pagination__item"><a href="">2</a></li>
                                <li className="pagination__item"><a href="">3</a></li>
                                <li className="pagination__item"><a href="">4</a></li>
                                <li className="pagination__item"><a href="">5</a></li>
                                <li className="pagination__item">
                                    <a href="" aria-label="Next">
                                        <span aria-hidden="true">&rsaquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                                <li className="pagination__item">
                                    <a href="" aria-label="Last">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Last</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </main>
            </div>
        );
    }
}