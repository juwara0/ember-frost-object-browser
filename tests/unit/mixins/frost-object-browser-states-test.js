/* jshint expr:true */
import { expect } from 'chai'
import {
  describe,
  it
} from 'mocha'
import Ember from 'ember'
import FrostObjectBrowserStatesMixin from 'ember-frost-object-browser/mixins/frost-object-browser-states'

describe('FrostObjectBrowserStatesMixin', function () {
  // Replace this with your real tests.
  it('works', function () {
    let FrostObjectBrowserStatesObject = Ember.Object.extend(FrostObjectBrowserStatesMixin)
    let subject = FrostObjectBrowserStatesObject.create()
    expect(subject).to.be.ok
  })
})
