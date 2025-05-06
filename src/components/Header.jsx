import './Headers.css'

const Header= () => {
    return (
        <>
            <div className="logo h-100">
                <img src="src/assets/img/dc-logo.png" alt="DC Logo" />
            </div>
            <div className="bottom-nav h-100">
                <ul className="nav-list ">
                    <li><a href="#characters" className="h-100">Characters</a></li>
                    <li><a href="#comics">Comics</a></li>
                    <li><a href="#movies">Movies</a></li>
                    <li><a href="#tv">TV</a></li>
                    <li><a href="#games">Games</a></li>
                    <li><a href="#collectibles">Collectibles</a></li>
                    <li><a href="#videos">Videos</a></li>
                    <li><a href="#fans">Fans</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#shop">Shop</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header;