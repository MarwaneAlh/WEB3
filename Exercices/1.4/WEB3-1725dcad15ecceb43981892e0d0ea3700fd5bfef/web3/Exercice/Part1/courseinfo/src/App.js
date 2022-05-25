import React from 'react';

function Header({ course }) {
 return <h1>{course}</h1>;
}

function Content({part}){
  var names = part.map(function (part) {
    return part.name + ' ' + part.exercises+' ';
  });
  
  return <div>  {names} </div>;


}


function App() {

 const course = 'Half Stack application development'
 const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]


 /*const total = course.parts.reduce((prev, curr) => prev + curr.exercises, 0);
  <Total total={total} />*/

 return (
  
 <>
 <Header course={course} />
 <Content part={parts}/>


 

 </>

 );
  
  
}

export default App;