---
sidebar_label: 'Introducción a la Ciberseguridad'
tags: [nivel 100, ciberseguridad]
---

# 🔒 Introducción a la Ciberseguridad
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


# La importancia de la Tríada CIA

### Introducción 

En un mundo cada vez más interconectado, la seguridad de la información ha pasado de ser un lujo a una necesidad imperante. La globalización digital nos ofrece infinitas posibilidades, pero también nos expone a riesgos y amenazas que evolucionan constantemente. Imaginemos un incidente en el que un importante actor del sector financiero sufre una violación de datos significativa, afectando a millones de usuarios. Este tipo de eventos subrayan la importancia de tomar medidas proactivas y preventivas en ciberseguridad. No podemos darnos el lujo de confiar únicamente en sistemas y protocolos estándar; es esencial una sólida comprensión y aplicación de principios de seguridad como la **Tríada CIA (Confidencialidad, Integridad, Disponibilidad)**, especialmente en entornos complejos como los proporcionados por servicios de nube. Situaciones como la que hemos planteado sirven como puntos de inflexión, enfatizando la necesidad de que todas las organizaciones integren la Tríada CIA como parte fundamental de su estrategia de seguridad.

### Fundamentos teóricos
La Tríada CIA se originó en los primeros años de la década de 1970 y ha sido la piedra angular de la seguridad de la información desde entonces. La ISO/IEC 27000 ofrece un conjunto de estándares internacionales que establecen las mejores prácticas para abordar la seguridad de la información, incluidas las recomendaciones basadas en la Tríada CIA.

#### Confidencialidad 
- La confidencialidad implica que solo las entidades autorizadas puedan acceder a los datos. 

#### Integridad
- Garantizar la integridad implica que los datos se mantienen seguros y sin alteraciones no autorizadas. 

#### Disponibilidad
- La disponibilidad asegura que los datos o sistemas estén accesibles cuando se necesiten. 

### Miremos un ejemplo aplicado a la configuración de un S3 en AWS

Política de IAM para la confidencialidad en S3

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::mi-bucket/*"
    }
  ]
}
```

Por el momento, no es necesario preocuparse por los detalles técnicos de los términos y elementos presentes. A lo largo del artículo, se abordarán estos aspectos de manera más exhaustiva. Basta con entender, en esta etapa inicial, que la política IAM formulada en JSON autoriza únicamente la descarga de objetos desde el bucket "mi-bucket" en Amazon S3, garantizando así la confidencialidad de los datos. Es relevante señalar que IAM *(Identity and Access Management)* es un servicio de AWS diseñado para permitir que los administradores gestionen los permisos de acceso a los recursos en una cuenta de AWS. En el escenario actual, la política IAM facilita un acceso específico al mencionado bucket en Amazon S3.

### Conclusión
La Tríada CIA no es solo un conjunto de prácticas recomendadas; es un llamado a la acción para todas las organizaciones que buscan prosperar en la era digital. La implementación efectiva de estos principios en AWS se traduce en una mayor resiliencia frente a las amenazas cibernéticas. AWS ofrece una variedad de herramientas y servicios que se alinean con los principios de la Tríada, desde la administración de identidades hasta opciones robustas de almacenamiento y recuperación de datos.
El viaje hacia una seguridad robusta en la nube es un proceso continuo y en evolución. A continuación, se examinarán los conceptos de políticas de seguridad y controles que pueden reforzar aún más la postura de seguridad.

### Referencias
[ISO/IEC 27000](https://www.iso.org/standard/73906.html "ISO/IEC 27000")  
[AWS IAM Documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html "AWS IAM Documentation")  
[AWS S3 Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html "AWS S3 Documentation")  

# Controles y Políticas de Seguridad: Elementos Claves en Ciberseguridad

### Introducción
Tras abordar en un artículo previo la importancia de la Tríada CIA (Confidencialidad, Integridad, Disponibilidad) como base de la ciberseguridad, es crucial entender cómo estos principios se aplican de manera práctica. Este ámbito corresponde a los controles y políticas de seguridad, que constituyen los mecanismos por los cuales las organizaciones materializan los fundamentos de la Tríada CIA. 

### Controles de Seguridad: Concepto y tipos
Los controles de seguridad son medidas específicas implementadas para proteger la confidencialidad, integridad y disponibilidad de la información. Estos se categorizan en controles físicos, técnicos y administrativos.

### Controles Físicos
- Estas son las medidas palpables que se emplean para proteger activos físicos, como las cámaras de seguridad que monitorean un centro de datos.

### Controles Técnicos
- Se trata de los mecanismos implementados mediante software o hardware para proteger la información, como el uso de un antivirus.

### Controles Administrativos 
- Son las políticas y procedimientos que guían cómo se implementan los controles de seguridad, como una política que exige revisar los registros de seguridad semanalmente.

### Política de Seguridad: Una hoja de ruta
- La política de seguridad es un conjunto de directrices y reglas que establecen cómo se gestionará la seguridad en la organización. Es el marco que asegura que los controles se aplican de manera coherente y efectiva.

### Desglose de Controles y Políticas: Ejemplo de un Firewall
Para ilustrar la relación entre controles y políticas, consideremos el ejemplo de un firewall, un sistema que controla el tráfico de red entre diferentes redes o dispositivos. Este tema se abordará con mayor profundidad en futuros artículos.

 
   - **Técnicos**: Configuración del firewall para bloquear todo tráfico entrante desde direcciones IP desconocidas.  
   - **Política de Seguridad**: Política que establece que solo los administradores de sistemas autorizados pueden realizar cambios en la configuración del firewall.

Entre los servicios de AWS que materializan este ejemplo se encuentra el servicio AWS WAF, que permite aplicar una serie de reglas para filtrar, monitorizar y controlar el tráfico de datos.

### Referencias
[NIST - Controles de Seguridad](https://csrc.nist.gov/ "NIST - Controles de Seguridad")  
[ISACA - Políticas de Seguridad](https://www.isaca.org/ "ISACA - Políticas de Seguridad")  
[OWASP - Control de Seguridad](https://www.owasp.org/ "OWASP - Control de Seguridad")

