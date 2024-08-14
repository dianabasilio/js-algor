//Short-Circuiting
// Logical AND (&&)
const a = false && "Hello"; // Returns false
const b = true && "World"; // Returns "World"

// Logical OR (||)
const c = true || "Hello"; // Returns true
const d = false || "World"; // Returns "World"

//&&
const isUserLoggedIn = true;

return <div>{isUserLoggedIn && <h1>Welcome Back!</h1>}</div>;

// ||
const username = null;

return (
  <div>
    <p>Hello, {username || "Guest"}!</p>
  </div>
);

// Explanation:

// If username is null (a falsy value), "Guest" is rendered because the expression evaluates to "Guest".
// If username has a truthy value, such as "John", then "John" is rendered.
