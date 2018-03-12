let correos = [{
        usuario: 'JoseElMaquina',
        email: 'jose.el.maquina@gmail.com'
    },
    {
        usuario: 'PepeElCorrecto',
        email: 'pepe@corecto.com'
    },
    {
        usuario: 'JoseLuisDaBest',
        email: 'joseluis@dabest.com.eu'
    },
    {
        usuario: 'EsteEstaBien',
        email: 'este@bien.com'
    },
    {
        usuario: 'Elcarterista',
        email: 'elcarterista20@gmail.com'
    }
];

var noGmails = correos.filter(correo => !correo.email.endsWith("@gmail.com"));
console.log(noGmails);

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

let procesadores = [{
        modelo: 'pentiumII',
        operacionesPorSegundo: 10500,
        tasaDeFallos: 15
    },
    {
        modelo: 'i7',
        operacionesPorSegundo: 20000,
        tasaDeFallos: 60
    },
    {
        modelo: '8086',
        operacionesPorSegundo: 30,
        tasaDeFallos: 26.3
    },
    {
        modelo: 'i3',
        operacionesPorSegundo: 11389,
        tasaDeFallos: 58.4
    },
    {
        modelo: 'i5',
        operacionesPorSegundo: 15000,
        tasaDeFallos: 10
    },
    {
        modelo: 'celeron',
        operacionesPorSegundo: 200,
        tasaDeFallos: 80
    }
];

var procesadoresFallos = procesadores.filter(fallo => fallo.tasaDeFallos < 50);


function comparar(a, b) {
    return b - a;
}
procesadoresFallos.sort(comparar);

console.log(procesadoresFallos);

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


var usuarios = [{
        "nombre": "Gustav Fransua",
        "email": "gustav@gmail.com"
    },
    {
        "nombre": "Francisco Paco",
        "email": "fran@gmail.com"
    },
    {
        "nombre": "Manolín Vega",
        "email": "vega.manolin@gmail.com"
    },
    {
        "nombre": "Orlando Florencio",
        "email": "orlan@gmail.com"
    },
    {
        "nombre": "Andrea Pérez",
        "email": "andre.perez@gmail.com"
    },
    {
        "nombre": "Floren Hi",
        "email": "crypto@gmail.com"
    },
    {
        "nombre": "Pedro García",
        "email": "pedrogar@gmail.com"
    },
    {
        "nombre": "Elena Ramírez",
        "email": "elenra@gmail.com"
    }
]

var alojamientos = [{
        "nombre": "RIU",
        "comentarios": [{
            "usuario": "Manolín Vega",
            "comentario": "Estancia agradable",
            "valoracion": 8.5
        }, {
            "usuario": "Orlando Florencio",
            "comentario": "Bonito el sitio",
            "valoracion": 7
        }, {
            "usuario": "Andrea Pérez",
            "comentario": "Estancia inolvidable",
            "valoracion": 10
        }]
    },
    {
        "nombre": "Nacho Sol",
        "comentarios": [{
            "usuario": "Floren Hi",
            "comentario": "Un lugar para pensar en cryptos y mucho sol",
            "valoracion": 10
        }, {
            "usuario": "Pedro García",
            "comentario": "Decente tirando a bajo",
            "valoracion": 4
        }]
    },
    {
        "nombre": "Hilton",
        "comentarios": [{
            "usuario": "Elena Ramírez",
            "comentario": "Todo fantástico, acorde con el precio",
            "valoracion": 10
        }, {
            "usuario": "Gustav Fransua",
            "comentario": "Best sitio in the world",
            "valoracion": 10
        }, {
            "usuario": "Francisco Paco",
            "comentario": "Lo mejor la comida",
            "valoracion": 9.5
        }]
    },
    {
        "nombre": "El desastrillo",
        "comentarios": [{
            "usuario": "Manolín Vega",
            "comentario": "Chiquita porquería",
            "valoracion": 3
        }]
    }
]


alojamientos.forEach(alojamiento => {
    alojamiento.comentarios.forEach(comentario => {
        var nombreDelHotel = alojamiento.nombre;
        var puntuacion = comentario.valoracion;

        var nombreDelUsuario = comentario.usuario;

        var usuario = usuarios.find(user => user.nombre === nombreDelUsuario);

        if (!usuario.valoraciones) {
            usuario.valoraciones = [];
        }
        usuario.valoraciones.push({
            hotel: nombreDelHotel,
            nota: puntuacion
        });

    })
})

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


let servidores = [{
    almacenan: '.mp4',
    nodos: ['ordenador1', 'ordenador2', 'ordenador3']
}, {
    almacenan: '.mp3',
    nodos: ['ordenador2', 'ordenador5']
}, {
    almacenan: '.json',
    nodos: ['ordenador1', 'ordenador4', 'ordenador6']
}, {
    almacenan: '.png',
    nodos: ['ordenador1', 'ordenador4']
}, {
    almacenan: '.avi',
    nodos: ['ordenador1', 'ordenador7']
}, ];

var almacenUtil = servidores.forEach(servidor => {
    var alman = servidor.almacenan;
    var nodo = servidor.nodos;
    var nodosUtiles = ['.mp4', '.png']

    console.log(nodo);
    console.log(alman);
});
