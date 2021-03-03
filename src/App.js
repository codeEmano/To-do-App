import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pending from './Pending';
import {useState} from 'react';
function App() {
  const [job, setJob] = useState("");
  const [pending, setPending] = useState([]);
  const handleJobChange= (e) =>{
   // console.log(e.target)
    const {value}=e.target;
    setJob(value);
  }
  const handlePendingJob= (e) =>{
    //console.log(e)
   // const {value}=e.target;
    e.preventDefault();
    for (let index = 0; index < pending.length; index++) {
      if (job===pending[index]) {
        alert('You have already added this job!')
        setJob("");
        return;
      }
    }
    if(job!=='')
    {
      const items=[job,...pending];
      setPending(items);
      setJob("");
    }
    else
    {
      alert('Enter a job!')
    }
  }
  const handleDelete =(id) =>{
    setPending(pending.filter((item,i) =>{
      return i!==id
    }));
  }
  return (
    <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 mx-auto text-white 
            shadow-lg p-3">
              <h2 className="text-center">To-do List</h2>
              <div className="row">
                <div className="col-9">
                  <form onSubmit={handlePendingJob}>
                <input type="text" className="form-control" placeholder="Your job"
                value={job} onChange={handleJobChange}/>
                </form>
              </div>
              <div className="col-2">
                <button className="btn btn-success"
                onClick={handlePendingJob}>Add</button>
              </div>
              <div className="container-fluid">
              <ul className="list-unstyled row sm-5">
                    {pending.map((item,i) => {
                    return <Pending key={i} id={i} chores={item} handleDelete={handleDelete}/>
                    })}
                </ul>
              </div>
             </div>
            </div>
          </div>
          
        </div>
    </div>
  );
}

export default App;
