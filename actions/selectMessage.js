/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
var debug = require('debug')('Example:selectMessageAction');
var MessageStore = require('../stores/MessageStore');

module.exports = function (context, payload, done) {
    var messageStore = context.getStore(MessageStore);

    var message = messageStore.selectMessage({
        timestamp : Date.now(),
        m_id      : payload.m_id,
        authorName: payload.author,
        isRead    : true,
        text      : payload.text
    });

    debug('dispatching SELECT_MESSAGE', message);
    context.dispatch('SELECT_MESSAGE', message);
    // context.service.update('message', message, message, function (err) {
    //     if (err) {
    //         debug('dispatching SELECT_MESSAGE_FAILURE', message);
    //         context.dispatch('SELECT_MESSAGE_FAILURE', [message]);
    //         done();
    //         return;
    //     }
    //     debug('dispatching SELECT_MESSAGE_SUCCESS', message);
    //     context.dispatch('SELECT_MESSAGE_SUCCESS', [message]);
    //     done();
    // });
};
