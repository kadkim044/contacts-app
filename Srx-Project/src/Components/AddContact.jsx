import { useState } from "react";
import {v4 as uuid} from "uuid";
import { useNavigate } from "react-router-dom";
function AddContact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
    return(
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={(e)=>{
                e.preventDefault();
                if(name==="" || email===""){
                    alert("All the fields are mandatory!");
                    return;
                }
                props.addContactHandler({id:uuid(), name:name, email:email});
                setName("");
                setEmail("");
                navigate("/");
            }}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" value={name} placeholder="Name"
                    onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" value={email} placeholder="Email"
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}
export default AddContact;