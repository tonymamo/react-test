import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav.jsx';

export default class HowToUse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pattern-library">
                <Nav />
                <main className="pattern-library__content">
                    <article>
                        <h2 className="pattern-library__heading">How To Use The Rainier Framework</h2>
                        <section>
                            <h3>Prerequisites</h3>
                            <p>Rainier requires Sass, Autoprefixer, and some initial setup. It is recommended to use a task automator or build process such as Gulp, along with Node and its Package Manager. Ideally, the tasks should include Autoprefixer for applying vendor prefixes, compilation of .scss files, and minification into a single file for Production.
                            </p>
                        </section>
                        <section>
                            <h3>File Structure</h3>
                            <p>Place the /rainier-framework folder within a /styles- or /scss-named folder, next to the project{"'"}s main stylesheet, such as styles.scss. In this file, you will <code>@import</code> the _rainier.scss file from the /rainier-framework directory. The _rainier.scss file compiles the entire framework{"'"}s partials and mixins to this single point for ease of importing it into your project.
                            </p>
                        </section>
                        <section>    
                            <h3>Customizing the Framework</h3>
                            <p>The first step to customizing the framework is to edit the _rainier.scss partial to only include the components that your project requires. Comment out any component that you do not need by simply using two slashes ({"//"}) to comment out that line.
                            </p>
                            <p>Next, because every project is unique, you will want to start customizing it to meet the needs according to the design comps or requirements. To do so, one should <em>ideally</em> only need to edit the _variables.scss partial. In this file, all of the variables are exposed for the entire project. The variables file is broken up into the following sections:
                            </p>
                            <dl>
                                <dt>Colors</dt>
                                <dd>Define the colors for your brand, form validation, alerts, and application theme</dd>
                                <dt>Options</dt>
                                <dd>Quickly modify global styling by enabling or disabling optional features like flexbox, rounded corners, shadows, etc.</dd>
                                <dt>Spacing</dt>
                                <dd>Control the spacing of components and establish common rhythm</dd>
                                <dt>Body</dt>
                                <dd>Define base styling for the entire page, such as the <code>body</code> background, text color, and so on</dd>
                                <dt>Grid</dt>
                                <dd>Set the main breakpoints and modify grid columns and containers</dd>
                                <dt>Typography</dt>
                                <dd>Set font families, typographic scale, and more</dd>
                                <dt>Components</dt>
                                <dd>Customize the look and feel via specific scoped variables for the various framework components</dd>
                            </dl>
                        </section>
                        <section>
                            <h3>Building Out Your Custom CSS</h3>
                            <p>Once the Rainier Framework is included in your project and customized to your liking, it should be highly unlikely that you will need to edit any of the Rainier files any more. Project-specific components, page layout, and any other theming should take place outside of the Rainier Framework files. It is advised to break up the CSS in to smaller .scss partials and organize them into aptly-named folders and files for ease of maintenance. Import these in to your main styles.scss file after the Rainier import so that you can leverage all of the variables and mixins that it provides.</p>
                        </section>
                        <section>
                            <h3>How to Leverage Variables and Utilities</h3>
                            <ul>
                                <li>Variables can be called by simply using <code>$variable-name</code> in any SCSS file imported after the Rainier Framework file. See the list of <Link to={'/pattern-library/variables'}>Variables</Link> that are available for use from the framework.</li>
                                <li>There should be little-to-no HEX codes authored in your CSS. Create a new variable in the _variables.scss file if needed, in the appropriate section.</li>
                                <li>Use the abstracted variable names, such as <code>$brand-primary</code>, not the custom color-named variables like <code>$dark-blue</code>, as much as possible. Changing a color scheme will then only require editing the _variables.scss file, and not searching all over your project for the color-named variables. See comments in _variables.scss for explanation.</li>
                                <li>Common CSS properties like floating and text-alignment can be leveraged as utility classes if they arent changing their properties within media queries</li>
                                <li>See the list of <Link to={'/pattern-library/utilities'}>Utilities</Link> for the available class names that can be used in the markup, instead of repeating yourself in the CSS.</li>
                            </ul>
                        </section>
                    </article>
                </main>
            </div>
        );
    }
}