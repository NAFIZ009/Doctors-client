import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin]=useAdmin(user?.email);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        {user?.uid ?
            <>
                <li className='lg:inline hidden'>
                <div className="dropdown dropdown-hover">
                <label tabIndex={0} className=""><Link to="/dashboard">Dashboard</Link></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 top-[100%] left-[0]">
                <li><Link to="/dashboard">My Appointments</Link></li>
                {
                    isAdmin && <>
                        <li><Link to="/dashboard/allusers">All users</Link></li>
                        <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                        <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                    </>
                }
                </ul>
              </div>
              </li>
              <li className='lg:hidden inline'>
              <Link to="/dashboard">Dashboard</Link>
              <div>
                <ul>
                <li><Link to="/dashboard">My Appointments</Link></li>
                {
                    isAdmin && <>
                        <li><Link to="/dashboard/allusers">All users</Link></li>
                        <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                        <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                    </>
                }
                </ul>
              </div>
              </li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><Link to="/login">Login</Link></li>}
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export {Navbar};