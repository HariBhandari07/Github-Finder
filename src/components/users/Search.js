import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

const Search = ({ setAlert, showClear, clearUsers }) => {
    const githubContext = useContext(GithubContext)
    const [text, setText] = useState('')

    const onChange = (e) => setText(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            setAlert('Please enter something', 'light')
        } else {
            githubContext.searchUsers(text)
            setText('')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search User..." value={text}
                       onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {
                showClear &&
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
            }

        </div>
    )

}

Search.propTypes = {
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
