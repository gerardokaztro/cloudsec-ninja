---
sidebar_label: 'AWS Control Tower'
tags: [nivel 300,aws-control-tower]
authors:
  - name: Luis Lunar
    title: Co-autor
    url: https://www.linkedin.com/in/llunarg/
---
import ReactPlayer from 'react-player'

# Introducción a AWS Control Tower
AWS Control Tower es un servicio que facilita la configuración y gobernanza de un entorno de AWS seguro y con múltiples cuentas. El servicio utiliza un conjunto preconfigurado de controles de seguridad y configuraciones de acceso para establecer una arquitectura de múltiples cuentas. En lugar de tener que configurar tu organización desde cero, AWS Control Tower te permite desplegar plantillas predefinidas de organizaciones con tan solo unos pocos clics, incluyendo la creación de las cuentas de AWS necesarias y la configuración de los permisos.

Control Tower aplica las mejores prácticas en toda la organización, configurándola de una manera segura y eficiente. En la mayoría de los casos, AWS Control Tower representa la forma más efectiva y segura de configurar tu organización en AWS. Este servicio está construido sobre otros servicios de AWS, como AWS Organizations, y emplea medidas de seguridad preventivas, como Service Control Policies (SCP) y reglas de AWS Config, para implementar la gobernanza en áreas como seguridad, cumplimiento y operaciones.

## ¿Cuál es la diferencia entre AWS Control Tower y AWS Organizations?
Aunque AWS Control Tower y AWS Organizations están diseñados para trabajar en conjunto, cada uno ofrece un conjunto único de capacidades que atienden a diferentes necesidades en la gestión de entornos de AWS con múltiples cuentas. AWS Control Tower proporciona una experiencia simplificada y automatizada para configurar y gestionar un entorno de AWS siguiendo las mejores prácticas de seguridad y gobernanza. Se basa en AWS Organizations para organizar cuentas y aplicar medidas de seguridad preventivas a través de Service Control Policies (SCP). En resumen, AWS Control Tower es como un piloto automático que configura AWS Organizations y otros aspectos clave para ti, lo que te permite centrarte en aspectos más estratégicos de tu arquitectura.

Por otro lado, AWS Organizations ofrece una mayor flexibilidad y control granular sobre la configuración y las políticas de múltiples cuentas de AWS. Permite crear políticas personalizadas, como etiquetas y copias de seguridad, y administrarlas de manera centralizada. AWS Organizations es ideal para aquellos que desean un control más detallado sobre la organización de sus cuentas y recursos de AWS.

En conjunto, AWS Control Tower se puede utilizar para establecer un entorno seguro y bien arquitectado inicialmente, mientras que AWS Organizations permite una personalización y administración más detalladas a medida que la organización crece y evoluciona.

## Mejores Prácticas para AWS Organizations
Para maximizar los beneficios de AWS Organizations, es crucial seguir algunas mejores prácticas:

### Evitar el uso de la cuenta raíz
La cuenta raíz en una Organización de AWS desempeña un papel similar al usuario raíz en una cuenta individual de AWS. Quien tenga acceso a esta cuenta podría modificar o eliminar las Service Control Policies (SCP), lo que podría comprometer la seguridad o incluso bloquear el acceso. Por lo tanto, es fundamental restringir el acceso a la cuenta raíz y otorgárselo solo a personas que realmente lo necesiten. En lugar de desplegar cargas de trabajo en la cuenta raíz, se recomienda crear cuentas específicas para diferentes tipos de recursos y cargas de trabajo.

### Crear una organización desde cero
Aunque pueda parecer lógico crear una organización en una cuenta existente con recursos ya desplegados, esto implicaría tener que usar la cuenta raíz para gestionar dichas cargas de trabajo. En cambio, es más seguro crear una nueva cuenta que actúe como raíz de la organización e invitar a las cuentas existentes a formar parte de ella.

### Utilizar Service Control Policies (SCP)
Las SCP permiten limitar los permisos en las cuentas. Configúrelas para sus diferentes cuentas y Unidades Organizativas (OU), de manera que las acciones estén restringidas y se apliquen guardias de seguridad. Es vital recordar que, con las SCP activadas, todos los permisos necesitarán una declaración explícita de "Permitir" en la SCP, además de en las políticas de IAM.

### Implementar el inicio de sesión único (SSO)
A medida que aumenta el número de cuentas, gestionar el acceso mediante usuarios y roles de IAM se vuelve complejo. En su lugar, es aconsejable configurar el IAM Identity Center para permitir el acceso a diferentes cuentas con un único conjunto de credenciales. Este centro de identidad puede utilizar su propio almacén de identidad o conectarse con proveedores externos como Active Directory, Google Workspaces u Okta.

### Limitar el acceso a las cuentas
No todos los usuarios necesitan acceso a todas las cuentas ni a todas las cargas de trabajo. Defina cuidadosamente los permisos y otorgue solo las acciones que sean realmente necesarias. Al tener cargas de trabajo en cuentas separadas, es más fácil aplicar el principio de mínimo privilegio.

Seguir estas mejores prácticas no solo fortalecerá la seguridad, sino que también facilitará la gestión y el escalado de su entorno en AWS Organizations.

## Descripción general del servicio
AWS Control Tower configura tres cuentas de referencia (**Management Account, Log Archive y Security Audit**) que proporcionan entornos dedicados para funciones especializadas dentro de su organización.

Les dejo una breve descripción de cada cuenta de referencia:
- **Management Account** contiene información de facturación para cada recurso en su landing zone.
- **Log Archive** proporciona a su equipo el acceso a la información de registro (logs) de todas sus cuentas asociadas.
- **Security Audit** proporciona a su equipo el acceso a la información de auditoría que AWS Control Tower pone a su disposición, principalmente por motivos de seguridad y cumplimiento.

### Características adicionales
- **Landing zone:** Es el entorno general de las múltiples cuentas que AWS Control Tower configura por nosotros, a partir de una cuenta de AWS nueva.
- **Controls:** Tambien conocido como guardrail, es una regla de alto nivel que proporciona un gobierno continuo para nuestro entorno general de AWS.
    - Existen tres tipos de controles:
      - preventivo
      - detectivo
      - proactivo
    - Se aplican tres categorías de orientación a los controles: 
      - mandatorios
      - fuertemente recomendados
      - electivos.
- **Account Factory:** es una plantilla de cuenta configurable que ayuda a estandarizar el aprovisionamiento de nuevas cuentas con configuraciones de cuenta preaprobadas.
- **Dashboard:** ofrece una supervisión continua de su landing zone a su equipo de administradores de la nube central.

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="https://www.youtube.com/live/9YPci-U7NIM?si=tpU-f3ucdBDp0ub2&t=978" width="100%" />
</div>

## Cómo Activar AWS Control Tower
Desde su cuenta root (o **Management Account**), ir al servicio de AWS Control Tower y dar clic en **“Set Up Landing Zone”**

![Dashboard de AWS Control Tower](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/71358youj9l48ljwr1y9.png)

AWS Control Tower verificará ciertos requisitos como el no tener activado Cloudtrail y Config a nivel Organizacional para determinar si tu cuenta root esta lista para ser configurada. De no cumplir con algunos de estos requisitos, te aparecerá un mensaje así:

![Mensaje de advertencia](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/parn45q3lykbwe0xto5b.png)

Es importante corregir los requisitos fallidos para poder darle **“Rechek”**.

### Paso 1: Revisión de precios y Selección de regiones

![Paso 1 - AWS control Tower Setup](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rty5935yxwosh8yi97sq.png)

- **Home Region:** Esta es la región predeterminada donde se aprovisionan los recursos de sus cuentas compartidas.

- **Deny Region Control**: El control de denegación de región es único, porque se aplica a su landing zone como un todo, en lugar de a cualquier unidad organizativa específica. Si aún no tiene idea de que regiones denegar, puede dejar esta opción en “not enabled” ya que puede cambiarse después.

- **Additional AWS Region:** Permite seleccionar las regiones que estarán bajo el gobierno de AWS Control Tower adicional al “Home Region” seleccionado. Aún podrá aprovisionar sus recursos en las regiones no seleccionadas, pero debe tener en cuenta que no estarán bajo el gobierno de AWS Control Tower. También puede configurar esta opción más tarde.

### Paso 2: Configurar unidades organizativas (OU)

Las mejores prácticas de AWS para un entorno bien diseñado recomiendan que debe separar sus recursos y cargas de trabajo en varias cuentas de AWS y que se agrupan (a menudo) en unidades organizativas (OU) con fines de gobierno y control.

AWS Control Tower configura automáticamente algunas de estas unidades organizativas:

**Foundational OU:** que contiene 3 cuentas compartidas: Management Account, Log Archive y Security Audit (también conocida como Audit).

**Additional OU:** para ayudar a configurar una estrategia multi-cuentas, es recomendable crear una OU secundaria al configurar la landing Zone. Esta OU se puede utilizar para almacenar cualquier cuenta de producción o desarrollo.

![Paso 2 - AWS control Tower Setup](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9vh0lmuwoog3i3ilxq2c.png)

### Paso 3: Configurar cuentas compartidas

AWS Control Tower requiere dos direcciones de correo electrónico únicas que aún no estén asociadas con una cuenta de AWS. Cada una de estas dos direcciones de correo electrónico se convierte en una bandeja de entrada colaborativa, lo que significa que cada una se convierte en una cuenta de correo electrónico compartida, a la que pueden acceder usuarios específicos de su empresa que realizan trabajos relacionados con AWS Control Tower.

![Paso 3 - AWS control Tower Setup](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ao73203tm29k8xntj238.png)

### Paso 4: Configurar CloudTrail y encriptación

AWS CloudTrail es un servicio que registra continuamente las actividades de su cuenta de AWS y está habilitado de forma predeterminada para los trails (rastreo) de CloudTrail a nivel de organización.

Los trails a nivel de organización agrega registros para todas las cuentas en la organización de AWS, incluidas las cuentas que no están gobernadas por AWS Control Tower. Puede cambiar esta configuración más adelante para evitar cargos adicionales de CloudTrail en las cuentas que no estén bajo el gobierno de AWS Control Tower.

![Paso 4 - AWS control Tower Setup](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kua6tawvvs2isbpq2za9.png)

De manera opcional, en la sección de **“Log configuration for Amazon S3”** puede configurar el tiempo de retención del bucket de archivos de registro de Amazon S3 y el tiempo de retención de los registros para acceder al depósito.

![Log Configuration for S3](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zfpavn3t0g7rf4hcoiff.png)

Y en la sección de **"KMS Encryption"** puede seleccionar una llave KMS existente o crear una nueva que cifre los registros almacenados en el bucket que AWS Control Tower crea para almacenar los registros de Cloudtrail a nivel Organizacional. Tenga en cuenta que esta llave deberá tener permisos sobre CloudTrail. Esta opción está deshabilitada de manera predeterminada y puede configurarse más adelante.

![KMS encryption](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6ldp1ayz7bbze9mn7a46.png)

### Paso 5: Revisar y configurar la landing zone

Finalmente, después de toda la configuración de los pasos previos, deberás marcar la casilla de verificación y dar clic en “Set Up landing zone”

![Paso 5 - AWS control Tower Setup](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ei9anduxmx0rxdljfclz.png)

El proceso que toma esta configuración dura aproximadamente 1 hora (60 minutos).

![Aprovisionamiento del Landing Zone](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vly05t5yqkvmijs6jvw5.png)

### Pantallas o secciones adicionales:

La consola ofrece algunas acciones recomendadas:
![recomended actions](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9d4osg5xirsdmsdrgq1p.png)

En este punto, se pueden ver y habilitar los controles obligatorios, opcionales y fuertemente recomendados:
![security controls](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nhvtbagzc584niswrbvx.png)

Puedo ver las unidades organizativas (OU) y las cuentas, y el estado de cumplimiento de cada una (con respecto a las medidas de seguridad):
![compliance account](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n7bybka8gjyx1q5qe3t7.png)

### Paso 6: Cómo organizar mis cargas de trabajo mediante Unidades Organizativas

Cuando tenemos cargas de trabajo para diferentes propósitos y entornos, es una recomendación general organizarlas en OUs diferentes. A continuación te explico cuales son las OUs que deberías tener dentro de tu AWS Organization.

**- OU Workloads:**
Esta OU puede subdividirse en otras OUs para organizar mejor tus cargas de trabajo por entornos (Dev, QAS y PRD), por país operación (Perú, Argentina, Colombia, Chile, etc), por tipo de unidad de negocio (Banca, Seguro, Corredora), por tipo de carga de trabajo (Inteligencia de Negocios, Seguridad, Machine Learning, Serverless, etc).

**- OU Sandbox:**
Las cuentas dentro de esta OU deben estar aisladas del resto del ecosistema pues se requieren permisos menos restrictivos ya que su propósito es solo de experimentación, tal y como su nombre lo indica. Debemos asegurarnos que las cuentas dentro de esta OU se encuentren completamente aisladas de las otras OUs tanto a nivel de autenticación y red. Es muy útil que se apliquen los guardrails o service control policies (SCP) necesarios para evitar que “por simple aprendizaje” se termine levantando recursos de manera indiscriminada y que generen un alto costo.
Les recomiendo este [blogpost](https://aws.amazon.com/es/blogs/aws-spanish/gestion-automatica-de-recursos-efimeros-para-pruebas-usando-tecnologia-sin-servidor/) donde encontrarán una forma automatizada con buenas prácticas incorporadas para operar dicha OU y tener un buen control sobre el presupuesto de la cuenta.

**- OU Shared:**
Aquí se pueden desplegar servicios compartidos por el resto de cuentas, por ejemplo, el uso de algún firewall IPS/IDS como AWS Network Firewall con un modelo de despliegue de salida hacia internet centralizada, el uso de VPNs como Site to Site o SSL. También puede centralizar la implementación de AWS Transit Gateway, RAM. Asi como casos donde se implementan y comparten servicios de directorio (AD), resolución de nombre de dominio (DNS) y cuentas de herramientas de desarrollo y ciclo de vida del software (SDLC) repositorio de código fuente, repositorio de artefactos, pipelines de CI/CD, servicios de infraestructura cómo código, etc.

**- OU Security:**
En esta OU, se despliegan las herramientas de seguridad que el equipo de seguridad usaría para monitorear el entorno y asegurarse de que no haya brechas de seguridad y que tengan las herramientas necesarias para remediar cualquiera de estas acciones.

**- OU Suspended:**
Si tienes cuentas que ya no son necesarias y quieres mantenerla en una OU un tanto especifica, puedes incluirla en esta OU. No está demás mencionar que es necesario que a esta OU se les asocie  una SCP que deniegue cualquier tipo de acción. 

**- OU Policy Staging:**
Recomiendo que antes de aplicar los guardrails o SCPs a una cuenta de producción, estos hayan sido probado antes en alguna cuenta para pruebas (no confundir con un ambiente sandbox).Tener una OU para ensayar políticas, puede resultar útil.

![OUs](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ehw56ajc0n0ku2w181sf.png)

### Paso 7: Identificar y habilitar los controles (guardrails)

Una vez separada tus cargas de trabajo mediante la **segmentación de cuentas y unidades organizativas** y como organización cuyo rubro es de servicios financieros, necesitamos controles que nos permitan cumplir o en su efecto estar alineados a los estándares que necesitamos.

## AWS Control Tower Controls Library
Esta feature nos permite usar los diferentes tipos de controles que podemos encontrar agrupados por categoría.

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="https://www.youtube.com/live/y3cg3aKvLmY?si=4b3Iw3iIpyj25bU0&t=497" width="100%" />
</div>

Repasemos, **¿Qué es un control o guardrail en AWS Control Tower?**
👉 **Un control es una regla de alto nivel que nos permite aplicar una definición de gobierno** sobre una unidad organizacional y posteriormente una cuenta o grupo de cuentas. **Estos controles van a tener la misión de mejorar una postura de seguridad enfocada a objetivos de controles** que pueden ser: _logging monitoring, protección de datos entre otros, gestión de las vulnerabilidades, mínimo privilegio,_ entre otros.

Dentro de esta característica, vamos a conocer cuáles son, cómo funcionan y qué tipos existen, hasta aplicar una estrategia de controles en nuestro ambiente de múltiples cuentas AWS.

![All Controls Library](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/887e2msmfhr4gs9ks4yo.png)

### Control Behavior: ¿Cómo es que funcionan?

Repasemos nuevamente, existen 3 tipos de comportamientos para los controles:
1️⃣ Preventivos
2️⃣ Detectivos
3️⃣ Proactivos

![Controls Behavior](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rqk6ofbzz7ytur0e6h3l.png)

#### Controles Preventivos
Previenen acciones dentro de nuestra infraestructura en AWS. Estos controles funcionan con SCP manejada por Control Tower, y deniegan acciones específicas relacionadas con el tipo de control que queremos aplicar.

![Preventive control](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4joncpwbte7h42msa312.png)

Los controles preventivos, garantizan que la infraestructura esté en compliance con ese control o requerimiento específico, ya que no permite por medio de la SCP que se despliega recursos o que se haga alguna configuración inadecuada.

![Controles Preventivos](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lw20t7hjfhvx84ynvw72.png)

Otra característica de este tipo de controles es que su estado es **“enforced”** o **“not enabled".** Por lo que si queremos saber si estamos en cumplimiento con un control específico, solo basta con mirar el estado del control preventivo.

##### Ejemplo de un control preventivo

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": "*",
            "Resource": "*",
            "Effect": "Deny",
            "Condition": {
                "StringLike": {
                    "aws:PrincipalArn": [
                        "arn:aws:iam::*:root"
                    ]
                }
            }
        }
    ]
}
```

Este guardrail **(por detrás se aplica una SCP)** es un control que previene que se realicen acciones en las cuentas AWS con el usuario root ya que se considera que el uso de este usuario privilegiado sobre la cuenta son para acciones de alto nivel y no para tareas del día a día, es decir, si tus acciones son de desplegar infra, cómo crear recursos en EC2, S3 entre otros, **por favor, no uses la cuenta root.** Y como parte del equipo de seguridad, si lo que **requiero es prevenir este tipo de acciones y estar 100% en cumplimiento,** pues este control preventivo de ejemplo es el ideal para responder.

#### Controles Detectivos

Nos permiten **detectar cambios en la configuración actual** de nuestra infraestructura e **identifica si estos cambios se alinean o no con la postura de seguridad de la organización.** Estos controles **no garantizan** qué todos nuestros recursos estén en compliance a diferencia de los controles preventivos.

![Detective Control](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zld9hyatgnzycthhldtw.png)

Los controles detectivos funcionan con **Config Rules,** que nos permite **conocer los cambios de configuración de los elementos en los recursos** que estén desplegados y cuyos resultados son aprovechados por Control Tower.

En este tipo de controles, tenemos 3 estados que son **“Clear”, “In Violation”** y **“not enabled”.**


##### Ejemplo de un control detectivo

```yaml
AWSTemplateFormatVersion: "2010-09-09"
Description: ""
Resources:
  ConfigRule:
    Type: "AWS::Config::ConfigRule"
    Properties:
      ConfigRuleName: "s3-bucket-public-read-prohibited"
      Scope:
        ComplianceResourceTypes:
          - "AWS::S3::Bucket"
      Description: "A Config rule that checks that your Amazon S3 buckets do not allow public read access. If an Amazon S3 bucket policy or bucket ACL allows public read access, the bucket is noncompliant."
      Source:
        Owner: "AWS"
        SourceIdentifier: "S3_BUCKET_PUBLIC_READ_PROHIBITED"
Parameters: {}
Metadata: {}
Conditions: {}
```

Este guardrail (por detrás se aplica una config rule) es un control que detecta cuando un bucket S3 cambia su estado de configuración, pasando de haber sido un recurso privado a uno público.

#### Controles Proactivos:
Nos ayudan a identificar la infraestructura que está a punto de desplegarse en la cuenta AWS, dando como resultado si los recursos a aprovisionarse serán compliance o no. Este análisis es realizado en la misma definición del código o template por el que se aprovisiona la infraestructura. 

![Proactive control](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bbqytqnlnw7k6mkwy6w1.png)

Cabe mencionar que funcionan utilizando cloudformation hooks, que precisamente es para identificar configuraciones específicas en recursos a desplegar. Un punto a considerar sobre este tipo de controles, es que solo es aplicable por recursos que son provisionados por AWS Cloudformation, aun no soporta recursos desplegados por Terraform, Pulumi, CDK, entre otros.

💡 TIP: Si usas StackSets (característica que permite desplegar infraestructura en múltiples cuentas) también podrás hacer uso de los controles proactivos.

#### Categorías de controles y Frameworks

Los controles en AWS Control Tower, se agrupan de la siguiente manera:

##### Agrupados por servicios de AWS:
Indican los servicios sobre los que se aplican los controles.

![Services](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xwcygf7ipj3fq51jb5td.png)

##### Agrupados por objetivos de control:
Indican en qué épica de seguridad nos ayudan a mejorar como: limitar el acceso a la red, administrar los secretos, impulsar el mínimo privilegio, administrar las vulnerabilidades, entre muchos otros.

![Controls Objective](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ylke3anurhfro78tsti4.png)

##### Agrupados por Framework:
Nos muestran 3 categorías que nos ayudan a estar en cumplimiento respecto a las buenas prácticas que recomienda AWS con referencia a NIST, PCI y CIS AWS Benchmark.

![Framework](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q6f001j0zqrvj0dxs37t.png)

### Paso 8: Recomendaciones para habilitar controles

- Revisa cada uno de los controles antes de activarlos en una OU (y por consecuente en las cuentas). Es necesario tener una clara comprensión sobre los controles que necesites habilitar y que este entendimiento sea compartido entre los equipos de seguridad, desarrollo y operaciones.

Si quieres conocer el detalle de un control en especifico, desplázate hacia a la pestaña **“About”** y encontraras información útil del control.

![controls details](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m3yg75obxs8716aqweiu.png)

- Es importante que se tenga definido que objetivos se quieren mejorar en la organización, es decir, cuales son esas políticas de seguridad a las que se necesita estar alineado. De esta forma, en Controls Library podrás los controles que te ayuden a mejorar la postura de esa política.

Por ejemplo, si están utilizando Amazon S3 y quieren averiguar todos los controles relacionados a este servicio y cumplir con el control objetivo de “protección de datos” pueden hacerlo de esta manera:

![protection data policy](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/483zvi5jh2b4wvv0jf8e.png)

## Conclusión
- Identifica los controles que quieres habilitar
  - Recuerda profundizar sobre el control: definición, tipo, comportamiento y referencia.
- Despliega los controles aplicando buenas prácticas
  - Recuerda tener una **OU Policy Stagging** con la finalidad de probar aquí los guardrails (controles) para luego ir pasando de a poco hacia OU productivas.
- Monitorea el estado de los controles habilitados
  - Importante monitorear los controles de tipo detectivo, ya que ellos te dirán que recursos se encuentran "In Violation", quiere decir, recursos non-compliance, identifica esos recursos y remédialos.

> 
:::tip
Usa esta sintaxis en tu AWS CLI o AWS CloudShell para identificar los controles que tengas habilitados en alguna OU especifica.
```bash
$ aws controltower list-enabled-controls --target-identifier <OU Id>
```
:::