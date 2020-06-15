// let event = require('./event');
// let service = require('./service');

import event from './event';
import service from './service';

let connector = {};

connector.send = function (type, data) {
    service.send(type, data);
};

connector.emit = function (types, data) {
    if (!types) {
        return false;
    }

    let typeArr = [];
    if (typeof types === 'string') {
        typeArr = types.split(',');
    } else {
        typeArr = types.slice();
    }

    if (typeArr.length === 0) {
        return false;
    }

    typeArr.forEach(function (type) {
        event.triggerEvent(type, data);
    }, this);
    return true;
};

connector.on = function (types, selector, thisObj) {
    if (!types) {
        return false;
    }

    let typeArr = [];
    if (typeof types === 'string') {
        typeArr = types.split(',');
    } else {
        typeArr = types.slice();
    }

    if (typeArr.length === 0) {
        return false;
    }

    typeArr.forEach(function (type) {
        event.addEventListener(type, selector, thisObj);
    }, this);
    return true;
};

connector.off = function (types, selector) {
    if (!types) {
        return false;
    }

    let typeArr = [];
    if (typeof types === 'string') {
        typeArr = types.split(',');
    } else {
        typeArr = types.slice();
    }

    if (typeArr.length === 0) {
        return false;
    }

    typeArr.forEach(function (type) {
        event.removeEventListener(type, selector);
    }, this);
    return true;
};

// module.exports = connector;
export default connector;
