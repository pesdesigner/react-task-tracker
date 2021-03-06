import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            <h1>Task Tracker</h1>
            <h1>Hello From React</h1>
            <h2>Hello {title}</h2>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header