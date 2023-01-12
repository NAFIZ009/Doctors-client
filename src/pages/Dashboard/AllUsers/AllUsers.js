import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://doctor-portal-server-rho.vercel.app/users');
            const data = await res.json();
            console.log(data);
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://doctor-portal-server-rho.vercel.app/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }

    const dltUser=uid=>{
        fetch('https://doctor-portal-server-rho.vercel.app/admin/user/delete',{
          method: 'DELETE',
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
          body: JSON.stringify({uid})
        })
        .then(data=>{
          if(data.success){
            return  toast.success('Delete user successful.')
          }
          return toast.error('Delete user Unsuccessful.')
        })
        .catch(err=>{
          console.log(err)
          return toast.error('Delete user Unsuccessful.')

        })
    }
    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
            <td><button onClick={()=>dltUser(user.uid)} className='btn btn-xs btn-danger'>Delete</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;