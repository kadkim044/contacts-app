import user from "../imgs/images.png";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
function ContactDetail(props) {
    const contact = useLocation().state.contact;
    return (
        <div className="ui main">
            <h2>Contact Detail</h2>
            <div className="ui card">
                <div className="content">
                    <img className="ui avatar image" src={user} alt="user"/>
                    <div className="header">{contact.name}</div>
                    <div className="meta">{contact.email}</div>
                </div>
                <div className="extra content">
                    <Link to="/">
                        <button className="ui button blue center">Back to Contact List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default ContactDetail;