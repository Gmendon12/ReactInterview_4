import logo from './logo.svg';
import './App.css';
import RefImplementation from './RefImplementation';
import MemoImplementation from './MemoImplementation';

function App() {
  return (
    <div>

      <h2>React Interview Day 4</h2>
      
      <ol>
        <li>
          <div> <strong>UseRef Implementation</strong> </div> <br />
        <RefImplementation/>
        </li> <br /> <br />
        <li>
        <div> <strong>UseMemo Implementation</strong> </div> <br />
          <MemoImplementation/>
        </li> <br /> <br />

        <li>
        <div> <strong>Context API</strong> </div> <br />
        <p>
          React Context API allows us to share data from one component and solves the problem of props drilling. 
          Context API helps us avoid sending data through various intermediate layers of components, and by using context api, the context will recieve props indirectly by creating a global variable that can be passed to other components.
          Firstly, we need to create a context, which we can later use to create providers and consumers.
          The Provider provides the data/state to its children. It will store the data and be the parent of all the components. The Consumer is the conmponent that consumes and uses the state.
        </p>
        </li> <br /> <br />

        <li>
        <div> <strong>React Life Cycles</strong> </div> <br />
        <p>
          A class component undergoes 3 main lifecycles stages namely, mounting phase, updating phase and unmounting phase.
          In the mounting phase, the elements are inserted into the DOM. React uses the virtual DOM to put all the elements into the memory. It has four build-in methods to mount a component
          <ul>
            <li>Constructor()</li>
            <li>getDerivedStateFromProps()</li>
            <li>Render()</li>
            <li>ComponentDidMount</li>
          </ul>

          if the component is updated(state or props change), then it enters the updating phase. The updating phase has 5 methods
          <ul>
            <li>getDerivedStateFromProps</li>
            <li>ShouldComponentUpdate</li>
            <li>render()</li>
            <li>getsnapshotBeforeUpdate()</li>
            <li>ComponentDidUpdate()</li>
          </ul>

          Finally, the unmounting phase is the end of the component lifecycle. Component is removed from the DOM. it has one method which is the ComponentWillUnmount
        </p>
        </li> <br /> <br />
      
      <li>
      <div> <strong>Props Drilling</strong> </div> <br />
      <p>
        React developes encounter scenorios where they must pass data from a top level component to a deeple nested component. This refers to transporting the data as props to the intended component via various intermediate components.
        This method is very inefficient and slow. We pass data through components that do not require it, making our code complex and difficult to maintain.

        The solution to props drilling is either using Redux or Context api.
        <ul>
          <li>Redux is a React library that allows us to store data in a store(as objects) and any component that needs this data can get it from the store.</li>
          <li>Context api returns us a provider and consumer. Provider provides the data and consumer recieves the data</li>
        </ul>

        in React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”
      </p>
      </li> <br /> <br />

      <li>
      <div> <strong>Difference between useEffect and useContext</strong> </div> <br />
      <ul>
        <li>
          UseEffect Hook is used to replicate lifecycle methods in a class component. We can consider useEffect Hook as componentDidMount, componentDidUpdate and componentWillUnmount. The Useffect returns us a function which will be executed when its dependencies re-renders.  
        </li>
        <li>
        Context API is a suite of API features that provides a mutable, global state data structure to hook into components at any point throughout the component tree, thus preventing a React.js anti-pattern known as prop drilling. useContext Hook helps use implement the context api
        </li>
      </ul>
      </li> <br /> <br />

      <li>
      <div> <strong>useCallback Hook vs callback</strong> </div> <br />
      <br />
      <ul>
        <li>useCallback is a react hook that returns a memorized callback when passed a function and a list of dependencies that set the parameters. It's useful when a component is passing a callback to its child component in order to prevent rendering. It only changes the callback when one of its dependencies is changed</li>
        <li>A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.</li>
      </ul>
      
      </li>
      
      </ol>
      
    </div>
  );
}

export default App;
