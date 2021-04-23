import { useState } from "react";
import {connect} from "react-redux"

function Address(){
    var [addressformdata,setAddressformdata]=useState({
        name:"",
        email:"",
        contact:"",
        address1:"",
        address2:"",
        city:"",
        pincode:""
    })
    let [errors,setErrors]=useState({})

    const setFormParam=(event)=>{
        const name=event.target.name
        const value=event.target.value

        setAddressformdata({...addressformdata,[name]:value})
    }
    function isEmpty(value){
        return (value == null || value.length === 0 || value=="");
      }

    function validateForm(addressformdata){
        let error_array={}
        if(isEmpty(addressformdata.name))
        {
            error_array.name="please enter name";
        }
        if(isEmpty(addressformdata.email))
        {
            error_array.email="please enter email";
        }else{
            var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if (!regexEmail.test(addressformdata.email)) {
                error_array.email="Enter valid Email";
            }
        }
        if(isEmpty(addressformdata.contact))
        {
            error_array.contact="please enter conntact";
        }
        if(isEmpty(addressformdata.address1))
        {
            error_array.address1="please enter address line 1";
        }
        if(isEmpty(addressformdata.address2))
        {
            error_array.address2="please enter address line 2";
        }
        if(isEmpty(addressformdata.city))
        {
            error_array.city="please enter city";
        }
        if(isEmpty(addressformdata.pincode))
        {
            error_array.pincode="please enter pincode";
        }
        let errorKeys=Object.keys(error_array)
        if(errorKeys.length>0)
        {
            return error_array;
        }else
        {
           return false;
        }

    }
    function addAddress(event){
        event.preventDefault()
        let validate=validateForm(addressformdata);
        console.log(validate)
        if(validate){
            setErrors(validate)
        }else{
            alert('form submitted')
            setErrors({})
            console.log(addressformdata)
            
        }
    }
    return (
        <>
        <h3>Address</h3>
        <form onSubmit={addAddress}>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label for="inputName">Name</label>
                    <input type="text" name="name" value={addressformdata.name} className="form-control" onChange={setFormParam} id="inputName" placeholder="Name"/>
                    <div className="text-danger">{errors.name}</div>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputEmail4">Email</label>
                    <input type="email" name="email" value={addressformdata.email} className="form-control" onChange={setFormParam} id="inputEmail4" placeholder="Email"/>
                    <div className="text-danger">{errors.email}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label for="inputName">Contact No</label>
                    <input type="text" name="contact" value={addressformdata.contact} className="form-control" onChange={setFormParam} id="inputName" placeholder="Contact No"/>
                    <div className="text-danger">{errors.contact}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-8">
                    <label for="inputAddress">Address</label>
                    <input type="text" name="address1" value={addressformdata.address1} className="form-control" onChange={setFormParam} id="inputAddress" placeholder="1234 Main St"/>
                    <div className="text-danger">{errors.address1}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-8">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" name="address2" value={addressformdata.address2} className="form-control" onChange={setFormParam} id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    <div className="text-danger">{errors.address2}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                <label for="inputCity">City</label>
                <input type="text" name="city" value={addressformdata.city} className="form-control" onChange={setFormParam} id="inputCity"/>
                <div className="text-danger">{errors.city}</div>
                </div>
                <div className="form-group col-md-4">
                <label for="inputZip">Zip</label>
                <input type="text" name="pincode" value={addressformdata.pincode} className="form-control" onChange={setFormParam} id="inputZip"/>
                <div className="text-danger">{errors.pincode}</div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </>
    );   
}

export default connect()(Address)