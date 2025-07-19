import { Provider } from "react-redux";
import CurrentDate from "./date";
import Weather from "./weather";
import weatherStore from "../redux/weather.store";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [city,setCity]=useState("");
  const handleInput = (e) => {
    setInput(e.target.value);    
  };
  const handleSubmit=(e)=>{
    if(e.key==='Enter'){
      setCity(input)
    }    
  }
  console.log(city);
  
  return (
    <Provider store={weatherStore}>
      <div className="main">
        <input
          type="text"
          placeholder="city or country name"
          onChange={(e) => handleInput(e)}
          value={input}
          onKeyDown={(e)=>handleSubmit(e)}
        />
        <CurrentDate />
        <Weather city={city} />
      </div>
    </Provider>
  );
};
export default App;
