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
