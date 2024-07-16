# React_hook
1- useState: This lets you keep track of values in your app. For example, if you want to count how many times a button is clicked, you use useState like this:

const [count, setCount] = useState(0);
count is the value (starts at 0).
setCount is a function to change count.


2-useEffect: This lets you run code when your component loads or changes. For example, you might want to update the page title when the count changes:

useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);

* useState helps you remember things (like a counter), and useEffect helps you do things when your app updates (like changing the page title).
