import user from "../imgs/images.png";
import {Link} from "react-router-dom";
function ContactCard(props) {
    return(
                <ul>
                    {props.contacts.map((contact) => {
                        return(
                        <div className="item">
                            <img className="ui avatar image" src={user} alt="user"/>
                            <div className="content">
                            <Link to={`./contacts/${contact.id}`} state={{contact:contact}}>
                            <div className="header">{contact.name}</div>
                            <div>{contact.email}</div>
                            </Link>
                            <Link to={`./edit/${contact.id}`} state={{id:contact.id}}>
                            <i className="edit alternate outline icon" style={{color:"blue", marginTop:"7px", cursor:"pointer"}}></i>
                            </Link>
                            <Link to={
                                `./delete/${contact.id}`} state={{id:contact.id,}}
                            ><i className="trash alternate outline icon" style={{color:"red", marginTop:"7px", cursor:"pointer"}}></i></Link>
                            </div>
                        </div>
                        );
                    })}
                </ul>
        ); 
}
export default ContactCard;