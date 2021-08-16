import React from 'react'
import SideMenuBar from './SideMenu/SideMenuBar'
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}
const AdminBoard = () => {
    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2">
                    <SideMenuBar />
                </div>
                <div className="col-md-10">
                    <h2>show details</h2>
                </div>
            </div>
        </section>
    )
}

export default AdminBoard
