import './App.css';
import ProfileDetails from "./containers/ProfileDetails";
import React from "react";
import gradient from 'random-gradient'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            random_color: '#EE7D2B',
            colors: [
                '#EE7D2B', '#127681', '#E24759', '#3246FF',
                '#FF0000', '#9500AD', '#FF5C00', '#4343A4',
                '#3fabb5', '#9c3fb5', '#b53f66', '#763fb5',
                '#3f95b5', '#3fb568', '#3f90b5', '#b53f3f',
                '#3f51b5'
            ],
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                random_color: this.state.colors &&
                    this.state.colors.length > 0 &&
                    this.state.colors[Math.floor(
                        Math.random() * this.state.colors.length)],
            })
        }, 10000);
    }

    render() {
        return (
            <div
                style={{background: gradient(this.state.random_color)}}
                className="App">
                <ProfileDetails/>
            </div>
        );
    }

}

export default App;
