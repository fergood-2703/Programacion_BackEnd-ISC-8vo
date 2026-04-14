import axios from "axios";

const registrarUsuario = async () => {
    try {
        const respuesta = await axios.post('https://reqres.in/api/register', {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        },
            {
                headers: {
                    'x-api-key': 'reqres_5a804f5d23e547f9b7ae80dba6980575'
                }
            });
        console.log('Registro exitoso:', respuesta.data);
    } catch (error) {
        console.error('Error en el registro:', error.response.data);
    }
};

registrarUsuario();