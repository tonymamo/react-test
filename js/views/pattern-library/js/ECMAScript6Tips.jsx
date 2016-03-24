import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from '../Nav.jsx';

export default class ECMAScript6Tips extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pattern-library">
                <Nav />
                <main className="pattern-library__content">
                    <article>
                        <h2 className="pattern-library__heading">ECMAScript 6 Tips</h2>
                    </article>
                    <section>
                        <h3>String Interpolation</h3>

                        <p> String interpolation allows us to easily
                            incorporate
                            variables in our strings. This helps out greatly for strings that need multiple lines as you
                            don{"'"}t need to
                            explicitly add a "\n" for a new line. It also eliminates the obnoxious amount of quotation
                            marks and plus signs needed.</p>
                        <pre>
                            <code>
                                {'//ES6'}{'\n'}
                                {'var customer = { name: "Foo" }'}{'\n'}
                                {'var card = { amount: 7, product: "Bar", unitprice: 42 }'}{'\n'}
                                {'message = `Hello ${customer.name}, '}{'\n'}
                                {'want to buy ${card.amount} ${card.product} for '}{'\n'}
                                {'a total of ${card.amount * card.unitprice} bucks?`'}{'\n'}{'\n'}
                                {'//ES5'}{'\n'}
                                {'var customer = { name: "Foo" };'}{'\n'}
                                {'var card = { amount: 7, product: "Bar", unitprice: 42 };'}{'\n'}
                                {'message = "Hello " + customer.name + ",'}\n{'" +'}{'\n'}
                                {'"want to buy " + card.amount + " " + card.product + " for'}\n{'" +'}{'\n'}
                                {'"a total of " + (card.amount * card.unitprice) + " bucks?";'}
                            </code>
                        </pre>
                    </section>
                    <section>
                        <h3>Arrow Functions</h3>

                        <p> Arrow functions help clean up code when writing functions.</p>
                        <pre>
                            <code>
                                {'//ES6'}{'\n'}
                                {'nums.forEach((num) => {'}{'\n'}
                                {'if (num % 5 === 0)'}{'\n'}
                                {'fives.push(num)'}{'\n'}
                                {'})'}{'\n'}{'\n'}
                                {'//ES5'}{'\n'}
                                {'nums.forEach(function (num) {'}{'\n'}
                                {'if (num % 5 === 0)'}{'\n'}
                                {'fives.push(num);'}{'\n'}
                                {'});'}{'\n'}
                            </code>
                        </pre>
                        <pre>
                            <code>
                                {'//ES6'}{'\n'}
                                {'odds  = evens.map(v => v + 1)'}{'\n'}{'\n'}
                                {'//ES5'}{'\n'}
                                {'odds  = evens.map(function (v) { return v + 1; });'}
                            </code>
                        </pre>
                    </section>
                    <section>
                        <h3>Spread Operator</h3>

                        <p>Spread Operators are great for passing multiple variables as one paramater to a function or literal element like an array.</p>
                        <pre>
                            <code>
                                {'//ES6'}{'\n'}
                                {'var params = [ "hello", true, 7 ]'}{'\n'}
                                {'var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]'}{'\n'}
                                {'f(1, 2, ...params) === 9'}{'\n'}{'\n'}
                                {'var str = "foo"'}{'\n'}
                                {'var chars = [ ...str ] // [ "f", "o", "o" ]'}{'\n'}{'\n'}
                                {'//ES5'}{'\n'}
                                {'var params = [ "hello", true, 7 ];'}{'\n'}
                                {'var other = [ 1, 2 ].concat(params); // [ 1, 2, "hello", true, 7 ]'}{'\n'}
                                {'f.apply(undefined, [ 1, 2 ].concat(params)) === 9;'}{'\n'}{'\n'}
                                {'var str = "foo";'}{'\n'}
                                {'var chars = str.split(""); // [ "f", "o", "o" ]'}
                            </code>
                        </pre>
                    </section>
                </main>
            </div>

        );
    }
}