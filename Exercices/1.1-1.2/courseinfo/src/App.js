import React from 'react';

function Header({ course }) {
 return <h1>{course}</h1>;
}

function Part({ part, number_exercice }) {
 return (
 <p> Part:  {part} Number of exercice : {number_exercice} </p>
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

function Total({ total }) {
 return <p>Number total of exercises :  {total}</p>;
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

 const total = course.parts.reduce((prev, curr) => prev + curr.exercises, 0);

 return (
 <>
 <Header course={course.name} />
 <Content parts={course.parts} />
 <Total total={total} />
 </>
 );
}

export default App;