
const Header = () => {
    return(
        <div className = "header">
            <h1> DASH  BOARD </h1>
        </div>

    )     
};

const Reviews = () => {
    return(
        <div className = "container">
            <h2>Reviews</h2>
            <p className = "para">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
    )
};

const AverageRating = () => {
    return(
        <div className = "container2">
            <h2>Average Rating</h2>
            <ul className = "list2">
                <li>4.6</li>
            </ul>
        </div>
    )
};

const WebsiteVisitors = () => {
    return(
        <div className = "container3">
            <h2>Website Visitors</h2>
            <img src="./Images/flowing-lines-banner.jpg"></img>
        </div>
    )
};

const Menu = () => {
    return(
        <div className = "menubar">
            <h2>Menu</h2>
            <ul className = "list">
                <li>Stash</li>
                <br></br>
                <br></br>
                <li>Followers</li>
                <br></br>
                <br></br>
                <li>Settings</li>
                <br></br>
                <br></br>
                <li>Connect</li>
                <br></br>
                <br></br>
                <li>Socials</li>
                <br></br>
                <br></br>
                <li>Log Out</li>
            </ul>
        </div>
    )
};

const Analyis = () => {
    return(
        <div className = "container4">
            <h2>Analysis</h2>
            <ul className = "list2">
                <li>341</li>
                <br></br>
                <li>906</li>
                <br></br>
                <li>576</li>
            </ul>
        </div>
    )
}

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Reviews />
                <AverageRating />
                <WebsiteVisitors />
                <Analyis />
                <Menu />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('root'))