import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items , remove, edit}) => {
  return (
    <div className="grocery-list">
        {
            items.map((item)=>{
                let {id, title}= item
                return <article key={id} className='grocery-item' >
                    <p className="title">{title}</p>
                    <div className="btn-container">
                        <button onClick={()=> edit(id)} type='button' className="edit-btn">
                            <FaEdit />
                        </button>
                        <button onClick={()=> remove(id)} type='button' className="delete-btn">
                            <FaTrash />
                        </button>
                    </div>
                </article>
            })
        }
    </div>
  )
}

export default List