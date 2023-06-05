export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const DRAWER_IS_OPEN = 'DRAWER_IS_OPEN'


const initialState = {
  isLoading: false,
  isOpen: false,

}

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case DRAWER_IS_OPEN:
      return { ...state, isOpen:action.isOpen }
    default: return state
  }
}
