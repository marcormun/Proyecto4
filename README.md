# Reservas Hoteles

App para visualizar datos de reservas hecha con node, express y sequelize, desplegada en heroku

-----------------------------

- [Como usar](#como-usar)
- [Endpoints](#endpoints)


-----------------------------

# Como usar

Los datos de las reservas se pueden visualizar desde postman a través de la URL https://proyecto4geekshubs.herokuapp.com/ o haciendo peticiones desde Postman

-----------------------------

# Endpoints

/reservas - Mostrar todas las reservas.

/reservas/:id - Mostrar una reserva por identificador.

/reservas/dniCliente/:dni - Mostrar las reservas hechas por x cliente a través de su DNI.

/reservas/hotel/:hotelId - Mostrar las reservas de un hotel en concreto.

/reservas/entrada/:fechaEntrada - Mostrar las reservas a través de la fecha de entrada  

/reservas/entrada/:fechaSalida - Mostrar las reservas a través de la fecha de salida

