import { Link } from 'react-router-dom'

const About = () => {
    function openTab() {
        window.open('https://github.com/pesdesigner/react-task-tracker');
    }

    return (
        <div className="about">
            <h2>Task Tracker</h2>
            <p>Version 1.0.0</p>

            <Link onClick={openTab} className="github">github.task-tracker</Link>

            <Link to='/' className="about-btn">Go Back</Link>
        </div>
    )
}
export default About