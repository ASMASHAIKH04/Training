// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <title>
        12-Task1
      </title>
      <div id="new">
        <h1>TRAVEL</h1><b>PLACES TO EXPLORE</b><br /><a href="travel.jpg">CLICK HERE </a><br /><img src="travel.jpg" width="200px" height="200px" />
        <h2>PLACES TO VISIT IN INDIA IN JULY</h2><img src="july.jpg" width={150} height={150} /><img src="india.jpg" width={150} height={150} />
        <ul>
          <li>GOA</li>
          <li>MAHARASHTRA</li>
          <li>KERALA</li>
          <li>RAJASTHAN</li>
          <li>TAMIL NADU</li>
        </ul>
        <p>This is a good time to visit some of India's drier areas, such as the historic cities of <i>Rajasthan</i> or
          <i>Tamil Nadu's</i> ancient temples.
        </p>
        <h2>PLACES TO VISIT ACROSS WORLD IN JULY</h2><img src="july.jpg" width={150} height={150} /><img src="world.jpg" width={150} height={150} />
        <ol>
          <li>GERMANY</li>
          <li>FRANCE</li>
          <li>CANADA</li>
          <li>AUSTRALIA</li>
        </ol>
        <form><b><u>TRAVEL AND EXPLORE WITH US</u></b>
          <p>Would u like to travel with us?</p><label><input id="YES" type="radio" name="PERMISSION" defaultValue="YES" />YES:)</label><label><input id="NO" type="radio" name="PERMISSION" defaultValue="NO" />NO:(</label>
          <p>WHERE DO YOU WANT TO TRAVEL? </p> <label><input id="CANADA" type="checkbox" name="travel" defaultValue="CANADA" />CANADA</label> <label><input id="TURKEY" type="checkbox" name="travel" defaultValue="TURKEY" />TURKEY</label> <br /> <button type="SUBMIT">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default App;
