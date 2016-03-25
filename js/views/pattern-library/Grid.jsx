import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class Grid extends Component {
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
                    <h2 className="pattern-library__heading">Grid</h2>

                    <section>
                        <h3>About the Grid</h3>
                        <p>The grid system is a simple and effective way to lay out content with responsive design in mind. It’s mobile-first approach is based on a 12 column layout and has multiple tiers, one for each media query ranging from extra small to extra large (XS, SM, MD, LG, and XL), which allows you to use multiple classes to define when and how the grid collapses at each breakpoint. The grid is able to be nested within other grids, and keeps a consistent gutter throughout. The grid system utilizes flexbox layout by default, but can be float-based with a single variable change in the Sass variables file. It also supplies modifier classes for offsets, as well as various flex properties like centering, source order switching, and more.</p>
                    </section>

                    <section>
                        <h3>How to Use the Grid</h3>
                        <ul>
                            <li>The grid is based on a system of rows and columns. Think of a row as a <code>&lt;tr&gt;</code>, and the columns inside the row as <code>&lt;td&gt;</code>s.</li>
                            <li>Each new row for the grid starts with the <code>.grid</code> class name, which would be the Block in BEM naming.</li>
                            <li>Grid Elements in BEM are notated as such: <code>.grid__xx-Y</code>, where <em>xx</em> is your grid tier (see below) and <em>Y</em> is your column size. For example, <code>.grid__md-6</code> is a 6-wide column (or 50% of 12) that is collapsed until the MD grid breakpoint, at which point it becomes 50%.</li>
                            <li>Modifiers included options to offset, push, and pull, and are used in conjunction with an Element class. An example modifier class is <code>.grid__md--offset-2</code>. This means at the MD breakpoint and above to offset the column by 2 columns.</li> 
                            <li>Content should be placed within columns, and only columns may be immediate children of rows.</li>
                            <li>Column classes indicate the number of columns you’d like to use out of the possible 12 per row. It is fine to have less than a total of 12, but no more than 12 are allowed.</li>
                            <li>Columns use percentages for their widths, so they’re always fluid and sized relative to their parent element.</li>
                            <li>Columns have horizontal padding to create the gutters between individual columns.</li>
                            <li>There are five grid tiers, one for each responsive breakpoint: extra small, small, medium, large, and extra large.</li>
                            <li>Grid tiers are based on minimum widths, meaning they apply to that one tier and all those above it (e.g., <code>.grid__sm-4</code> applies to small, medium, large, and extra large devices).</li>
                            <li>For columns that never collapse, use the XS grid tier only. Since the grid is mobile-first, the columns will always stay at whatever column width you specify on your XS class.</li>
                            <li>You can use one of each grid tier column size on an element, and modify the width for each breakpoint. For example, <code>&lt;div class="grid__sm-6 grid__md-4 grid__lg-2"&gt;</code> means that at the SM grid tier it is 6, at MD it is 4, and LG and above it is 2 columns wide.</li>
                        </ul>
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
                                    <td>.grid</td>
                                    <td>Creates a self-clearing row in which to place grid columns</td>
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
                                    <td>.grid__xs-<em>X</em></td>
                                    <td>Grid column, where <em>X</em> can be any number 1-11, for the XS grid tier</td>
                                </tr>
                                <tr>
                                    <td>.grid__sm-<em>X</em></td>
                                    <td>Grid column, where <em>X</em> can be any number 1-11, for the SM grid tier</td>
                                </tr>
                                <tr>
                                    <td>.grid__md-<em>X</em></td>
                                    <td>Grid column, where <em>X</em> can be any number 1-11, for the MD grid tier</td>
                                </tr>
                                <tr>
                                    <td>.grid__lg-<em>X</em></td>
                                    <td>Grid column, where <em>X</em> can be any number 1-11, for the LG grid tier</td>
                                </tr>
                                <tr>
                                    <td>.grid__xl-<em>X</em></td>
                                    <td>Grid column, where <em>X</em> can be any number 1-11, for the XL grid tier</td>
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
                                    <td>.grid__<em>GT</em>--offset-<em>X</em></td>
                                    <td>Creates space in between columns, where <em>GT</em> is your Grid Tier size (xs, sm, md, lg, xl) and <em>X</em> is any number 0-11</td>
                                </tr>
                                <tr>
                                    <td>.grid__<em>GT</em>--pull-<em>X</em></td>
                                    <td>Pulls the grid item <em>X</em> columns to the left, for the specificed <em>GT</em> grid tier size</td>
                                </tr>
                                <tr>
                                    <td>.grid__<em>GT</em>--push-<em>X</em></td>
                                    <td>Pushes the grid item <em>X</em> columns to the right, for the specificed <em>GT</em> grid tier size</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h3>Markup</h3>
                        <pre>
                            <code>
{`<div className="grid">
    <div className="grid__xs-4">.grid__xs-4</div>
    <div className="grid__xs-8">.grid__xs-8</div>
</div>
<div className="grid">
    <div className="grid__sm-6">.grid__sm-6</div>
    <div className="grid__sm-6">.grid__sm-6</div>
</div>
<div className="grid">
    <div className="grid__md-8">.grid__md-8</div>
    <div className="grid__md-4">.grid__md-4</div>
</div>
<div className="grid">
    <div className="grid__lg-9">.grid__lg-9</div>
    <div className="grid__lg-3">.grid__lg-3</div>
</div>
<div className="grid">
    <div className="grid__xl-10">.grid__xl-10</div>
    <div className="grid__xl-2">.grid__xl-2</div>
</div>
<div className="grid">
    <div className="grid__md-4">.grid__md-4</div>
    <div className="grid__md-4 grid__md--offset-4">.grid__md-4 .grid__md--offset-4</div>
</div>
<div className="grid">
    <div className="grid__md-6 grid__md--offset-3">.grid__md-6 .grid__md--offset-3</div>
</div>
<div className="grid">
    <div className="grid__md-3 grid__md--push-3">.grid__md-3 .grid__md--push-3</div>
</div>
<div className="grid">
    <div className="grid__md-3">.grid__md-3</div>
    <div className="grid__md-3 grid__md--offset-6 grid__md--pull-3">.grid__md-3 .grid__md--offset- 6 .grid__md--pull-3</div>
</div>`}
                            </code>
                        </pre>
                    </section>

                    <section>
                        <h3>Example</h3>
                        <div className="grid-example">
                            <div className="grid">
                                <div className="grid__xs-4">.grid__xs-4</div>
                                <div className="grid__xs-8">.grid__xs-8</div>
                            </div>
                            <div className="grid">
                                <div className="grid__sm-6">.grid__sm-6</div>
                                <div className="grid__sm-6">.grid__sm-6</div>
                            </div>
                            <div className="grid">
                                <div className="grid__md-8">.grid__md-8</div>
                                <div className="grid__md-4">.grid__md-4</div>
                            </div>
                            <div className="grid">
                                <div className="grid__lg-9">.grid__lg-9</div>
                                <div className="grid__lg-3">.grid__lg-3</div>
                            </div>
                            <div className="grid">
                                <div className="grid__xl-10">.grid__xl-10</div>
                                <div className="grid__xl-2">.grid__xl-2</div>
                            </div>
                            <div className="grid">
                                <div className="grid__md-4">.grid__md-4</div>
                                <div className="grid__md-4 grid__md--offset-4">.grid__md-4 .grid__md--offset-4</div>
                            </div>
                            <div className="grid">
                                <div className="grid__md-6 grid__md--offset-3">.grid__md-6 .grid__md--offset-3</div>
                            </div>
                            <div className="grid">
                                <div className="grid__md-3 grid__md--push-3">.grid__md-3 .grid__md--push-3</div>
                            </div>
                            <div className="grid">
                                <div className="grid__md-3">.grid__md-3</div>
                                <div className="grid__md-3 grid__md--offset-6 grid__md--pull-3">.grid__md-3 .grid__md--offset- 6 .grid__md--pull-3</div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}