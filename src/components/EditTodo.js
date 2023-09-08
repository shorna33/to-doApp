import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function EditTodo({ onEdit }) {
    const location = useLocation();
    const id = location.state.id;
    const [title, setTitle] = useState(location.state.title)
    const [completed, setCompleted] = useState(location.state.completed)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !completed) {
            alert('All Feilds Are Mandatory.')
            return
        }

        onEdit({ id, title, completed });

        setTitle('')
        setCompleted('')
        navigate("/")
    }
    return (
        <div>
            <h4 className="text-center">Edit Todo</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <select class="form-select" value={completed} onChange={(e) => setCompleted(Boolean(e.target.value))}>
                        <option value="true">Completed</option>
                        <option value="false">Incomplete</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </div>
    )
}

export default EditTodo