import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import TodoList from '../components/TodoList'


// our first test will be a 'dummy test' just to get familiar with syntax
// (I don't *need* to be testing something like, does an MUI Typography component
// actually render).
test(
    'todo list title renders correctly', // param 1: name of test
    () => {                              // param 2: callback for the test logic itself
      // setup - N.B. it's pretty goofy to be grabbing elements by on-screen value, rather
      //        than attributes/IDs etc. but again this is just to show you the basics of a test
      render(<TodoList />)  // we're rendering JSX, not just naming components as inputs
      const title = screen.getByText("Our Todo List")

      // test
      expect(title).toBeInTheDocument()
    }
)

test('add button renders correctly', () => {
  // 1. setup
  render(<TodoList />)
  // instead of just selecting by rendered values on-'screen' (finnicky because once your UI
  // gets more complex, e.g. what if two fields or display elements have the same value?)
  // we can provide a 'data-testid' attribute/prop in a component and select it more precisely!
  const addButton = screen.getByTestId("add-new-todo-button")

  // test
  expect(addButton).toBeInTheDocument()
})
