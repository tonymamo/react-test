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
            			<h2 className="pattern-library__heading">CSS Guidelines</h2>
            			<section>
	            			<p><em><strong>Note:</strong> these guidelines were adapted from <a href="http://cssguidelin.es/">cssguidelin.es</a> by <a href="http://csswizardry.com/">Harry Roberts</a>. However, we do not agree 100% with Harry{"'"}s opinions and have changed some sections to reflect our current best practices and opinions. We do appreciate all of his hard work in compiling these guidelines and he deserves proper credit.</em></p>
	            		</section>

	            		<section>
	        				<h3>Contents</h3>
							<ul>
								<li><a href="#introduction">Introduction</a>
									<ul>
										<li><a href="#the-importance-of-a-styleguide">The Importance of a Styleguide</a></li>
										<li><a href="#disclaimers">Disclaimers</a></li>
									</ul>
								</li>
								<li><a href="#syntax-and-formatting">Syntax and Formatting</a>
									<ul>
										<li><a href="#multiple-files">Multiple Files</a></li>
										<li><a href="#table-of-contents">Table of Contents</a></li>
										<li><a href="#characters-wide">80 Characters Wide</a></li>
										<li><a href="#titling">Titling</a></li>
										<li><a href="#anatomy-of-a-ruleset">Anatomy of a Ruleset</a></li>
										<li><a href="#multi-line-css">Multi-line CSS</a></li>
										<li><a href="#indenting">Indenting</a>
											<ul>
												<li><a href="#nesting-sass">Nesting Sass</a></li>
											</ul>
										</li>
										<li><a href="#meaningful-whitespace">Meaningful Whitespace</a></li>
										<li><a href="#html">HTML</a></li>
									</ul>
								</li>
								<li><a href="#commenting">Commenting</a>
									<ul>
										<li><a href="#high-level">High-level</a>
											<ul>
												<li><a href="#objectextension-pointers">Object–Extension Pointers</a></li>
											</ul>
										</li>
										<li><a href="#low-level">Low-level</a></li>
										<li><a href="#preprocessor-comments">Preprocessor Comments</a></li>
										<li><a href="#removing-comments">Removing Comments</a></li>
									</ul>
								</li>
								<li><a href="#naming-conventions">Naming Conventions</a>
									<ul>
										<li><a href="#hyphen-delimited">Hyphen Delimited</a></li>
										<li><a href="#bem-like-naming">BEM-like Naming</a>
											<ul>
												<li><a href="#starting-context">Starting Context</a></li>
											</ul>
										</li>
										<li><a href="#naming-conventions-in-html">Naming Conventions in HTML</a></li>
										<li><a href="#javascript-hooks">JavaScript Hooks</a>
											<ul>
												<li><a href="#data--attributes"><code>data-*</code> Attributes</a></li>
											</ul>
										</li>
										<li><a href="#taking-it-further">Taking It Further</a></li>
									</ul>
								</li>
								<li><a href="#css-selectors">CSS Selectors</a>
									<ul>
										<li><a href="#selector-intent">Selector Intent</a></li>
										<li><a href="#reusability">Reusability</a></li>
										<li><a href="#location-independence">Location Independence</a></li>
										<li><a href="#portability">Portability</a></li>
										<li><a href="#naming">Naming</a></li>
										<li><a href="#selector-performance">Selector Performance</a>
											<ul>
												<li><a href="#the-key-selector">The Key Selector</a></li>
											</ul>
										</li>
										<li><a href="#general-rules">General Rules</a></li>
									</ul>
								</li>
								<li><a href="#specificity">Specificity</a>
									<ul>
										<li><a href="#keep-it-low">Keep It Low at All Times</a></li>
										<li><a href="#ids-in-css">IDs in CSS</a></li>
										<li><a href="#nesting">Nesting</a></li>
										<li><a href="#important"><code>!important</code></a></li>
									</ul>
								</li>
								<li><a href="#architectural-principles">Architectural Principles</a>
									<ul>
										<li><a href="#high-level-overview">High-level Overview</a></li>
										<li><a href="#object-orientation">Object-orientation</a></li>
										<li><a href="#the-single-responsibility-principle">The Single Responsibility Principle</a></li>
										<li><a href="#the-openclosed-principle">The Open/Closed Principle</a></li>
										<li><a href="#dry">DRY</a></li>
										<li><a href="#composition-over-inheritance">Composition over Inheritance</a></li>
										<li><a href="#the-separation-of-concerns">The Separation of Concerns</a>
											<ul>
												<li><a href="#misconceptions">Misconceptions</a></li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</section>

						<section>							
							<h2><a id="introduction"></a>Introduction</h2>
							<p>CSS is not a pretty language. While it is simple to learn and start working with,
							it soon becomes problematic at any reasonable scale. There is not much we can do
							to change how CSS works, but we can make changes to the way we author and
							structure it.</p>
							<p>In working on large, long-running projects, with dozens of developers of
							differing specialities and abilities, it is important that we all work in a
							unified way in order to—among other things—</p>
							<ul>
								<li>keep stylesheets maintainable;</li>
								<li>keep code transparent, sane, and readable;</li>
								<li>keep stylesheets scalable.</li>
							</ul>
							<p>There are a variety of techniques we must employ in order to satisfy these
							goals, and this is a document of recommendations and
							approaches that will help us to do so.</p>

						</section>
						<section>

							<h3><a id="the-importance-of-a-styleguide"></a>The Importance of a Styleguide</h3>
							<p>A coding styleguide (note, not a visual styleguide) is a valuable tool for teams
							who</p>
							
							<ul>
								<li>build and maintain products for a reasonable length of time;</li>
								<li>have developers of differing abilities and specialisms;</li>
								<li>have a number of different developers working on a product at any given time;</li>
								<li>on-board new staff regularly;</li>
								<li>have a number of codebases that developers dip in and out of.</li>
							</ul>
							
							<p>Whilst styleguides are typically more suited to product teams—large codebases on
							long-lived and evolving projects, with multiple developers contributing over
							prolonged periods of time—all developers should strive for a degree of
							standardisation in their code.</p>
							<p>A good styleguide, when well followed, will</p>
							
							<ul>
								<li>outline the standard for code quality across a codebase;</li>
								<li>promote consistency across codebases;</li>
								<li>give developers a feeling of familiarity across codebases;</li>
								<li>increase productivity.</li>
							</ul>
							
							<p>Styleguides should be learned, understood, and implemented at all times on a
							project which is governed by one, and any deviation must be fully justified.</p>
							
						</section>
						<section>

							<h3><a id="disclaimers"></a>Disclaimers</h3>
							<p>This is <em>a</em> styleguide; it is not <em>the</em> styleguide. It
							contains methodologies, techniques, and tips that I would firmly recommend to my
							clients and teams, but your own tastes and circumstances may well be different.
							Your mileage may vary.</p>
							<p>These guidelines are opinionated, but they have been repeatedly tried, tested,
							stressed, refined, broken, reworked, and revisited over a number of years on
							projects of all sizes.</p>
							
						</section>
						<section>
							
							<h2><a id="syntax-and-formatting"></a>Syntax and Formatting</h2>
							<p>One of the simplest forms of a styleguide is a {"set"} of rules regarding syntax and
							formatting. Having a standard way of writing (<em>literally</em> writing) CSS means
							that code will always look and feel familiar to all members of the team.</p>
							<p>Further, code that looks clean <em>feels</em> clean. It is a much nicer environment to
							work in, and prompts other team members to maintain the standard of cleanliness
							that they found. Ugly code sets a bad precedent.</p>
							<p>At a very high-level, we want</p>
							<ul>
								<li>four (4) space indents, no tabs;</li>
								<li>80 character wide columns;</li>
								<li>multi-line CSS;</li>
								<li>meaningful use of whitespace.</li>
							</ul>
							
							<p><span className="mark" id="did-you-see-this-bit">But, as with anything, the
							specifics are somewhat irrelevant—consistency is key.</span></p>
							
						</section>
						<section>

							<h3><a id="multiple-files"></a>Multiple Files</h3>
							<p>With the meteoric rise of preprocessors of late, more often is the case that
							developers are splitting CSS across multiple files.</p>
							<p>Even if not using a preprocessor, it is a good idea to split discrete chunks of
							code into their own files, which are concatenated during a build step.</p>
							<p>If, for whatever reason, you are not working across multiple files, the next
							sections might require some bending to fit your setup.</p>
							
						</section>
						<section>

							<h3><a id="table-of-contents"></a>Table of Contents</h3>
							<p>A table of contents is a fairly substantial maintenance overhead, but the
							benefits it brings far outweigh any costs. It takes a diligent developer to keep
							a table of contents up to date, but it is well worth sticking with. An
							up-to-date table of contents provides a team with a single, canonical catalogue
							of what is in a CSS project, what it does, and in what order.</p>
							<p>A simple table of contents will—in order, naturally—simply provide the name of
							the section and a brief summary of what it is and does, for example:</p>
							<pre>
								<code>
{`/**
* CONTENTS
*
* SETTINGS
* Global...............Globally-available variables and config.
*
* TOOLS
* Mixins...............Useful mixins.
*
* GENERIC
* Normalize.css........A level playing field.
* Box-sizing...........Better default box-sizing.
*
* BASE
* Headings.............H1–H6 styles.
*
* OBJECTS
* Wrappers.............Wrapping and constraining elements.
*
* COMPONENTS
* Page-head............The main page header.
* Page-foot............The main page footer.
* Buttons..............Button elements.
*
* TRUMPS
* Text.................Text helpers.
*/`}
								</code>
							</pre>
							<p>Each item maps to a section and/or include.</p>
							<p>Naturally, this section would be substantially larger on the majority of
							projects, but hopefully we can see how this section—in the master
							stylesheet—provides developers with a project-wide view of what is being used
							where, and why.</p>
						
						</section>
						<section>

							<h3><a id="characters-wide"></a>80 Characters Wide</h3>
							<p>Where possible, limit CSS files’ width to 80 characters. Reasons for this
							include</p>
							<ul>
								<li>the ability to have multiple files open side by side;</li>
								<li>viewing CSS on sites like GitHub, or in terminal windows;</li>
								<li>providing a comfortable line length for comments.</li>
							</ul>
							<p>
								<pre>
									<code>
{`/**
*
* I am a long-form comment. I describe, in detail, the CSS that follows. I am
* such a long comment that I easily break the 80 character limit, so I am
* broken across several lines.
*/`}
									</code>
								</pre>
							</p>
							<p>There will be unavoidable exceptions to this rule—such as URLs, or gradient
							syntax—which shouldn’t be worried about.</p>
						
						</section>
						<section>

						<h3><a id="titling"></a>Titling</h3>
							<p>Begin every new major section of a CSS project with a title:</p>
							<pre>
								<code>
{`//
// #SECTION-TITLE
//
.selector {}`}
								</code>
							</pre>
							<p>The title of the section is prefixed with a hash (<code>#</code>) symbol to allow us to
							perform more targeted searches (e.g. <code>grep</code>, etc.): instead of searching for
							just <kbd>SECTION-TITLE</kbd>—which may yield many results—a more scoped search
							of <kbd>#SECTION-TITLE</kbd> should return only the section in question.</p>
							<p>If you are working on a project where each section is its own file, this title
							should appear at the top of each one. If you are working on a project with
							multiple sections per file, each title should be preceded by five (5) carriage
							returns. This extra whitespace coupled with a title makes new sections much
							easier to spot when scrolling through large files:</p>
							<pre>
								<code>
{`//
// #SECTION-TITLE
//
.selector {}





//
// #ANOTHER-SECTION-TITLE
//

//Comment
.another-selector {}`}
								</code>
							</pre>
							
						</section>
						<section>

							<h3><a id="anatomy-of-a-ruleset"></a>Anatomy of a Ruleset</h3>
							<p>Before we discuss how we write out our rulesets, let’s first familiarise
							ourselves with the relevant terminology:</p>
							<pre>
								<code>
{`.selector {
    [property]: [value];
    [<--declaration-->]
}`}
							</code></pre>
							<p>For example:</p>
							<pre>
								<code>
{`.foo,
.foo--bar,
.baz {
    display: block;
    background-color: green;
    color: red;
}`}
							</code></pre>
							<p>Here you can see we have</p>
							<ul>
								<li>each selector goes on a new line;</li>
								<li>a space before our opening brace (<code>{'{'}</code>);</li>
								<li>properties and values on the same line;</li>
								<li>a space after our property–value delimiting colon (<code>:</code>);</li>
								<li>each declaration on its own new line;</li>
								<li>the opening brace (<code>{'{'}</code>) on the same line as our last selector;</li>
								<li>our first declaration on a new line after our opening brace (<code>{'{'}</code>);</li>
								<li>our closing brace (<code>{'}'}</code>) on its own new line;</li>
								<li>each declaration indented by four (4) spaces;</li>
								<li>a trailing semi-colon (<code>;</code>) on our last declaration.</li>
							</ul>
							<p>This format seems to be the largely universal standard (except for variations in
							number of spaces, with a lot of developers preferring two (2)).</p>
							<p>As such, the following would be incorrect:</p>
							<pre>
								<code>
{`.foo, .foo--bar, .baz
{
    display:block;
    background-color:green;
    color:red }`}
								</code>
							</pre>
							<p>Problems here include</p>
							<ul>
								<li>tabs instead of spaces;</li>
								<li>more than one selector on the same line;</li>
								<li>the opening brace (<code>{'{'}</code>) on its own line;</li>
								<li>the closing brace (<code>{'}'}</code>) does not sit on its own line;</li>
								<li>the trailing (and, admittedly, optional) semi-colon (<code>;</code>) is missing;</li>
								<li>no spaces after colons (<code>:</code>).</li>
							</ul>
						
						</section>
						<section>

							<h3><a id="multi-line-css"></a>Multi-line CSS</h3>
							<p>CSS should be written across multiple lines, except in very specific
							circumstances. There are a number of benefits to this:</p>
							<ul>
								<li>A reduced chance of merge conflicts, because each piece of functionality
								exists on its own line.</li>
								<li>More ‘truthful’ and reliable <code>diff</code>s, because one line only ever carries one
								change.</li>
							</ul>
							<p>Exceptions to this rule should be fairly apparent, such as similar rulesets that
							only carry one declaration each, for example:</p>
							<pre>
								<code>
{`.icon {
    display: inline-block;
    width:  16px;
    height: 16px;
    background-image: url(/img/sprite.svg);
}

.icon--home     { background-position:   0     0  ; }
.icon--person   { background-position: -16px   0  ; }
.icon--files    { background-position:   0   -16px; }
.icon--settings { background-position: -16px -16px; }`}
								</code>
							</pre>
							<p>These types of ruleset benefit from being single-lined because</p>
							<ul>
								<li>they still conform to the one-reason-to-change-per-line rule;</li>
								<li>they share enough similarities that they don’t need to be read as thoroughly
								as other rulesets—there is more benefit in being able to scan their selectors,
								which are of more interest to us in these cases.</li>
							</ul>

						</section>
						<section>

							<h3><a id="indenting"></a>Indenting</h3>
							<p>Do not indent rulesets to show relationship between DOM elements, as good classes will be reusable on a variety of DOM elements regardless of structure and nesting. BEM naming convention can show this relationship, so it is best to avoid indenting rulesets at all. Note that indenting rulesets is different than nesting inside of another ruleset, which is discussed later.</p>
							<p>Avoid doing the following:</p>
							<pre>
								<code>
{`.foo {}

    .foo__bar {}

        .foo__baz {}`}
								</code>
							</pre>
							
						</section>
						<section>

							<h4><a id="nesting-sass"></a>Nesting Sass</h4>
							<p>Sass provides nesting functionality. That is to say, by writing this:</p>
							<pre>
								<code>
{`.foo {
    color: red;

    .bar {
        color: blue;
    }
}`}
								</code>
							</pre>
							<p>…we will be left with this compiled CSS:</p>
							<pre>
								<code>
{`.foo { color: red; }
.foo .bar { color: blue; }`}
								</code>
							</pre>
							<p>When indenting Sass, we stick to the same four (4) spaces, and we also leave a
							blank line before the nested ruleset.</p>
							<p><span className="label label--danger">Important</span> <strong>Nesting in Sass should be avoided wherever possible</strong>. The exception is for pseudo classes like <code>:hover</code> or similar use cases, otherwise, it will throw off the specificity of the selector by being multiple levels deep. See <a href="#specificity">the Specificity section</a> for more details.</p>
							
						</section>
						<section>
							
							<h3><a id="meaningful-whitespace"></a>Meaningful Whitespace</h3>
							<p>As well as titling, we can provide a lot of information through liberal and
							judicious use of whitespace between rulesets. We use:</p>
							<ul>
							<li>One (1) empty line between closely related rulesets.</li>
							<li>Five (5) empty lines between entirely new sections.</li>
							</ul>
							<p>For example:</p>
							<pre>
								<code>
{`//
// #FOO
//
.foo {}

.foo__bar {}

.foo--baz {}





//
// #BAR
//
.bar {}

.bar__baz {}`}
								</code>
							</pre>
							<p>There should never be a scenario in which two rulesets do not have an empty line
							between them. This would be incorrect:</p>
							<pre>
								<code>
{`.foo {}
.foo__bar {}
.foo--baz {}`}
								</code>
							</pre>
							
						</section>
						<section>

							<h3><a id="html"></a>HTML</h3>
							<p>Given HTML and CSS’ inherently interconnected nature, it would be remiss of me
							to not cover some syntax and formatting guidelines for markup.</p>
							<p>Always quote attributes, even if they would work without. This reduces the
							chance of accidents, and is a more familiar format to the majority of
							developers. For all this would work (and is valid):</p>
							<pre>
								<code>
{`<div class=box>`}
								</code>
							</pre>
							<p>…this format is preferred:</p>
							<pre>
								<code>
{`<div class="box">`}
								</code>
							</pre>
							<p>The quotes are not required here, but err on the safe side and include them.</p>
							<p>When writing multiple values in a class attribute, separate them with a
							space, thus:</p>
							<pre>
								<code>
{`<div class="foo bar">`}
								</code>
							</pre>
							<p>As with our rulesets, it is possible to use meaningful whitespace in your HTML.
							You can denote thematic breaks in content with five (5) empty lines, for
							example:</p>
							<pre>
								<code>
{`<header class="page-head">
...
</header>





<main class="page-content">
...
</main>





<footer class="page-foot">
...
</footer>`}
								</code>
							</pre>
							<p>For related snippets like <code>li</code>s in a <code>ul</code>, group them together without any lines between them. For a new set of loosely related code, a single empty line will suffice. For example </p>
							<pre>
								<code>
{`<ul class="primary-nav">
    <li class="primary-nav__item">
        <a href="/" class="primary-nav__link">Home</a>
    </li>
    <li class="primary-nav__item  primary-nav__trigger">
        <a href="/about" class="primary-nav__link">About</a>
    </li>
    <li class="primary-nav__item">
        <a href="/contact" class="primary-nav__link">Contact</a>
    </li>
</ul>

<p>New paragraph of text</p>`}
							</code></pre>
							<p>This allows developers to spot separate parts of the DOM at a glance, and also
							allows certain text editors—like Vim, for example—to manipulate
							empty-line-delimited blocks of markup.</p>
							

						</section>
						<section>	
							
							<h2><a id="commenting"></a>Commenting</h2>
							<p>The cognitive overhead of working with CSS is huge. With so much to be aware of,
							and so many project-specific nuances to remember, the worst situation most
							developers find themselves in is being the-person-who-didn’t-write-this-code.
							Remembering your own classes, rules, objects, and helpers is manageable <em>to an
							extent</em>, but anyone inheriting CSS barely stands a chance.</p>
							<p><strong>CSS needs more comments.</strong></p>
							<p>As CSS is something of a declarative language that doesn’t really leave much of
							a paper-trail, it is often hard to discern—from looking at the CSS alone—</p>
							<ul>
							<li>whether some CSS relies on other code elsewhere;</li>
							<li>what effect changing some code will have elsewhere;</li>
							<li>where else some CSS might be used;</li>
							<li>what styles something might inherit (intentionally or otherwise);</li>
							<li>what styles something might pass on (intentionally or otherwise);</li>
							<li>where the author intended a piece of CSS to be used.</li>
							</ul>
							<p>This doesn’t even take into account some of CSS’ many quirks—such as various
							states of <code>overflow</code> triggering block formatting context, or certain transform
							properties triggering hardware acceleration—that make it even more baffling to
							developers inheriting projects.</p>
							<p>As a result of CSS not telling its own story very well, it is a language that
							really does benefit from being heavily commented.</p>
							<p>As a rule, you should comment anything that isn’t immediately obvious from the
							code alone. That is to say, there is no need to tell someone that <code>color: red;</code>
							will make something red, but if you’re using <code>overflow: hidden;</code> to clear
							floats—as opposed to clipping an element’s overflow—this is probably something
							worth documenting.</p>
							
						</section>
						<section>

							<h3><a id="high-level"></a>High-level</h3>
							<p>For large comments that document entire sections or components, we use a
							DocBlock-esque multi-line comment which adheres to our 80 column width.</p>
							<p>Here is a real-life example from the CSS which styles the page header on <a href="http://csswizardry.com/">CSS Wizardry</a>:</p>
							<pre>
								<code>
{`/**
* The site’s main page-head can have two different states:
*
* 1) Regular page-head with no backgrounds or extra treatments; it just
*    contains the logo and nav.
* 2) A masthead that has a fluid-height (becoming fixed after a certain point)
*    which has a large background image, and some supporting text.
*
* The regular page-head is incredibly simple, but the masthead version has some
* slightly intermingled dependency with the wrapper that lives inside it.
*/`}
							</code></pre>
							<p>This level of detail should be the norm for all non-trivial code—descriptions of
							states, permutations, conditions, and treatments.</p>
						
						</section>
						<section>

							<h4><a id="objectextension-pointers"></a>Object–Extension Pointers</h4>
							<p>When working across multiple partials, or in an OOCSS manner, you will often
							find that rulesets that can work in conjunction with each other are not always
							in the same file or location. For example, you may have a generic button
							object—which provides purely structural styles—which is to be extended in a
							component-level partial which will add cosmetics. We document this relationship
							across files with simple <i>object–extension pointers</i>;. In the theme file:</p>
							<pre>
								<code>
{`/**
* Extend .btn in _buttons.scss.
*/
.btn {}`}
								</code>
							</pre>
							<p>This simple, low effort commenting can make a lot of difference to developers
							who are unaware of relationships across projects, or who are wanting to know
							how, why, and where other styles might be being inherited from.</p>
							
						</section>
						<section>

							<h3><a id="low-level"></a>Low-level</h3>
							<p>Oftentimes we want to comment on specific declarations (i.e. lines) in a
							ruleset. To do this we use a kind of reverse footnote. Here is a more complex
							comment detailing the larger site headers mentioned above:</p>
							<pre>
								<code>
{`/**
* Large site headers act more like mastheads. They have a faux-fluid-height
* which is controlled by the wrapping element inside it.
*
* 1. Mastheads will typically have dark backgrounds, so we need to make sure
*    the contrast is okay. This value is subject to change as the background
*    image changes.
* 2. We need to delegate a lot of the masthead’s layout to its wrapper element
*    rather than the masthead itself: it is to this wrapper that most things
*    are positioned.
* 3. The wrapper needs positioning context for us to lay our nav and masthead
*    text in.
* 4. Faux-fluid-height technique: simply create the illusion of fluid height by
*    creating space via a percentage padding, and then position everything over
*    the top of that. This percentage gives us a 16:9 ratio.
*/

.page-head--masthead {
    color: $color-masthead; /* [1] */

    > .wrapper { /* [2] */
        position: relative; /* [3] */
        padding-top: 56.25%; /* [4] */
    }
}`}
							</code></pre>
							<p>These types of comment allow us to keep all of our documentation in one place
							whilst referring to the parts of the ruleset to which they belong.</p>
							
						</section>
						<section>

							<h3><a id="preprocessor-comments"></a>Preprocessor Comments</h3>
							<p>With most—if not all—preprocessors, we have the option to write comments that
							will not get compiled out into our resulting CSS file. As a rule, use these
							comments to document code that would not get written out to that CSS file
							either. If you are documenting code which will get compiled, use comments that
							will compile also. For example:</p>
							<pre>
								<code>
{`// This comment will not get compiled

/**
* This comment might, depending on your minification settings for dev vs production
*/`}
								</code>
							</pre>

						</section>
						<section>

							<h3><a id="removing-comments"></a>Removing Comments</h3>
							<p>It should go without saying that no comments should make their way into
							production environments—all CSS should be minified, resulting in loss of
							comments, before being deployed.</p>
							
						</section>
						<section>
							
							<h2><a id="naming-conventions"></a>Naming Conventions</h2>
							<p>Naming conventions in CSS are hugely useful in making your code more
							strict, more transparent, and more informative.</p>
							<p>A good naming convention will tell you and your team</p>
							<ul>
								<li>what type of thing a class does;</li>
								<li>where a class can be used;</li>
								<li>what (else) a class might be related to.</li>
							</ul>
							<p>The naming convention I follow is very simple: hyphen (<code>-</code>) delimited strings,
							with BEM-like naming for more complex pieces of code.</p>
							<p>It’s worth noting that a naming convention is not normally useful CSS-side of
							development; they really come into their own when viewed in HTML.</p>
							
						</section>
						<section>

							<h3><a id="hyphen-delimited"></a>Hyphen Delimited</h3>
							<p>All strings in classes are delimited with a hyphen (<code>-</code>), like so:</p>
							<pre>
								<code>
{`.page-head {}

.sub-content {}`}
								</code>
							</pre>
							<p>Camel case and underscores are not used for regular classes; the following are
							incorrect:</p>
							<pre>
								<code>
{`.pageHead {}

.sub_content {}`}
								</code>
							</pre>
						
						</section>
						<section>

							<h3><a id="bem-like-naming"></a>BEM-like Naming</h3>
							<p>For larger, more interrelated pieces of UI that require a number of classes, we
							use a BEM-like naming convention.</p>
							<p><cite>BEM</cite>, meaning <i>Block</i>, <i>Element</i>, <i>Modifier</i>, is a
							front-end methodology coined by developers working at Yandex. Whilst BEM is a
							complete methodology, here we are only concerned with its naming convention.
							Further, the naming convention here only is BEM-<em>like</em>; the principles are
							exactly the same, but the actual syntax differs slightly.</p>
							<p>BEM splits components’ classes into three groups:</p>
							<ul>
								<li>Block: The sole root of the component.</li>
								<li>Element: A component part of the Block.</li>
								<li>Modifier: A variant or extension of the Block.</li>
							</ul>
							<p>To take an analogy (note, not an example):</p>
							<pre>
								<code>
{`.header {}
.header__logo {}
.header--inverse {}`}
								</code>
							</pre>
							<p>Elements are delimited with two (2) underscores (<code>__</code>), and Modifiers are
							delimited by two (2) hyphens (<code>--</code>).</p>
							<p>Here we can see that <code>.header {'{}'}</code> is the Block; it is the sole root of a
							discrete entity. <code>.header__logo {'{}'}</code> is an Element; it is a smaller part of the
							<code>.header {'{}'}</code> Block. Finally, <code>.logo--inverse {'{}'}</code> is a Modifier; it is a specific
							variant of the <code>.header {'{}'}</code> Block.</p>
						
						</section>
						<section>

							<h4><a id="starting-context"></a>Starting Context</h4>
							<p>Your Block context starts at the most logical, self-contained, discrete
							location. You can nest BEM blocks in multiple levels, but it is important to not chain the blocks together. You can have only one set of double underscores and/or hyphens in one selector.</p>
							<pre>
								<code>
{`.page {} // your Block 

.page__header {} // a Block with an Element 

.page__header__logo {} // This is incorrect`}
								</code>
							</pre>
							<p>In the above example, the <code>.page__header__logo</code> shows a Block with an Element and another Element inside it, which is not valid. Restart the scope with a <code>.header</code> as a new Block, in which you can then create a logo element by doing <code>.header__logo</code>. It is perfectly okay to have a <code>.page__header</code> Element and a <code>.header</code> Block applied to the same HTML element, since you can still show those relationships to their parents/siblings.</p>
							<pre>
								<code>
{`<div class="page"> /* page Block */ 
    <div class="page__header header"> /* page header Element AND header Block*/
        <img class="header__logo" /> /* header Element, without any need to reference page Block */
    </div>
</div>`}
								</code>
							</pre>	
							<p>It is important to know when BEM scope starts and stops. As a rule, BEM applies
							to self-contained, discrete parts of the UI.</p>

						</section>
						<section>
							
							<h3><a id="naming-conventions-in-html"></a>Naming Conventions in HTML</h3>
							<p>As I previously hinted at, naming conventions aren’t necessarily all that useful
							in your CSS. Where naming conventions’ power really lies is in your markup. Take
							the following, non-naming-conventioned HTML:</p>
							<pre>
								<code>
{`<div class="box profile pro-user">
    <img class="avatar image" />
    <p class="bio">...</p>
</div>`}
								</code>
							</pre>
							<p>How are the classes <code>box</code> and <code>profile</code> related to each other? How are the
							classes <code>profile</code> and <code>avatar</code> related to each other? Are they related at all?
							Should you be using <code>pro-user</code> alongside <code>bio</code>? Will the classes <code>image</code> and
							<code>profile</code> live in the same part of the CSS? Can you use <code>avatar</code> anywhere else?</p>
							<p>From that markup alone, it is very hard to answer any of those questions. Using
							a naming convention, however, changes all that:</p>
							<pre>
								<code>
{`<div class="box profile profile--is-pro-user">
    <img class="avatar  profile__image" />
    <p class="profile__bio">...</p>
</div>`}
								</code>
							</pre>
							<p>Now we can clearly see which classes are and are not related to each other, and
							how; we know what classes we can’t use outside of the scope of this component;
							and we know which classes we may be free to reuse elsewhere.</p>
						
						</section>
						<section>

							<h3><a id="javascript-hooks"></a>JavaScript Hooks</h3>
							<p>As a rule, it is unwise to bind your CSS and your JS onto the same class in your
							HTML. This is because doing so means you can’t have (or remove) one without
							(removing) the other. It is much cleaner, much more transparent, and much more
							maintainable to bind your JS onto specific classes.</p>
							<p>I have known occasions before when trying to refactor some CSS has unwittingly
							removed JS functionality because the two were tied to each other—it was
							impossible to have one without the other.</p>
							<p>Typically, these are classes that are prepended with <code>js-</code>, for example:</p>
							<pre>	
								<code>
{`<input type="submit" class="btn js-btn" value="Follow" />`}
								</code>
							</pre>
							<p>This means that we can have an element elsewhere which can carry with style of
							<code>.btn {}</code>, but without the behaviour of <code>.js-btn</code>.</p>
						
						</section>
						<section>	

							<h4><a id="data--attributes"></a><code>data-*</code> Attributes</h4>
							<p>A common practice is to use <code>data-*</code> attributes as JS hooks, but this is
							incorrect. <code>data-*</code> attributes, as per the spec, are used <q><strong>to store custom
							data</strong> private to the page or application</q> (emphasis mine). <code>data-*</code>
							attributes are designed to store data, not be bound to.</p>
							
						</section>
						<section>

							<h3><a id="taking-it-further"></a>Taking It Further</h3>
							<p>As previously mentioned, these are very simple naming conventions, and ones that
							don’t do much more than denote three distinct groups of class.</p>
							<p>I would encourage you to read up on and further look in to your naming
							convention in order to provide more functionality—I know it’s something I’m keen
							to research and investigate further.</p>
							<h6>Further Reading</h6>
							<ul>
								<li><a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/"><cite>MindBEMding – getting your head ’round BEM syntax</cite></a></li>
							</ul>
							
						</section>
						<section>
							
							<h2><a id="css-selectors"></a>CSS Selectors</h2>
							<p>Perhaps somewhat surprisingly, one of the most fundamental, critical aspects of
							writing maintainable and scalable CSS is selectors. Their specificity, their
							portability, and their reusability all have a direct impact on the mileage we
							will get out of our CSS, and the headaches it might bring us.</p>
							
						</section>
						<section>

							<h3><a id="selector-intent"></a>Selector Intent</h3>
							<p>It is important when writing CSS that we scope our selectors correctly, and that
							we’re selecting the right things for the right reasons. <i>Selector Intent</i> is the process of deciding and defining what you want to style and how you
							will go about selecting it. For example, if you are wanting to style your
							website’s main navigation menu, a selector like this would be incredibly unwise:</p>
							<pre>
								<code>
{`header ul {}`}
								</code>
							</pre>
							<p>This selector’s intent is to style any <code>ul</code> inside any <code>header</code> element, whereas <em>our</em> intent was to style the site’s main navigation. This is poor Selector
							Intent: you can have any number of <code>header</code> elements on a page, and they in turn
							can house any number of <code>ul</code>s, so a selector like this runs the risk of applying
							very specific styling to a very wide number of elements. This will result in
							having to write more CSS to undo the greedy nature of such a selector.</p>
							<p>A better approach would be a selector like:</p>
							<pre>
								<code>
{`.site-nav {}`}
								</code>
							</pre>
							<p>An unambiguous, explicit selector with good Selector Intent. We are explicitly
							selecting the right thing for exactly the right reason.</p>
							<p>Poor Selector Intent is one of the biggest reasons for headaches on CSS
							projects. Writing rules that are far too greedy—and that apply very specific
							treatments via very far reaching selectors—causes unexpected side effects and
							leads to very tangled stylesheets, with selectors overstepping their intentions
							and impacting and interfering with otherwise unrelated rulesets.</p>
							<p>CSS cannot be encapsulated, it is inherently leaky, but we can mitigate some of
							these effects by not writing such globally-operating selectors: <strong>your selectors
							should be as explicit and well reasoned as your reason for wanting to select
							something.</strong></p>
							
						</section>
						<section>

							<h3><a id="reusability"></a>Reusability</h3>
							<p>With a move toward a more component-based approach to constructing UIs, the idea
							of reusability is paramount. We want the option to be able to move, recycle,
							duplicate, and syndicate components across our projects.</p>
							<p>To this end, we make heavy use of classes. IDs, as well as being hugely
							over-specific, cannot be used more than once on any given page, whereas classes
							can be reused an infinite amount of times. Everything you choose, from the type
							of selector to its name, should lend itself toward being reused.</p>
							
						</section>
						<section>

							<h3><a id="location-independence"></a>Location Independence</h3>
							<p>Given the ever-changing nature of most UI projects, and the move to more
							component-based architectures, it is in our interests not to style things based
							on where they are, but on <em>what</em> they are. That is to say, our components’
							styling should not be reliant upon where we place them—they should remain
							entirely location independent.</p>
							<p>Let’s take an example of a call-to-action button that we have chosen to style
							via the following selector:</p>
							<pre>
								<code>
{`.promo a {}`}
								</code>
							</pre>
							<p>Not only does this have poor Selector Intent—it will greedily style any and
							every link inside of a <code>.promo</code> to look like a button—it is also pretty wasteful
							as a result of being so locationally dependent: we can’t reuse that button with
							its correct styling outside of <code>.promo</code> because it is explicitly tied to that
							location. A far better selector would have been:</p>
							<pre>
								<code>
{`.btn {}`}
								</code>
							</pre>
							<p>This single class can be reused anywhere outside of <code>.promo</code> and will always
							carry its correct styling. As a result of a better selector, this piece of UI is
							more portable, more recyclable, doesn’t have any dependencies, and has much
							better Selector Intent. <strong>A component shouldn’t have to live in a certain place
							to look a certain way.</strong></p>
						
						</section>
						<section>

							<h3><a id="portability"></a>Portability</h3>
							<p>Reducing, or, ideally, removing, location dependence means that we can move
							components around our markup more freely, but how about improving our ability to
							move classes around components? On a much lower level, there are changes we
							can make to our selectors that make the selectors themselves—as opposed to the
							components they create—more portable. Take the following example:</p>
							<pre>
								<code>
{`input.btn {}`}
								</code>
							</pre>
							<p>This is a <i>qualified</i> selector; the leading <code>input</code> ties this ruleset to
							only being able to work on <code>input</code> elements. By omitting this qualification, we
							allow ourselves to reuse the <code>.btn</code> class on any element we choose, like an <code>a</code>,
							for example, or a <code>button</code>.</p>
							<p>Qualified selectors do not lend themselves well to being reused, and every
							selector we write should be authored with reuse in mind.</p>
							<p>Of course, there are times when you may want to legitimately qualify a
							selector—you might need to apply some very specific styling to a particular
							element when it carries a certain class, for example:</p>
							<pre>
								<code>
{`/**
* Embolden and colour any element with a class of .error.
*/
.error {
    color: red;
    font-weight: bold;
}

/**
* If the element is a div, also give it some box-like styling.
*/
div.error {
    padding: 10px;
    border: 1px solid;
}`}
								</code>
							</pre>
							<p>This is one example where a qualified selector might be justifiable, but I would
							still recommend an approach more like:</p>
							<pre>
								<code>
{`/**
* Text-level errors.
*/
.error-text {
    color: red;
    font-weight: bold;
}
/**
* Elements that contain errors.
*/
.error-box {
    padding: 10px;
    border: 1px solid;
}`}
								</code>
							</pre>
							<p>This means that we can apply <code>.error-box</code> to any element, and not just a
							<code>div</code>—it is more reusable than a qualified selector.</p>
						
						</section>
						<section>

							<h3><a id="naming"></a>Naming</h3>
							<p>As Phil Karlton once said, <q>There are only two hard things in Computer
							Science: cache invalidation and naming things.</q></p>
							<p>I won’t comment on the former claim here, but the latter has plagued me for
							years.  My advice with regard to naming things in CSS is to pick a name that is
							sensible, but somewhat ambiguous: aim for high reusability. For example, instead
							of a class like <code>.site-nav</code>, choose something like <code>.primary-nav</code>; rather than
							<code>.footer-links</code>, favour a class like <code>.sub-links</code>.</p>
							<p>The differences in these names is that the first of each two examples is tied to
							a very specific use case: they can only be used as the site’s navigation or the
							footer’s links respectively. By using slightly more ambiguous names, we can
							increase our ability to reuse these components in different circumstances.</p>
							<p>To quote Nicolas Gallagher:</p>
							<blockquote>
								<p>"Tying your class name semantics tightly to the nature of the content has already
								reduced the ability of your architecture to scale or be easily put to use by
								other developers."</p>
							</blockquote>
							<p>That is to say, we should use sensible names—classes like <code>.border</code> or <code>.red</code>
							are never advisable—but we should avoid using classes which describe the exact
							nature of the content and/or its use cases. <strong>Using a class name to describe
							content is redundant because content describes itself.</strong></p>
							<p>The debate surrounding semantics has raged for years, but it is important that
							we adopt a more pragmatic, sensible approach to naming things in order to work
							more efficiently and effectively. Instead of focussing on ‘semantics’, look more
							closely at sensibility and longevity—choose names based on ease of maintenance,
							not for their perceived meaning.</p>
							<p>Name things for people; they’re the only things that actually <em>read</em> your
							classes (everything else merely matches them). Once again, it is better to
							strive for reusable, recyclable classes rather than writing for specific use
							cases. Let’s take an example:</p>
							<pre>
								<code>
{`// Runs the risk of becoming out of date; not very maintainable.
.blue {
    color: blue;
}

// Depends on location in order to be rendered properly.
.header span {
    color: blue;
}

// Too specific; limits our ability to reuse.
.header-color {
    color: blue;
}

// Nicely abstracted, very portable, doesn’t risk becoming out of date.
.highlight-color {
    color: blue;
}`}
								</code>
							</pre>
							<p>It is important to strike a balance between names that do not literally describe
							the style that the class brings, but also ones that do not explicitly describe
							specific use cases. Instead of <code>.home-page-panel</code>, choose <code>.masthead</code>; instead
							of <code>.site-nav</code>, favour <code>.primary-nav</code>; instead of <code>.btn-login</code>, opt for
							<code>.btn-primary</code>.</p>

						</section>
						<section>

							<h3><a id="selector-performance"></a>Selector Performance</h3>
							<p>A topic which is—with the quality of today’s browsers—more interesting than it
							is important, is selector performance. That is to say, how quickly a browser can
							match the selectors your write in CSS up with the nodes it finds in the DOM.</p>
							<p>Generally speaking, the longer a selector is (i.e. the more component parts) the
							slower it is, for example:</p>
							<pre>
								<code>
{`body.home div.header ul {}`}
								</code>
							</pre>
							<p>…is a far less efficient selector than:</p>
							<pre>
								<code>
{`.primary-nav {}`}
								</code>
							</pre>
							<p>This is because browsers read CSS selectors <strong>right-to-left</strong>. A browser will
							read the first selector as</p>
							<ul>
								<li>find all <code>ul</code> elements in the DOM;</li>
								<li>now check if they live anywhere inside an element with a class of <code>.header</code>;</li>
								<li>next check that <code>.header</code> class exists on a <code>div</code> element;</li>
								<li>now check that that all lives anywhere inside any elements with a class of <code>.home</code>;</li>
								<li>finally, check that <code>.home</code> exists on a <code>body</code> element.</li>
							</ul>
							<p>The second, in contrast, is simply a case of the browser reading</p>
							<ul>
								<li>find all the elements with a class of <code>.primary-nav</code>.</li>
							</ul>
							<p>To further compound the problem, we are using descendant selectors (e.g. <code>.foo .bar {}</code>). The upshot of this is that a browser is required to start with the
							rightmost part of the selector (i.e. <code>.bar</code>) and keep looking up the DOM
							indefinitely until it finds the next part (i.e. <code>.foo</code>). This could mean
							stepping up the DOM dozens of times until a match is found.</p>
							<p>This is just one reason why <strong>nesting with preprocessors is often a false
							economy</strong>; as well as making selectors unnecessarily more specific, and creating
							location dependency, it also creates more work for the browser.</p>
							<p>By using a child selector (e.g. <code>.foo &gt; .bar {}</code>) we can make the process much
							more efficient, because this only requires the browser to look one level higher
							in the DOM, and it will stop regardless of whether or not it found a match.</p>
							
						</section>
						<section>

							<h4><a id="the-key-selector"></a>The Key Selector</h4>
							<p>Because browsers read selectors right-to-left, the rightmost selector is often
							critical in defining a selector’s performance: this is called the <i>key
							selector</i>.</p>
							<p>The following selector might appear to be highly performant at first glance. It
							uses an ID which is nice and fast, and there can only ever be one on a page, so
							surely this will be a nice and speedy lookup—just find that one ID and then
							style everything inside of it:</p>
							<pre>
								<code>
{`#foo * {}`}
								</code>
							</pre>
							<p>The problem with this selector is that the key selector (<code>*</code>) is very, <em>very</em> far reaching. What this selector actually does is find <em>every single</em> node in
							the DOM (even <code>&lt;title&gt;</code>, <code>&lt;link&gt;</code>, and <code>&lt;head&gt;</code> elements; <em>everything</em>) and then
							looks to see if it lives anywhere at any level within <code>#foo</code>. This is a very, <em>very</em> expensive selector, and should most likely be avoided or rewritten.</p>
							<p>Thankfully, by writing selectors with good <a href="#selector-intent">Selector Intent</a>,
							we are probably avoiding inefficient selectors by default; we are very unlikely
							to have greedy key selectors if we’re targeting the right things for the right
							reason.</p>
							<p>That said, however, CSS selector performance should be fairly low on your list
							of things to optimise; browsers are fast, and are only ever getting faster, and
							it is only on notable edge cases that inefficient selectors would be likely to
							pose a problem.</p>
							<p>As well as their own specific issues, nesting, qualifying, and poor Selector
							Intent all contribute to less efficient selectors.</p>
						
						</section>
						<section>

							<h3><a id="general-rules"></a>General Rules</h3>
							<p>Your selectors are fundamental to writing good CSS. To very briefly sum up the
							above sections:</p>
							<ul>
								<li><strong>Select what you want explicitly</strong>, rather than relying on circumstance or
								coincidence. Good Selector Intent will rein in the reach and leak of your
								styles.</li>
								<li><strong>Write selectors for reusability</strong>, so that you can work more efficiently and
								reduce waste and repetition.</li>
								<li><strong>Do not nest selectors unnecessarily</strong>, because this will increase
								specificity and affect where else you can use your styles.</li>
								<li><strong>Do not qualify selectors unnecessarily</strong>, as this will impact the number of
								different elements you can apply styles to.</li>
								<li><strong>Keep selectors as short as possible</strong>, in order to keep specificity down and
								performance up.</li>
							</ul>
							<p>Focussing on these points will keep your selectors a lot more sane and easy to
							work with on changing and long-running projects.</p>
							
							<h6>Further Reading</h6>
							<ul>
								<li><a href="http://csswizardry.com/2012/07/shoot-to-kill-css-selector-intent/"><cite>Shoot to kill; CSS selector intent</cite></a></li>
								<li><a href="http://csswizardry.com/2013/05/scope-in-css/"><cite>‘Scope’ in CSS</cite></a></li>
								<li><a href="http://csswizardry.com/2012/05/keep-your-css-selectors-short/"><cite>Keep your CSS selectors short</cite></a></li>
								<li><a href="http://nicolasgallagher.com/about-html-semantics-front-end-architecture/"><cite>About HTML semantics and front-end architecture</cite></a></li>
								<li><a href="http://csswizardry.com/2014/03/naming-ui-components-in-oocss/"><cite>Naming UI components in OOCSS</cite></a></li>
								<li><a href="http://csswizardry.com/2011/09/writing-efficient-css-selectors/"><cite>Writing efficient CSS selectors</cite></a></li>
							</ul>
							
						</section>
						<section>
							
							<h2><a id="specificity"></a>Specificity</h2>
							<p>As we’ve seen, CSS isn’t the most friendly of languages: globally operating,
							very leaky, dependent on location, hard to encapsulate, based on inheritance…
							But! None of that even comes close to the horrors of specificity.</p>
							<p>No matter how well considered your naming, regardless of how perfect your source
							order and cascade are managed, and how well you’ve scoped your rulesets, just
							one overly-specific selector can undo everything. It is a gigantic curveball,
							and undermines CSS’ very nature of the cascade, inheritance, and source order.</p>
							<p>The problem with specificity is that it sets precedents and trumps that cannot
							<em>simply</em> be undone. If we take a real example that I was responsible for some
							years ago:</p>
							<pre>
								<code>
{`#content table {}`}
								</code>
							</pre>
							<p>Not only does this exhibit poor <a href="#selector-intent">Selector Intent</a>—I didn’t
							actually want every <code>table</code> in the <code>#content</code> area, I wanted a specific type of
							<code>table</code> that just happened to live there—it is a hugely over-specific selector.
							This became apparent a number of weeks later, when I needed a second type of
							<code>table</code>:</p>
							<pre>
								<code>
{`#content table {}

// Uh oh! My styles get overwritten by #content table.
.my-new-table {}`}
								</code>
							</pre>
							<p>The first selector was trumping the specificity of the one defined <em>after</em> it,
							working against CSS’ source-order based application of styles. In order to
							remedy this, I had two main options. I could</p>
							<ol>
								<li>refactor my CSS and HTML to remove that ID;</li>
								<li>write a more specific selector to override it.</li>
							</ol>
							<p>Unfortunately, refactoring would have taken a long time; it was a mature product
							and the knock-on effects of removing this ID would have been a more substantial
							business cost than the second option: just write a more specific selector.</p>
							<pre>
								<code>
{`#content table {}

#content .my-new-table {}`}
							</code></pre>
							<p>Now I have a selector that is <em>even more specific still!</em> And if I ever want to
							override this one, I will need another selector of at least the same specificity
							defined after it. I’ve started on a downward spiral.</p>
							<p>Specificity can, among other things,</p>
							<ul>
								<li>limit your ability to extend and manipulate a codebase;</li>
								<li>interrupt and undo CSS’ cascading, inheriting nature;</li>
								<li>cause avoidable verbosity in your project;</li>
								<li>prevent things from working as expected when moved into different
								environments;</li>
								<li>lead to serious developer frustration.</li>
							</ul>
							<p>All of these issues are greatly magnified when working on a larger project with
							a number of developers contributing code.</p>
							
						</section>
						<section>

							<h3><a id="keep-it-low"></a>Keep It Low at All Times</h3>
							<p>The problem with specificity isn’t necessarily that it’s high or low; it’s the
							fact it is so variant and that it cannot be opted out of: the only way to deal
							with it is to get progressively more specific—the notorious <i>specificity
							wars</i> we looked at above.</p>
							<p>One of the single, simplest tips for an easier life when writing
							CSS—particularly at any reasonable scale—is to keep always try and keep
							specificity as low as possible at all times. Try to make sure there isn’t a lot
							of variance between selectors in your codebase, and that all selectors strive
							for as low a specificity as possible.</p>
							<p>Doing so will instantly help you tame and manage your project, meaning that no
							overly-specific selectors are likely to impact or affect anything of a lower
							specificity elsewhere. It also means you’re less likely to need to fight your
							way out of specificity corners, and you’ll probably also be writing much smaller
							stylesheets.</p>
							<p>Simple changes to the way we work include, but are not limited to,</p>
							<ul>
								<li>not using IDs in your CSS;</li>
								<li>not nesting selectors;</li>
								<li>not qualifying classes;</li>
								<li>not chaining selectors.</li>
							</ul>
							<p><strong>Specificity can be wrangled and understood, but it is safer just to avoid it
							entirely.</strong></p>
						
						</section>
						<section>

							<h3><a id="ids-in-css"></a>IDs in CSS</h3>
							<p>If we want to keep specificity low, which we do, we have one really quick-win,
							simple, easy-to-follow rule that we can employ to help us: avoid using IDs in CSS.</p>
							<p>Not only are IDs inherently non-reusable, they are also vastly more specific
							than any other selector, and therefore become specificity anomalies. Where the
							rest of your selectors are relatively low specificity, your ID-based selectors
							are, comparatively, much, <em>much</em> higher.</p>
							<p>In fact, to highlight the severity of this difference, see how <em>one thousand</em>
							chained classes cannot override the specificity of a single ID:	<a href="http://jsfiddle.net/csswizardry/0yb7rque/">jsfiddle.net/0yb7rque</a>. <small>(Please note that in Firefox you may see the text rendering in blue: this
							is a <a href="https://twitter.com/codepo8/status/505004085398224896">known bug</a>, and an
							ID will be overridden by 256 chained classes.)</small></p>
							<p><small><strong>N.B.</strong> It is still perfectly okay to use IDs in HTML and JavaScript; it
							is only in CSS that they prove troublesome.</small></p>
							<p>It is often suggested that developers who choose not to use IDs in CSS merely
							<q>don’t understand how specificity works</q>. This is as incorrect as it is
							offensive: no matter how experienced a developer you are, this behaviour cannot
							be circumvented; no amount of knowledge will make an ID less specific.</p>
							<p>Opting into this way of working only introduces the chance of problems occurring
							further down the line, and—particularly when working at scale—all efforts should
							be made to <em>avoid</em> the potential for problems to arise. In a sentence:</p>
							<p><strong>It is just not worth introducing the risk.</strong></p>
							
						</section>
						<section>

							<h3><a id="nesting"></a>Nesting</h3>
							<p>We’ve already looked at how nesting can lead to location dependent and
							potentially inefficient code, but now it’s time to take a look at another of its
							pitfalls: it makes selectors more specific.</p>
							<p>When we talk about nesting, we don’t necessarily mean preprocessor nesting, like
							so:</p>
							<pre>
								<code>
{`.foo {
    .bar {}
}`}
								</code>
							</pre>
							<p>We’re actually talking about <em>descendant</em> or <em>child</em> selectors; selectors which
							rely on a thing within a thing. That could look like any one of the following:</p>
							<pre>
								<code>
{`/**
* An element with a class of .bar anywhere inside an element with a class of
* .foo.
*/
.foo .bar {}

/**
* An element with a class of .module-title directly inside an element with a
* class of .module.
*/
.module > .module-title {}

/**
* Any li element anywhere inside a ul element anywhere inside a nav
* element
*/
nav ul li {}`}
								</code>
							</pre>
							<p>Whether you arrive at this CSS via a preprocessor or not isn’t particularly
							important, but it is worth noting that <strong>preprocessors tout this as a feature,
							where is actually to be avoided wherever possible</strong>.</p>
							<p>Generally speaking, each part in a compound selector adds specificity. Ergo, the
							fewer parts to a compound selector then the lower its overall specificity, and
							we always want to keep specificity low. To quote Jonathan Snook:</p>
							<blockquote>
								<p>"…whenever declaring your styles, <strong>use the least number of selectors required
							to style an element."</strong></p>
							</blockquote>
							<p>As a rule, <strong>if a selector will work without it being nested then do not nest
							it</strong>.</p>
							
						</section>
						<section>

							<h4><a id="scope"></a>Scope</h4>
							<p>One possible advantage of nesting—which, unfortunately, does not outweigh the
							disadvantages of increased specificity—is that it provides us with a namespace
							of sorts. A selector like <code>.widget .title</code> scopes the styling of <code>.title</code> to
							an element that only exists inside of an element carrying a class of <code>.widget</code>.</p>
							<p>This goes some way to providing our CSS with scope and encapsulation, but does
							still mean that our selectors are twice as specific as they need to be. A better
							way of providing this scope would be via a namespace—which we already have in
							the form of <a href="#bem-like-naming">BEM-like Naming</a>—which does not lead to an
							unnecessary increase in specificity.</p>
							<p>Now we have better scoped CSS with minimal specificity—the best of both worlds.</p>
							
							<h6>Further Reading</h6>
							<ul>
								<li><a href="http://csswizardry.com/2013/05/scope-in-css/"><cite>‘Scope’ in CSS</cite></a></li>
							</ul>
							
						</section>
						<section>

							<h3><a id="important"></a><code>!important</code></h3>
							<p>The word <code>!important</code> sends shivers down the spines of almost all front-end
							developers. <code>!important</code> is a direct manifestation of problems with specificity;
							it is a way of cheating your way out of specificity wars, but usually comes at a
							heavy price. It is often viewed as a last resort—a desperate, defeated stab at
							patching over the symptoms of a much bigger problem with your code.</p>
							<p>The general rule is that <code>!important</code> is always a bad thing, but, to quote Jamie
							Mason:</p>
							<blockquote>
							<p>Rules are the children of principles.</p>
							</blockquote>
							<p>That is to say, a single rule is a simple, black-and-white way of adhering to a
							much larger principle. When you’re starting out, the rule <q>never use
							<code>!important</code></q> is a good one.</p>
							<p>However, once you begin to grow and mature as a developer, you begin to
							understand that the principle behind that rule is simply about keeping
							specificity low. You’ll also learn when and where the rules can be bent…</p>
							<p><code>!important</code> does have a place in CSS projects, but only if used sparingly and
							proactively.</p>
							<p>Proactive use of <code>!important</code> is when it is used <em>before</em> you’ve encountered any
							specificity problems; when it is used as a guarantee rather than as a fix. For
							example:</p>
							<pre>
								<code>
{`.one-half {
    width: 50% !important;
}

.hidden {
    display: none !important;
}`}
								</code>
							</pre>
							<p>These two helper, or <i>utility</i>, classes are very specific in their
							intentions: you would only use them if you wanted something to be rendered at
							50% width or not rendered at all. If you didn’t want this behaviour, you would
							not use these classes, therefore whenever you do use them you will definitely
							want them to win.</p>
							<p>Here we proactively apply <code>!important</code> to ensure that these styles always win.
							This is correct use of <code>!important</code> to guarantee that these trumps always work,
							and don’t accidentally get overridden by something else more specific.</p>
							<p>Incorrect, <i>reactive</i> use of <code>!important</code> is when it is used to combat
							specificity problems after the fact: applying <code>!important</code> to declarations
							because of poorly architected CSS. For example, let’s imagine we have this HTML:</p>
							<pre>
								<code>
{`<div class="content">
    <h2 class="heading-sub">...</h2>
</div>`}
								</code>
							</pre>
							<p>…and this CSS:</p>
							<pre>
								<code>
{`.content h2 {
    font-size: 2em;
}

.heading-sub {
    font-size: 1.5em !important;
}`}
								</code>
							</pre>
							<p>Here we can see how we’ve used <code>!important</code> to force our <code>.heading-sub {}</code>
							styles to reactively override our <code>.content h2 {}</code> selector. This could have
							been circumvented by any number of things, including using better Selector
							Intent, or avoiding nesting.</p>
							<p>In these situations, it is preferable that you investigate and refactor any
							offending rulesets to try and bring specificity down across the board, as
							opposed to introducing such specificity heavyweights.</p>
							<p><strong>Only use <code>!important</code> proactively, not reactively.</strong></p>
							

						</section>
						<section>

							<h2><a id="architectural-principles"></a>Architectural Principles</h2>
							<p>You would be forgiven for thinking that an architecture for CSS is a somewhat
							grandiose and unnecessary concept: why would something so simple, so
							<em>straightforward</em>, need something as complex or considered as an architecture?!</p>
							<p>Well, as we’ve seen, CSS’ simplicity, its looseness, and its unruly nature mean
							that the best way of managing (read, taming) it at any reasonable scale is
							through a strict and specific architecture. A solid architecture can help us
							control our specificity, enforce naming conventions, manage our source order,
							create a sane development environment, and generally make managing our CSS
							projects a lot more consistent and comfortable.</p>
							<p>There is no tool, no preprocessor, no magic bullet, that will make your CSS
							better on its own: a developer’s best tool when working with such a loose syntax
							is self-discipline, conscientiousness, and diligence, and a well-defined
							architecture will help enforce and facilitate these traits.</p>
							<p>Architectures are large, overarching, principle-led collections of smaller
							conventions which come together to provide a managed environment in which code
							is written and maintained. Architectures are typically quite high level, and
							leave implementation details—such as naming conventions or syntax and
							formatting, for example—to the team implementing it.</p>
							<p>Most architectures are usually based around existing design patterns and
							paradigms, and, more often than not, these paradigms were born of computer
							scientists and software engineers. For all CSS isn’t ‘code’, and doesn’t exhibit
							many traits that programming languages do, we find that we can apply some of
							these same principles to our own work.</p>
							<p>In this section, we’ll take a look at some of these design patterns and
							paradigms, and how we can use them to reduce code—and increase code reuse—in our
							CSS projects.</p>

						</section>
						<section>
							
							<h3><a id="high-level-overview"></a>High-level Overview</h3>
							<p>At a very high-level, your architecture should help you</p>
							<ul>
							<li>provide a consistent and sane environment;</li>
							<li>accommodate change;</li>
							<li>grow and scale your codebase;</li>
							<li>promote reuse and efficiency;</li>
							<li>increase productivity.</li>
							</ul>
							<p>Typically, this will mean a class-based and componentised architecture, split up
							into manageable modules, probably using a preprocessor. Of course, there is far
							more to an architecture than that, so let’s look at some principles…</p>
							
						</section>
						<section>
							
							<h3><a id="object-orientation"></a>Object-orientation</h3>
							<p><i>Object-orientation</i> is a programming paradigm that breaks larger programs
							up into smaller, in(ter)dependent objects that all have their own roles and
							responsibilities. From Wikipedia:</p>
							<blockquote>
								<p>"Object-oriented programming (OOP) is a programming paradigm that represents
								the concept of ‘objects’ […] which are usually instances of classes, [and] are
								used to interact with one another to design applications and computer
								programs."</p>
							</blockquote>
							<p>When applied to CSS, we call it object-oriented CSS, or <i>OOCSS</i>. OOCSS was
							coined and popularised by Nicole Sullivan, whose <cite>Media Object</cite> has
							become the poster child of the methodology.</p>
							<p>OOCSS deals with the separation of UIs into <i>structure</i> and <i>skin</i>:
							breaking UI components into their underlying structural forms, and layering
							their cosmetic forms on separately. This means that we can recycle common and
							recurring design <em>patterns</em> very cheaply without having to necessarily recycle
							their specific implementation details at the same time. OOCSS promotes reuse of
							code, which makes us quicker, as well as keeping the size of our codebase down.</p>
							<p>Structural aspects can be thought of like skeletons; common, recurring frames
							that provide design-free constructs known as <i>objects</i> and
							<i>abstractions</i>. Objects and abstractions are simple design patterns that
							are devoid of any cosmetics; we abstract out the shared structural traits from a
							series of components into a generic object.</p>
							<p>Skin is a layer that we (optionally) add to our structure in order to give
							objects and abstractions a specific look-and-feel. Let’s look at an example:</p>
							<pre>
								<code>
{`/**
* A simple, design-free button object. Extend this object with a .btn--* skin
* class.
*/
.btn {
    display: inline-block;
    padding: 1em 2em;
    vertical-align: middle;
}

/**
* Positive buttons’ skin. Extends .btn.
*/
.btn--positive {
    background-color: green;
    color: white;
}

/**
* Negative buttons’ skin. Extends .btn.
*/
.btn--negative {
    background-color: red;
    color: white;
}`}
								</code>
							</pre>
							<p>Above, we can see how the <code>.btn {'{}'}</code> class simply provides structural styling to
							an element, and doesn’t concern itself with any cosmetics. We supplement the
							<code>.btn {}</code> object with a second class, such as <code>.btn--negative {'{}'}</code> in order to
							give that DOM node specific cosmetics:</p>
							<pre>
								<code>
{`<button class="btn btn--negative">Delete</button>`}								
								</code>
							</pre>
							<p>Favour the multiple-class approach over using something like <code>@extend</code>: using
							multiple classes in your markup—as opposed to wrapping the classes up into one
							using a preprocessor—</p>
							<ul>
							<li>gives you a better paper-trail in your markup, and allows you to see quickly
							and explicitly which classes are acting on a piece of HTML;</li>
							<li>allows for greater composition in that classes are not tightly bound to other
							styles in your CSS.</li>
							</ul>
							<p>Whenever you are building a UI component, try and see if you can break it into
							two parts: one for structural styles (paddings, layout, etc.) and another for
							skin (colours, typefaces, etc.).</p>
							<h6>Further Reading</h6>
								<ul>
								<li><a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/">The media object saves hundreds of lines of code</a></li>
								<li><a href="http://csswizardry.com/2013/05/the-flag-object/">The flag object</a></li>
								<li><a href="http://csswizardry.com/2014/03/naming-ui-components-in-oocss/">Naming UI components in OOCSS</a></li>
							</ul>

						</section>
						<section>
							
							<h3><a id="the-single-responsibility-principle"></a>The Single Responsibility Principle</h3>
							<p>The <i>single responsibility principle</i> is a paradigm that, very loosely,
							states that all pieces of code (in our case, classes) should focus on doing one
							thing and one thing only. More formally:</p>
							<blockquote>
							<p>"…the single responsibility principle states that every context (class,
							function, variable, etc.) should have a single responsibility, and that
							responsibility should be entirely encapsulated by the context."</p>
							</blockquote>
							<p>What this means for us is that our CSS should be composed of a series of much
							smaller classes that focus on providing very specific and limited functionality.
							This means that we need to decompose UIs into their smallest component pieces
							that each serve a single responsibility; they all do just one job, but can be
							very easily combined and composed to make much more versatile and complex
							constructs. Let’s take some example CSS that does not adhere to the single
							responsibility principle:</p>
							<pre>
								<code>
{`.error-message {
    display: block;
    padding: 10px;
    border-top: 1px solid #f00;
    border-bottom: 1px solid #f00;
    background-color: #fee;
    color: #f00;
    font-weight: bold;
}

.success-message {
    display: block;
    padding: 10px;
    border-top: 1px solid #0f0;
    border-bottom: 1px solid #0f0;
    background-color: #efe;
    color: #0f0;
    font-weight: bold;
}`}
								</code>
							</pre>
							<p>Here we can see that—despite being named after one very specific use-case—these
							classes are handling quite a lot: layout, structure, and cosmetics. We also have
							a <em>lot</em> of repetition. We need to refactor this in order to abstract out some
							shared objects (OOCSS) and bring it more inline with the single responsibility
							principle. We can break these two classes out into four much smaller
							responsibilities:</p>
							<pre>
								<code>
{`.box {
    display: block;
    padding: 10px;
}

.message {
    border-style: solid;
    border-width: 1px 0;
    font-weight: bold;
}

.message--error {
    background-color: #fee;
    color: #f00;
}

.message--success {
    background-color: #efe;
    color: #0f0;
}`}
								</code>
							</pre>
							<p>Now we have a general abstraction for boxes which can live, and be used,
							completely separately from our message component, and we have a base message
							component that can be extended by a number of smaller responsibility classes.
							The amount of repetition has been greatly reduced, and our ability to extend and
							compose our CSS has been greatly increased. This is a great example of OOCSS and
							the single responsibility principle working in tandem.</p>
							<p>By focussing on single responsibilities, we can give our code much more
							flexibility, and extending components’ functions becomes very simple when
							sticking to the <i>open/closed principle</i>, which we’re going to look at next.</p>
							<h6>Further Reading</h6>
							<ul>
								<li><a href="http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/">The single responsibility principle applied to CSS</a></li>
							</ul>

						</section>
						<section>	
							
							<h3><a id="the-openclosed-principle"></a>The Open/Closed Principle</h3>
							<p>The <i>open/closed principle</i>, in my opinion, is rather poorly named. It is
							poorly named because 50% of the vital information is omitted from its title. The
							open/closed principle states that</p>
							<blockquote>
								<p>"[s]oftware entities (classes, modules, functions, etc.) should be open for
								extension, but closed for modification."</p>
							</blockquote>
							<p>See? The most important words—<i>extension</i> and <i>modification</i>—are
							completely missing from the name, which isn’t very useful at all.</p>
							<p>Once you have trained yourself to remember what the words open and closed
							actually relate to, you’ll find that open/closed principle remarkably simple:
							any additions, new functionality, or features we add to our classes should be
							added via <em>extension</em>—we should not modify these classes directly. This really
							trains us to write bulletproof single responsibilities: because we shouldn’t
							modify objects and abstractions directly, we need to make sure we get them as
							simple as possible the first time. This means that we should never need to
							actually change an abstraction—we’d simply stop using it—but any slight variants
							of it can be made very easily by extending it.</p>
							<p>Let’s take an example:</p>
							<pre>
								<code>
{`.box {
    display: block;
    padding: 10px;
}

.box--large {
    padding: 20px;
}`}
								</code>
							</pre>
							<p>Here we can see that the <code>.box {'{}'}</code> object is incredibly simple: we’ve stripped
							it right back into one very small and very focussed responsibility. To modify
							that box, we extend it with another class; <code>.box--large {'{}'}</code>. Here the <code>.box {'{}'}</code>
							class is closed to modification, but open to being extended.</p>
							<p>An incorrect way of achieving the same might look like this:</p>
							<pre>
								<code>
{`.box {
    display: block;
    padding: 10px;
}

.content .box {
    padding: 20px;
}`}
								</code>
							</pre>
							<p>Not only is this overly specific, locationally dependent, and potentially
							displaying poor Selector Intent, we are modifying the <code>.box {}</code> directly. We
							should rarely—if ever—find an object or abstraction’s class as a key selector in
							a compound selector.</p>
							<p>A selector like <code>.content .box {}</code> is potentially troublesome because</p>
							<ul>
								<li>it forces all <code>.box</code> components into that style when placed inside of
								<code>.content</code>, which means the modification is dictated to developers, whereas
								developers should be allowed to opt into changes explicitly;</li>
								<li>the <code>.box</code> style is now unpredictable to developers; the single responsibility
								no longer exists because nesting the selector produces a forced caveat.</li>
							</ul>
							<p>All modifications, additions, and changes should always be opt-in, not
							mandatory. If you think something might need a slight adjustment to take it away
							from the norm, provide another class which adds this functionality.</p>
							<p>When working in a team environment, be sure to write API-like CSS; always ensure
							that existing classes remain backward compatible (i.e. no changes at their root)
							and provide new hooks to bring in new features. Changing the root object,
							abstraction, or component could have huge knock-on effects for developers making
							use of that code elsewhere, so never modify existing code directly.</p>
							<p>Exceptions may present themselves when it transpires that a root object does
							need a rewrite or refactor, but it is only in these specific cases that you
							should modify code. Remember: <strong>open for extension; closed for modification</strong>.</p>
							<h6>Further Reading</h6>
							<ul>
								<li><a href="http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/">The open/closed principle applied to CSS</a></li>
							</ul>

						</section>
						<section>
							
							<h3><a id="dry"></a>DRY</h3>
							<p><i>DRY</i>, which stands for <i>Don’t Repeat Repeat Yourself</i>, is a
							micro-principle used in software development which aims to keep the repetition
							of key information to a minimum. Its formal definition is that</p>
							<blockquote>
								<p>"[e]very piece of knowledge must have a single, unambiguous, authoritative
								representation within a system."</p>
							</blockquote>
							<p>Although a very simple principle—in principle—DRY is often misinterpreted as the
							necessity to never repeat the exact same thing twice at all in a project. This
							is impractical and usually counterproductive, and can lead to forced
							abstractions, over-thought and -engineered code, and unusual dependencies.</p>
							<p>The key isn’t to avoid all repetition, but to normalise and abstract <em>meaningful</em> repetition. If two things happen to share the same declarations
							coincidentally, then we needn’t DRY anything out; that repetition is purely
							circumstantial and cannot be shared or abstracted. For example:</p>
							<pre>
								<code>
{`.btn {
    display: inline-block;
    padding: 1em 2em;
    font-weight: bold;
}

[...]

.page-title {
    font-size: 3rem;
    line-height: 1.4;
    font-weight: bold;
}

[...]

.user-profile__title {
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: bold;
}`}
								</code>
							</pre>
							<p>From the above code, we can reasonably deduce that the <code>font-weight: bold;</code>
							declaration appears three times purely coincidentally. To try and create an
							abstraction, mixin, or <code>@extend</code> directive to cater for this repetition would
							be overkill, and would tie these three rulesets together based purely on
							circumstance.</p>
							<p>However, imagine we’re using a web-font that requires <code>font-weight: bold;</code> to be
							declared every time the <code>font-family</code> is:</p>
							<pre>
								<code>
{`.btn {
    display: inline-block;
    padding: 1em 2em;
    font-family: "My Web Font", sans-serif;
    font-weight: bold;
}

[...]

.page-title {
    font-size: 3rem;
    line-height: 1.4;
    font-family: "My Web Font", sans-serif;
    font-weight: bold;
}

[...]

.user-profile__title {
    font-size: 1.2rem;
    line-height: 1.5;
    font-family: "My Web Font", sans-serif;
    font-weight: bold;
}`}
								</code>
							</pre>
							<p>Here we’re repeating a more meaningful snippet of CSS; these two declarations
							have to always be declared together. In this instance, we probably would DRY
							out our CSS.</p>
							<p>I would recommend using a mixin over <code>@extend</code> here because, even though the two
							declarations are thematically grouped, the rulesets themselves are still
							separate, unrelated entities: to use <code>@extend</code> would be to physically group
							these unrelated rulesets together in our CSS, thus making the unrelated related.</p>
							<p>Our mixin:</p>
							<pre>
								<code>
{`@mixin my-web-font() {
    font-family: "My Web Font", sans-serif;
    font-weight: bold;
}

[...]

.btn {
    display: inline-block;
    padding: 1em 2em;
    @include my-web-font();
}

[...]

.page-title {
    font-size: 3rem;
    line-height: 1.4;
    @include my-web-font();
}

[...]

.user-profile__title {
    font-size: 1.2rem;
    line-height: 1.5;
    @include my-web-font();
}`}
								</code>
							</pre>
							<p>Now the two declarations only exist once, meaning we’re not repeating ourselves.
							If we ever switch out our web-font, or move to a <code>font-weight: normal;</code>
							version, we only need to make that change in one place.</p>
							<p>In short, only DRY code that is actually, thematically related. Do not try to
							reduce purely coincidental repetition: <strong>duplication is better than the wrong
							abstraction</strong>.</p>
							<h6>Further Reading</h6>
							<ul>
								<li><a href="http://csswizardry.com/2013/07/writing-dryer-vanilla-css/">Writing DRYer vanilla CSS</a></li>
							</ul>
							
						</section>
						<section>

							<h3><a id="composition-over-inheritance"></a>Composition over Inheritance</h3>
							<p>Now that we’re used to spotting abstractions and creating single
							responsibilities, we should be in a great position to start composing more
							complex composites from a series of much smaller component parts. Nicole
							Sullivan likens this to using Lego; tiny, single responsibility pieces which can
							be combined in a number of different quantities and permutations to create a
							multitude of very different looking results.</p>
							<p>This idea of building through composition is not a new one, and is often
							referred to as <i>composition over inheritance</i>. This principle suggests that
							larger systems should be composed from much smaller, individual parts, rather
							than inheriting behaviour from a much larger, monolithic object. This should
							keep your code decoupled—nothing inherently relies on anything else.</p>
							<p>Composition is a very valuable principle for an architecture to make use of,
							particularly considering the move toward component-based UIs. It will mean you
							can more easily recycle and reuse functionality, as well rapidly construct
							larger parts of UI from a known set of composable objects. Think back to our
							error message example in the <a href="#the-single-responsibility-principle">Single Responsibility
							Principle</a> section; we created a complete
							UI component by composing a number of much smaller and unrelated objects.</p>
							
						</section>
						<section>

							<h3><a id="the-separation-of-concerns"></a>The Separation of Concerns</h3>
							<p>The <i>separation of concerns</i> is a principle which, at first, sounds a lot
							like the single responsibility principle. The separation of concerns states that
							code should be broken up</p>
							<blockquote>
								<p>"into distinct sections, such that each section addresses a separate concern. A
								concern is a set of information that affects the code of a computer program.
								[…] A program that embodies SoC well is called a modular program."</p>
							</blockquote>
							<p>Modular is a word we’re probably used to; the idea of breaking UIs and CSS into
							much smaller, composable pieces. The separation of concerns is just a formal
							definition which covers the concepts of modularity and encapsulation in code. In
							CSS this means building individual components, and writing code which only
							focusses itself on one task at a time.</p>
							<p>The idea here is to focus fully on one thing at once; build one thing
							to do its job very well whilst paying as little attention as possible to other
							facets of your code. Once you have addressed and built all these separate
							concerns in isolation—meaning they’re probably very modular, decoupled, and
							encapsulated—you can begin bringing them together into a larger project.</p>
							<p>A great example is layout. If you are using a grid system, all of the code
							pertaining to layout should exist on its own, without including anything else.
							You’ve written code that handles layout, and that’s it:</p>
							<pre>
								<code>
{`<div class="layout">

    <div class="layout__item  two-thirds">
    </div>

    <div class="layout__item  one-third">
    </div>

</div>`}
								</code>
							</pre>
							<p>You will now need to write new, separate code to handle what lives inside of
							that layout:</p>
							<pre>
								<code>
{`<div class="layout">

    <div class="layout__item  two-thirds">
        <section class="content">
        ...
        </section>
    </div>

    <div class="layout__item  one-third">
        <section class="sub-content">
        ...
        </section>
    </div>

</div>`}
								</code>
							</pre>
							<p>The separation of concerns allows you to keep code self-sufficient, ignorant,
							and ultimately a lot more maintainable. Code which adheres to the separation of
							concerns can be much more confidently modified, edited, extended, and maintained
							because we know how far its responsibilities reach. We know that modifying
							layout, for example, will only ever modify layout—nothing else.</p>
							<p>The separation of concerns increases reusability and confidence whilst reducing
							dependency.</p>
							<h4><a id="misconceptions"></a>Misconceptions</h4>
							<p>There are, I feel, a number of unfortunate misconceptions surrounding the
							separation of concerns when applied to HTML and CSS. They all seem to revolve
							around some format of:</p>
							<blockquote>
							<p>Using classes for CSS in your markup breaks the separation of concerns.</p>
							</blockquote>
							<p>Unfortunately, this is simply not true. The separation of concerns <em>does</em> exist
							in the context of HTML and CSS (and JS), but not in the way a lot of people seem
							to believe.</p>
							<p>The separation of concerns when applied to front-end code is not about
							classes-in-HTML-purely-for-styling-hooks-blurring-the-lines-between-concerns;
							it is about the very fact that we are using different languages for markup and
							styling at all.</p>
							<p>Back before CSS was widely adopted, we’d use <code>table</code>s to lay content out, and
							<code>font</code> elements with <code>color</code> attributes to provide cosmetic styling. The problem
							here is that HTML was being used to create content and also to style it; there
							was no way of having one without the other. This was a complete lack of
							separation of concerns, which was a problem. CSS’ job was to provide a
							completely new syntax to apply this styling, allowing us to separate our
							content and style concerns across two technologies.</p>
							<p>Another common argument is that <q>putting classes in your HTML puts style
							information in your markup</q>.</p>
							<p>So, in a bid to circumvent this, people adopt selectors that might look a little
							like this:</p>
							<pre>
								<code>
{`body > header:first-of-type > nav > ul > li > a {}`}
								</code>
							</pre>
							<p>This CSS—presumably to style our site’s main nav—has the usual problems of
							location dependency, poor Selector Intent, and high specificity, but it also
							manages to do <em>exactly what developers are trying to avoid</em>, only in the
							opposite direction: <strong>it puts DOM information in your CSS</strong>. Aggressive attempts
							to avoid putting any style hints or hooks in markup only lead to overloading
							stylesheets with DOM information.</p>
							<p>In short: having classes in your markup does not violate the separation of
							concerns. Classes merely act as an API to link two separate concerns together.
							The simplest way to separate concerns is to write well formed HTML and well
							formed CSS, and link to two together with sensible, judicious use of classes.</p>
						</section>
					</article>
				</main>
        	</div>
        );
    }
}