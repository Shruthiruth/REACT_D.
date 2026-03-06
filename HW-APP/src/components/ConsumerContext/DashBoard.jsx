import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function DashBoard()
{
    const {loggedInUser} = useContext(AuthContext)
    return(
        <>
            <h3>Welcome {loggedInUser.name}</h3>
            <h4>My DashBoard</h4>
        </>
    )
}
export default DashBoard