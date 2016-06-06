# ember-frost-object-browser

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

* [Installation](#installation)
* [API](#api)
* [Examples](#examples)
* [Contributing](#contributing)

## Installation

```bash
ember install ember-frost-object-browser
```

## API

| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `multiSelect` | `Boolean`  | `false` | Optional whether this button be used if more than one item is selected in the view |
| `onActionClick` | `Function` | `<action-name>` and `<action-type>` | Optional callback for when the button is clicked |
| `priority` | `String` | `secondary` | Optional button priority [more info](https://github.com/ciena-frost/ember-frost-core/blob/master/frost-button.md) |
| `size` | `String` | `large` | Optional button size [more info](https://github.com/ciena-frost/ember-frost-core/blob/master/frost-button.md) |
| `text` | `String` | | Required text to display on the button [more info](https://github.com/ciena-frost/ember-frost-core/blob/master/frost-button.md) |

## Examples

### Template

The object browser now supports named block slots.

These slots names are:

`info-bar`
`filters`
`view`
`actions`

You only have to set the slots that you desire to use. Slots that are not set will not show up.

```handlebars
{{#frost-object-browser as |slot|}}
  {{#block-slot slot 'info-bar'}}
    {{#frost-info-bar as |slot|}}
      …
    {{/frost-info-bar}}
  {{/block-slot}}
  {{#block-slot slot 'filters'}}
    {{frost-bunsen...}}
  {{/block-slot}}
  {{#block-slot slot 'view' as |selections onSelect|}}
   {{display-component-with-controls selections=selections.selectedItems onSelect=(action onSelect)}}
  {{/block-slot}}
  {{#block-slot slot 'actions' as |action|}}
    {{action.button
      onActionClick=(action 'onActionClick' 'details')
      multiSelect=true
      text='Details'
    }}
    {{action.button
      onActionClick=(action 'onActionClick' 'delete')
      multiSelect=true
      text='Delete'
    }}
    {{action.button
      onActionClick=(action 'onActionClick' 'edit')
      text='Edit'
    }}
  {{/block-slot}}
{{/frost-object-browser}}
```

### Controller

```js
  viewSchema: {
    low: {
      'version': '1.0',
      'type': 'form',
      'rootContainers': [
        {'label': 'Main', 'container': 'main'}
      ],
      'containers': [
        {
          'id': 'main',
          'className': 'flex-row',
          'rows': [
            [
              {'model': 'alias', 'labelClassName': 'ob-label', 'inputClassName': 'ob-input'}
            ],
            [
              {
                'model': 'updatedAt',
                'label': 'Last Updated',
                'labelClassName': 'ob-label',
                'inputClassName': 'ob-input'
              }
            ]
          ]
        }
      ]
    }
  }
```

Your controller will also need to implement the following callbacks:

`onCreate () {…}`
`onDetailChange (level) {…}`
`onActionClick (buttonId, selectedItems) {…}`

You can also check out the demo app bundled with this addon to see an example of using this addon.

###Adding filters

An optional `filters` attribute can be passed to the component. `filters` should be an array of objects

```javascript
    filters: [{
      label: 'A label for the filter',
      name: '', // Key for filter state hash
      type: 'select', // Currently only 'select' type is supported
      clearable: true, // Whether or not the value can be cleared
      showing: true,  // True for expanded and false for collapsed, optional
      selectedValue: 'value', // Value in the list to set as selected, should match
                              // the value attribute of an item in the 'data' list

      // List of values
      data: [{
        label: 'Label for an item',
        value: 'value'
      }]
    }]

```

Currently `frost-select` style filters are supported.

When a filter is changed or cleared, the `onFilter` callback is called with the argument
`filterState`, which is a hash where the keys correspond to the filter names and the value is
the value currently reported by the filter.

## Development

### Setup

```bash
git clone git@github.com:ciena-frost/ember-frost-object-browser.git
cd ember-frost-object-browser
npm install && bower install
```

### Development Server

A dummy application for development is available under `ember-frost-object-browser/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing

Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.

[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-object-browser.svg "CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-object-browser

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-object-browser.svg "Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-object-browser

[npm-img]: https://img.shields.io/npm/v/ember-frost-object-browser.svg "Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-object-browser
