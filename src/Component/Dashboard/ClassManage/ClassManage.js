import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ClassManage = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://protected-waters-29079.herokuapp.com/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])


    const handleDelete = (id) => {

        fetch(`https://protected-waters-29079.herokuapp.com/deleteClasses/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data=>{
            if(data){
                deleteClasses ();
                alert('Product Deleted')
            }
        })
    }
    const deleteClasses  = () =>{
        fetch(`https://protected-waters-29079.herokuapp.com/classes`)
        .then(res =>res.json())
        .then(data => setClasses(data))
       }

    return (
        <div className="fluid-container">
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto bg-warning">
                    <h2 className="border-bottom mb-2 fw-bolder text-light text-center">CLASS MANAGE</h2>
                        <div className="col-md-12">
                            <h3 className="mb-3 text-primary">Total Product: {classes.length}</h3>

                            <table className="table table-sm table-info text-center table-bordered " >
                                <thead>
                                    <tr>
                                        <th className="w-25">Class Name</th>
                                        <th className="w-25">Price</th>
                                        <th className="w-25">Image</th>
                                        <th className="w-25">Action</th>
                                    </tr>
                                </thead>
                            {
                                classes.map(clas =>
                                    
                                                    <tbody className="bg-secondary">
                                                        <td className="w-25 text-light">{clas.className}</td>
                                                        <td className="w-25 text-light">${clas.price}</td>
                                                        <td className="w-25 text-light">
                                                            {
                                                                clas.image ? <img style={{ width: "8rem", height: "8rem" }} src={`data:image/png;base64,${clas.image.img}`} alt="" />
                                                                    :
                                                                    <img style={{ width: "8rem", height: "8rem" }} className="img-fluid mb-3" src={`https://protected-waters-29079.herokuapp.com/${clas.img}`} alt="" />
                                                            }
                                                        </td>
                                                        <td className="w-25 btn-style">
                                                            <button className="btn  btn-sm m-4"
                                                                onClick={() => handleDelete(clas._id)} >Delete</button>
                                                        </td>
                                                    </tbody>
                                )
                            }
                        </table>
                    </div>
                
            </div>
        </div>
    </div>
    );
};

export default ClassManage;