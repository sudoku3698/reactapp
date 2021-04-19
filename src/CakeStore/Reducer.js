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
        case "ADDTOCART":{
            state={...state}
            let cart=state && state?.cart
            let item=action.payload
            if(cart===undefined)
            {
                cart=[];
            }
            cart.push(item)
            state['cart']=cart
            return state
        }
        case "REMOVEFROMCART":{
            state={...state}
            let cart=state && state?.cart
            let item=action.payload
            console.log(cart,item)
            if(cart===undefined)
            {
                cart=[];
            }else
            {
                state['cart']=cart.filter(prod=>prod.cakeid!=item.cakeid)
            }
            return state
        }

        default:return state
    }
}

export default demo