---
sidebar_label: 'Ciberseguridad'
tags: [nivel 100, ciberseguridad]
---

# 🔐 Introducción a la Ciberseguridad

## Vulnerabilidades y Amenazas
En el campo de la ciberseguridad, es de suma importancia adentrarse en la comprensión de dos conceptos fundamentales: vulnerabilidad y amenaza.

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