import { AsyncFunctionsRunnerTypes } from '../types/helpers.d'

export const asyncFunctionRunner = async ({ func, state, action }: AsyncFunctionsRunnerTypes) => {
    await func({ state, action })
}