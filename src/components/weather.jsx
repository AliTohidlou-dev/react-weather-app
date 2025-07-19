import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestToGetData,
  getData,
  getError,
} from "../redux/weather/weather.action";
const Weather = (props) => {
  const API = "bd4305d93d1faa7050c95451c6c74d55";
  const { city } = props;
  const { isLoading, data, isError } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    if (city) {
      dispatch(requestToGetData());
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.cod);
          if (data.cod === 200) {
            dispatch(getData(data));
          } else {
            dispatch(getError(data.message || "Network error"));
          }
        })
        .catch((error) => {
          dispatch(getError(error.message || "Network error"));
        });
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
