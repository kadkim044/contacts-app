import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
function DeleteConfirmation(props) {
    const location=useLocation();
    return(
        <div className="ui main">
            <h2>Are you sure you want to delete this contact?</h2>
            <Link to="/">
            <button className="ui button red" onClick={() => {
                props.deleteContactHandler(location.state.id);
            }}>Yes</button>
            <button className="ui button">No</button>
            </Link>
        </div>
    );
}
export default DeleteConfirmation;