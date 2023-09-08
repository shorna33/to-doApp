import {Link} from 'react-router-dom'

const Todo = ({ todo_data, onDelete }) => {
    const { id, title, completed } = todo_data;
    return (
        <li className="list-group-item d-flex justify-content-between">
            <div>
                <h5>{title}</h5>
                {completed == true ? <h6><span class="badge bg-success">Completed</span></h6> : <h6><span class="badge bg-danger">Incomplete</span></h6>}
            </div>
            <div className="todo-icon d-flex">
                <i onClick={() => onDelete(id)} className="fa fa-trash lead text-danger mx-3"></i>
                <Link to='/edit' state={todo_data}>
                <i className="fa fa-edit lead text-primary"></i>
                </Link>
            </div>
        </li>

    )
}

export default Todo