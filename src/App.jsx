import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, sub, loadMovies } from './store/reducers/counterSclice';
import { addTodo } from './store/reducers/todoSlice';
function App() {
  const count = useSelector(state => state.counter.count);
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const todoRef = useRef();

  return (
    <div>
      <button onClick={() => dispatch(sub(2))}>-</button>
      {count}
      <button onClick={() => dispatch(add(2))}>+</button>
      <button onClick={() => dispatch(loadMovies())}>电影</button>
      <hr />

      <input type="text" ref={todoRef} /> <button onClick={() => {
        dispatch(addTodo(todoRef.current.value))
      }}>add</button>
      {todos.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </div>
  )
}

export default App
