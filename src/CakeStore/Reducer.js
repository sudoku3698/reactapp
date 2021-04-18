var demo=function(state,action){
    switch(action.type){
        case "LOGIN":{
            state={...state}
            state['isloggedin']=true
            state['user']=action.payload
            return state
        }
        case "LOGOUT":{
            state={...state}
            delete state['isloggedin']
            delete state['user']
            return state
        }
        case "INITIALISE_USER":{
            state={...state}
            state['user']=action.payload
            return state
        }

        default:return state
    }
}

export default demo