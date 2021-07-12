import {TEST} from './types'

const elem = document.getElementById('menu')

export function rootReduser(state, action) {
    if(action.type === TEST){
        return state.test = 1
    }

    return state
}