export default function reducer(state={}, action) {
    switch(action.type) {
        case 'AUTH_SUCCESS': {
           const {token}=action.payload
           localStorage.setItem('Token',token )
            return {...state,authentication:{...state.authentication,tokenid:token}}
        }
        case 'AUTH_INIT':{
            const authstate ={tokenid:localStorage.getItem('Token')}
            
            return {...state,authentication:authstate}
        }
        case 'LOG_OUT':{
            localStorage.clear()
            return {...state,authentication:null}
        }
        case 'UPDATE_BLOG':{
            const updatestate = {...state,post:action.payload}
            return updatestate
        }
        default:
            return state
    }
};