/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-object-browser-content',
  'Integration: FrostObjectBrowserContentComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-object-browser-content}}
      //     template content
      //   {{/frost-object-browser-content}}
      // `);

      this.render(hbs`{{frost-object-browser-content}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
