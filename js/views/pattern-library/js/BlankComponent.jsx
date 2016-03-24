import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from '../Nav.jsx';

export default class BlankComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pattern-library">
                <Nav />
                <main className="pattern-library__content">
                    <article>
                        <h2 className="pattern-library__heading">Blank Component</h2>
                    </article>
                    <section>
                        <p>Here is a bare bones component you can copy and paste into a new .jsx file to get a good head start on creating something new.
                        Using this is better than copying an existing one and deleting all the crap out of it to start fresh.</p>
                        <pre>
                            <code>
                                {'import React from '}'{'react'}'{';'}{'\n'}
                                {'import { connect } from '}'{'react-redux'}'{';'}{'\n'}
                                {'import BaseComponent from '}'{'../../../controls/BaseComponent.jsx'}'{';'}{'\n'}
                                {'import Input from '}'{'../../../controls/form/Input.jsx'}'{';'}{'\n'}
                                {'import FileUpload from '}'{'../../../controls/form/FileUpload.jsx'}'{';'}{'\n'}
                                {'import DatePicker from '}'{'../../../controls/DatePicker.jsx'}'{';'}{'\n'}
                                {'import { addAlert } from '}'{'../../../redux/ducks/globalAlerts.jsx'}'{';'}{'\n'}
                                {'import Checkbox from '}'{'../../../controls/form/Checkbox.jsx'}'{';'}{'\n'}
                                {'import MultiSelectGroup from '}'{'../../../controls/form/MultiSelectGroup.jsx'}'{';'}{'\n'}
                                {'import OptionGroup from '}'{'../../../controls/form/OptionGroup.jsx'}'{';'}{'\n'}
                                {'import SingleSelectGroup from '}'{'../../../controls/form/SingleSelectGroup.jsx'}'{';'}{'\n'}
                                {'import BackButton from '}'{'../../../controls/BackButton.jsx'}'{';'}{'\n'}
                                {'export default class NewComponentName extends BaseComponent {'}{'\n'}
                                {'    constructor(props) {'}{'\n'}
                                {'        super(props);'}{'\n'}
                                {'    }'}{'\n'}{'\n'}

                                {'    componentWillMount() {'}{'\n'}{'\n'}

                                {'    }'}{'\n'}{'\n'}

                                {'    componentDidMount() {'}{'\n'}{'\n'}

                                {'    }'}{'\n'}{'\n'}

                                {'    componentWillUpdate(){'}{'\n'}{'\n'}

                                {'    }'}{'\n'}{'\n'}

                                {'    shouldComponentUpdate(nextProps, nextState) {'}{'\n'}{'\n'}

                                {'    }'}{'\n'}{'\n'}

                                {'    componentDidUpdate(previousProps, previousState) {'}{'\n'}{'\n'}

                                {'    }'}{'\n'}{'\n'}

                                {'    componentWillReceiveProps(nextProps) {'}{'\n'}{'\n'}

                                {'    }'}{'\n'}{'\n'}

                                {'    componentWillUnmount(){'}{'\n'}{'\n'}

                                {'    }'}{'\n'}{'\n'}

                                {'    render() {'}{'\n'}
                                {'        return ('}{'\n'}
                                {'            <div>'}{'\n'}

                                {'            </div>'}{'\n'}
                                {'        );'}{'\n'}
                                {'    }'}{'\n'}
                                {'}'}
                            </code>
                        </pre>
                    </section>
                </main>
            </div>

        );
    }
}