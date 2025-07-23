import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getweather } from "../redux/themes/weatherslice";
const Weather = (props) => {
  const API = "bd4305d93d1faa7050c95451c6c74d55";
  const { city } = props;
  const { isLoading, data, isError } = useSelector((state) => state.weather);  
  const dispatch = useDispatch();
  useEffect(() => {
    if (city) {
      dispatch(getweather({city,API}));
    }
  }, [city, dispatch]);
  return (
    <div className="weather">
      {isLoading ? ( 
        <div className="loading"></div>
      ) : (
        <p>{data?.main?.temp}°C</p>
      )}
      {isError && <p>{isError} 🥲</p>}
      {data?.weather && <p>{data.weather[0].description}</p>}
    </div>
  );
};

export default Weather;
