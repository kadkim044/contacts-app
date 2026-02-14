import { Link } from "react-router-dom";
import ContactCard from "./ContactCard.jsx";
import {useNavigate} from "react-router-dom";
function ContactList(props) {
    const navigate=useNavigate();
    return(
        <div className="ui celled list" style={{marginTop:"100px"}}>
            <h2>Contact List
                <Link to="/add">
                <button className="ui button blue right floated" style={{marginTop:"10px"}}>Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input className="prompt" value={props.searchTerm} onChange={(e)=>props.setSearchTerm(e.target.value)} type="text" placeholder="Search Contacts"/>
                    <i className="search icon"></i>
                </div>
            </div>
            <ContactCard contacts={props.contacts.filter(contact => contact.name.toLowerCase().includes(props.searchTerm.toLowerCase()))}/>
        </div>
    );
}
export default ContactList;