import React from 'react';
 const TodoCard =  ({ todo }) => {
     return (
         <div>
         <p><strong>ID:</strong> {todo.id}</p>
         <p><strong>TITLE:</strong> {todo.title}</p>
             <p><strong>USER ID:</strong> {todo.userId}</p>
             <p><strong>CATEGORY:</strong> {todo.category}</p>
             {todo.completed === true && <p style={{ color:'green' }}> completed</p>}
             {todo.pinned === true && <p style={{ color:'red' }}> Pinned</p>}
         </div>
     );
 }
 export default TodoCard;