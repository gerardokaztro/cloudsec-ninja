---
sidebar_label: 'Introducción'
tags: [n100,aws-organizations,aws-control-tower]
authors:
  - name: Luis Lunar
    title: Co-autor
    url: https://www.linkedin.com/in/llunarg/
---

# Introducción a estructuras multi-cuentas en AWS

Hoy en día, los clientes de las industrias reguladas enfrentan el desafío de definir y hacer cumplir los controles necesarios para cumplir con los requisitos de cumplimiento y seguridad, en la mayoría de casos, es posible que las organizaciones también deban cumplir con marcos y estándares como ISO 27001 y NIST 800-53.

Mantener la seguridad y la gobernabilidad en un modelo de múltiples cuentas podría ser un desafío para algunas organizaciones. Sin controles preventivos estructurados aplicados a escala (guardrails) y la aplicación de configuraciones básicas (Baseline), la solución de problemas y la mitigación de riesgos puede requerir un esfuerzo mayor al esperado.

En la era actual de la transformación digital, las organizaciones buscan optimizar sus operaciones y garantizar una gestión segura y eficiente de sus recursos. Amazon Web Services (AWS) se ha consolidado como una solución líder para tales objetivos. Sin embargo, cómo estructurar y gestionar estos recursos en la nube se convierte en una pregunta esencial. Aquí es donde la estrategia multicuenta de AWS cobra protagonismo y relevancia.

## ¿Qué es una cuenta AWS?
Una cuenta AWS representa un límite de seguridad que aísla nuestros recursos y cargas de trabajo frente a las cargas de otros clientes de AWS, aunque hagamos uso de la misma región, la misma zona de disponibilidad e incluso el mismo centro de datos.

## ¿Qué estrategia me conviene usar: ¿Cuenta única o Multi-Cuenta?
Si tu propósito es hacer uso de una cuenta con fines de aprendizaje, pruebas, sandbox, entonces te recomendaría solo tener una única cuenta AWS para que sea más sencilla de administrar.

Pero, si vas a utilizar la nube para tu empresa u organización, para alguna carga de trabajo productiva, se recomienda un esquema multi-cuentas, por las siguientes razones:

- Para separar tu infraestructura en entornos como producción, testing y desarrollo.
- Si desde un punto de vista temprano, sabes que vas a gestionar una infraestructura a escala, para separar las cargas de trabajo y que un despliegue de una unidad de negocio no afecte las cargas de otra unidad.
- Para simplificar la separación de costos Unidades de negocio o proyecto, en cada cuenta.

Entonces, ¿Cómo podemos gestionar a escala consistentemente múltiples cuentas de AWS? Usando [AWS Control Tower](./aws-control-tower), el mismo que ya fué anunciado de manera global en 2019 para los clientes de AWS. Este servicio automatiza el aprovisionamiento de cuentas con una configuración básica consistente, simplifica la gobernanza, y el cumplimiento de múltiples cuentas con modelos prescriptivos y prácticas recomendadas.

## ¿Por qué optar por un enfoque de múltiples cuentas en AWS?
En el vasto universo de la computación en la nube, las decisiones sobre cómo estructurar y administrar recursos son cruciales. Estas decisiones no sólo influyen en la operatividad diaria, sino también en la seguridad, eficiencia y adaptabilidad a largo plazo. En este contexto, la estrategia multicuenta en Amazon Web Services (AWS) emerge como una recomendación fuertemente respaldada. Pero, ¿cuáles son las razones detrás de esta recomendación?

### Aislación de cargas de trabajo
Optar por un enfoque multicuenta en AWS permite una mejor aislación de las cargas de trabajo. Al dedicar una cuenta de AWS a un propósito específico o a una única carga de trabajo, las organizaciones pueden minimizar los riesgos asociados con fallos y vulnerabilidades, asegurando que un problema en una cuenta no afecte a las demás.

### Mejora de la postura de seguridad
Tener múltiples cuentas de AWS facilita la implementación de políticas de seguridad granulares. Por ejemplo, una cuenta de Seguridad especializada puede contener configuraciones y aplicaciones de seguridad, y tener acceso de solo lectura a todas las otras cuentas. Esto permite realizar detecciones de incidentes y análisis de causa raíz de forma más efectiva.

### Simplificación de la gestión
La gestión se vuelve significativamente más sencilla cuando se segmentan las aplicaciones y los entornos. Cada cuenta puede ser ajustada para satisfacer las necesidades específicas de su respectiva carga de trabajo, lo que simplifica la administración y el monitoreo.

### Cuentas de soporte
Además de las cuentas que alojan cargas de trabajo, las cuentas de soporte juegan un rol crucial. Por ejemplo, una cuenta de Redes puede ser donde se despliegan recursos de red compartidos. Estos recursos suelen compartirse mediante VPC Peerings, AWS Transit Gateway o AWS Resource Access Manager.

### Servicios compartidos
Una cuenta de Servicios compartidos puede contener recursos como pipelines de CI/CD que son utilizados por múltiples cargas de trabajo. Esto facilita la colaboración y el intercambio de recursos críticos sin duplicar esfuerzos o costos.

### Backups
Tener cuentas dedicadas para “Log Archive” y el respaldo de datos es crucial para una estrategia de retención y recuperación de datos robusta. La cuenta de “Log Archive” , por ejemplo, debería tener un acceso de “append-only” para garantizar la integridad de los registros. La cuenta de backup sirve como un salvaguarda adicional para proteger datos críticos en caso de compromisos de seguridad.
