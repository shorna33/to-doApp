import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function AddTodo({onAdd}) {
    const [title,setTitle] = useState('');
    const [completed,setCompleted] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title){
            alert('All Feilds Are Mandatory.')
            return
        }

        onAdd({title,completed});

        setTitle('')
        navigate("/")
    }
    return (
        <div>
            <h4 className="text-center">Add New Todo</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo