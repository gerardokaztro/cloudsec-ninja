---
sidebar_label: 'Pilar de seguridad del Well Architected Framework'
tags: [nivel 100, aws, seguridad]
---


# Pilar de seguridad del Well Architected Framework



El Well-Architected Framework consiste en una recopilación de las mejores prácticas que AWS ha acumulado a lo largo de los años, enfocándose en seis pilares clave para garantizar la eficiencia, fiabilidad y seguridad de las aplicaciones en la nube:
1. Excelencia operativa
2. Seguridad
3. Fiabilidad
4. Eficiencia del rendimiento
5. Optimización de costes
6. Sostenibilidad


En este apartado nos enfocaremos en explorar detalladamente el pilar de seguridad del Well-Architected Framework, pero si quieres profundizar un poco más sobre los otros pilares, puedes consultar el apartado de [Well Architected Framework](https://cloudsec-ninja-development.vercel.app/docs/fundamentos-de-nube/aws#aws-well-architecture-framework)


##  Principios de diseño

Dentro del pilar de seguridad del AWS Well-Architected Framework, se aplican una serie de principios de diseño específicos para garantizar que las cargas de trabajo en AWS sean seguras y protegidas contra amenazas y riesgos. 
Estos principios son:

1. Implemente una base de identidad sólida: La idea central aquí es que los usuarios, aplicaciones y servicios deben tener el nivel mínimo de permisos necesarios para realizar sus funciones. Esto se logra mediante la gestión precisa de identidades, la segregación de funciones y la centralización de la gestión de accesos como por ejemplo, con AWS IAM.
2. Mantenga la trazabilidad: Se refiere a la capacidad de rastrear y auditar actividades y cambios en el entorno de la nube. Esto incluye el uso de servicios como AWS CloudTrail para registrar eventos y actividades, lo que facilita la detección y respuesta a incidentes.
3. Implemente la seguridad en todos los niveles: Este principio enfatiza la importancia de incorporar seguridad en todas las capas de la arquitectura, desde la infraestructura hasta las aplicaciones. Esto significa que la seguridad no es un complemento, sino un aspecto integral de la arquitectura, por ejemplo, asegurar las redes, sistemas operativos, aplicaciones y código.
4. Automatice las prácticas recomendadas de seguridad: La automatización de tareas de seguridad es fundamental para garantizar la consistencia y la eficiencia en la aplicación de controles de seguridad. Se pueden utilizar servicios y herramientas de AWS, como AWS Config y AWS Lambda, para automatizar la evaluación y remediación de configuraciones no conformes.
5. Cifre datos en tránsito y en reposo: Este principio se centra en la importancia de cifrar los datos tanto en reposo (almacenados) como en tránsito (transmitidos).
6. Mantenga a las personas alejadas de los datos: Este principio se centra en minimizar el acceso humano a los datos sensibles y reducir la exposición de los datos a usuarios no autorizados. 
7. Prepárese para eventos de seguridad: Planificación y preparación para eventos de seguridad, como ataques cibernéticos o incidentes de seguridad. Esto incluye la creación de planes de respuesta a incidentes y la realización de ejercicios de simulacro.

## Prácticas recomendadas

Consisten en una serie de prácticas esenciales para la construcción de arquitecturas de seguridad sólidas y resistentes en la nube. 
A continuación, te cuento un poco en qué consisten:

1. Aspecto básicos de seguridad: Adoptar prácticas de seguridad globales, establecer políticas y estándares de seguridad claros. Considerar automatizar la aplicación de estas políticas.
2. Gestión de identidades y accesos: Gestionar de manera centralizada las identidades y permisos de los usuarios o servicios en AWS. Crear políticas de acceso basados en roles. Asignar permisos de manera precisa y otorgar acceso solo a lo que es necesario. 
3. Detección de amenazas: Monitorear constantemente las actividades en busca de amenazas y patrones de comportamiento sospechoso.Configurar alertas para notificar sobre actividades inusuales y establecer respuestas automáticas para ciertos eventos.
4. Protección de la infraestructura: Implementar medidas de seguridad en la infraestructura para protegerla contra amenazas externas.Utilizar grupos de seguridad y listas de control para limitar el acceso a los recursos.
5. Protección de los datos: Utilizar cifrado y técnicas de protección para garantizar la confidencialidad e integridad de los datos. Implementar políticas de clasificación, retención y eliminación de datos para cumplir con regulaciones de privacidad.
6. Respuesta a incidentes: Prepararse para manejar eventos de seguridad y tener un plan de respuesta a incidentes para mitigar y recuperarse de estos eventos. Realizar ejercicios regulares de simulacro de incidentes y configurar alertas para detectar incidentes.
7. Seguridad de las aplicaciones: Garantizar que las aplicaciones sean seguras mediante pruebas de seguridad, gestión segura de credenciales, revisión manual de código y buenas prácticas de desarrollo. Automatizar las pruebas de seguridad y realizar evaluaciones continuas.


Referencias:
 
[AWS Well-Architected Framework](https://docs.aws.amazon.com/es_es/wellarchitected/latest/framework/welcome.html)

[Pilar de seguridad](https://docs.aws.amazon.com/es_es/wellarchitected/latest/security-pillar/welcome.html)

[Prácticas recomendadas de seguridad](https://docs.aws.amazon.com/es_es/wellarchitected/latest/framework/a-security.html)


