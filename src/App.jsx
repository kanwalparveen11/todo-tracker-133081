import { useState, useEffect } from 'react';
import TodoCard from './components/TodoCard';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) throw new Error("Kuch ghalat hogya fetch karte waqt!");
      const data = await response.json();


      const modifiedData = data.slice(0, 10).map(item => ({
        ...item,
        pinned: false,
        category: "Work"
      }));

      setTodos(modifiedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div style={{ padding: '20px' }}>
        <h1>My Todo List</h1>

        {loading && <p>Loading data please wait...</p>}

        {error && (
            <div style={{ color: 'red' }}>
              <p>{error}</p>
              <button onClick={fetchData}>Retry</button>
            </div>
        )}

        <div className="todo-list">
          {todos.map((item) => (
              <TodoCard key={item.id} todo={item} />
          ))}
        </div>
      </div>
  );
}

export default App;