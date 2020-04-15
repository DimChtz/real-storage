/**
 * 
 * real-storage
 * Version: 1.0.0
 * URL: https://github.com/DimChtz/real-storage
 * Author: Dimitris Chatzis
 * Author URL: https://dimchatzis.com
 * 
 */

(function(window, document, undefined) {

    var isFunction = function(callback) {
        return callback && {}.toString.call(callback) === '[object Function]';
    }

    var setEvent = function(key, callback) {

        var _key = key;
        window.addEventListener('storage', function(event) {

            if ( event.key === _key ) {
                callback(event);
            }

        }, true);

        return true;

    }

    function RealStorage(name, opt) {

        this.name = name || '';
        this.data = opt.data || {};

        if ( localStorage.getItem(name) === null && opt.data !== undefined ) {
            
            localStorage.setItem(name, JSON.stringify(this.data));

        } else {

            this.data = JSON.parse(localStorage.getItem(this.name));

        }

        opt['onchange'] && isFunction(opt['onchange']) && setEvent(this.name, opt['onchange']);

    }

    RealStorage.prototype.onchange = function(callback) {

        callback && isFunction(callback) && setEvent(this.name, callback);

        return this;

    }

    RealStorage.prototype.set = function(key, value) {

        this.data[key] = value
        localStorage.setItem(this.name, JSON.stringify(this.data));

        return this;

    }

    RealStorage.prototype.get = function(key) {

        if ( this.data.hasOwnProperty(key) )
            return this.data[key];

        return false;

    }

    RealStorage.prototype.remove = function(key) {

        if ( this.data.hasOwnProperty(key) ) {

            delete this.data[key];
            localStorage.setItem(this.name, JSON.stringify(this.data));

        }

        return this;

    }

    RealStorage.prototype.has = function(key) {

        return this.data.hasOwnProperty(key);

    }

    RealStorage.prototype.size = function() {

        var size = 0;

        for ( d in this.data )
            size++;

        return size;

    }

    RealStorage.prototype.each = function(callback) {

        for ( d in this.data ) {
            callback(d, this.data[d]);
        }

        return this;

    }

    RealStorage.prototype.clear = function() {
     
        this.data = {};
        localStorage.removeItem(this.name);

        return this;

    }

    window.RealStorage = RealStorage;

})(window, document);
