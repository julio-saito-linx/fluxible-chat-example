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
var createMessage = require('../actions/createMessage');
var ENTER_KEY_CODE = 13;

var MessageComposer = React.createClass({

    contextTypes: {
        executeAction: React.PropTypes.func.isRequired
    },

    getInitialState: function() {
        return {
            m_id: 'm_7',
            author: 'Bill',
            text: ''
        };
    },

    componentWillReceiveProps: function(nextProps) {
        this.props.messages.filter((item) => {
            if (item.isSelected) {
                console.log('\n>>---------\n item:', item, '\n>>---------\n');
                this.setState({
                    m_id: item.id,
                    author: item.authorName,
                    text: item.text,
                });
            }
        });
    },

    render: function() {
        require('debug')('  > MessageComposer')('render', this.props);
        return (
            <div>
                m_id: <input
                    className="message-composer-m_id"
                    name="m_id"
                    value={this.state.m_id}
                    onChange={this._onChangeMessageId}
                />
                author: <input
                    className="message-composer-author"
                    name="author"
                    value={this.state.author}
                    onChange={this._onChangeAuthor}
                />
                <textarea
                    className="message-composer"
                    name="message"
                    value={this.state.text}
                    onChange={this._onChange}
                    onKeyDown={this._onKeyDown}
                />
            </div>
        );
    },

    _onChangeMessageId: function(event, value) {
        this.setState({m_id: event.target.value});
    },
    _onChangeAuthor: function(event, value) {
        this.setState({author: event.target.value});
    },
    _onChange: function(event, value) {
        this.setState({text: event.target.value});
    },

    _onKeyDown: function(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            event.stopPropagation();

            if (this.state.text.trim()) {
                if (!this.state.m_id || this.state.m_id.trim().length === 0) {
                    this.setState({m_id: null});
                }

                this.context.executeAction(createMessage, {
                    m_id      : this.state.m_id,
                    author    : this.state.author.trim(),
                    text      : this.state.text.trim()
                });
            }
            this.setState({
                text   : ''
            });
        }
    }

});

module.exports = MessageComposer;
