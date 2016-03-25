import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from '../Nav.jsx';

export default class APICalls extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pattern-library">
                <Nav />
                <main className="pattern-library__content">
                    <article>
                        <h2 className="pattern-library__heading">API Calls</h2>
                    </article>
                    <p> To make our calls to the API, we use a new technology called Redux. Redux dispatches an action to the appropriate
                    Duck which interacts with our API middleware to make a Fetch call to our API. Data is then returned to our
                    store where we can consume it on the UI. An example GET method is shown below.</p>
                    <section>
                        <p> We call the getAllFormularies function from the view:</p>
                        <pre>
                            <code>
                                {'//views/formulary-management/formularies/Formularies.jsx'}{'\n'}
                                {'export default connect('}{'\n'}
                                {'(state) => ({'}{'\n'}
                                {'   formularies: state.formularies'}{'\n'}
                                {'}),'}{'\n'}
                                {'(dispatch) => ({'}{'\n'}
                                {'   getAllFormularies: ()=> dispatch(getAllFormularies())})'}{'\n'}
                                {')(Formularies);'}{'\n'}
                            </code>
                        </pre>
                    </section>
                    <section>
                        <p> We call the getAllFormularies action in the duck:</p>
                        <pre>
                            <code>
                            {'//ducks/formularies.jsx'}{'\n'}
                            {'export function getAllFormularies() {'}{'\n'}
                            {'return {'}{'\n'}
                            {'   types: [GET_ALL_FORMULARIES_REQUEST, GET_ALL_FORMULARIES_SUCCESS, GET_ALL_FORMULARIES_FAIL],'}{'\n'}
                            {'   shouldCallAPI: (state) => state.formularies.items.length === 0,'}{'\n'}
                            {'   fetchURL: endpoints.ALL_FORMULARIES'}{'\n'}
                            {'   };'}{'\n'}
                            {'}'}
                            </code>
                        </pre>

                    </section>
                    <section>
                        <p> Our API middleware then handles the API interaction and returns the data to our store:</p>
                        <pre>
                            <code>
                            {'//middleware/api.jsx'}{'\n'}
                            {'return fetch(fetchURL, fetchOptions)'}{'\n'}
                            {'   .then(response => {'}{'\n'}
                            {'       if (response.ok) {'}{'\n'}
                            {'         response.json().then(json => {'}{'\n'}
                            {'             dispatch(Object.assign({}, {'}{'\n'}
                            {'                  response: json,'}{'\n'}
                            {'                  type:     successType,'}{'\n'}
                            {'                            payload'}{'\n'}
                            {'   }));'}{'\n'}
                            {'})'}{'\n'}
                            </code>
                        </pre>
                    </section>
                </main>
            </div>

        );
    }
}