import { DRAWER_IS_OPEN } from './system.reducer'
import { store } from './store.js'

export function toggleDrawer(isOpen) {
  store.dispatch({ type: DRAWER_IS_OPEN, isOpen })
}