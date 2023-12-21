---
sidebar_label: 'AWS Control Tower'
tags: [nivel 200]
---

# ¿Qué es AWS Control Tower?
AWS Control Tower es un servicio que facilita la configuración y gobernanza de un entorno de AWS seguro y con múltiples cuentas. El servicio utiliza un conjunto preconfigurado de controles de seguridad y configuraciones de acceso para establecer una arquitectura de múltiples cuentas. En lugar de tener que configurar tu organización desde cero, AWS Control Tower te permite desplegar plantillas predefinidas de organizaciones con tan solo unos pocos clics, incluyendo la creación de las cuentas de AWS necesarias y la configuración de los permisos.

Control Tower aplica las mejores prácticas en toda la organización, configurándola de una manera segura y eficiente. En la mayoría de los casos, AWS Control Tower representa la forma más efectiva y segura de configurar tu organización en AWS. Este servicio está construido sobre otros servicios de AWS, como AWS Organizations, y emplea medidas de seguridad preventivas, como Service Control Policies (SCP) y reglas de AWS Config, para implementar la gobernanza en áreas como seguridad, cumplimiento y operaciones.

# ¿Cuál es la diferencia entre AWS Control Tower y AWS Organizations?
Aunque AWS Control Tower y AWS Organizations están diseñados para trabajar en conjunto, cada uno ofrece un conjunto único de capacidades que atienden a diferentes necesidades en la gestión de entornos de AWS con múltiples cuentas. AWS Control Tower proporciona una experiencia simplificada y automatizada para configurar y gestionar un entorno de AWS siguiendo las mejores prácticas de seguridad y gobernanza. Se basa en AWS Organizations para organizar cuentas y aplicar medidas de seguridad preventivas a través de Service Control Policies (SCP). En resumen, AWS Control Tower es como un piloto automático que configura AWS Organizations y otros aspectos clave para ti, lo que te permite centrarte en aspectos más estratégicos de tu arquitectura.

Por otro lado, AWS Organizations ofrece una mayor flexibilidad y control granular sobre la configuración y las políticas de múltiples cuentas de AWS. Permite crear políticas personalizadas, como etiquetas y copias de seguridad, y administrarlas de manera centralizada. AWS Organizations es ideal para aquellos que desean un control más detallado sobre la organización de sus cuentas y recursos de AWS.

En conjunto, AWS Control Tower se puede utilizar para establecer un entorno seguro y bien arquitectado inicialmente, mientras que AWS Organizations permite una personalización y administración más detalladas a medida que la organización crece y evoluciona.

# Mejores Prácticas para AWS Organizations
Para maximizar los beneficios de AWS Organizations, es crucial seguir algunas mejores prácticas:

## Evitar el uso de la cuenta raíz
La cuenta raíz en una Organización de AWS desempeña un papel similar al usuario raíz en una cuenta individual de AWS. Quien tenga acceso a esta cuenta podría modificar o eliminar las Service Control Policies (SCP), lo que podría comprometer la seguridad o incluso bloquear el acceso. Por lo tanto, es fundamental restringir el acceso a la cuenta raíz y otorgárselo solo a personas que realmente lo necesiten. En lugar de desplegar cargas de trabajo en la cuenta raíz, se recomienda crear cuentas específicas para diferentes tipos de recursos y cargas de trabajo.

## Crear una organización desde cero
Aunque pueda parecer lógico crear una organización en una cuenta existente con recursos ya desplegados, esto implicaría tener que usar la cuenta raíz para gestionar dichas cargas de trabajo. En cambio, es más seguro crear una nueva cuenta que actúe como raíz de la organización e invitar a las cuentas existentes a formar parte de ella.

## Utilizar Service Control Policies (SCP)
Las SCP permiten limitar los permisos en las cuentas. Configúrelas para sus diferentes cuentas y Unidades Organizativas (OU), de manera que las acciones estén restringidas y se apliquen guardias de seguridad. Es vital recordar que, con las SCP activadas, todos los permisos necesitarán una declaración explícita de "Permitir" en la SCP, además de en las políticas de IAM.

## Implementar el inicio de sesión único (SSO)
A medida que aumenta el número de cuentas, gestionar el acceso mediante usuarios y roles de IAM se vuelve complejo. En su lugar, es aconsejable configurar el IAM Identity Center para permitir el acceso a diferentes cuentas con un único conjunto de credenciales. Este centro de identidad puede utilizar su propio almacén de identidad o conectarse con proveedores externos como Active Directory, Google Workspaces u Okta.

## Limitar el acceso a las cuentas
No todos los usuarios necesitan acceso a todas las cuentas ni a todas las cargas de trabajo. Defina cuidadosamente los permisos y otorgue solo las acciones que sean realmente necesarias. Al tener cargas de trabajo en cuentas separadas, es más fácil aplicar el principio de mínimo privilegio.

Seguir estas mejores prácticas no solo fortalecerá la seguridad, sino que también facilitará la gestión y el escalado de su entorno en AWS Organizations.

