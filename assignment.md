## HTML Questions.

###  `<!DOCTYPE html>` is it a tag of html? If not, what is it and why do we use it?

- `<!DOCTYPE html>` is not a tag of HTML. It is known as a document type declaration. It is the first line fo code required by every HTML file. The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.

### Explain Semantic tags in html? And why do we need it?
   
- Semantics tags refers to tags that provide meaning to an HTML page instead of just presentation. It provides structural context to the content within a webpage. These tags describe the purpose and role of the content they enclose making it easier for both humans and machine to understand the structure and meaning of the document.
- We need it because it improves the Accessibility(making it easier for screen reader) and SEO of the Webpage.

### Differentiate between HTML Tags and Elements?

- HTML tags and Elements are closely related but have distinct meaning, An HTML tag defines the beginning and end of an element. Tags are enclosed within angle brackets ("<" and ">") and are placed before and after the content they affect. For example, the `<p>` tag represents a paragraph and is used to define the beginning and end of a paragraph element.
- An HTML element, on the other hand, consists of an opening tag, content, and a closing tag.

    ```html
    <p>This is a paragraph element.</p>
    ```
- In the above example, <p> is the opening tag, This is a paragraph element. is the content, and </p> is the closing tag. Together, they form the <p> element, which represents a paragraph.


### Build Your Resume using HTML only
- Add github link here

### Write Html code so that it looks like the given image
- Image Link not working

### What are some of the advantages of HTML5 over its previous versions?

- HTML5 have following advantages over it's previous version.
  -  HTML5 introduces new elements and attributes that provide better semantic meaning to web content. It includes elements such as `<header>`, `<footer>`, `<nav>`, `<article>`, and more, allowing developers to structure their content more meaningfully and enhance accessibility.
  -  HTML5 has native support for audio and video playback.
  -  HTML5 introduces the `<canvas>` element, which allows dynamic rendering of graphics and animations directly within the browser.
  -  HTML5 provides a built-in Geolocation API.


### Create a simple Music player using html only
- Add github link here


### What is the difference between `<figure>` tag and `<img>` tag?

- The `<img>` tag is used to embed an image in an HTML page.
- Images are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.
    ```html
    <img src="path-to-image.jpg" alt="Image description" width="300" height="200">
    ```
- The <img> tag has two required attributes:
  - `src` - Specifies the path to the image.
  - `alt` - Specifies an alternate text for the image if the image cannot be displayed for some reason.



- The `<figure>` tag is used to encapsulate and group together content that is related to a single concept or subject. It is often used in combination with the `<figcaption>` tag to provide a caption or description for the content within the `<figure>`. While it is commonly used with images, it can also be used with other types of media, such as videos or diagrams.
    ```html
    <figure>
    <img src="path-to-image.jpg" alt="Image description">
    <figcaption>This is a beautiful landscape.</figcaption>
    </figure>
    ```

### What’s the difference between html tag and attribute and give example of some global attributes?

- In HTML, the <tag> represents an element and defines the structure and meaning of content, while an attribute is used to provide additional information or modify the behavior of an HTML element. Here are the some example of global attributes `class`, `id`, `style`,`title` etc.
  
### build Table which looks like the given image Link 

- image link not working.


## CSS Questions

### Whats Box Model in CSS & Which CSS Properties are part of it ? 
- The box model is a fundamental concept in css, think of this as a box that wraps around every HTML element. It consists of margins, padding,borders, and the actual content.
- These are the properties that are part of it.
  - **Content**:- The content area is where the actual content of an element, such as text or images, is displayed
  - **Padding**:-The padding is the space between the content and the border of an element.
  - **Border**:-The border surrounds the padding and content of an element.
  - **Margin**:- The margin is the space outside the border of an element.

### What are the Different Types of Selectors in CSS & what are the advantages of them?
- CSS provides us many different types of selector some of them are
  - **Element Selector**:- select element based on their tag name.
  - **Class Selector:- ** select element based on the value of their `class` attribute.
  - **ID Selector**:- select element based on the value of their `id` attribute.
  - **Attribute selectors**:- selects elements based on the presence or value of a specific attribute. For example, [type="submit"] selects all elements with the attribute type set to "submit".
  - some others are `Pseudo-class selector`, `Pseudo element selector` etc.

- Advantage of using different selector are `Specificity` and `Reusability`.

### What is VW/VH & How its different from PX?
- **VW(Viewport width)**:- The VW unit represents a percentage of the viewport's width for example 100VW would represent 100% of the viewport’s width, or the full width of the screen.

- **VH (Viewport Height)**:- Similar to VW, the VH unit represents a percentage of the viewport's height for example 100VH would represent 100% of the viewport’s height, or the full height of the screen
  
- The main difference between VW/VH and PX is their relative versus absolute nature. VW and VH units allow you to create responsive designs that adapt to different viewport sizes, as they are relative to the dimensions of the viewport. PX units, on the other hand, are fixed and do not change based on the viewport size.

###  Whats difference between Inline, Inline Block and block ?

- The main difference between inline, inline-block, and block elements is how they are displayed on a web page.

- Inline elements are displayed on the same line as other text on the page. They do not have a width or height by default, and they cannot be floated or positioned. Some examples of inline elements include text, images, and links.

- Inline-block elements behave like inline elements in some ways, but they can also have a width and height set. This allows them to be displayed on a new line, but they can also be placed next to other inline elements. Some examples of inline-block elements include buttons and checkboxes.

- Block elements are displayed on a new line, and they take up the full width of their container. They can be floated or positioned, and they can have a width and height set. Some examples of block elements include paragraphs, tables, and lists.


###  How is Border-box different from Content Box? 

- The main difference between border-box and content-box is how the width and height of an element are calculated.

- Content-box calculates the width and height of an element based on the content inside the element, without taking into account the border or padding.
- Border-box calculates the width and height of an element based on the content inside the element, plus the border and padding.
- For example, if you have an element with a width of 100px, a border of 5px, and a padding of 10px, the width of the element will be 120px in the border-box model, but it will be 100px in the content-box model.

### What’s z-index and How does it Function ? 
- Z Index (z-index) is a CSS property that defines the order of overlapping HTML elements. Elements with a higher index will be placed on top of elements with a lower index.
- By default, elements have a z-index of 0

###  What’s Grid & Flex and difference between them?
- Grid and Flexbox are two different CSS layout models that provide powerful tools for creating responsive layout.
- Flexbox is a one-dimensional layout model that focuses on arranging elements along a single axis (either horizontally or vertically).
- Grid is a two-dimensional layout model that allows us to create complex grid structures with rows and columns.

###  Difference between absolute and relative and sticky and fixed position explain with example.

- relative is similar to position: static, The element is positioned the same as the flow of the document, but we can change the position of the element by using the top left right left, and z-index properties. Let’s have a look at an example.
- Element with position: absolute is completely removed from the original document flow. With the help of top left right left, and z-index properties, we can position this element anywhere relative to its closest parent. When an absolute positioned element has no positioned parent element, it uses the document body, Let’s try to get this clear with an example.
- Element with position: fixed is completely removed from the document flow just like the position: absolute. When we apply position: fixed to the element is positioned relative to the document body not to the parent element. Element with fixed position is also not affected by the scrolling effect.
- Element with position: sticky is like position: relative it remains in the original document flow until the user scroll when the user scrolls the element with position sticky get fixed based on any of the top left right left, and z-index properties.

### What are Pseudo class in CSS & How its different From Pseudo Elements?

- Pseudo-classes are special keywords that can be used to select elements based on their state or condition. For example, the pseudo-class :hover can be used to select an element when the user's mouse pointer hovers over it. Pseudo-elements, on the other hand, are special keywords that can be used to add content to an element. For example, the pseudo-element::after can be used to add content after an element.

###  Build Periodic Table as shown in the below image
- haven't made till now

### Build given layout using grid or flex see below image for reference .
- haven't made till now

###  Build Responsive Layout both desktop and mobile and Tablet, see below image for reference ?

- haven't made till now

###  Build Complete Homepage of Ineuron ( Link ) with responsiveness.

- haven't made till now

## JavaScript Questions

### What is Hoisting in Javascript ? 
- Hosting is a concept in JavaScript in which you can use variables and functions before they are declared.
- variable declared using the var keyword are hoisted to the top of their scope.
```js
console.log(x); // Output: undefined
var x = 5;
```
- In the above example, even though the variable x is declared after the console.log() statement, the variable declaration is hoisted to the top, so it exists throughout the scope. However, its value is not hoisted, so when you try to access it before the assignment (x = 5), it returns undefined.
- Function declarations are also hoisted in JavaScript. This means you can call a function before it appears in the code. For example:
```js
sayHello(); // Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}
```

- function expressions are not hoisted

### What are different higher order functions in JS? What is the difference between .map() and .forEach() ?

- In JavaScript, higher-order functions are functions that can take other functions as arguments or return functions as their results.
- Some common higher-order functions in JavaScript include map(), forEach(), filter(), reduce(), e.tc.
- The map() method creates a new array by calling a provided function on each element of the original array. It returns a new array with the same length as the original, where each element is the result of the function call. The original array is not modified.
```js
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

```

- The forEach() method executes a provided function once for each element in the array

```js
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

document.getElementById("demo").innerHTML = sum;

function myFunction(item) {
  sum += item;
}

```

### What is the difference between .call() .apply() and .bind()? explain with an example

- All three of the call, bind, and apply methods set the this argument to the function.
- **Call**: The call() method invokes a function with a given this value and arguments provided one by one
  
  ```js
  var employee1 = { firstName: "John", lastName: "Rodson" };
  var employee2 = { firstName: "Jimmy", lastName: "Baily" };

  function invite(greeting1, greeting2) {
    console.log(
      greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
    );
  }

  invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
  invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
  ```
- **Apply**: Invokes the function with a given this value and allows us to pass in arguments as an array
  ```js
  var employee1 = { firstName: "John", lastName: "Rodson" };
  var employee2 = { firstName: "Jimmy", lastName: "Baily" };

  function invite(greeting1, greeting2) {
    console.log(
      greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
    );
  }

  invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
  invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
  ```
- **bind**: returns a new function, allowing you to pass any number of arguments
  ```js
  var employee1 = { firstName: "John", lastName: "Rodson" };
  var employee2 = { firstName: "Jimmy", lastName: "Baily" };

  function invite(greeting1, greeting2) {
    console.log(
      greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
    );
  }

  var inviteEmployee1 = invite.bind(employee1);
  var inviteEmployee2 = invite.bind(employee2);
  inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
  inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
  ```

### Explain Event bubbling and Event Capturing in JavaScript with suitable examples

- **_Event Bubbling_**:-
  
  - When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
  ```js
  <form onclick="alert('form')">FORM
    <div onclick="alert('div')">DIV
      <p onclick="alert('p')">P</p>
    </div>
  </form>
  ```
  - when we click on `<P>` it runs the `onClick` function on that p, then on the outer `<div>` and then to the outer `<form>`, so on till the document object.

- **Event Capturing**:-
  - Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost DOM element.
  
### What is function currying with example?

- Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

  ```js
  /*Simple function*/ 
  const add = (a, b, c)=>{
      return a+ b + c
  }
  console.log(add(1,2 ,3)); // 6

  /* Curried Function */
  const addCurry = (a) => { // takes one argument
      return (b)=>{                 //takes second argument
          return (c)=>{             //takes third argument
              return a+b+c
          }
      }
  }
  console.log(addCurry(1)(2)(3)); //6

  ```


###  Explain execution context diagram of following code snippets, use white board to draw execution context diagram 
```js
// Code Snippet 1
console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');

//Code Snippet 2
console.log('First');
function secondCall() {
 console.log('Second');
}
setTimeout(secondCall, 2000);
setTimeout(() => console.log('Third'), 0);
console.log('Third');
```

### What are promises? What are the different states of a promise? Support your answer with an example where you need to create your own promise.
- Promises are objects used in JavaScript to handle asynchronous operations. They represent the eventual completion or failure of an asynchronous operation and allow us to write asynchronous code in a more structured and readable manner.
- Promise has following three states. 
  - Pending: This is the initial state of a promise. It means that the asynchronous operation associated with the promise is still in progress, and the final result is not available yet.
  - Fulfilled: When the asynchronous operation is successfully completed, the promise is fulfilled. It means that the operation has completed successfully, and the promise has a resulting value.
  - Rejected: If the asynchronous operation encounters an error or fails, the promise is rejected. It indicates that the operation did not complete successfully, and the promise holds the reason for the failure.

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        id: 1,
        name: 'John Doe',
        age: 25,
      };
      // Simulating a successful response
      resolve(data);
      // Simulating an error
      //reject(new Error('Failed to fetch data'));
    }, 2000);
  });
}

const dataPromise = fetchData();

dataPromise
  .then((data) => {
    console.log('Data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

```

### What is ‘this’ keyword in JavaScript? explain with an example & create

- `this` is a special keyword in JavaScript, It refers to an Object but depends on where it's being used. If this keyword is being used in an object's methods then this refers to the current object, if this keyword is being used alone then it refers to global object.
- When `this` is used outside of any function or object, it refers to the global object, which is window in a browser environment or global in Node.js
- When `this` is used within a method of an object, it refers to the object that owns the method.
  ```js
  const person = {
      name: 'John',
      greet: function() {
        console.log('Hello, ' + this.name);
      }
  };

  person.greet(); // Output: Hello, John

  ```
- When a function is used as a constructor with the new keyword, this refers to the newly created instance.
  ```js
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }

  const myCar = new Car('Toyota', 'Camry');
  console.log(myCar.make); // Output: Toyota

  ```

### Explain event loop Call Stack Callback queue and Micro Task queue in Your Words 

- In JavaScript, the event loop is responsible for executing code in a non-blocking way. It works by having two queues: the call stack and the callback queue.

- The call stack is where synchronous code is executed. When you call a function, it is pushed onto the call stack. When the function finishes executing, it is popped off the call stack.

- The callback queue is where asynchronous code is executed. When you use an asynchronous function, such as setTimeout() or Promise.then(), the callback function is pushed onto the callback queue. The callback queue is executed after the call stack is empty.

- Microtasks are a special type of asynchronous code that are executed immediately after the call stack is empty. They are used for things like mutation observers and promises.

### Explain Debouncing and Create a project where you are using Debouncing
- Debouncing is a technique used  to control the frequency at which a particular event, typically user input, triggers an action or function. It helps prevent excessive or unnecessary function calls, particularly when the event is fired  repeatedly. debouncing involves adding a delay before performing an action in response to an event. When the event is triggered, a timer is set, and if the event is fired again within the specified delay, the timer is reset. The action is executed only when the delay period has passed without any subsequent event firing.
- Link to the debounce project

### Explain Closures and Use cases of Closures

- A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains
  - Own scope where variables defined between its curly brackets
  - Outer function’s variables
  - Global variables

```js
function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}
var myFunction = Welcome("John");
myFunction("Welcome "); //Output: Welcome John
myFunction("Hello Mr."); //output: Hello Mr.John
```
- In the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.

### Create a Blog web app using JavaScript (10 Marks)
  - Fetch data from https://jsonplaceholder.typicode.com/posts and show it to ui
  - User can also add new blog
  - Add Delete functionality also

- Link to the project


## React Questions

### What’s React and What are the advantages of it?

- React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is widely used in web application development. React follows a component-based architecture, where the UI is broken down into reusable components, making it easier to manage and maintain complex user interfaces.

- Here are some of the advantages of using React.
  - **Virtual DOM**:- React uses Virtual DOM exists which is like a lightweight copy of the actual DOM. So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. 
  - **Component-Based**:- React uses component-based approach,where UI is divided into multiple reusable component.
  - **Declarative Syntax**:- React uses a declarative syntax, which means we need describe how the UI should look based on the current application state.
  - **Unidirectional Data Flow**:- React follows a unidirectional data flow, also known as one-way data binding. Data flows in a single direction, from parent components to child components

### What's Virtual Dom in React & What are the advantages of it?

- React uses Virtual DOM exists which is like a lightweight copy of the actual DOM. So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM. 
- Here are the few advantage of using virtual DOM
  - Performance: Updating the virtual DOM is much faster than updating the actual DOM. This is because the virtual DOM is a lightweight representation of the actual DOM.
  - Efficient Updates: React's diffing algorithm efficiently compares the previous and current Virtual DOM representations to determine the minimal set of changes. This targeted approach avoids unnecessary updates to unchanged parts of the UI, resulting in more efficient rendering.
  - The Virtual DOM abstracts away the complexities of working directly with the browser's DOM API

###  Explain LifeCycle of React Components? 
- The lifecycle of React components refers to the series of phases or stages that a component goes through from its initialization to its eventual removal from the DOM.
  - **Mounting**:- The mounting phase is when a component is first created and added to the DOM.
  - **Updating**:- The updating phase is when a component is updated, either because its props or state have changed.
  - **Unmounting**:- The unmounting phase is when a component is removed from the DOM.

### Whats the difference between between Functional Components and Class Components? 
- A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).
- A class component requires you to extend from React. Component and create a render function that returns a React element.

### What are the hooks in React & Can we use Hooks in Class Components? 
- Hooks is a special JavaScript function that allows you use state and other React features without writing a class. This pattern has been introduced as a new feature in React 16.8 and helped to isolate the stateful logic from the components.
- No, we can't use hooks into class component.

### What are the LifeCycle method and the advantages of it?
- In ReactJS, the lifecycle methods are a set of methods that are invoked at different stages of a component's lifecycle. They allow you to perform specific actions or execute code at various points in the component's existence.
- These are the some advantages of life cycle methods:
  - Lifecycle methods provide hooks at various stages of a component's existence, allowing you to control and customize the behavior of your components.
  - Lifecycle methods helps use to perform side effects like fetching data from APIs, updating the DOM, or setting up event listeners.

### What’s useState Hook & Advantages of it?
- The useState hook is used to declare and manage state variables within a functional component. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update that value.
- following are the advantages of using `useState` hook.
  - helps us to add state to component.
  - helps to update state based on the previous state.


###  Explain useEffect & Advantages of it?
- `useEffect` hook allows us to perform side effects in functional components.  Side effects typically include things like data fetching, subscriptions, or manually manipulating the DOM. 
- `useEffect`allows us to handle all side effects within a single hook, eliminating the need to use multiple lifecycle methods.
- `useEffect` provides a cleanup mechanism by returning a function from the effect, to avoid memory leaks.
- `useEffect` can handle asynchronous operations, such as data fetching using APIs or making AJAX requests. 

###  Explain Context Api and create a minor project on it
- The Context API is a feature of React that provides a way to share data and state between components without the need for prop drilling (passing props through multiple levels of components). It allows you to create a global state that can be accessed by any component within a React application.
- Project Link

###  Explain useReducer and Its advantages ?
- useReducer is a React Hook that lets you add a reducer to your component.
- The `useReducer` hook takes in a reducer function and an initial state, and returns an array with two elements: the current state and a dispatch function. The reducer function receives the current state and an action as parameters, and it returns a new state based on the action.
-  It is used to manage state in a more complex and predictable manner than the useState hook.

### build a Todo Web App Using React and useReducer Hook ?
- link

### Build A simple counter app using React 
- link

### Build a Tic Tac Toe Game using Class Component of React 
- link

### Explain Prop Drilling & How can we avoid it?
- Prop drilling is the process of passing data from one component to another through intermediate components. This is often done when the data needs to be accessed by a component that is nested deep within the component tree.
- These are some ways to avoid prop Drilling.
  - **Using ContextAPI** The context API provides a way to share data between components without having to pass it as props.
  - Using State management library like Redux or Zustand.


### Create a task manager where user can create tasks and see his task


## Express Question →

### Create a simple server using Express and connect with backend and create an endpoint “/post” which sends 20 posts

- link

###  Explain a middleware and create a middleware that checks is user authenticated or not then send data of post

- Middleware functions have access to the request object and the response object and also the next function in the application request-response lifecycle.
- Middleware functions can perform the following tasks:
  - Execute any code.
  - Make changes to the request and the response objects.
  - End the request-response cycle.
  - Call the next middleware in the stack.
  
- link

### What is the difference between authentication and authorization?

- Authentication and authorization are two important concepts in information security. Authentication is the process of verifying the identity of a user or service, while authorization is the process of determining what resources a user or service is allowed to access.

###  What is he difference between common JS and EJS module?
- CommonJS is the older of the two modules systems, and it is the default module system for Node.js. CommonJS modules are loaded using the require() function.

```js
const SomeModule = require('some-module');

module.exports = someValue;
// or
exports.someValue = someValue;
```
- EJS is a newer module system that is based on the ES6 module standard. EJS modules are loaded using the import and export keywords.

```js
import SomeModule from 'some-module';

export default someValue;
// or
export { someValue };
```

### What is JWT and what we can achieve with that create a minor project with jwt 

- JWT stands for JSON Web Token. It is an open standard for securely transmitting information between parties as a JSON object. JWTs are commonly used for authentication and authorization purposes in web applications.
- A JWT consists of three parts: a header, a payload, and a signature. The header contains information about the token, such as the algorithm used to sign it. The payload contains the claims or statements about the user or entity, such as the user's ID or roles. The signature is used to verify the authenticity of the token.

### What should we do with the password of a user before storing it into DB?

-  Instead of storing the plain text password,we should use a strong, one-way hashing algorithm (such as bcrypt, scrypt, or Argon2) to convert the password into a fixed-length hash. 
-  Adding salt to the password, A salt is a random string that is added to the password before it is hashed. This makes it much more difficult for an attacker to crack the password, even if they have access to the hash.


### Whats event loop in NodeJS 
- The event loop is a single-threaded loop that runs continuously in the Node.js runtime. It is responsible for processing all events that occur in the application, such as I/O events, timer events, and user events.
- The event loop works by first checking the event queue to see if any events are waiting to be processed. If there are no events, the event loop will sleep until an event is added to the queue. When an event is added to the queue, the event loop will wake up and process the event.
- The event loop will then check the call stack to see if there are any functions that are currently executing. If there are no functions executing, the event loop will call the next function in the call stack. If there are functions executing, the event loop will return to the top of the loop and wait for another event to be added to the queue.