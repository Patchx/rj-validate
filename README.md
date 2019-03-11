# rj-validate

<a href="https://snyk.io/test/npm/rj-validate"><img src="https://snyk.io/test/npm/rj-validate/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/npm/rj-validate" style="max-width:100%;"></a>


Universal JS Validation Library

https://www.npmjs.com/package/rj-validate


## Why use rj-validate?:

There are a ton of validation libraries out there. However, many of these libraries:
* Are tightly coupled to another framework (see jQuery Validate, VeeValidate, etc)
* Assume server/client environment (jQuery Validate, et al.)
* Assume where and how you want to display the error to the user (..again, see jQuery Validate, et al.)
* Use complicated, verbose syntaxes
* Have unnecessary dependencies (..and are all these dependencies free of malicious code?)

rj-validate was built to be a simple, easy to use validation library that can be used across the stack, regardless of the other javascript frameworks you might be using.


## How to install:

via npm:

```npm install rj-validate --save```

via a CDN:

```<script src="https://cdn.jsdelivr.net/npm/rj-validate@0.8.0/dist/main.min.js"></script>```


## How to use:

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


In some scenarios, you may not be interested in the specific error message and you only want to know if the request passes all validations. In those situations, you can use isValid()

```javascript
rj.isValid('1987-10-01', {
    required: true,
    date: 'yyyy-mm-dd',
    before: '1980-01-01'
});

// output:
// false
```


Available validation options:

```javascript
rules = {
	required:         (true|false),
	same:             {name: (string), value: (string|number|boolean)},
	different:        {name: (string), value: (string|number|boolean)},
	min:              (integer|false),
	max:              (integer|false),
	alpha:            (true|false),
	alphanumeric:     (true|false),
	numeric:          (true|false|'number'|'string'),
	number:           (true|false),
	string:           (true|false),
	date:             (true|false|'yyyy-mm-dd'|'mm/dd/yyyy'|'mm/dd/yy'),
	datetime:         (true|false|'yyyy-mm-dd hh:mm:ss'|'mm/dd/yyyy hh:mm:ss'|'mm/dd/yy hh:mm:ss'),
	email:            (true|false),
	po_box:           (true|false),
	not_po_box:       (true|false),
	in:               (array|object|false),
	not_in:           (array|object|false),
	before:           (string|Date|false),
	before_or:        (string|Date|false),
	after:            (string|Date|false),
	after_or:         (string|Date|false)
}
```

Note that a [rule]:false will always be considered valid. This option exists solely to help dynamically specify rules at runtime.


If you need to use a validation rule that isn't in the list above, you can create a custom rule. Here is an example of a custom rule that checks if the first letter in a line of text is capitalized:

```javascript
function startsWithCapital(input) {
	return input[0] === input[0].toUpperCase();
}

var rj = require("rj-validate");

rj.test('the quick brown fox jumps over the lazy dog', {
    required: true,
    min: 4,
    custom: [{
    	test: function(input) {
    		return startsWithCapital(input);
    	},
    	error_msg: 'Please start your sentences with a capital letter.'
    }]
});

// output:
// Object {message: "Please start your sentences with a capital letter.", valid: false}

```

You can pass as many custom rules into the validator as you would like:

```javascript
function startsWithCapital(input) {
	return input[0] === input[0].toUpperCase();
}

function endsWithPeriod(input) {
	return input.slice(-1) === '.';
}

var rj = require("rj-validate");

rj.test('The quick brown fox jumps over the lazy dog', {
    required: true,
    min: 4,
    custom: [
    	{
    		test: function(input) {
    			return startsWithCapital(input);
    		},
    		error_msg: 'Please start your sentences with a capital letter.'
    	},

    	{
    		test: function(input) {
    			return endsWithPeriod(input);
    		},
    		error_msg: 'Please finish your sentences with a period.'
    	},
    ]
});

// output:
// Object {message: "Please finish your sentences with a period.", valid: false}

```

Custom rules give you a high degree of flexibility, while still working within the framework of a validation library. You can even use the custom validations array to reorganize which validations run before others:

```javascript
function startsWithCapital(input) {
	return input[0] === input[0].toUpperCase();
}

function endsWithPeriod(input) {
	return input.slice(-1) === '.';
}

var rj = require("rj-validate");

rj.test('the', {
    required: true,
    custom: [
    	{
    		test: function(input) {
    			return startsWithCapital(input);
    		},
    		error_msg: 'Please start your sentences with a capital letter.'
    	},

    	{
    		test: function(input) {
    			return endsWithPeriod(input);
    		},
    		error_msg: 'Please finish your sentences with a period.'
    	},

    	{
    		test: function(input) {
    			return rj.isValid(input, {min: 4});
    		},
    		error_msg: 'Sentence is too short. Is this a sentence fragment?'
		},
    ]
});

// output:
// Object {message: "Please start your sentences with a capital letter.", valid: false}

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
// Object {message: "Required", valid: false}


rj.test('', {
    required: true
}, 'first name');

// output:
// Object {message: "first name is required", valid: false}


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