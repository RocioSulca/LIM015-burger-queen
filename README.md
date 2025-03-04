# Burger Queen
## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Historias de Usuarios del MVP
](#2-historias-de-usuarios-del-mvp)
* [3. Prototipo de Baja fidelidad](#3-prototipo-de-baja-fidelidad)

***

![img](src/img/inicioBurger.png)

## 1. Resumen del proyecto
Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
  _backend_ del que nos darán detalles más adelante)

## 2. Historias de Usuarios del MVP

### Login de Usuarios

| Usuario | Email   |      Password      |
|----------|:-------------:|------:|
| Admin |admin@burgerqueen.com |  admin12345 |
| Mesero | mesero01@burgerqueen.com |mesero0112345|
| Cocinero |cocina01@burgerqueen.com | cocina0112345 |

![img](src/img/bq-pag1.PNG)

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Anotar nombre de cliente.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

![img](src/img/bq-pag2.PNG)

***

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.


![img](src/img/bq-pag3.PNG)

***
#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.


![img](src/img/bq-pag3.PNG)

***
## 3. Prototipo de Baja fidelidad
![img](src/img/prototipo-pedido.png)
![img](src/img/prototipo-3.PNG)



