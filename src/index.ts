import { BetterReducerTypes } from './types/index.d'
import { validator } from './utils/validators.utils'
import { asyncFunctionRunner } from './utils/helpers.utils'

export const betterReducer = ({ state, action, stateManipulationObject }: BetterReducerTypes) => {
    if (!validator({ state, action, stateManipulationObject })) return

    const actionType = action.type || action.TYPE

    if (typeof stateManipulationObject[actionType] === 'undefined') return state

    if (typeof stateManipulationObject[actionType].domainLayer !== 'undefined') {
        asyncFunctionRunner({
            func: stateManipulationObject[actionType].domainLayer,
            state,
            action
        })

        delete stateManipulationObject[actionType].domainLayer
    }

    return {
        ...state,
        ...stateManipulationObject[actionType]
    }
}