import Ember from 'ember'
import layout from '../templates/components/frost-object-browser'
import ObjectBrowserStates from '../mixins/frost-object-browser-states'

const {
  Component
} = Ember

/**
 * @type SelectedRecord
 * @property {Boolean} isSelected - whether or not it is selected
 * @property {Object} record - the record itself
 */

export default Component.extend(ObjectBrowserStates, {

  // ================================================================
  // Dependencies
  // ================================================================

  // ================================================================
  // Properties
  // ================================================================

  classNames: ['frost-object-browser'],

  layout

  // ================================================================
  // Computed Properties
  // ================================================================

  // ================================================================
  // Functions
  // ================================================================

  // ================================================================
  // Events
  // ================================================================

  // ================================================================
  // Actions
  // ================================================================

})
