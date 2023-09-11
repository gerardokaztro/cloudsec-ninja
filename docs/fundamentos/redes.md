---
sidebar_label: 'Redes'
tags: [nivel 100, redes]
---
import ReactPlayer from 'react-player'

# 🕸️ Introducción a las redes
En términos simples, las redes permiten que todos los dispositivos puedan conectarse entre sí y comunicarse a través del envío y recepción de datos.
No necesariamente deben estar conectadas a internet para que puedan comunicarse, internet es un ejemplo de red, la mas grande.

Otro ejemplo de red, pequeña, es cuando conectas dos equipos celulares para transmitir datos por medio de NFC, Bluetooh, Airdrop, o alguna característica similar, eso es una Red de Area Personal tambien conocida como PAN (Personal Area Network).

Un ejemplo de red de área local o Local Area Network (LAN) son computadoras conectadas a una impresora sea por cable o de manera inalámbrica.

Ahora, para que los dispositivos conectados en una red puedan comunicarse y entenderse entre sí, hacen uso de direcciones IP, puertos, servicios y protocolos los cuáles son términos que vamos a aprender.

## Direcciones IPv4 y subredes
Este video hecho por **Gabriel Marcano** explica muy bien sobre el direccionamiento IPv4 y las subredes, de paso, apoye su contenido suscríbiendose a su canal.
<ReactPlayer controls url='https://www.youtube.com/watch?v=SHbBso63X38' width="auto" /> <br/>

👉 Del vídeo podemos concluir lo siguiente:
- Las direcciones IPv4 se expresan en connotación decimal y binaria.
- Estan compuestas de 32 bits y se separan en 4 octetos, cada uno de 8 bits.
- Existen direcciones IPv4 públicas y privadas
  - Rangos de direcciones públicas
   - Clase A: su primer octeto su rango va de 0 a 127
   - Clase B: su primer octeto su rango va de 128 a 191
   - Clase C: su primer octeto su rango va de 192 a 223
  - Rangos de direcciones privadas
    - Clase A: 10.0.0.0 a 10.255.255.255 que usa máscara de 8 bits
      - Ejemplo: 10.x.x.x/8
    - Clase B: 172.16.0.0 a 172.31.255.255 que usa máscara de 16 bits.
      - Ejemplo: 172.x.x.x/16
    - Clase C: 192.168.0.0 a 192.168.255.255 que usa máscara de 24 bits.
      - Ejemplo: 192.x.x.x/24

## Modelo OSI y TCP/IP
El modelo OSI es un modelo conceptual que define un estandar en la forma de como se comunican los dispositivos en la red.

En términos simples, es como un lenguaje universal para que los dispositivos en la red puedan comunicarse en un mismo idioma. Este modelo cenceptual se divide en 7 capas y cada una de ellas cumple con funciones estrictas y necesarias.

Revise este vídeo donde se explica que son los modelos conceptuales, que es el modelo OSI frente al modelo TCP/IP.
<ReactPlayer controls url='https://www.youtube.com/watch?v=jdKRx2BxSMs' width="auto" /> <br/>

👉 Del vídeo podemos concluir lo siguiente:
- El modelo conceptual permite que las diferentes tecnologías se comuniquen entre sí mediante un unico lenguaje o estándar
- El modelo OSI consta de 7 capas y es el modelo de referencia por todas las tecnologías:
  - Aplicación
  - Presentación
  - Sesion
  - Transporte
  - Red
  - Enlace de datos
  - Fisica
- El modelo TCP/IP consta de 4 capas y es el modelo usado para comunicaciones en redes:
  - Aplicación
  - Transporte
  - Internet
  - Acceso a la red
- Los datos pasan por una transformación al pasar por las capas del modelo OSI o TCP/IP 
  - Datos
  - Segementos
  - Paquetes
  - Tramas
  - Bits
- A los términos mencionados arriba se les conoce como PDU (Unidad de Datos de Protocolo)
- El Modelo TCP/IP consta de 4 capas pero agrupa las 7 capas del Modelo OSI
- Cada una de las capas de ambos modelos utilizan un grupo de protocolos

## Protocolos Web
Los protocolos de internet, definen un conjunto de reglas de como dos o mas dispositivos deben comunucarse entre sí, y en cada una de las capas del Modelo OSI o TCP/IP existen una serie o suite de protocolos que pueden usarse.

![imagen](https://upload.wikimedia.org/wikipedia/commons/7/73/Suite_de_Protocolos_TCPIP.png)

Revisa este [blog](https://openwebinars.net/blog/protocolo-de-red-que-es-tipos-y-caracteristicas/) escrito por **Elena Limones** que explica cuáles son los protocolos mas usados y conocidos en cada una de las capas del modelo OSI
