import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Pending({id,chores,handleDelete})
{
    return <> 
    <li className="shadow p-2 my-2 col-sm-9">{chores}</li>
    <button className="btn btn-danger my-2 col-sm-2 offset-1"
    onClick={() => {handleDelete(id)}}>Done</button>
    </>
}
export default Pending;