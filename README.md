# rj-validate
Universal JS Validation Library

https://www.npmjs.com/package/rj-validate


This package is a work in progress, please check back occassionally for new validation options to be available.


## Why use rj-validate?:

There are a ton of validation libraries out there. However, many of these libraries:
* Are tightly coupled to another framework (see jQuery Validate, VeeValidate, etc)
* Assume server/client environment (jQuery Validate, et al.)
* Assume where and how you want to display the error to the user (..again, see jQuery Validate, et al.)
* Use complicated, verbose syntaxes
* Have unnecessary dependencies (..and are all these dependencies free of malicious code?)

rj-validate was built to be a simple, easy to use validation library that can be used across the stack, regardless of the other javascript frameworks you might be using.


## How to use:

NPM is the recommended way to install this package:

```npm install rj-validate --save```


Validating an input:

```javascript
var rj = require("rj-validate");

rj.validate('abc123', {
    required: true
});

// output:
// Object {message: "all tests pass", valid: true}
```


The validate() and test() methods are interchangeable:

```javascript
var rj = require("rj-validate");

rj.test('abc123', {
    required: true
});

// output:
// Object {message: "all tests pass", valid: true}
```


The validate() method takes three arguments:

```
rj.validate(
	[ the input to validate (either a string or a number) ],
	[ the rules to test the input against (object) ],
	[ the name of the variable (a string) (optional) ]
)
```

The third argument is only used for displaying contextualized error messages.


The output of the validate() method is an object with the following structure:

```
{
	valid: (true|false),
	message: (the specific error message)
}
```


If you would like to replace the default error message with your own, you can pass that message into the rules argument:

```javascript
rj.test('', {
    required: true,
    required_msg: "That's a failure"
});

// output:
// Object {message: "That's a failure", valid: false}
```

For each rule that you'd like to have a custom error message, add a ```[rule]_msg``` option to the rules argument, as shown above.


Currently available validation options:

```javascript
rules = {
	required: (true|false),
	min: (integer),
	max: (integer),
	alpha: (true|false),
	alphanumeric: (true|false),
	numeric: (true|false|'number'|'string'),
	is_number: (true|false),
	is_string: (true|false),
	po_box: (true|false),
	not_po_box: (true|false)
}
```


## Examples:

```javascript
var rj = require("rj-validate");

rj.test('abc123', {
    required: true
});

// output:
// Object {message: "all tests pass", valid: true}


rj.test('', {
    required: true
});

// output:
// Object {message: "The input cannot be blank", valid: false}


rj.test('', {
    required: true
}, 'first name');

// output:
// Object {message: "first name cannot be blank", valid: false}


rj.test('', {
    required: true,
    required_msg: "That's a failure"
});

// output:
// Object {message: "That's a failure", valid: false}


rj.validate('foobar', {
	required: true,
	required_msg: 'Profile name is definitely required',
	min: 7,
	min_msg: "Hold on, that profile name isn't long enough"
});

// output:
// Object {message: "Hold on, that profile name isn't long enough", valid: false}
```