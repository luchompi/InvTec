import {Outlet} from "react-router-dom";

const AuthLayout = () =>{
    return (
        <>
            <div className="row justify-content-md-center">
                <div className="col col-lg-8">
                    <div className="card">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout