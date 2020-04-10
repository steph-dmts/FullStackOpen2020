import React from 'react'

const Course = (props) => {
    return (
        <div>
            <Header course={props.course} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    )
}
const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}
const Content = (props) => {
    return (
        <div>
            {props.parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}
const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Total = (props) => {
    const total = props.parts.reduce((sum, part) => {
        return sum += part.exercises
    }, 0)


    return (
        <strong>total of {total} exercises</strong>
    )
}

export default Course