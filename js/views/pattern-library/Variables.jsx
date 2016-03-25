import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class Variables extends Component {
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
                    <h2 className="pattern-library__heading">Variables</h2>
                    <p>The following sections (except for the last one) are all necessary for setting up the framework. This is your default element styling, as well as some modifiers that enable you to achieve a wide variety of styling. The very last section refers to components that may or may not be used in a project, but they rely on variables set up in the previous sections in most cases. It is recommended to go through each of these sections and get everything customized to your project, and then you will have a large selection of building blocks to work with when quickly building out your project.</p>





                    <section>
                        <h3>Brand Colors</h3>
                        <p>These colors may come from branding guidelines, design team, or the business, and they define the main theming colors for the whole project. They are used for button colors, form validation, alerts, and more.</p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$brand-primary</td>
                                    <td>The main brand color for the theme</td>
                                </tr>
                                <tr>
                                    <td>$brand-secondary</td>
                                    <td>The supporting brand color for the theme</td>
                                </tr>
                                <tr>
                                    <td>$accent-one</td>
                                    <td>An accent color as part of the theme</td>
                                </tr>
                                <tr>
                                    <td>$accent-two</td>
                                    <td>A secondary accent color for the theme</td>
                                </tr>
                                <tr>
                                    <td>$brand-success</td>
                                    <td>Validation color for successful or positive indications</td>
                                </tr>
                                <tr>
                                    <td>$brand-info</td>
                                    <td>Validation color for informative or neutral indications</td>
                                </tr>
                                <tr>
                                    <td>$brand-warning</td>
                                    <td>Validation color for warning indications</td>
                                </tr>
                                <tr>
                                    <td>$brand-danger</td>
                                    <td>Validation color for failed or negative indications</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>





                    <section>
                        <h3>Options</h3>
                        <p>Boolean (<code>true</code>/<code>false</code>) options for enabling or disabling functionality throughout the framework. Quickly modify global styling by enabling or disabling these optional features.</p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Option</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$enable-flex</td>
                                    <td>Turn on or off flexbox-based layout. Uses float- or table-based patterns if false</td>
                                </tr>
                                <tr>
                                    <td>$enable-rounded</td>
                                    <td>Turn on or off border-radius properties</td>
                                </tr>
                                <tr>
                                    <td>$enable-shadows</td>
                                    <td>Turn on or off shadows for components</td>
                                </tr>
                                <tr>
                                    <td>$enable-gradients</td>
                                    <td>Turn on or off gradients for components</td>
                                </tr>
                                <tr>
                                    <td>$enable-transitions</td>
                                    <td>Turn on or off CSS-based transitions/animations</td>
                                </tr>
                                <tr>
                                    <td>$enable-hover-media-query</td>
                                    <td>Turn on or off hover within media queries</td>
                                </tr>
                                <tr>
                                    <td>$enable-debug-mode</td>
                                    <td>Turn on or off a debug-mode to test accessibility and semantics</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>





                    <section>
                        <h3>Spacing</h3>
                        <p>Control the default spacing of most the Rainier Framework{"'"}s elements by modifying these variables.</p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$spacer</td>
                                    <td>Default margin and/or padding size for consistent spacing in project</td>
                                </tr>
                                <tr>
                                    <td>$spacer-x</td>
                                    <td>Provides margin or padding to the X-axis</td>
                                </tr>
                                <tr>
                                    <td>$spacer-y</td>
                                    <td>Provides margin or padding to the Y-axis</td>
                                </tr>
                                <tr>
                                    <td>$half-spacer</td>
                                    <td>Reuasble spacing unit for less margin or padding</td>
                                </tr>
                                <tr>
                                    <td>$border-width</td>
                                    <td>Default size of borders on many components</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>





                    <section>
                        <h3>Body and Link Defaults</h3>
                        <p>Settings for the <code>&lt;body&gt;</code> element and styling anchor elements.</p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$body-bg</td>
                                    <td>Default background color applied to the <code>&lt;body&gt;</code></td>
                                </tr>
                                <tr>
                                    <td>$body-color</td>
                                    <td>Default text color applied to the <code>&lt;body&gt;</code></td>
                                </tr>
                                <tr>
                                    <td>$base-border-color</td>
                                    <td>Default border color on various components</td>
                                </tr>
                                <tr>
                                    <td>$link-color</td>
                                    <td>Default color for all <code>&lt;a&gt;</code> elements</td>
                                </tr>
                                <tr>
                                    <td>$link-decoration</td>
                                    <td>Default styling of the <code>text-decoration</code> property for links</td>
                                </tr>
                                <tr>
                                    <td>$link-hover-color</td>
                                    <td>Default color for all links on <code>:hover</code></td>
                                </tr>
                                <tr>
                                    <td>$text-hover-decoration</td>
                                    <td>Default styling of the <code>text-decoration</code> property for links on <code>:hover</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>





                    <section>
                        <h3>Grid Breakpoints</h3>
                        <p>Define the minimum and maximum dimensions at which your layout will change, adapting to different screen sizes, for use in media queries.</p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Breakpoint Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>xs</td>
                                    <td> Extra small screen like a phone</td>
                                </tr>
                                <tr>
                                    <td>sm</td>
                                    <td>Small screen like a phone or other small device</td>
                                </tr>
                                <tr>
                                    <td>md</td>
                                    <td>Medium screen like a large smartphone or tablet</td>
                                </tr>
                                <tr>
                                    <td>lg</td>
                                    <td>Large screen like a large tablet, laptop, or desktop</td>
                                </tr>
                                <tr>
                                    <td>xl</td>
                                    <td>Extra large screen like a desktop or wide screen display</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>





                    <section>
                        <h3>Grid Options</h3>
                        <p>Change container sizes, columns, and gutters with these variables.</p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$container-max-widths</td>
                                    <td>Change the max width for each breakpoint</td>
                                </tr>
                                <tr>
                                    <td>$grid-columns</td>
                                    <td>Change default number of columns</td>
                                </tr>  
                                <tr>
                                    <td>$grid-gutter-width</td>
                                    <td>Change default width of the gutters for each grid item</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>





                    <section>
                        <h3>Typography</h3>
                        <p>Control the typographic defaults for the project by editing the families, colors, sizes, line-heights, and more.</p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Font Family Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$font-family-sans-serif</td>
                                    <td>Default sans-serif font stack</td>
                                </tr>
                                <tr>
                                    <td>$font-family-serif</td>
                                    <td>Default serif font stack</td>
                                </tr>  
                                <tr>
                                    <td>$font-family-monospace</td>
                                    <td>Default monospace font stack</td>
                                </tr>
                                <tr>
                                    <td>$font-family-base</td>
                                    <td>Set to one of the previous three for the default body text font family</td>
                                </tr>
                            </tbody>
                            <thead className="thead--default">
                                <tr>
                                    <th>Text Color Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$text-light</td>
                                    <td>Light variation of text color for use on darker backgrounds</td>
                                </tr>
                                <tr>
                                    <td>$text-dark</td>
                                    <td>Dark variation of text color for use on lighter backgrounds</td>
                                </tr>
                                <tr>
                                    <td>$text-muted</td>
                                    <td>Desaturated variation of text color for lighter emphasis</td>
                                </tr>
                            </tbody>
                            <thead className="thead--default">
                                <tr>
                                    <th>Font Sizing Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$font-size-root</td>
                                    <td>Set the scale, in pixels, for the &lt;html&gt; element</td>
                                </tr>
                                <tr>
                                    <td>$font-size-base</td>
                                    <td>Set the default font size in rems for the &lt;body&gt;</td>
                                </tr>
                                <tr>
                                    <td>$font-size-(lg|sm|xs)</td>
                                    <td>Modifiers for large, small, and extra small font sizes</td>
                                </tr>
                                <tr>
                                    <td>$font-size-(h1|h2|h3|h4|h5|h6)</td>
                                    <td>Set font sizes for h1-h6, ideally using a scale, in rems</td>
                                </tr>
                                <tr>
                                    <td>$display(1|2|3|4)-size</td>
                                    <td>Extra large modifiers for the .display<em>X</em> class font size, set in rems</td>
                                </tr>
                                <tr>
                                    <td>$display(1|2|3|4)-weight</td>
                                    <td>Font weight setting for .display<em>X</em> class</td>
                                </tr>
                            </tbody>
                            <thead className="thead--default">
                                <tr>
                                    <th>Line Height Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$line-height</td>
                                    <td>Default line-height used across the project for vertical rythym</td>
                                </tr>
                                <tr>
                                    <td>$line-height-(sm|lg)</td>
                                    <td>Small and large modifiers for line-height</td>
                                </tr>
                            </tbody>
                            <thead className="thead--default">
                                <tr>
                                    <th>Heading Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$headings-margin-bottom</td>
                                    <td>Margin-bottom setting for h1-h6</td>
                                </tr>
                                <tr>
                                    <td>$headings-font-family</td>
                                    <td>Define font stack that the h1-h6 will have</td>
                                </tr>
                                <tr>
                                    <td>$headings-font-weight</td>
                                    <td>Change the weight of the headings</td>
                                </tr>
                                <tr>
                                    <td>$headings-line-height</td>
                                    <td>Override default body text line-height for h1-h6</td>
                                </tr>
                                <tr>
                                    <td>$headings-color</td>
                                    <td>Set different color from the body text if desired</td>
                                </tr>
                            </tbody>
                            <thead className="thead--default">
                                <tr>
                                    <th>Typographic Helper Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$lead-font-size</td>
                                    <td>Font size for .lead class</td>
                                </tr>
                                <tr>
                                    <td>$lead-font-weight</td>
                                    <td>Font weight for .lead class</td>
                                </tr>
                                <tr>
                                    <td>$abbr-border-color</td>
                                    <td>Border-bottom color for &lt;abbr&gt;</td>
                                </tr>
                                <tr>
                                    <td>$blockquote-small-color</td>
                                    <td>Text color for &lt;small&gt; in a .blockquote</td>
                                </tr>
                                <tr>
                                    <td>$blockquote-font-size</td>
                                    <td>Font size of the actual .blockquote text</td>
                                </tr>
                                <tr>
                                    <td>$blockquote-border-color</td>
                                    <td>Border color for a .blockquote</td>
                                </tr>
                                <tr>
                                    <td>$hr-border-color</td>
                                    <td>Set color for an &lt;hr /&gt;</td>
                                </tr>
                                <tr>
                                    <td>$hr-border-width</td>
                                    <td>Define width of the &lt;hr /&gt;</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>





                    <section>
                        <h3>Component Defaults</h3>
                        <p>Define common defaults for various components.</p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$border-radius</td>
                                    <td>Common border-radius value for a variety of components</td>
                                </tr>
                                <tr>
                                    <td>$border-radius-lg</td>
                                    <td>Large modifier for border-radius</td>
                                </tr>
                                <tr>
                                    <td>$border-radius-sm</td>
                                    <td>Small modifier for border-radius</td>
                                </tr>
                                <tr>
                                    <td>$component-active-color</td>
                                    <td>A common text color used across components when active</td>
                                </tr>
                                <tr>
                                    <td>$component-active-bg</td>
                                    <td>A common background color used across components when active</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>





                    <section>
                        <h3>Tables</h3>
                        <p>Customize the .table component with basic values used across the table variations</p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$table-cell-padding</td>
                                    <td>Default padding for table cells</td>
                                </tr>
                                <tr>
                                    <td>$table-sm-cell-padding</td>
                                    <td>Reduced padding for a smaller table using .table--sm class</td>
                                </tr>
                                <tr>
                                    <td>$table-bg</td>
                                    <td>Default color for a .table</td>
                                </tr>
                                <tr>
                                    <td>$table-bg-accent</td>
                                    <td>Accent color for zebra striping rows using .table--striped modifier</td>
                                </tr>
                                <tr>
                                    <td>$table-bg-hover</td>
                                    <td>Hover color when hovering rows in a .table--hover modifier</td>
                                </tr>
                                <tr>
                                    <td>$table-bg-active</td>
                                    <td>Apply the hover color statically to a row</td>
                                </tr>
                                <tr>
                                    <td>$table-border-color</td>
                                    <td>Border color for all of the cells in a .table</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>





                    <section>
                        <h3>Buttons</h3>
                        <p>Variables for building out .button and all of its modifiers</p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$button-padding-x</td>
                                    <td>The left and right side padding for a .button</td>
                                </tr>
                                <tr>
                                    <td>$button-padding-y</td>
                                    <td>Top and bottom padding for a .button</td>
                                </tr>
                                <tr>
                                    <td>$button-font-weight</td>
                                    <td>Default font weight for a .button</td>
                                </tr>
                                <tr>
                                    <td>$button-<em>X</em>-color</td>
                                    <td>The text color for a .button variant, where <em>X</em> is one of the modifier names</td>
                                </tr>
                                <tr>
                                    <td>$button-<em>X</em>-bg</td>
                                    <td>The background color for a .button variant, where <em>X</em> is one of the modifier names</td>
                                </tr>
                                <tr>
                                    <td>$button-<em>X</em>-border</td>
                                    <td>The border color for a .button variant, where <em>X</em> is one of the modifier names</td>
                                </tr>
                                <tr>
                                    <td>$button-link-disabled-color</td>
                                    <td>Text color for a disabled .button</td>
                                </tr>
                                <tr>
                                    <td>$button-padding-x-(sm|lg)</td>
                                    <td>Button padding for the left and right for both small and large variations</td>
                                </tr>
                                <tr>
                                    <td>$button-padding-y-(sm|lg)</td>
                                    <td>Button padding for top and bottom for both small and large variations</td>
                                </tr>
                                <tr>
                                    <td>$button-border-radius</td>
                                    <td>Default border-radius size for .button</td>
                                </tr>
                                <tr>
                                    <td>$button-border-radius-(sm|lg)</td>
                                    <td>Border radius modifiers for .button in small and large sizes</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>





                    <section>
                        <h3>Forms</h3>
                        <p></p>
                        <table className="table table--bordered table--hover table--sm">
                            <thead className="thead--default">
                                <tr>
                                    <th>Variable Name</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$input-padding-(x|y)</td>
                                    <td>Padding for both axes for all inputs</td>
                                </tr>
                                <tr>
                                    <td>$input-bg</td>
                                    <td>Default background color for inputs</td>
                                </tr>
                                <tr>
                                    <td>$input-bg-disabled</td>
                                    <td>Background color for a disabled input</td>
                                </tr>
                                <tr>
                                    <td>$input-color</td>
                                    <td>Default text color for all inputs</td>
                                </tr>
                                <tr>
                                    <td>$input-border</td>
                                    <td>Default border color for all inputs</td>
                                </tr>
                                <tr>
                                    <td>$input-box-shadow</td>
                                    <td>Box shadow value, if shadows are enabled, for inputs</td>
                                </tr>
                                <tr>
                                    <td>$input-border-radius</td>
                                    <td>Default border radius for all inputs</td>
                                </tr>
                                <tr>
                                    <td>$input-border-radius-(sm|lg)</td>
                                    <td>Small and large modifiers of border radius for inputs</td>
                                </tr>
                                <tr>
                                    <td>$input-border-focus</td>
                                    <td>Focus color on the border of an input</td>
                                </tr>
                                <tr>
                                    <td>$inut-box-shadow-focus</td>
                                    <td>Focus color for the shadow of an input, to emulate the standard look in modern browsers</td>
                                </tr>
                                <tr>
                                    <td>$input-color-placeholder</td>
                                    <td>Define the placeholder color for inputs</td>
                                </tr>
                                <tr>
                                    <td>$input-padding-(x|y)-(sm|lg)</td>
                                    <td>Padding modifiers for x and y axes and small or large variations</td>
                                </tr>
                                <tr>
                                    <td>$input-height</td>
                                    <td>Hardcoded height applied to inputs for visual consistency</td>
                                </tr>
                                <tr>
                                    <td>$input-height-(sm|lg)</td>
                                    <td>Small and large variations of input height</td>
                                </tr>
                                <tr>
                                    <td>$form-group-margin-bottom</td>
                                    <td>Applies a margin-bottom to .form-group for vertical rythym spacing</td>
                                </tr>
                                <tr>
                                    <td>$input-group-addon-bg</td>
                                    <td>The background color for an .input-group__addon</td>
                                </tr>
                                <tr>
                                    <td>$input-group-addon-border-color</td>
                                    <td>The border of the .input-group__addon</td>
                                </tr>
                                <tr>
                                    <td>$cursor-disabled</td>
                                    <td>Set the cursor type on a disabled field, usually "not-allowed"</td>
                                </tr>
                                <tr>
                                    <td>$input-disabled-text-color</td>
                                    <td>Define a text color for a disabled input</td>
                                </tr>
                                <tr>
                                    <td>$form-icon-success</td>
                                    <td>Data URI for a success icon used in validation within an input</td>
                                </tr>
                                <tr>
                                    <td>$form-icon-warning</td>
                                    <td>Data URI for a warning icon used in validation within an input</td>
                                </tr>
                                <tr>
                                    <td>$form-icon-error</td>
                                    <td>Data URI for a error icon used in validation within an input</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>





                    <section>
                        <h3>Component-Specific Defaults</h3>
                        <p>The rest of the _variables.scss file contains variables for specific components, and are pretty self-explanatory. All of these components are opt-in, meaning you can leave them commented out if you do not wish to use them and the rest of the framework will work just fine. These remaining variables can be left as-is, or changed to match the requirements of the project.</p>
                    </section>
                </main>
            </div>
        );
    }
}