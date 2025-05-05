import './Headers.css'

const Header= () => {
    return (
        <>
            <div className="logo">
                <img src="/assets/images/dc" alt="DC Logo" />
            </div>
            <div className="bottom-nav">
                <ul className="nav-list">
                    <li><a href="#characters">Characters</a></li>
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