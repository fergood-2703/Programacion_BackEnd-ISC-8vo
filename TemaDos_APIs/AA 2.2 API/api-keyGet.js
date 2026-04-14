import axios from "axios";

const obtenerClima = async () => {
  try {
    const apiKey = '5d1e632549a52febe67de6478556298d';

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=${apiKey}&units=metric`
    );

    console.log('Clima:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
};

obtenerClima();