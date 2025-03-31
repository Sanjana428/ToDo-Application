import { useState } from 'react'
import './App.css'

function App() {
  const [Todolist, setTodolist] = useState<string[]>([])

  function handleSubmit(e: any) {
    let toname = e.target.toname.value;
if(toname.trim()=='') alert("enter valid task")
    else if (!Todolist.includes(toname)) {
      let finallist = [...Todolist, toname];
      setTodolist(finallist);
    } else {
      alert("Task Already Exist")
    }
    e.target.toname.value=''
    e.preventDefault();
  }

  let list = Todolist.map((value, index) => {
    return <Todolistitems values={value} key={index+value} onDelete={() => handleDelete(index)}  index={index} />
  })

  const handleDelete = (indexToDelete: number) => {
    setTodolist(Todolist.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Task</label>
        <input type="text" name='toname'></input>
        <button>Add</button>
      </form>

      <div>
        <ul>
          {list}
        </ul>
      </div>
    </>
  )
}

export default App
function Todolistitems({ values, onDelete,index }: { values: string, onDelete: () => void,index:number }) {
  let [status,setStatus]=useState(false)

const handlestatus=()=>{
  setStatus(!status);
}
  return (
    <li className={(status)?"complete":''} onClick={handlestatus}>{index+1} {values} <span onClick={onDelete}>&times;</span> </li>
  )
}
