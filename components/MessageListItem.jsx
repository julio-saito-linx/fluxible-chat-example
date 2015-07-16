/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
var React = require('react');

var ReactPropTypes = React.PropTypes;

var MessageListItem = React.createClass({

    propTypes: {
        message: ReactPropTypes.object
    },

    /**
     * Invoked once, both on the client and server, immediately before the
     * initial rendering occurs. If you call setState within this method,
     * render() will see the updated state and will be executed only once
     * despite the state change.
     */
    componentWillMount: function() {
        require('debug')('     > componentWillMount')(this.props.message.id);
    },

    /**
     * Invoked once, only on the client (not on the server), immediately after
     * the initial rendering occurs. At this point in the lifecycle, the
     * component has a DOM representation which you can access via
     * React.findDOMNode(this).
     *
     * If you want to integrate with other JavaScript frameworks, set timers
     * using setTimeout or setInterval, or send AJAX requests, perform those
     * operations in this method.
     */
    componentDidMount: function() {
        require('debug')('     > componentDidMount')(this.props.message.id);
    },

    /**
     * Invoked when a component is receiving new props. This method is not
     * called for the initial render.
     *
     * Use this as an opportunity to react to a prop transition before render()
     * is called by updating the state using this.setState(). The old props can
     * be accessed via this.props. Calling this.setState() within this function
     * will not trigger an additional render.
     *
     * Note:
     * There is no analogous method componentWillReceiveState. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need to perform operations in response to a state change, use
     * componentWillUpdate.
     */
    componentWillReceiveProps: function(nextProps) {
        require('debug')('     > componentWillReceiveProps')(this.props.message.id);
        require('debug')('     > componentWillReceiveProps')(nextProps);
    },

    /**
     * Invoked before rendering when new props or state are being received. This
     * method is not called for the initial render or when forceUpdate is used.
     *
     * Use this as an opportunity to return false when you're certain that the
     * transition to the new props and state will not require a component
     * update.
     *
     * If shouldComponentUpdate returns false, then render() will be completely
     * skipped until the next state change. (In addition, componentWillUpdate
     * and componentDidUpdate will not be called.)
     *
     * By default, shouldComponentUpdate always returns true to prevent subtle
     * bugs when state is mutated in place, but if you are careful to always
     * treat state as immutable and to read only from props and state in
     * render() then you can override shouldComponentUpdate with an
     * implementation that compares the old props and state to their
     * replacements.
     *
     * If performance is a bottleneck, especially with dozens or hundreds of
     * components, use shouldComponentUpdate to speed up your app.
     */
    shouldComponentUpdate: function(nextProps, nextState) {
        require('debug')('     > shouldComponentUpdate')(this.props.message.id);
        require('debug')('     > shouldComponentUpdate - nextProps')(nextProps);
        require('debug')('     > shouldComponentUpdate - nextState')(nextState);
        return true;
    },

    /**
     * Invoked immediately before rendering when new props or state are being
     * received. This method is not called for the initial render.
     *
     * Use this as an opportunity to perform preparation before an update
     * occurs.
     *
     * Note:
     * You cannot use this.setState() in this method. If you need to
     * update state in response to a prop change, use componentWillReceiveProps
     * instead.
     */
    componentWillUpdate: function(nextProps, nextState) {
        require('debug')('     > componentWillUpdate')(this.props.message.id);
        require('debug')('     > componentWillUpdate - nextProps')(nextProps);
        require('debug')('     > componentWillUpdate - nextState')(nextState);
    },

    /**
     * Invoked immediately after the component's updates are flushed to the DOM.
     * This method is not called for the initial render.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     */
    componentDidUpdate: function(prevProps, prevState) {
        require('debug')('     > componentDidUpdate')(this.props.message.id);
        require('debug')('     > componentDidUpdate - prevProps')(prevProps);
        require('debug')('     > componentDidUpdate - prevState')(prevState);
    },

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     *
     * Perform any necessary cleanup in this method, such as invalidating timers
     * or cleaning up any DOM elements that were created in componentDidMount.
     */
    componentWillUnmount: function() {
        require('debug')('     > componentWillUnmount')(this.props.message.id);
    },

    render: function() {
        require('debug')('  > MessageListItem')('render', this.props);
        var message = this.props.message;
        return (
            <li className="message-list-item">
                <h5 className="message-author-name">{message.authorName}</h5>
                <div className="message-time">
                    {(new Date(message.timestamp)).toTimeString()}
                </div>
                <div className="message-text">{message.text}</div>
            </li>
        );
    }

});

module.exports = MessageListItem;
