import {createStore} from 'redux'
import demo from './Reducer'

var store=createStore(demo)


// store.dispatch({
//     type:"login"
// })


// store.dispatch({
//     type:'Login',
//     payload:{email:"sudesh@gmail.com",name:"sudesh jadhav"}
// })

export default store