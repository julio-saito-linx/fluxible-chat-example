/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
var debug = require('debug')('Example:removeMessageAction');
var ThreadStore = require('../stores/ThreadStore');

module.exports = function (context, payload, done) {
    var threadStore = context.getStore(ThreadStore);

    var message = threadStore.removeMessage({
        timestamp : Date.now(),
        m_id      : payload.m_id,
        authorName: payload.author,
        isRead    : true,
        text      : payload.text
    });

    debug('dispatching REMOVE_MESSAGE', message);
    context.dispatch('REMOVE_MESSAGE', [message]);
    context.service.delete('message', message, {id: payload.m_id}, function (err) {
        if (err) {
            debug('dispatching REMOVE_MESSAGE_FAILURE', message);
            context.dispatch('REMOVE_MESSAGE_FAILURE', [message]);
            done();
            return;
        }
        debug('dispatching REMOVE_MESSAGE_SUCCESS', message);
        context.dispatch('REMOVE_MESSAGE_SUCCESS', [message]);
        done();
    });
};
