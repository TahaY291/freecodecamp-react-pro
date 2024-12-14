import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [name, setname] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditable, setIsEditable] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({show: false,msg: "", type: ""})




  function handleSubmit(e) {
    e.preventDefault()
    if (!name) {
      showAlert(true,'please enter something','danger')
    }else if(name && isEditable){
      setList(list.map((item)=>{
        if (item.id === editId) {
          return {...item, title:name}
        }
        return item
      }))
      setIsEditable(false)
      setname('')
      setEditId(null)
      showAlert(true, "edit succesfuly", 'success')
    }else{
      let newItem = {id : Date.now(), title: name
      }
      setList([...list, newItem])
      setname('')
      showAlert(true,name,'success')
    }
  }
  
  function showAlert(show=false, msg='', type='') {
    setAlert({show, msg, type})
  }
  
  function clear() {
    showAlert(true,'Succesfuly clear','danger')
    setList([])
  }
  
  function remove(id){
    showAlert(true,'Item, removed','danger')
    setList(list.filter((item)=>{
      return item.id !== id
    }))

  }

  function editItem(id) {
    let spec = list.find((item)=> {
      return item.id === id
    })
    setIsEditable(true)
    setEditId(id)
    setname(spec.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])


  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g: eggs' value={name} onChange={(e)=>setname(e.target.value)} />
          <button type='submit' className='submit-btn'>
            {isEditable ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (

        <div className='grocery-container'>
        <List items={list} remove={remove} edit={editItem} />
        <button className='clear-btn' onClick={clear}> clear item </button>
      </div>
      )}
    </section>
  )
}

export default App