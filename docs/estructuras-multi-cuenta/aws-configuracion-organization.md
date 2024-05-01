---
sidebar_label: 'AWS Configuración AWS Organization'
tags: [nivel 200]
---

# Actividad: Configuración y Gestión en AWS Organizations

## Objetivo general:
En los siguientes pasos, tomarás la iniciativa para configurar, administrar y entender AWS Organizations.

# Consideraciones
Para estructurar de manera óptima los recursos en AWS, se configurará una Organización AWS que consistirá en 2 Unidades Organizativas (OUs). Estas OUs agruparán cuentas con denominaciones específicas: Logging y Security. Una vez creadas, cada cuenta será designada a su OU correspondiente.

Cada una de estas cuentas desempeñará roles específicos dentro de la estructura organizativa:

**Logging Account**: Funcionará como un centro de recolección para Amazon VPC Flow Logs, CloudTrail logs y Config logs.

**Security Account**: En este espacio, se almacenarán datos de AWS Config. Además, se establecerá un GuardDuty master de Amazon y se activarán alertas relevantes.

Para aquellos interesados en profundizar en las mejores prácticas sobre diseño y estructuración de OUs y cuentas en AWS, recomiendo el artículo: [Best Practices for Organizational Units with AWS Organizations](https://aws.amazon.com/es/blogs/mt/best-practices-for-organizational-units-with-aws-organizations/).

## Creación de cuentas en AWS Organization 
En este paso, practicarás la creación de cuentas AWS para Logging Account y Security dentro del servicio AWS Organization. Las cuentas AWS creadas dentro del AWS Organization sólo pueden ser accedidas utilizando el IAM Role o el usuario root.

Dirígete a la Consola de Administración de AWS y busca el servicio AWS Organizations y **“add an AWS account”**.

![Creacion de cuentas AWS organization-1](./img/imagen1.png)

- En la página anterior, seleccione **“add an AWS account”**.
- En AWS account name, ingrese el nombre de la cuenta. Para este ejemplo, usaremos “Logging”.
- En **“Email address of the account's owner”**, introduzca la dirección de correo electrónico del propietario de la cuenta, es decir, la dirección de correo electrónico de quien recibirá las comunicaciones en representación de dicha cuenta. Este correo debe ser único a nivel global. Dos cuentas no pueden compartir la misma dirección de correo. A modo de ejemplo, usemos lab01@myexample.com.
- En “IAM role name”, podemos mantener el valor por defecto de OrganizationAccountAccessRole o, si lo prefiere, proporcionar un nombre personalizado.
Finalmente, haga clic en **“Create AWS account”**. Es posible que deba esperar unos minutos y actualizar la página para visualizar la nueva cuenta en la sección Cuentas de AWS.

Repita los pasos previamente mencionados para crear la cuenta denominada "Security". Además, si desea crear varias cuentas AWS utilizando el mismo "email", puede ajustar el "email" añadiendo un "+" seguido de una descripción. (lab01@myexample.com, lab01+1@myexample.com, lab01+2@myexample.com)

![Creacion de cuentas AWS organization-2](./img/imagen2.png)

![Creacion de cuentas AWS organization-3](./img/imagen3.png)

Luego, es posible que debamos esperar unos minutos hasta que finalice el proceso de creación de ambas cuentas.

![Creacion de cuentas AWS organization-4](./img/imagen4.png)

Al finalizar el proceso de creación, tendremos nuestras 2 cuentas creadas, Login y Security.

![Creacion de cuentas AWS organization-5](./img/imagen5.png)

## Crear las unidades organizativas
En este paso, practicarás la configuración de las Organization Units para las cuentas AWS creadas en la sección anterior. Las Organization Units incluyen Logging y Security. Estas unidades estarán ubicadas dentro del Root, donde se encuentran todas las OUs y cuentas AWS.

Abre la AWS Management Console y busca el servicio AWS Organizations.
Selecciona el Root, haz clic en Actions y luego elige Create new en la sección Organizational Unit.

![Creacion OU-6](./img/imagen6.png)

En la página de **“Create organizational unit in Root”**:
En la sección “**Details**”, proporcione un nombre para la OU (Por ejemplo: Unidad Logging).
Revise la información y haga “clic” en “**Create organizational unit**”

![Creacion OU-7](./img/imagen7.png)

Retornamos a la pantalla anterior y veremos la nueva OU.

## Mueva las Cuentas AWS a la Unidad Organizativa Correspondiente

Dirígete a la Consola de Administración de AWS y encuentra el servicio AWS Organizations utilizando la barra de búsqueda.
Marca la cuenta AWS que deseas mover (Por ejemplo: Logging), haz clic en Acciones y luego selecciona Mover en Cuenta AWS.

![Mover cuenta OU-9](./img/imagen9.png)

En la siguiente pantalla, marca la OU apropiada (Ejemplo: Unidad Logging) y haz clic en Mover cuenta AWS.

![Mover cuenta OU-8](./img/imagen8.png)

Repita los pasos anteriores para la cuenta Security y su Unidad Organizativa.

![Mover cuenta OU-10](./img/imagen10.png)

## Crear las políticas de control de servicios.

Dentro de este procedimiento, estableceremos políticas de control de servicios (SCP) que se vincularán tanto al nodo raíz como a las unidades organizativas, con el objetivo de limitar las acciones que los usuarios de las cuentas de la organización pueden realizar. La SCP inicial asegura que ninguna de las cuentas, ya sea "Logging" o "Security", puedan crear o alterar los registros de AWS CloudTrail previamente configurados. Es importante destacar que la cuenta de administración queda exenta de cualquier SCP. Por tanto, si se necesita crear registros CloudTrail bajo esta política, es esencial hacerlo desde la cuenta de administración.

Antes de trabajar con las políticas de control de servicios (SCP) en la organización, primero es necesario activar este tipo de política. Por defecto, los tipos de políticas no vienen activados. En esta sección, te guiaré en el proceso de habilitación del tipo de política de control de servicios (SCP) para tu organización

Navega a la sección de Políticas y selecciona la opción de Políticas de control de servicios.
Dentro de esta sección, haz clic en la opción que dice “Enable service control policies”. Tras hacerlo, verás un mensaje en verde indicando que has habilitado con éxito la creación de SCP en tu organización.

![Crear SCP-12](./img/imagen12.png)

![Crear SCP-13](./img/imagen13.png)

Con las políticas de control de servicios ya activadas en tu organización, estás listo para establecer las tres políticas requeridas para este proceso.

![Crear SCP-14](./img/imagen14.png)

Ahora vamos a configurar la SCP que restringe modificaciones en CloudTrail.
Dirígete a la sección **“Policies”** y selecciona la opción de **“Service control policies”**.
Una vez allí, opta por la opción **“Create policy”**.

![Crear SCP-15](./img/imagen15.png)

En la casilla **“Policy name”**, escribe 'Restricciones CloudTrail'.

![Crear SCP-16](./img/imagen16.png)

Dentro del apartado de **“Edit statement”**, buscamos la opción que dice **“statement1”** y hacemos click en **“remove”**.

![Crear SCP-17](./img/imagen17.png)

Dentro del apartado de **“Edit statement“**, busca y selecciona “CloudTrail” en la lista de servicios disponibles. Posteriormente, marca las acciones que desees limitar, como **AddTags, CreateTrail, DeleteTrail, RemoveTags, StartLogging, StopLogging y UpdateTrail**. En la parte derecha, selecciona la opción para “Add a resource”. Define CloudTrail y marca **“All resources”**, luego confirma con **“Add resource”** y elija **“Create Policy”**
A la izquierda, podrás visualizar la estructura de la política que acabas de definir, tendrá un aspecto similar a la siguiente:

![Crear SCP-18](./img/imagen18.png)

![Crear SCP-19](./img/imagen19.png)

**Asociar las políticas al nodo raíz y a las unidades organizativas**

La página de “Service control policies” muestra que tenemos 2 SCP disponibles. Hacemos clic (botón de opción) en la política que hemos creado **“Restricciones CloudTrail”**. Luego dentro de “Actions” tomamos la opción “Attach policy” y seleccionamos el nodo “root” de esta forma la politica se aplicará a todas las unidades organizativas que se encuentren por debajo de ella.

![Asociar SCP OU-20](./img/imagen20.png)

![Asociar SCP OU-22](./img/imagen22.png)

![Asociar SCP OU-21](./img/imagen21.png)

# Probar las políticas de la organización.

Ahora puedes iniciar sesión como usuario en cualquiera de las cuentas creadas e intentar realizar acciones diversas de configuración de Cloud Trail, deberán ser negadas.

# Referencias
[Documentación de AWS Organizations y AWS Account Management](https://docs.aws.amazon.com/es_es/organizations/)
[Documentación de AWS Control Tower] (https://docs.aws.amazon.com/es_es/controltower/)
[Strategies for consolidating AWS environments](https://aws.amazon.com/es/blogs/mt/strategies-for-consolidating-aws-environments/?nc1=h_ls)
[Best Practices for Organizational Units with AWS Organizations](https://aws.amazon.com/es/blogs/mt/best-practices-for-organizational-units-with-aws-organizations/)
[Lab - AWS SINGLE SIGN-ON FOR ORGANIZATION](https://000012.awsstudygroup.com/)
