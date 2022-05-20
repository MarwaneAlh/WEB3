import React from 'react';

function Header({ course }) {
 return <h1>{course}</h1>;
}

function Part({ part, number_exercice }) {
 return (
 <p> <h3>Part:  {part}</h3> Number of exercice : {number_exercice} </p>
)
}

function Content({ parts }) {
 return (
 <>
 {parts.map(({ name, exercises }) => {
 return <
   Part part={name} number_exercice={exercises} />;
 })}
 </>
 )
}



function App() {
 const course = {
 name: 'Half Stack application development',
 parts: [
 {
 name: 'Fundamentals of React',
 exercises: 10,
 },
 {
 name: 'Using props to pass data',
 exercises: 7,
 },
 {
 name: 'State of a component',
 exercises: 14,
 },
 ],
 };



 return (
 <>
 <Header course={course.name} />
 <Content parts={course.parts} />

 </>
 );
}

export default App; 