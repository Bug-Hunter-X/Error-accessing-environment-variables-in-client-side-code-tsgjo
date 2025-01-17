```javascript
// pages/aboutSolution.js

export async function getServerSideProps() {
  const myVariable = process.env.MY_VARIABLE;

  return {
    props: {
      myVariable: myVariable,
    },
  };
}

function About({ myVariable }) {
  console.log(myVariable); // Access the variable here

  return (
    <div>
      <h1>About Page</h1>
      <p>My variable: {myVariable}</p>
    </div>
  );
}

export default About;
```