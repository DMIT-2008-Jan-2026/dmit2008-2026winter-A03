# useEffect explanation

`useEffect` is another built-in React hook.

> 'hook' -> hooking some automated behaviour into React core logic.
> for example, `useState` registers state values *outside* components, and reinjects them when the component re-renders; that's how those values persist.

`useEffect` is a hook that is (when used responsibly) meant to connect React behaviour to some sort of external system, e.g. a REST API.

The goals here are:

- we want some sort of behaviour external to React to fire when things internal to React happen (e.g. page loads, a state/prop value change, component re-renders, etc.)

- we want all our core React rendering (components w/ state & props) to happen *before* side-effected behaviour.

---

## what is "side-effecting"?

Simple explanation: when logic mutates something outside its own scope.

Here, there is no side-effecting: the function takes an input, returns an output, doesn't change anything outside its own scope.

```js
function double(n) {
	return 2 * n
}
```

In this version, there *is* side-effecting:

```js
let num; // outside the scope of double()

function double(n) {
	num = 2 * n
	return num
	// or even, return 2 * n -> I've still mutated something outside of scope
}

```

Front-end-specific examples of side-effecting include getting/posting to a REST API, making a websocket connection to a chat server, writing/reading to browser local storage, etc.


---

## side-effecting in React: `useEffect`

We'll start here next class!