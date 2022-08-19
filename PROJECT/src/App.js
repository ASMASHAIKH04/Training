import './App.css';
import Candle1 from "./components/Candle1-video.mp4";
import booknow from "./components/book.png";
import product1 from "./components/products-1.png";
import product2 from "./components/products-2.png";
import product3 from "./components/products-3.png";
import product4 from "./components/products-4.png";
import product5 from "./components/products-5.png";
import product6 from "./components/products-6.png";
import contact from "./components/contact.png";

function App() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Candlish</title>
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
      {/* font awesome cdn link  */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      {/* custom css file link  */}
      <link rel="stylesheet" href="style.css" />
      {/* header section starts  */}
      <header>
        <div id="menu-bar" className="fas fa-bars" />
        <a href="#" className="logo"><span>C</span>andl<span>IS</span>h</a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#book">Book Now</a>
          <a href="#packages">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      {/* header section ends  */}
      {/* home section starts  */}
      <section className="home" id="home">
        <div className="content">
          <h3>Fragrance to elevate your mood</h3>
          <p>Pamper yourself with aromatherapy......Get yourself our new candle collection</p>
          <a href="#packages" className="btn">discover more</a>
        </div>
        <div className="video-container">
          <video src={Candle1} loop autoPlay muted />
        </div>
      </section>
      {/* home section ends */}
      {/* book section starts  */}
      <section className="book" id="book">
        <h1 className="heading">
          <span>B</span>
          <span>O</span>
          <span>O</span>
          <span>K</span>
          <span className="space" />
          <span>N</span>
          <span>O</span>
          <span>W</span>
        </h1>
        <div className="row">
          <div className="image">
          <img src={booknow} />
          </div>
          <form action>
            <div className="inputBox">
              <h3>Address</h3>
              <input type="text" placeholder="Type Address here" />
            </div>
            <div className="inputBox">
              <h3>how many</h3>
              <input type="number" placeholder="Number of candles" />
            </div>
            <div className="inputBox">
              <h3>Name of Candles</h3>
              <input type="text" placeholder="Type of candles" />
            </div>
            <div className="inputBox">
              <h3>Color of Candles</h3>
              <input type="text" placeholder="color of candles" />
            </div>
            <div className="inputBox">
              <h3>Frangrance</h3>
              <input type="text" placeholder="Name of Frangrance" />
            </div>
            <input type="submit" className="btn" defaultValue="book now" />
          </form>
        </div>
      </section>
      {/* book section ends */}
      {/* packages section starts  */}
      <section className="packages" id="packages">
        <h1 className="heading">
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>D</span>
          <span>U</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
        </h1>
        <div className="box-container">
          <div className="box">
        <img src={product1} />
            <div className="content">
              <h3> <i className="fa fa-heart" /> SCENTED FILLING TEALIGHT CANDLES </h3>
              <p>Designed to add a splash of color and enticing aroma to complete the atmosphere.</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price"> Rs. 70 <span>Rs.100</span> </div>
              <a href="#" className="btn">book now</a>
            </div>
          </div>
          <div className="box">
          <img src={product2} />
            <div className="content">
              <h3> <i className="fa fa-heart" /> PILLAR CANDLES </h3>
              <p>They look great by a fireplace, on the dining table - even outside.</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price"> Rs. 150 <span>Rs.200</span> </div>
              <a href="#" className="btn">book now</a>
            </div>
          </div>
          <div className="box">
          <img src={product3} />
            <div className="content">
              <h3> <i className="fa fa-heart" /> CUP CANDLES </h3>
              <p>Tealgiht candle features eco-friendly, smokeless,dripless, long burning time.</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price"> Rs. 50 <span>Rs.70</span> </div>
              <a href="#" className="btn">book now</a>
            </div>
          </div>
          <div className="box">
          <img src={product4} />
            <div className="content">
              <h3> <i className="fa fa-heart" /> SOY WAX CANDLES </h3>
              <p>Soy wax burns very slow, meaning you'll get a candle that lasts longer. </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price"> Rs. 65 <span>Rs.80</span> </div>
              <a href="#" className="btn">book now</a>
            </div>
          </div>
          <div className="box">
          <img src={product5} />
            <div className="content">
              <h3> <i className="fa fa-heart" /> VOTIVE CANDLES </h3>
              <p>Perfect for adding small dose of candlelight to bedside tables, bathroom units or shelves.</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">Rs. 49 <span>Rs.70</span> </div>
              <a href="#" className="btn">book now</a>
            </div>
          </div>
          <div className="box">
          <img src={product6} />
            <div className="content">
              <h3> <i className="fa fa-heart" /> CANDLE SET PACKAGE </h3>
              <p>Gentle, mesmerising quality of their light makes them a perfect aid for any relaxation routine
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price"> Rs. 620 <span>Rs.700</span> </div>
              <a href="#" className="btn">book now</a>
            </div>
          </div>
        </div>
      </section>
      {/* packages section ends */}
      {/* contact section starts  */}
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
        </h1>
        <div className="row">
          <div className="image">
          <img src={contact} />
          </div>
          <form action>
            <div className="inputBox">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="number" />
              <input type="text" placeholder="subject" />
            </div>
            <textarea placeholder="message" name id cols={30} rows={10} defaultValue={""} />
            <input type="submit" className="btn" defaultValue="send message" />
          </form>
        </div>
      </section>
      {/* contact section ends */}
      {/* footer section  */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>about us</h3>
            <p>The company is specialized in developing and manufacturing various kinds of wax products, such as
              glass cup wax, pillar candle, tea light, dinner candle, etc. The products have been exported to more
              than 20 states and are very popular in Northern &amp; Western.We welcome friends from allover the world
              to visit our company for inspection and negotiation.</p>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <a href="#home">home</a>
            <a href="#book">Book Now</a>
            <a href="#packages">products</a>
            <a href="#contact">contact</a>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">instagram</a>
            <a href="#">twitter</a>
            <a href="#">linkedin</a>
          </div>
        </div>
        <h1 className="credit"> created by <span> Candlish </span> | all rights reserved! </h1>
      </section>
      {/* custom js file link  */}
    </div>
  );
}

export default App;
