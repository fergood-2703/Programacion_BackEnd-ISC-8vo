import axios from "axios";

const obtenerDatos = async () => {
  try {
    const token = 'dato erroneo-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NzYxOTcyNDYsImV4cCI6MTc3NjIwMDg0Nn0.cFqQ6amy8XWhBtYUwif22xdGCs_r7fBzcEIaj33l-yw';

    const response = await axios.get(
      'https://dummyjson.com/auth/me',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    console.log('Datos protegidos:', response.data);

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
};

obtenerDatos();