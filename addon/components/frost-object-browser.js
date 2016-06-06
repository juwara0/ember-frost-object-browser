import Ember from 'ember'
import layout from '../templates/components/frost-object-browser'
import PropTypeMixin, {PropTypes} from 'ember-prop-types'

const {
  A,
  Component
} = Ember

/**
 * @module
 * @augments ember/Component
 * @augments module:ember-prop-types
 */
export default Component.extend(PropTypeMixin, {

  // ================================================================
  // Dependencies
  // ================================================================

  // ================================================================
  // Properties
  // ================================================================

  /** @type {String[]} */
  classNames: ['frost-object-browser'],

  /** @type {Object} */
  layout,

  propTypes: {
    selectedItems: PropTypes.array
  },

  getDefaultProps () {
    return {
      selectedItems: A([])
    }
  },

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

  /**
   * @type {Object}
   */
  actions: {

    /**
     * Handles expanding/contracting of the filters
     *
     * @function actions:onSelect
     * @param {Object} item record that was just selected/deselected
     * @returns {undefined}
     */
    onSelect (item) {
      const allSelected = this.get('selectedItems')
      if (item.isSelected) {
        allSelected.addObject(item.record)
      } else {
        allSelected.removeObject(item.record)
      }

      this.set('selectedItems', allSelected)
    }
  }
})
