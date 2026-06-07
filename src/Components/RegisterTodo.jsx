import { useState, useRef } from 'react';

const RegisterTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [completed, setCompleted] = useState(false);
    const [pinned, setPinned] = useState(false);
    const [category, setCategory] = useState('Work');
    const [msg, setMsg] = useState('');

    const titleRef = useRef(null); // useRef for focus

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (title === "") {
            setMsg("Title cannot be empty");
            return;
        }
        if (Number(userId) <= 0) {
            setMsg("User ID must be greater than zero");
            return;
        }

        // Adding item
        addTodo({ id: Date.now(), title, userId: Number(userId), completed, pinned, category });

        // Reset Form
        setTitle(''); setUserId(''); setCompleted(false); setPinned(false); setCategory('Work'); setMsg('');

        // Auto Focus using Ref
        titleRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            {msg && <p style={{color: 'red'}}>{msg}</p>}
            <input ref={titleRef} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="number" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <label>Completed: <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} /></label>
            <label>Pinned: <input type="checkbox" checked={pinned} onChange={(e) => setPinned(e.target.checked)} /></label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Study">Study</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterTodo;