import { BetterReducerTypes } from '../types/index.d'

export const validator = ({ state, action, stateManipulationObject }: BetterReducerTypes) => {
    if (typeof state !== 'object') throw new Error('state parameter must be set and it must be valid object')
    if (typeof action !== 'object') throw new Error('action parameter must be set and it must be valid object')
    if (typeof action.type === 'undefined' && typeof action.TYPE === 'undefined') throw new Error('action parameter must has a type property')
    if (typeof stateManipulationObject !== 'object') throw new Error('stateManipulationObject parameter must be set and it must be valid object')
    if (Object.keys(stateManipulationObject).length === 0) throw new Error('stateManipulationObject must has at least one property')

    return true
}