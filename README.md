# [postcss][postcss]-merge-rules [![Build Status](https://travis-ci.org/ben-eb/postcss-merge-rules.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-merge-rules.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/postcss-merge-rules.svg)][deps]

> Merge CSS rules with PostCSS.

## Install

With [npm](https://npmjs.org/package/postcss-merge-rules) do:

```
npm install postcss-merge-rules --save
```

## Examples

This module will attempt to merge *adjacent* CSS rules:

### By declarations

#### Input

```css
a {
    color: blue;
    font-weight: bold
}

p {
    color: blue;
    font-weight: bold
}
```

#### Output

```css
a,p {
    color: blue;
    font-weight: bold
}
```

### By selectors

#### Input

```css
a {
    color: blue
}

a {
    font-weight: bold
}
```

#### Output

```css
a {
    color: blue;
    font-weight: bold
}
```

### By partial declarations

#### Input

```css
a {
    font-weight: bold
}

p {
    color: blue;
    font-weight: bold
}
```

#### Output

```css
a,p {
    font-weight: bold
}

p {
    color: blue
}
```

## API

### mergeRules([options])

#### options

##### legacy

Type: `boolean`
Default: `false`

Pass `true` to disable merging rules where legacy browsers would not recognise
the result; for example, these selectors will not be merged:

```css
div {
    color: #fff
}

a ~ b {
    color: #fff
}
```

Supports IE 8 only.

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © [Ben Briggs](http://beneb.info)

[ci]:      https://travis-ci.org/ben-eb/postcss-merge-rules
[deps]:    https://gemnasium.com/ben-eb/postcss-merge-rules
[npm]:     http://badge.fury.io/js/postcss-merge-rules
[postcss]: https://github.com/postcss/postcss
