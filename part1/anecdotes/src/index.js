import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const generateRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
  }

  const voteForAnecdote = () => {
    const copyVotes = [...votes]
    copyVotes[selected]++
    setVotes(copyVotes)

    const mostVotes = Math.max(...copyVotes)
    const mostVoted = copyVotes.indexOf(mostVotes)
    setMostVoted(mostVoted)
  }

  return (
    <div>
      <div>
        <h2>Anecdotes of the day</h2>
        <p>{anecdotes[selected]} has {votes[selected]} votes</p>
        <button onClick={voteForAnecdote}>vote</button>
        <button onClick={generateRandomAnecdote}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdotes with most votes</h2>
        <p>{anecdotes[mostVoted]} has {votes[mostVoted]} votes</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)