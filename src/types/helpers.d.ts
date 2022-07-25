export interface AsyncFunctionsRunnerTypes {
    func: ({ state, action }: { state: {}, action: {} }) => void
    state: {}
    action: {
        type: string
        TYPE: string
    }
}