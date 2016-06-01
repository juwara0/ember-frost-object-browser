import Ember from 'ember'
import layout from '../templates/components/frost-object-browser-button-bar'
import ObjectBrowserStates from '../mixins/frost-object-browser-states'

const {
  Component
} = Ember

export default Component.extend(ObjectBrowserStates, {

  // ================================================================
  // Dependencies
  // ================================================================

  // ================================================================
  // Properties
  // ================================================================

  layout,

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

  actions: {

    /**
     * Change our LOD
     * @param {String} newLevel - new level ('low', 'med', high')
     */
    onDetailChange (newLevel) {
      const onDetailChange = this.get('onDetailChange')

      this.set('detailLevel', newLevel)

      if (onDetailChange) {
        onDetailChange(newLevel)
      }
    }
  }
})
