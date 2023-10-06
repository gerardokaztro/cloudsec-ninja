---
sidebar_label: 'Modelo de responsabilidad compartida'
tags: [nivel 100, aws, seguridad]
---
import ReactPlayer from 'react-player'

# Introducción al modelo de responsabilidad compartida de AWS

## ¿Qué es el modelo de responsabilidad compartida?

El modelo de responsabilidad compartida de AWS es un framework fundamental para comprender cómo se distribuyen las responsabilidades de seguridad entre AWS (Amazon Web Services) y sus clientes. Este modelo se utiliza en la nube de AWS para determinar sobre quién recae la responsabilidad de los diversos aspectos de seguridad en la nube. 

![responsabilidad-compartida-aws](https://d1.awsstatic.com/security-center/Shared_Responsibility_Model_V2.59d1eccec334b366627e9295b304202faf7b899b.jpg)
Fuente: Modelo de responsabilidad Compartida de AWS

En ocasiones, podríamos llegar a pensar que al migrar nuestros recursos a una nube pública, el proveedor de dicha nube será el responsable de todos los aspectos de seguridad de estos recursos, sin embargo, esto no es del todo cierto.

Este modelo, indica que nosotros, los clientes, seremos responsables de la seguridad “EN” la nube, es decir, según el modelo de servicio que estemos utilizando, deberemos asegurar aspectos de administración y configuración de seguridad de las aplicaciones, parchado de servidores o base de datos, gestión de accesos, cifrado de datos almacenados y en tránsito, entre otros y AWS será responsable de la seguridad "DE" la nube, es decir, de proteger la infraestructura como el hardware, software e instalaciones en donde se ejecutan los servicios provistos.

Los siguientes son responsabilidades de seguridad específicas de los clientes:

1. Acceso y autenticación: los clientes deben administrar y proteger quién tiene acceso a sus recursos en la nube de AWS mediante la configuración de políticas de seguridad, autenticación multifactor (MFA) y administración adecuada de claves de acceso. 
2. Seguridad de los datos: los clientes son responsables de cifrar los datos confidenciales en reposo y en tránsito e implementar controles de acceso adecuados para proteger los datos. 
3. Seguridad de la red: los clientes deben configurar correctamente las reglas de firewall, los grupos de seguridad y el enrutamiento de la red para controlar el tráfico hacia y desde los recursos de la nube. 
4. Gestión de parches y actualizaciones: los clientes necesitan actualizar los sistemas operativos y las aplicaciones en sus instancias EC2 y otros recursos. 
5. Monitoreo y respuesta a incidentes: los clientes deben implementar soluciones de monitoreo y registro para detectar y responder de manera proactiva a los incidentes de seguridad.

El alcance de las responsabilidades varía según el tipo o modelo de servicio que estemos utilizando, por esto, es importante tener presente que nosotros como clientes, siempre tendremos un grado de responsabilidad en el aseguramiento de nuestros recursos.


Te invito a conocer más sobre los modelos de servicio en la nube desde el apartado de[computación en la ube](https://cloudsec-ninja-development.vercel.app/docs/fundamentos-de-nube/introduccion)

Exploremos un poco más este modelo de responsabilidad compartida con el siguiente video:

<ReactPlayer controls url='https://www.youtube.com/' width="auto" /> <br/>

Del video podemos rescatar los siguientes ejemplos de cómo pueden variar nuestras responsabilidades de seguridad según el tipo de servicio:
1. Servicios de infraestructura: Ejemplo: uso de Amazon EC2 (Elastic Compute Cloud) para alojar una aplicación web

- AWS es responsable de proteger la infraestructura física de los centros de datos, como el control de acceso y la seguridad física de los servidores, además de garantizar la disponibilidad y la redundancia de la infraestructura.
- El cliente es responsable de configurar adecuadamente las instancias EC2, aplicar actualizaciones de seguridad al sistema operativo y las aplicaciones que utiliza, gestionar las credenciales de acceso a las instancias, proteger los datos de las instancias e implementar reglas de firewall (a través de grupos de seguridad) y configurar adecuadamente la red y las rutas de tráfico.
2. Servicios encapsulados o gestionados: Ejemplo:  Uso de Amazon RDS (Relational Database Service) para una base de datos.
- AWS se encarga de administrar la infraestructura subyacente de la base de datos, incluyendo copias de seguridad y actualizaciones de seguridad del motor de base de datos, así como garantizar la disponibilidad de la base de datos.
- El cliente es responsable de definir la estructura de la base de datos, gestionar la configuración de seguridad de la base de datos, controlar el acceso a los datos y realizar copias de seguridad adicionales si es necesario.
Dentro de esta clasificación podemos encontrar otros servicios como Amazon Elastic Beanstalk.
3. Servicios abstractos o sin servidor: Ejemplo: Implementar una función en AWS Lambda.
- AWS proporciona la plataforma Lambda y se encarga de la gestión de recursos subyacentes, como la escalabilidad y la seguridad a nivel de función. Así como garantizar que las funciones se ejecuten de manera segura y aislada.
- El cliente es responsable de escribir y cargar el código de la función Lambda de manera segura y de configurar las políticas de permisos para determinar quién puede invocar la función y acceder a recursos externos.
En esta clasificación también podemos mencionar el servicio Amazon API Gateway.


Referencias: 

[Modelo de responsabilidad compartida de AWS](https://aws.amazon.com/es/compliance/shared-responsibility-model/)

[Modelos de servicios en la nube](https://aws.amazon.com/es/types-of-cloud-computing/) 

 
