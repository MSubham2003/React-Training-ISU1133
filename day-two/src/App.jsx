import './App.css'
import Button from './components/Button'
import TextMirror from './components/TextMirror'
import TodoList from './components/TodoList'
import Toggle from './components/Toggle'
import TrafficLight from './components/TrafficLight'
import HoverBox from './event/HoverBox'

function App() {

  return (
    <>
      <div>
        <h3>Excercise 1</h3>
        <Button label="Click Me" color="blue" /><br />
        <Button label="Delete" color="red" /><br />
        <Button label="Success" color="green" /><br />
      </div>
      <div>
        <h3>Excercise 2.1</h3>
        <Toggle />

        <h3>Exercise 2.2</h3>
        <TextMirror />
      </div>
      <div>
        <h3>Exercise 3</h3>
        <HoverBox />
      </div>
      <div>
        <h3>Exercise 4</h3>
        <TrafficLight color="red" />
        <TrafficLight color="yellow" />
        <TrafficLight color="green" />
        <TrafficLight color="pink" />
      </div>
      <div>
        <h3>Exercise 5</h3>
        <TodoList />
      </div>
    </>
  )
}

export default App
