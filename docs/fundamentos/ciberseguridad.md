---
sidebar_label: 'Ciberseguridad'
tags: [nivel 100, ciberseguridad]
---

# 🔐 Introducción a la Ciberseguridad
Hoy en día uno de los activos más importantes que tienen las organizaciones son sus datos; estos son clave para el crecimiento de los negocios, adquirirlos y mantenerlos implica gran inversión de dinero y tiempo por lo que la ciberseguridad y la protección de dichos datos e infraestructura empresarial es un factor clave. 

Definimos ciberseguridad como “Un conjunto de medidas de protección de la información, a través del tratamiento de las amenazas que ponen en riesgo la información que es tratada por los sistemas de información que se encuentran interconectados”, según ISACA (Information Systems Audit and Control Association – Asociación de Auditoría y Control sobre los Sistemas de Información).

# Pilares de la seguridad 

Conocido como el triángulo CIA por sus siglas en inglés, son la Confidencialidad, Integridad, y Disponibilidad. 

- Confidencialidad: Por confidencialidad entendemos a la cualidad de la información para no ser divulgada a personas o sistemas no autorizados.  Se trata básicamente de la propiedad por la que esa información sólo resultará accesible con la debida y comprobada autorización de los dueños de esa información.
¿Cómo se pierde la confidencialidad? Generalmente, haciendo caso omiso a las recomendaciones de seguridad o no implantando un sistema adecuado; como por ejemplo cuando se comparten contraseñas entre usuarios, se decomisionan equipos sin eliminar los datos, se dejan sesiones abiertas, se transmite información mediante protocolos inseguros,  no ciframos los datos de manera adecuada, la información deja de ser confidencial (o está en alto riesgo).
- Integridad: El diccionario define el término como “estado de lo que está completo o tiene todas sus partes”. La integridad hace referencia a la cualidad de la información para ser correcta y no haber sido modificada, manteniendo sus datos exactamente tal cual fueron generados, sin manipulaciones ni alteraciones por parte de terceros. Esta integridad se pierde cuando la información se modifica,  cuando parte de ella se elimina, o se crean datos espurios.
- Disponibilidad: Por disponible entendemos aquella información a la que puedan acceder las personas autorizadas, cuando la requieran, a través de los canales adecuados y siguiendo los procesos correctos.
A esta tríada se agregan dos pilares adicionales que son Autenticidad y No repudio.
- Autenticidad: Establece la validez de una transmisión, mensaje u originador, o un medio para verificar la autorización de un individuo para recibir información específica. La autenticación evita la suplantación de identidad y requiere que los usuarios confirmen sus identidades antes de que se les permita el acceso a los sistemas y recursos. Esto incluye nombres de usuario, contraseñas, correos electrónicos, datos biométricos y otros.
- No repudio: Este atributo garantiza que el remitente de los datos reciba una prueba de entrega y que el destinatario reciba una prueba de la identidad del remitente, por lo que ninguna de las partes puede negar el envío, la recepción o el acceso a los datos. Deben utilizarse principios de seguridad para probar identidades y validar el proceso de comunicación.

## Vulnerabilidades y Amenazas
Por lo mencionado, es fundamental adentrarse en la comprensión de dos conceptos fundamentales: vulnerabilidad y amenaza.

### Vulnerabilidad
Una vulnerabilidad puede considerarse como el eslabón más débil de un sistema, una debilidad o un fallo que expone al sistema a riesgos potenciales. Estas debilidades pueden surgir por diversas razones, ya sea debido a librerías de terceros utilizadas en el código, deficiencias en la lógica interna del sistema, fallos en el diseño de la arquitectura e incluso problemas en el hardware subyacente del sistema.

En 1999, se introdujo una base de datos de vulnerabilidades comunes conocida como CVE (Common Vulnerabilities Enumeration). Esta base de datos recopila una lista de vulnerabilidades reportadas a nivel internacional. [De acuerdo al informe de CVE](https://www.cve.org/About/Metrics#PublishedCVERecords), en los últimos siete años, la cantidad de vulnerabilidades reportadas ha aumentado casi cuatro veces, pasando de 6.949 en 2015 a 25.059 en 2022. Sin embargo, es importante destacar que, en ocasiones, las vulnerabilidades son descubiertas primero por actores maliciosos y luego se incluyen en estas bases de datos después de un incidente. 

### Amenaza
Por otro lado, una amenaza se refiere a un factor externo al sistema que puede afectar su funcionamiento adecuado o acceder a información confidencial, entre otros riesgos. Las amenazas pueden surgir de diversas fuentes, ya sean intencionadas o no. Por ejemplo, un hacker que aprovecha una vulnerabilidad en la configuración del sistema de autenticación representa una amenaza intencionada, mientras que un empleado que olvida cerrar su sesión en un dispositivo compartido, el cual luego es aprovechado por un hacker, constituye una amenaza no intencionada. Además, las amenazas pueden ser de origen natural, como inundaciones u otros eventos similares.

Entre las amenazas más comunes se incluyen:

- Malware: Estos programas maliciosos están diseñados con el propósito de dañar sistemas o comprometer datos. Los tipos de malware incluyen virus, troyanos y ransomware, cada uno con sus propios métodos de operación. Los ataques de malware pueden ocurrir mediante la descarga de archivos contaminados, la conexión de dispositivos externos o incluso la intervención directa del atacante una vez que ha obtenido acceso al servidor.

- Phishing: El phishing es una técnica en la que los atacantes se hacen pasar por entidades legítimas para obtener información sensible de las víctimas. Este tipo de ataques generalmente se lleva a cabo a través de correos electrónicos u otros medios digitales, aprovechando la ingeniería social para engañar a las personas. Los correos de phishing suelen ser difíciles de detectar, transmiten una sensación de urgencia, incluyen adjuntos o enlaces sospechosos y a menudo provienen de remitentes desconocidos.

- Inyección de Código: La inyección de código implica la ejecución de código dentro de una aplicación. Es importante distinguirla de la inyección de comandos, donde el atacante ejecuta comandos directamente en el servidor. Ambas técnicas explotan vulnerabilidades a nivel de código, como la falta de validación de parámetros de entrada.

Aunque algunos no consideran la ingeniería social como una amenaza en sí misma, es relevante mencionarla en esta sección. La ingeniería social se refiere a "_todas aquellas técnicas utilizadas para convencer a la víctima de que revele cierta información o realice una acción por razones ilegítimas_", [según la Agencia de la Unión Europea para la Ciberseguridad](https://www.enisa.europa.eu/topics/incident-response/glossary/what-is-social-engineering). En este contexto, la ingeniería social explora y se aprovecha de las formas de pensar, la cultura y los mecanismos psicológicos para obtener lo que se busca. Para abordar esta amenaza, las estrategias de mitigación deben centrarse en la educación y en la creación de una cultura de ciberseguridad dentro de la organización.

### Evaluación de Riesgos: La Combinación de Vulnerabilidades y Amenazas
Un concepto que engloba estos elementos es el riesgo en ciberseguridad. El riesgo se define como la probabilidad de que una amenaza aproveche con éxito una vulnerabilidad y el impacto resultante en el sistema. Para evaluar el riesgo, se categorizan las amenazas en función de su probabilidad de ocurrencia y del impacto que tendrían en una matriz de riesgo.

Cada aplicación o sistema requiere su propio análisis de riesgo, que depende de la interacción entre sus componentes y de la función que desempeñan en el sistema en general. Por ejemplo, el impacto de un ataque a una base de datos que contiene información personal identificable (PII) se considera alto, ya que podría dañar la reputación de la organización y dar lugar a problemas legales, incluso si no afecta la disponibilidad del servicio. En contraste, la infección de un servidor central se considera crítica, ya que podría causar una interrupción total o parcial del sistema, afectando la experiencia del usuario y, potencialmente, los ingresos.

La probabilidad en ciberseguridad se basa en factores como la naturaleza de la vulnerabilidad, la existencia de controles de seguridad y, fundamentalmente, la motivación del atacante. Es decir, ¿por qué alguien podría querer atacar esta aplicación en particular?

En resumen, comprender las vulnerabilidades, amenazas y cómo evaluar el riesgo en ciberseguridad es esencial para garantizar la seguridad de los sistemas y datos en un entorno digital cada vez más complejo y peligroso. La identificación y mitigación de vulnerabilidades, junto con la evaluación de amenazas y riesgos, son pasos críticos para proteger la infraestructura y la información en línea.

### Referencias y links de interés:

- Agencia de Ciberseguridad e infraestuctura de USA: https://www.cisa.gov
- CVE: https://www.cve.org
- CVE details: https://www.cvedetails.com
- Agencia de Ciberseguridad de la Unión Europea: https://www.enisa.europa.eu
- OWASP: https://owasp.org

## La triple A: Autenticación, Autorización y Auditoría

La autenticación, autorización y auditoría (_authentication, authorization and accounting_ en inglés) es un marco en ciberseguridad que contempla los procesos de validación de identidad del usuario, controlar los accesos del mismo, y el registro de las acciones llevadas a cabo con la sesión del usuario en particular. 

### Autenticación
Según las definiciones presentadas en [el glosario del Computer Security Center](https://csrc.nist.gov/glossary/term/authentication), la autenticación se encuentra estrechamente ligada al concepto de verificación. De este modo, la definen como "_el proceso de verificar la identidad de un usuario, proceso o dispositivo, en general como prerequisito para permitir el acceso a recursos dentro del sistema de información_". Es el primer componente de la Triple A y es el primer obstáculo que debe superarse antes de que cualquier usuario pueda interactuar con un sistema o aplicación

Al momento de autenticarse el usuario debe presentar sus credenciales, las cuales pueden categorizarse en tres tipos: lo que el usuario sabe, lo que tiene, y lo que es. 
- Lo que el usuario sabe: Este tipo de credencial se refiere a la información que el usuario conoce, como contraseñas o pines. Es el método de autenticación más común y ampliamente utilizado en sistemas en línea. El usuario debe proporcionar esta información al sistema para demostrar su identidad.

- Lo que el usuario tiene: Estas credenciales se basan en la posesión de un objeto físico o digital. Ejemplos incluyen códigos de autenticación generados por aplicaciones móviles o tokens físicos. La idea es que solo el usuario legítimo tenga acceso a estos objetos.

- Lo que el usuario es: Este tipo de autenticación se basa en características biológicas o comportamientos únicos del usuario. Un ejemplo destacado es el escaneo de huellas dactilares, donde la identidad se verifica mediante la comparación de la huella digital del usuario con registros previos.

La combinación de estos distintos modos de autenticación es denominada MFA: multi-factor authentication, por sus siglas en inglés. 

La ventaja de implementar MFA al momento de autenticación es que en caso de comprometerse uno de los factores de autenticación, al carecer del segundo factor el atacante no podrá ingresar al sistema. Asimismo, es útil para prevenir ataques realizados mediante scripts que prueban de diferentes combinaciones de usuarios/contraseñas. Si bien hay quienes afirman que activar MFA puede prevenir hasta un 99.9% ([ver el siguiente link](https://www.microsoft.com/en-us/security/blog/2019/08/20/one-simple-action-you-can-take-to-prevent-99-9-percent-of-account-attacks/)), es conveniente destacar que no es invulnerable y que existen ataques orientados a romper esta barrera como lo son la interceptación de códigos MFA o los ataques de fatiga de MFA.

Las credenciales proporcionadas por el usuario se verifican a través de un Gestor de Identidad (IAM, _Identity Access Manager_), que es una parte esencial de cualquier sistema de autenticación. El IAM valida las credenciales ingresadas por el usuario y, si son legítimas, otorga acceso al sistema. Sin embargo, es crucial comprender que la autenticación es solo el primer paso en el proceso de seguridad. Las acciones que un usuario puede realizar dentro del sistema dependen en gran medida del proceso de autorización.

### Autorización
La autorización es el segundo componente de la Triple A. En el proceso de autorización se definen las acciones que podrá realizar el usuario o la aplicación dentro de nuestro sistema. Este proceso es recomendable que esté separado del proceso de autorización para prevenir que un atacante pueda modificar los permisos mediante el robo de credenciales de un usuario en cuestión. Los principales modelos para estructurar permisos son el control de acceso en base a roles (RBAC, _Role Based Access Control_) y el control de acceso en base a atributos (ABAC, _Attribute Based Access Control_). 

- Control de Acceso Basado en Roles (RBAC): Como su nombre sugiere, RBAC se centra en la gestión de permisos a través de roles. En este modelo, cada usuario se asigna a un rol que tiene asignados ciertos permisos. Por ejemplo, podría haber roles de "administrador" y "lector". Si dos usuarios son administradores, ambos tendrán los mismos permisos. Este enfoque es eficiente en situaciones donde múltiples usuarios tienen roles similares.

- Control de Acceso Basado en Atributos (ABAC): ABAC se basa en los atributos de los usuarios para definir sus permisos. Por ejemplo, podrían haber dos usuarios considerados como administradores pero cuya locación difiriera; por lo que podrían acceder solamente a la su locación. Este enfoque es más flexible y granular que RBAC, ya que permite una asignación más precisa de permisos aunque es relativamente más compleja de implementar.

La elección entre RBAC y ABAC debe basarse en la arquitectura de la aplicación y las políticas de seguridad de la organización.Se pueden ver otros ejemplos [aquí](https://www.okta.com/identity-101/role-based-access-control-vs-attribute-based-access-control/), dado que el detalle exhaustivo en este tema escapa el alcance de este artículo. Sin embargo, un principio fundamental en la autorización es el de "menor privilegio", que significa que un usuario solo debe tener permiso para realizar las acciones que son estrictamente necesarias para su trabajo o función. Esto minimiza los riesgos y reduce la superficie de ataque. 

### Auditoría
El tercer pilar de la Triple A es la auditoría, que se encarga de rastrear y registrar todas las actividades realizadas por un usuario dentro de un sistema. Esto incluye eventos como el inicio de sesión, el acceso a recursos, la modificación de datos y cualquier otra acción relevante. Los registros de auditoría, comúnmente conocidos como "logs," son esenciales para prevenir incidentes de seguridad y también para realizar un análisis forense en caso de que ocurra un incidente.

Los registros de auditoría son útiles en varias situaciones:

- Prevención de incidentes: Los registros pueden utilizarse para detectar comportamientos anómalos o inusuales. Por ejemplo, si un usuario inicia sesión desde una ubicación inesperada o intenta acceder repetidamente a recursos para los que no tiene permiso, se pueden generar alertas para investigar estas actividades sospechosas.

- Respuesta a incidentes: En caso de que se produzca un incidente de seguridad, los registros de auditoría proporcionan una fuente invaluable de información. Permiten rastrear cómo ocurrió el incidente, qué acciones se realizaron y cuándo sucedieron. Esto es esencial para la investigación y la mitigación de amenazas.

- Cumplimiento normativo: Muchas regulaciones y estándares de seguridad requieren que las organizaciones mantengan registros de auditoría. Estos registros son evidencia de que se están tomando medidas para proteger la información y pueden ser necesarios para demostrar el cumplimiento de las regulaciones.

Es importante señalar que la auditoría no se trata solo de recopilar datos; también implica el análisis y la generación de informes a partir de estos registros. Los sistemas de seguridad a menudo utilizan herramientas de administración de registros (SIEM, _Security Information and Event Management_) para automatizar la recopilación y el análisis de registros, lo que facilita la detección de patrones y anomalías.

### Referencias

- Computer Security Resource Center: https://csrc.nist.gov/glossary
- Microsoft Security Blog: https://www.microsoft.com/en-us/security/blog/ 
