import React, {Component} from 'react';
import { Link } from 'react-router';

import Nav from './Nav.jsx';
import ManagedItemList from '../../controls/ManagedItemList.jsx';

export default class ManagedItemListPL extends Component {
    constructor(props, context) {
        super(props, context);
    }

    cloneThing() {
        // do nothing
    }

    toggle() {
        // do nothing
    }

    render() {
        const thing = { 
            items: [
                {   
                    ID: '1234',
                    Name: 'Item1',
                    Status: 'Active'
                },
                {   
                    ID: '5678',
                    Name: 'Item2',
                    Status: 'Pending'
                },
                {   
                    ID: '9012',
                    Name: 'Item3',
                    Status: 'Disabled'
                }
            ],
            headers: [
                {
                    property: 'ID',
                    text:     'ID'
                },
                {
                    property: 'Name',
                    text:     'Name'
                },
                {
                    property: 'Status',
                    text:     'Status'
                }
            ],
            rowActions: [
                {
                    route:     '',
                    params:    {},
                    className: 'text--info',
                    text:      'Edit',
                    iconClass: 'pencil',
                    hasAccess: true
                },
                {
                    type:      'button',
                    onClick:   'cloneThing',
                    className: 'text--success',
                    text:      'Copy',
                    iconClass: 'copy',
                    hasAccess: true
                }
            ]
        };

        return (
            <div className="pattern-library">
                <Nav />
                <main className="pattern-library__content">
                    <h2 className="pattern-library__heading">Managed Item List</h2>

                    <section>
                        <h3>About the Managed Item List</h3>
                        <p>Since our Merlin application is very data-centric and often needs to display large lists of data, the <code>&lt;ManagedItemList /&gt;</code> was created as a <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.asd0xca0e">"dumb" component</a> to pass data into and then display it. It is a dumb or "presentational" component in the sense that it has no dependencies like Redux actions, stores, doesn't "know" what data will be passed in to it, and does not have its own state. However, it is a highly configurable component, containing options for Pagination, sortable columns, adding Action buttons, selectable rows, and more.</p>
                    </section>




                    <section>
                        <h3>Usage</h3>
                        <p>There are two main ways to use the Managed Item List:</p>
                        <ol>
                            <li><code>@import</code> the component directly on the page you wish to display it, and then pass in the data and any options you want it to have.</li>
                            <li>Create a new "smart component" file to connect with Redux to the ManagedItemList, which will then pass the state via props to render the UI.</li>
                        </ol> 
                        <p>We will go over each option more in depth below, as well as all of the available options and required attributes to render this component.</p>

                        <hr />

                        <h4>Importing the ManagedItemList</h4>
                        <p>The first step using the @import method is to get the component in to your view. Below, you can see we import the component from the /controls directory. Next, we have to specify the data we want to use. In this example, we are grabbing something called "things" from this.props, which we can assume will be an object with an array of items coming back from a service or elsewhere. After that, we must specify at least one header for the table to use as a column heading, along with any action buttons if desired (more on that <a href="#actions">here</a>). Lastly, we need to return the component and pass in our data using the <code>items</code> attribute on the ManagedItemList itself.</p>
                        <pre>
                            <code>
{`import ManagedItemList from 'path/to/controls/ManagedItemList.jsx';

render() {
    const things = { 
        items: [...],
        headers: [
            {
                property: 'field1',
                text:     'Column Heading Example'
            }
        ]
    };

    return (
        <ManagedItemList items={things.items} headers={things.headers}/>
    );
}`}
                            </code>
                        </pre>

                        <hr />

                        <h4>New Smart Component File</h4>
                        <p>In this method, we will create a new file (named ManagedThingList.jsx in this example) that will point to the ManagedItemList component, and then import our newly created file in another view (ViewAllThings.jsx) to actually put it on the page. The first step is to import a few items. We need the Component and Connect items from React, and then also a pointer to the ManagedItemList itself. Next, we can link up the state and define the <code>items</code> that will make up the list. In this example, we are using a service that returns "thing". After that, we specify two columns via the headers; this is essentially linking the database property to the column header's text for each row in the table. Following that, we are providing two row actions: a link to another route, and also a button to fire off some functionality. Don't worry about the specifics of that yet, it is explained <a href="#actions">down here</a>.</p>
                        <h5>ManagedThingList.jsx</h5>
                        <pre>
                            <code>
{`import { Component } from 'react';
import { connect } from 'react-redux';

import ManagedItemList from 'path/to/controls/ManagedItemList.jsx';

export default connect(
    (state) => ({
        isFetching: state.thing.isFetching,
        items: state.thing.items,

        headers: [
            {
                property: 'field1',
                text: 'Field 1'
            },
            {
                property: 'field2',
                text: 'Field 2'
            } 
        ],
        rowActions: [
            {
                route:     '/path/to/view/:thingId',
                params:    {
                    ':thingId': 'thingId'
                },
                className: 'text--info',
                text:      'Edit',
                iconClass: 'pencil',
                hasAccess: true
            },
            {
                type:      'button',
                onClick:   'cloneThing',
                className: 'text--success',
                text:      'Copy',
                iconClass: 'copy',
                hasAccess: state.thing.permissions.Modify
            }
        ]
    }),
    (dispatch) => ({})
)(ManagedItemList);

`}                        </code>
                        </pre>
                        <p>Next, in our file that will want to display this customized ManagedItemList, we will import our new file, pass in some properties, and we are all done. Note that you do not need to pass anything in to <code>items</code> or <code>headers</code>, because they were already declared in our new file.</p>
                        <h5>ViewAllThings.jsx</h5>
                        <pre>
                            <code>
{`import ManagedThingList from './controls/smart/ManagedThingList.jsx';

...

return (
    <ManagedThingList />
);
`}
                            </code>
                        </pre>
                    </section>




                    <section>
                        <h3>Options</h3>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Option</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>selectable="true"</code></td>
                                    <td>Adds checkboxes to the beginning of each row, as well as a Select All|None button in the table header.</td>
                                </tr>
                                <tr>
                                    <td><code>sortable="true"</code></td>
                                    <td>Makes the column headers clickable for ascending/descending alphanumerical sorting.</td>
                                </tr>
                                <tr>
                                    <td><code>usePagination="true"</code></td>
                                    <td>Automatically creates client-side pagination based on the <code>itemsPerPage</code> parameter to break up a large data list into smaller, more manageable pieces of information.</td>
                                </tr>
                                <tr>
                                    <td><code>useServicesPagination="true"</code></td>
                                    <td>Automatically creates server-side pagination based on what is sent from the service.</td>
                                </tr>
                                <tr>
                                    <td><code>itemsPerPage="X"</code></td>
                                    <td>Defines the number of rows (X) to paginate after when <code>usePagination</code> is enabled.</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>




                    <section>
                        <h3 name="actions" id="actions">Row Actions</h3>
                        <p>For each row in a ManagedItemList, we wanted to be able to supply action buttons that either fire off a function, or serve as a link to another page related to that row item. For example, we have a list of Carriers, and for each Carrier, we have a link to view more details about that Carrier, as well as a button that allows you to clone that carrier. To achieve this, we added the option to pass a number of buttons or links into each row with <code>rowActions</code>. Both types have additional items that they require to be configured.</p>
                        <h4>Required Parameters</h4>
                        <p>Below are the requirements for configuring an action. See code example below for demonstration. Note that both Links and Buttons also have two more specific requirements each.</p>
                        <ul>
                            <li><code>className</code>, for coloring the icon, using the <Link to={'/pattern-library/utilities'}>text utility classes</Link></li>
                            <li>The <code>text</code> that will show up as a <code>title</code> attribute for screen readers and on hover</li>
                            <li>The <code>iconClass</code>, to supply an icon for the action. List of icons is in /fonts/Icomoon/demo.html</li>
                            <li>Finally, <code>hasAccess</code> to control visibility based on permissions returned via the applicable service</li>
                        </ul>
                        <div className="grid">
                            <div className="grid__md-6">
                                <h5>Links</h5>
                                <ul>
                                    <li>The path of the <code>route</code></li>
                                    <li>If the route contains any <code>params</code>, we need to define where that is coming from</li>
                                </ul>
                            </div>
                            <div className="grid__md-6">
                                <h5>Buttons</h5>
                                <ul>
                                    <li>A function name passed in through <code>onClick</code></li>
                                    <li>A <code>type</code> of "button" to separate this from being a Link</li>
                                </ul>
                            </div>
                        </div>
                        <pre>
                            <code>
{`rowActions: [
    {
        route:     '/path/to/view/:thingId',
        params:    {
            ':thingId': 'thingId'
        },
        className: 'text--info',
        text:      'Edit',
        iconClass: 'pencil',
        hasAccess: true
    },
    {
        type:      'button',
        onClick:   'cloneThing',
        className: 'text--success',
        text:      'Copy',
        iconClass: 'copy',
        hasAccess: state.thing.permissions.Modify
    }
]`}
                            </code>
                        </pre>
                    </section>




                    <section>
                        <h3>Examples</h3>

                        <section>
                            <h4>Standard with Actions</h4>
                            <ManagedItemList items={thing.items} headers={thing.headers} rowActions={thing.rowActions} cloneThing={this.cloneThing}/>
                        </section>
                        
                        <section>
                            <h4>Sortable</h4>
                            <ManagedItemList items={thing.items} headers={thing.headers} rowActions={thing.rowActions} cloneThing={this.cloneThing} sortable="true" />
                        </section>
                        
                        <section>
                            <h4>Selectable</h4>
                            <ManagedItemList items={thing.items} headers={thing.headers} rowActions={thing.rowActions} cloneThing={this.cloneThing} selectable="true" toggleSelectItems={this.toggle} />
                        </section>
                        
                        <section>
                            <h4>Paginated</h4>
                            <ManagedItemList items={thing.items} headers={thing.headers} rowActions={thing.rowActions} cloneThing={this.cloneThing} usePagination="true" itemsPerPage="2" />
                        </section>
                        
                    </section>

                </main>
            </div>
        );
    }
}
