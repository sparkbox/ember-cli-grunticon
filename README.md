# ember-cli-grunticon

[ember-cli][ember-cli] addon integrating [grunticon][grunticon] into the
ember build lifecycle.

## Usage

### Install
```shell
ember install ember-cli-grunticon
```

### Configure

Configure grunticon in your application's `ember-cli-build.js` file.  For
details, see the [`grunticon docs`][grunticon-docs] for details.

```javascript
// ember-cli-build.js
var app = new EmberApp(defaults, {
  // ...
  grunticon: {
    myIcons: {
      files: [{
        expand: true,
        cwd: 'example/source',
        src: ['*.svg', '*.png'],
        dest: "example/output"
      }],
      options: {
      }
    }
  }
  // ...
});
```

[ember-cli]: https://ember-cli.com
[grunticon]: https://github.com/filamentgroup/grunticon
[grunticon-docs]: https://github.com/filamentgroup/grunticon#required-configuration-properties
