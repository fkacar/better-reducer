# better-reducer
Simplifies reducer management and standardizes it

## Before betterReducer
![before better reducer](https://i.ibb.co/Jd5cX3G/before.png)

## After betterReducer
![before better reducer](https://i.ibb.co/CVNWhnL/after.png)

## Getting started

    npm install --save better-reducer

or

    yarn add better-reducer

then, we can import betterReducer into a reducer file

    import { betterReducer } from 'better-reducer'

then, we should define a stateManipulationObjectGenerator function

    const stateManipulationObjectGenerator = ({ state, action }) => ({
        HANDLE_CONTENT_WIDTH: { contentWidth: action.value },
        HANDLE_MENU_COLLAPSED: { menuCollapsed: action.value, domainLayer: domainLayer.HANDLE_MENU_COLLAPSED },
        HANDLE_MENU_HIDDEN: { menuHidden: action.value },
        HANDLE_RTL: { isRTL: action.value },
        HANDLE_SKIN: { skin: action.value }
    })

Notice that, we can define domainLayer property if we need. We should separate business logic from other layers. We can define our business logic as a separate object. (or we can import them from another file which is the cleanest way)
    
    const domainLayer = {
        HANDLE_MENU_COLLAPSED: async ({ state, action }) => {
            let x = 0
        
            await new Promise(resolve => setTimeout(resolve, 5000))
        
            x = action.value / window.currentValue
        
            localStorage.setItem('menuValue', x)
        }
    }

As you can see, we can define async functions too. But it would be best if you remembered that async functions always return after the redux state update, unlike the synchronous functions.

then we can generate and export reducer

    const layoutReducer = (state = initialState, action) =>
        betterReducer({ state, action, stateManipulationObject: stateManipulationObjectGenerator({ state, action }) })

    export default layoutReducer

## Development

    yarn
    yarn build