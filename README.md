[![Build Status](https://travis-ci.org/Arquisoft/viade_es1a.svg?branch=master)](https://travis-ci.org/Arquisoft/viade_es1a)
[![codecov](https://codecov.io/gh/Arquisoft/viade_es1a/branch/master/graph/badge.svg)](https://codecov.io/gh/Arquisoft/viade_es1a)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4c05b5e81a8a47ce803fb1b553bf986d)](https://www.codacy.com/gh/Arquisoft/viade_es1a?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Arquisoft/viade_es1a&amp;utm_campaign=Badge_Grade)
# VIADE ES1A

## Autores

### Alvaro Baños Gomez
### Samuel Moreno Vincent
### Adrián Fernández Alonso
### Kevin Barbón Manzano

## Especificación

Este proyecto es un trabajo de la asignatura [Arquitectura del Software](https://arquisoft.github.io/) de la [Universidad de Oviedo](http://www.uniovi.es/) siguiendo [estos requisitos](https://labra.solid.community/public/SoftwareArchitecture/EnunciadoPractica/).

La aplicación esta desplegada en [https://arquisoft.github.io/viade_es1a/](https://arquisoft.github.io/viade_es1a/).

La documentación puede verse en la siguiente [pagina de documentación](https://arquisoft.github.io/viade_es1a/docs).

<!-- More information about how this project has been setup is available [in the wiki](https://github.com/Arquisoft/viade_es1a/wiki). -->

## Para instalación del sistema

Este proyecto requiere [Node](https://nodejs.org/)

Una vez instalado Node, descargar el proyecto con el siguiente comando:

` git clone https://github.com/Arquisoft/viade_es1a.git `

Para moverse a la carpeta del proyecto usar:

` cd viade_es1a` 

Instalar las dependencias:

` npm install ` 

Ejecutar la aplicación:

` npm start ` 

Ejecutar los test de unitarios:

` npm run test ` 

Ejecutar los test funcionales:

` npm run test:e2e ` 
## Despliegue de docker
Para desplegar la apliación mediante docker,debemos tener instalado Docker Desktop

Abrimos una terminal y nos movemos hasta el directorio que contenga el proyecto

Descargamos la imagen oficial de Solid
` docker pull nodesolidserver/node-solid-server`

Iniciamos el contenedor de Solid

` docker run -p 8443:8443 --name solid nodesolidserver/node-solid-server`

Construimos el container de nuestra aplicación

` docker build -t node .`

Iniciamos el contenedor de la aplicación

`docker run -p 3000:3000 --name viade_es2a node`

Arrancamos los dos contenedores en Docker Desktop

Por último accedemos a la aplicación mediante http://localhost:300 o http://IP:3000 


