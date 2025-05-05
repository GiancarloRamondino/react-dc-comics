import './Footer.css'

const Footer= () => {
    return (
        <>
            <div className='Jumbo'>
                <div className='column'>
                    <ul>
                        <li className='titolo'>DC COMICS</li>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Games</li>
                        <li>Videos</li>
                        <li>News</li>
                    </ul>
                    <ul>
                        <li className='titolo'>DC</li>
                        <li>Terms Of Use</li>
                        <li>Privacy policy (New)</li>
                        <li>Ad Choices</li>
                        <li>Advertising</li>
                        <li>Jobs</li>
                        <li>Subscriptions</li>
                        <li>Talent Workshop</li>
                        <li>CPSC Certificates</li>
                        <li>Ratings</li>
                        <li>Shop Help</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li className='titolo'>SITES</li>
                        <li>DC</li>
                        <li>MAD Magazine</li>
                        <li>DC Kids</li>
                        <li>DC Universe</li>
                    </ul>
                    <ul>
                        <li className='titolo'>SHOP</li>
                        <li>Shop DC</li>
                        <li>Shop DC Collectibles</li>
                    </ul>
                </div>
                <div  className='imgjumbo'>
                    <img src="../assets/img/footer-bg" alt="DC" />
                </div>
            </div>
            <div className="d-flex">
                <div className="logo h-100">
                    <img src="./assets/images/dc-logo.pn" alt="DC Logo" />
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
            </div>
           
            
        </>
    )
}

export default Footer;