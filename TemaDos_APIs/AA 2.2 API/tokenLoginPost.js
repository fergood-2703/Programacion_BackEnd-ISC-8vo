import axios from "axios";

const login = async () => {
  try {
    const response = await axios.post(
      'https://dummyjson.com/auth/login',
      {
        username: 'emilys',
        password: 'emilyspass'
      }
    );

    console.log('Access Token:', response.data.accessToken);
    return response.data.accessToken;

  } catch (error) {
    console.error('Error login:', error.response?.data || error.message);
  }
};

login();