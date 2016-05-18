/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-object-browser-button-bar',
  'Integration: FrostObjectBrowserButtonBarComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-object-browser-button-bar}}
      //     template content
      //   {{/frost-object-browser-button-bar}}
      // `);

      this.render(hbs`{{frost-object-browser-button-bar}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
