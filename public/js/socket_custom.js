var socket = io();
socket.on('connect', function() {
        console.log('conectado al servidor')
    })
    // on sirven escuchar sucesos
socket.on('disconnect', function() {
        console.log('perdimos la conexion con el servidor')

    })
    //los emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'ing Martinez',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuetsa server:', resp)
});
// escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje)
})