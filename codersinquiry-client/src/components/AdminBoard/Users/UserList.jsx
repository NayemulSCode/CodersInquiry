import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SideMenuBar from '../SideMenu/SideMenuBar'

const UserList = () => {
    const [userList, setUserList] = useState([])
    const fname = userList?.firstName;
    const lname = userList?.lastName;
    const name = `${fname} ${lname}`;
    const fetchUser = ()=>{
        fetch(`https://fierce-hollows-24915.herokuapp.com/user`)
        .then(res => res.json())
        .then( user =>{
            setUserList(user)
            console.log(user);
        })
    }
    useEffect(()=>{
        fetchUser()
    },[])
    return (
        <section className="row">
            <SideMenuBar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">User List</h5>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">User Name</th>
                        <th className="text-secondary" scope="col">Email Id</th>
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        userList.map((user, index) => 
                                
                            <tr>
                                <td>{index + 1}</td>
                                <td>{`${user?.firstName} ${user?.lastName}`}</td>
                                <td>{user?.email}</td>
                                <td>{user?.phoneNumber}</td>
                                <td>
                                    <div class="dropdown">
                                        <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            User Action
                                        </a>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Remove User</a></li>
                                            <li><a class="dropdown-item" href="#">Alarm</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default UserList
