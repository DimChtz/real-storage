# Real Storage
Javascript library for easier storage manipulation

## How to initialize (example)
```javascript
var audioStorage = new RealStorage('audio', {
  'data': {
    'track_title': 'Cool Track',
    'track_time': ''
  },
  'onchange': function(e) {
    console.log('Audio changed!!!');
  }
});
```

## Functions

### set(key, value)

Sets key with the specified value.

### get(key)

Returns the value for key if key exists, otherwise false.

### remove(key)

Removes key and it's value if key exists

### has(key)

Returns true if key exists

### size()

Returns the number of keys available.

### each(callback)

Iterate and execute a function for each key. { callback(key, value) }

### clear()

Clear all keys and values

## Next steps

1) Add storage mode ( localStorage or sessionStorage )
2) Add expiration
3) Improve events
