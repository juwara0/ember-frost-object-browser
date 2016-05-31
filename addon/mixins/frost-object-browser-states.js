import Ember from 'ember'
import computed, {readOnly} from 'ember-computed-decorators'
import _ from 'lodash'
import PropTypeMixin, {PropTypes} from 'ember-prop-types'

export default Ember.Mixin.create(PropTypeMixin, {

  // ================================================================
  // Dependencies
  // ================================================================

  // ================================================================
  // Properties
  // ================================================================

  _pageNumber: 0,

  propTypes: {
    detailLevel: PropTypes.string,
    itemsPerPage: PropTypes.number,
    pageNumber: PropTypes.number,
    selectedItems: PropTypes.array,
    valuesTotal: PropTypes.number
  },

  getDefaultProps () {
    return {
      detailLevel: 'low',
      itemsPerPage: 20,
      pageNumber: null,
      selectedItems: Ember.A([]),
      valuesTotal: null
    }
  },

  // ================================================================
  // Computed Properties
  // ================================================================

  /**
   * Show total items count, if valuesTotal is set, just use this value,
   * otherwise shows length of value array
   */
  @readOnly
  @computed('valuesTotal', 'values', 'length', 'values.length')
  computedValuesTotal: function (valuesTotal, values, length) {
    if (valuesTotal) {
      return valuesTotal
    }

    try {
      return values.get('length')
    } catch (err) {
    }

    if (_.isArray(values)) {
      return values.length
    }

    return length
  }

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
