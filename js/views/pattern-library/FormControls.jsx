import React, {Component} from 'react';
import { Link } from 'react-router';

import Nav from './Nav.jsx';
import Input from '../../controls/form/Input.jsx';
import OptionGroup from '../../controls/form/OptionGroup.jsx';

export default class FormControls extends Component {
    constructor(props, context) {
        super(props, context);
    }

    test() {
        console.log("You clicked the Search button");
    }

    render() {
        return (
            <div className="pattern-library">
                <Nav />
                <main className="pattern-library__content">
                    <h2 className="pattern-library__heading">Form Controls</h2>
                    <p>Form Controls, such as inputs, dropdowns, datepickers, checkboxes, and radios, are essential in how we collect data from our end users. By choosing the right type or combination of controls, we can cut down on data-entry errors, especially when combined with client-side validation. Using the various Form Control components ensures a great, consistent user experience, has built-in accessibility features, allows for keyboard navigation like tabbing through a form, and are fully responsive.</p>

                    <section>
                        <h3>Usage</h3>
                        <p>To use the various Form Controls, simply include an <code>import</code> to the components you would like to use on your View. Below is an example of the <code>&lt;Input /&gt;</code> component.</p>
                        <pre>
                            <code>import Input from '../../controls/form/Input.jsx';</code>
                        </pre>
                        <p>Now, to use the component in your Render function on your View, you can just write out a one-liner such as the following:</p>
                        <pre>
                            <code>
{`<Input type="text" field={FieldName} label="Label Text" />`}
                            </code>
                        </pre>

                        <p>Note that there are a few paramaters, or props in React-speak, that are required for most Form Controls. In this example, the type, field, and label paramters are the minimum required to render an <code>&lt;Input /&gt;</code>. Also, there may be additional parameters that are optional. For a comprehensive list of all of the components and their required and optional paramaters, please see the table below.</p>
                        <p>When React actually renders the code, it spits out multiple lines of code with everything in place for validation, a responsive <code>&lt;label&gt;</code>, the <code>&lt;input type=""&gt;</code>, and hidden placeholder for validation messages. Below is an example of the output of the <code>&lt;Input /&gt;</code> we generated above. Note that the empty className attributes and the empty <code>&lt;small&gt;</code> are in place for validation. Once a message is triggered, the appropriate classes and message text would be rendered in those spots.</p>
                        <pre>
                            <code>
{`<div className="form-group">
    <label className="" title="Label Text">Label Text</label>
    <input type="text" field="FieldName" className=""/>
    <small className=""></small>
</div>`}                            
                            </code>
                        </pre>
                        <p>And finally, the actual rendered component would look like this:</p>
                        <Input type="text" field={''} label="Label Text" />
                    </section>





                    <section>
                        <h2 className="pattern-library__heading">Input Types</h2>

                        <h3>Text Input</h3>
                        <p>Basic text input using the <code>&lt;Input /&gt;</code> component. Additional helper text can be passed in, and automatically updates to the validation message when the field has gone through validation.</p>
                        <div className="grid">
                            <div className="grid__md-4">
                                <p><strong>Required Props:</strong></p>
                                <ul>
                                    <li>type="text"</li>
                                    <li>label=""</li>
                                    <li>field={'{}'}</li>
                                </ul>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Optional Props:</strong></p>
                                <ul>
                                    <li>helpText=""</li>
                                    <li>maxLength=""</li>
                                    <li>disabled={'{}'}</li>
                                </ul>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Example:</strong></p>
                                <Input type="text" field={''} label="Label Text" helpText="This is optional Help Text." />
                            </div>
                        </div>

                        <hr />





                        <h3>Search Input</h3>
                        <p>A simple responsive Search bar with integrated button input using the <code>&lt;Input /&gt;</code> component. Note that the label gets visually hidden but is there in the DOM for screenreaders, and uses a placeholder to show the text instead. Write your onClick() function in your View's page and pass it to the component via the submit prop.</p>
                        <div className="grid">
                            <div className="grid__md-4">
                                <p><strong>Required Props:</strong></p>
                                <ul>
                                    <li>type="text"</li>
                                    <li>label=""</li>
                                    <li>field={'{}'}</li>
                                    <li>submit={'{this.functionName}'}</li>
                                </ul>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Optional Props:</strong></p>
                                <ul>
                                    <li>helpText=""</li>
                                    <li>disabled={'{}'}</li>
                                </ul>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Example:</strong></p>
                                <Input type="search" field={''} label="Search" submit={this.test} />
                            </div>
                        </div>

                        <hr />





                        <h3>Date Input</h3>
                        <p>Again using the <code>&lt;Input /&gt;</code> component, the DatePicker has support for Localization and allows users to navigate quickly through various days, months, and even years. You can specify a minimum date in the min prop, but add it to the state of your View like the following example:</p>
                        <pre>
                            <code>
{`let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
this.state = { tomorrow: tomorrow };`}
                            </code>
                        </pre>
                        <div className="grid">
                            <div className="grid__md-4">
                                <p><strong>Required Props:</strong></p>
                                <ul>
                                    <li>type="text"</li>
                                    <li>label=""</li>
                                    <li>field={'{}'}</li>
                                </ul>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Optional Props:</strong></p>
                                <ul>
                                    <li>helpText=""</li>
                                    <li>disabled={'{}'}</li>
                                    <li>min={'{this.state.something}'}</li>
                                </ul>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Example:</strong></p>
                                <Input type="date" field={''} label="Effective Date" />
                            </div>
                        </div>

                    </section>





                    <section>
                        <h2 className="pattern-library__heading">OptionGroup Types</h2>
                        <p>The <code>&lt;OptionGroup /&gt;</code> component is another type of Form Control available to use, and it also has multiple variations to render different controls. Where the <code>&lt;Input /&gt;</code> is meant to gather a single piece of data, usually a text string, the <code>&lt;OptionGroup /&gt;</code> is used to make a user choose one or more options from a list, by means of Radios, Checkboxes, and dropdown <code>select</code>s.</p>
                        <p>Again, to have access to the OptionGroup control, simply include an <code>import</code> in your View's page.</p>
                        <pre>
                            <code>
{`import OptionGroup from '../../controls/form/OptionGroup.jsx';`}                            
                            </code>
                        </pre>

                        <h3>Radio</h3>
                        <p>Radios let a user only select a maximum of one option at a time from a list of options. By using type="radio", the options are listed vertically in a group, and automatically are scoped to their group so that any other radios on the page do not affect the single selection. The options prop can be populated by a service (suggested method, to match the redux duck), or hard-coded on your view page in an object.</p>
                        <div className="grid">
                            <div className="grid__md-4">
                                <p><strong>Required Props:</strong></p>
                                <ul>
                                    <li>type="radio"</li>
                                    <li>label=""</li>
                                    <li>field={'{}'}</li>
                                    <li>options={'{}'}</li>
                                </ul>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Optional Props:</strong></p>
                                <ul>
                                    <li>disabled={'{}'}</li>
                                </ul>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Example:</strong></p>
                                <OptionGroup type="radio" label="Choose an Option" field={''} options={[{Key: "1", Value: "Option 1"},{Key: "2", Value: "Option 2"}, {Key: "3", Value: "Option 3"}]} />
                            </div>
                        </div>

                        <hr />





                        <h3>Radio-Inline</h3>
                        <p>Inline Radios let a user only select a maximum of one option at a time from a list of options as well, but change the formatting of the options. By using type="radio-inline", the options are listed horizontall in a group, and are still automatically are scoped to their group so that any other radios on the page do not affect the single selection. They are responsive so that lines will wrap if needed.</p>
                        <pre>
                            <code>
{`<OptionGroup type="radio-inline" label="Choose an Option" field={FieldName} 
    options={[
        {Key: "1", Value: "Option 1"},
        {Key: "2", Value: "Option 2"}, 
        {Key: "3", Value: "Option 3"}
    ]} 
/>`}
                            </code>
                        </pre>
                        <div className="grid">
                            <div className="grid__md-4">
                                <p><strong>Required Props:</strong></p>
                                <ul>
                                    <li>type="radio-inline"</li>
                                    <li>label=""</li>
                                    <li>field={'{}'}</li>
                                    <li>options={'{}'}</li>
                                </ul>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Optional Props:</strong></p>
                                <ul>
                                    <li>disabled={'{}'}</li>
                                </ul>
                            </div>
                            <div className="grid__md-4">
                                <p><strong>Example:</strong></p>
                                <OptionGroup type="radio-inline" label="Choose an Option" field={''} options={[{Key: "1", Value: "Option 1"},{Key: "2", Value: "Option 2"}, {Key: "3", Value: "Option 3"}]} />
                            </div>
                        </div>

                        <hr />

                        
                    </section>
                </main>
            </div>
        );
    }
}
