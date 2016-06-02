import Ember from 'ember'
import computed, {readOnly} from 'ember-computed-decorators'
import layout from '../templates/components/frost-object-browser-content'
import _ from 'lodash'
import PropTypeMixin, {PropTypes} from 'ember-prop-types'

const {
  A,
  Component,
  observer,
  run
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

  /** @type {Object} */
  layout,

  /** @type {String[]} */
  classNames: ['content'],

  _pageNumber: null,

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
      selectedItems: A([]),
      valuesTotal: null
    }
  },

  // ================================================================
  // Computed Properties
  // ================================================================

  @readOnly
  @computed('detailLevel', 'viewSchema')
  /**
   * The level of detail, if set, to use when displaying the data
   *
   * @function
   * @param {String} detailLevel The level of detail (ex. low, medium, high)
   * @param {Object} viewSchema An object describing the desired view
   */
  computedViewLevel: function (detailLevel, viewSchema) {
    if (viewSchema) {
      return viewSchema[detailLevel]
    } else {
      return {}
    }
  },

  /**
   * Values will be shown in browser after pagination logic applied
   */
  @readOnly
  @computed('values', '_pageNumber', 'pageNumber', 'itemsPerPage', 'values.length')
  computedValues: function (values, _pageNumber, pageNumber, itemsPerPage) {
    if (pageNumber !== null) {
      // pagination is contolled outside object-browser
      return values.slice(0, itemsPerPage)
    }
    return values.slice(_pageNumber * itemsPerPage, (_pageNumber + 1) * itemsPerPage)
  },

  // ================================================================
  // Functions
  // ================================================================

  /**
   * If something has been deleted, remove it from our selected items.
   * @returns Array of remaining Selected Items
   */
  getRemainingSelectedItems () {
    let selectedItems = this.get('selectedItems')
    let vals = this.get('values')
    return A(
      _.filter(selectedItems, (item) => vals.indexOf(item) >= 0)
    )
  },

  // ================================================================
  // Events
  // ================================================================

  /**
   * This gets called whenever anything passed to us changes.
   */
  onValuesChanged: observer('values.[]', function () {
    let selectedItems = this.get('selectedItems')
    const remainingSelectedItems = this.getRemainingSelectedItems()
    if (selectedItems.length > remainingSelectedItems.length) {
      run.later(this, function () {
        this.set('selectedItems', remainingSelectedItems)
        const onRowSelect = this.get('onRowSelect')
        if (onRowSelect) {
          onRowSelect(remainingSelectedItems, [], [])
        }
      })
    }
  }),
  // ================================================================
  // Actions
  // ================================================================

  actions: {

    /**
     * Prepare arguments for and call our on-row-select callback
     * @param {SelectedRecord} selectedRecord - record that was just selected
     */
    onSelect (attr) {
      let newSelected = {}
      let deSelected = {}
      const allSelected = this.get('selectedItems')
      if (attr.isSelected) {
        allSelected.addObject(attr.record)
        newSelected = attr.record
      } else {
        allSelected.removeObject(attr.record)
        deSelected = attr.record
      }
      const onRowSelect = this.get('onRowSelect')
      if (onRowSelect) {
        onRowSelect(allSelected, newSelected, deSelected)
      }
    }
  }
})
