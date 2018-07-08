'use strict';
module.exports = function() {
    let number = Math.floor(Math.random() * Math.floor(1000000));
    return function secretNumberGenerator() {
        return number;
    }
};


