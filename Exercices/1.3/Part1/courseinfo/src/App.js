import React from 'react';

function Header({ course }) {
 return <h1>{course}</h1>;
}

function Content({part}){
  return <div id ="part">Part name : {part.name} , Exercice : {part.exercises} </div>;


}


function App() {

 const course = 'Half Stack application development'
 const part1 = {
   name: 'Fundamentals of React',
   exercises: 10
 }
 const part2 = {
   name: 'Using props to pass data',
   exercises: 7
 }
 const part3 = {
   name: 'State of a component',
   exercises: 14
 }


 /*const total = course.parts.reduce((prev, curr) => prev + curr.exercises, 0);
  <Total total={total} />*/

 return (
  
 <>
 <Header course={course} />
 <Content part={part1}/>
 <Content part={part2}/>
 <Content part={part3}/>

 

 </>

 );
  
  
}

export default App;