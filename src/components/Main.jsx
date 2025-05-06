import './Main.css'

const Main= () => {
    return (
        <>
          <main>
            <h1> --{'>'} Content gooes  here {'<'}--</h1> 
          </main>
          <div className="main-content">
            <div className="icon-container">
              <img src="src/assets/img/buy-comics-digital-comics.png" alt="Digital Comics" />  Digital Comics
            </div>
            <div className="icon-container">
              <img src="src/assets/img/buy-comics-merchandise.png" alt="Merchandise" /> Merchandise
            </div>
            <div className="icon-container">
            <img src="src/assets/img/buy-comics-subscriptions.png" alt="Subscriptions" />Subscriptions
            </div>
            <div className="icon-container">
              <img src="src/assets/img/buy-comics-shop-locator.png" alt="Shop Locator" />Shop Locator
            </div>
          </div>
        </>
    )
}
export default Main;