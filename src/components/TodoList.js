import Todo from "./Todo"
import { Link } from 'react-router-dom'

const TodoList = ({ todos, onDelete, term, onSearch }) => {

    console.log(todos);

    const getSearchValue = (e) => {
        //console.log(e.target.value);
        onSearch(e.target.value);
    }
    return (
        <div>
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control mb-3" placeholder="Search Todo" value={term} onChange={getSearchValue} />
            </div>
            {todos.length > 0 ?
                <div className="card my-3">
                    <ul className="list-group list-group-flush">
                        {todos.map((todo) => (
                            <Todo key={todo.id} todo_data={todo} onDelete={onDelete} />
                        ))}
                    </ul>
                </div> :
                <h5 className="alert alert-danger text-center p-1">No todos To Show</h5>
            }
        </div>
    )
}

export default TodoList