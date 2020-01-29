(function(window, document, undefined) {

    function RealStorage(name, opt) {

        this.name = name || '';
        this.data = opt.data || {};

        if ( localStorage.getItem(name) === null ) {
            
            localStorage.setItem(name, JSON.stringify(this.data));

        } else {

            this.data = JSON.parse(localStorage.getItem(this.name));

        }

        if ( opt['onchange'] ) {

            var ls_name = this.name;
            window.addEventListener('storage', function(event) {

                if ( event.key === ls_name ) {
                    opt['onchange'](event);
                }

            }, true);

        }

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
