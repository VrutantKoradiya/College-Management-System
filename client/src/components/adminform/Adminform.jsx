import React, {  useState } from "react";
import "./Adminform.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Adminform = () => {
    let navigate = useNavigate();
    let [id, setid] = useState();
    let [pass, setpass] = useState();
    

    const validation = async (e) => {
        //VALIDATION FOR ID

        if (id !== "Admin123") {
            e.preventDefault();
            toast.error("Invalid Admin ID", { position: "top-left" });
        } else if (pass !== "123") {
            e.preventDefault();
            toast.error("Invalid Admin Password", { position: "top-left" });
        } else if (id !== "Admin123" && pass !== "123") {
        } else if (id == "Admin123" && pass == "123") {
            navigate("/Students");
        }
    };
    console.log(id);
    console.log(pass);

    return (
        <div className="mydiv">
             <Link to={"/"}>back</Link> <br /> <br />
            <h3>Admin Login</h3>
            <form className="addform" onSubmit={validation}>
                <div className="inputgroup">
                    <label htmlFor="id">Admin ID</label>
                    <input
                        type="text"
                        name="id"
                        placeholder="Enter ID...."
                        onChange={(e) => setid(e.target.value)}
                        autoComplete='off'
                    />
                </div>
                <div className="inputgroup">
                    <label htmlFor="password">Admin Password</label>
                    <input
                        type="text"
                        name="password"
                        placeholder="Enter Your Password....."
                        onChange={(e) => setpass(e.target.value)}
                        autoComplete='off'
                    />
                </div>

                <div className="inputgroup">
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    );
};

export default Adminform;
// <Link to={"/Students"}>
