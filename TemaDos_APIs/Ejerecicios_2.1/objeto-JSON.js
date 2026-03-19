const taco = {
            "id": "0001",
            "tipo": "taco",
            "nombre": "Taco lechon",
            "precio": 20.00,
            "ingredientes": {
                "proteina": {
                    "nombre": "Puerco",
                    "preparacion": "Horneado"
                },
                "salsa": {
                    "nombre": "Tomate verde",
                    "picor": "Medio"
                },
                "acompañamientos": [
                    {
                        "nombre": "Cebolla",
                        "cantidad": "1 cucharada",
                        "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"]
                    },
                    {
                        "nombre": "Guacamole",
                        "cantidad": "2 cucharadas",
                        "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"]
                    }
                ]
            }
        };

// Serializar es convertir a JSON
const jsonString = JSON.stringify(taco);
console. log (jsonString);