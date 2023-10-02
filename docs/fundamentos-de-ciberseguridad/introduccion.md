---
sidebar_label: 'Introducción a la Ciberseguridad'
tags: [nivel 100, ciberseguridad]
---

# 🔒 Introducción a la Ciberseguridad
En un mundo cada vez más interconectado, la seguridad de la información ha pasado de ser un lujo a una necesidad imperante. La globalización digital nos ofrece infinitas posibilidades, pero también nos expone a riesgos y amenazas que evolucionan constantemente. Imaginemos un incidente en el que un importante actor del sector financiero sufre una violación de datos significativa, afectando a millones de usuarios. Este tipo de eventos subrayan la importancia de tomar medidas proactivas y preventivas en ciberseguridad. No podemos darnos el lujo de confiar únicamente en sistemas y protocolos estándar; es esencial una sólida comprensión y aplicación de principios de seguridad como la Tríada CIA (Confidencialidad, Integridad, Disponibilidad), especialmente en entornos complejos como los proporcionados por servicios de nube. Situaciones como la que hemos planteado sirven como puntos de inflexión, enfatizando la necesidad de que todas las organizaciones integren la **Tríada CIA** como parte fundamental de su estrategia de seguridad.

:::info
**Seguridad de la información** y **Ciberseguridad** son términos que se relacionan entre sí pero tienen algunas diferencias.
:::

## Garantía de seguridad
### Conceptos de Seguridad de la Información
Este es un término que debes haber oído mucho, y no es para menos, hoy en dia la información es un activo muy importante. Este concepto se refiere a la *capacidad de reducir el nivel de peligro, daño o riesgo que puede sufrir la información de modo que se llegue a un nivel que pueda ser aceptable por el dueño de esa información* sin importar cual sea su formato de dicha información: **física, digital u algún otro medio.**

### Conceptos de Ciberseguridad
Como mencionamos arriba, hoy en día uno de los **activos más importantes que tienen las organizaciones son sus datos**; estos son clave para el crecimiento de los negocios, adquirirlos y mantenerlos implica gran inversión de dinero y tiempo por lo que la ciberseguridad y la protección de dichos datos e infraestructura empresarial es un factor clave.

Definimos ciberseguridad como “Un conjunto de medidas de protección de la información, a través del tratamiento de las amenazas que ponen en riesgo la información que es tratada por los sistemas de información que se encuentran interconectados”, según [ISACA](https://www.isaca.org/) (Information Systems Audit and Control Association).

### Diferencias entre Seguridad de la Información y Ciberseguridad
Como hemos podido ver, ambos términos comparten mucha similitud pero tienen algunas diferencias.

#### En el alcance
- Seguridad de la Información, busca proteger toda la información en todo tipo de medio, sean digitales, físicos o cualquier otro, por lo que podemos decir, que aplicando este concepto buscamos proteger la información ante un ataque informática o un incendio.

- Ciberseguridad, aplica solamente a la **información que se encuentre en sistemas interconectados**, es decir, en formato digital como computadoras, servidores, maquinas virtuales, etc. Por lo que los riesgos a los que se enfrentan son conocidos como **ciberataques**.

#### En la metodología
- Seguridad de la Información, su correcta aplicación de esta basado en el uso de normas específicas como ISO 27001.

- Ciberseguridad, debido a su alcance, frameworks como NIST CyberSecurity, CIS Controls y otros te ayudan a establecer un programa de seguridad para proteger tus activos informaticos y la infomación que viajan entre ellos.

### Tríada CIA
La Tríada CIA se originó en los primeros años de la década de 1970 y ha sido la piedra angular de la seguridad de la información desde entonces. La [ISO/IEC 27000](https://www.globalsuitesolutions.com/es/la-familia-de-normas-iso-27000) ofrece un conjunto de estándares internacionales que establecen las mejores prácticas para abordar la seguridad de la información, incluidas las recomendaciones basadas en la Tríada CIA, llamada así por sus siglas en inglés, son la Confidencialidad, Integridad, y Disponibilidad.

![triada cia](https://4.bp.blogspot.com/-erhs31cwJag/U1bQK9UMaNI/AAAAAAAAAKU/b8m2fY_OIgE/s1600/estrategia2.jpg)

- **Confidencialidad:** Por confidencialidad entendemos a la cualidad de la información para no ser divulgada a personas o sistemas no autorizados.  Se trata básicamente de la propiedad por la que esa información sólo resultará accesible con la debida y comprobada autorización de los dueños de esa información.
¿Cómo se pierde la confidencialidad? Generalmente, haciendo caso omiso a las recomendaciones de seguridad o no implantando un sistema adecuado; como por ejemplo cuando se comparten contraseñas entre usuarios, se decomisionan equipos sin eliminar los datos, se dejan sesiones abiertas, se transmite información mediante protocolos inseguros,  no ciframos los datos de manera adecuada, la información deja de ser confidencial (o está en alto riesgo).

- **Integridad:** hace referencia a la cualidad de la información para ser correcta y no haber sido modificada, manteniendo sus datos exactamente tal cual fueron generados, sin manipulaciones ni alteraciones por parte de terceros. Esta integridad se pierde cuando la información se modifica, cuando parte de ella se elimina, o se crean datos espurios.

- **Disponibilidad:** se refiere aquella información a la que puedan acceder las personas autorizadas, cuando la requieran, a través de los canales adecuados y siguiendo los procesos correctos.

#### Principales amenazas para la tríada CIA
##### Para la confidencialidad:
- **Snooping:** persona que se dedica a fisgonear o chismear que información puede recopilar. Las organizaciones pueden protegerse contra el espionaje aplicando una politica de escritorio limpio, solo por dar un ejemplo

- **Dumpster diving:** cuando el atacante busca en el contenedor de basura documentos desechados. La organización puede protegerse contra este tipo de ataque implementando una política que destruya los documentos usando una trituradora de papel.

- **eavesdropping:** Pueden ser de escucha físicas o electrónicas. En el caso de las fisicas es cuando tienes una conversación delicada en un área donde exista el riesgo de que personas puedan oir tu conversación, una organizacion puede protegerse aplicando políticas donde estas conversaciones sucedan en sala de reuniones o conferencias. La electrónica es cuando un atacante obtiene acceso a una red y monitorea los datos que viajan en ella, de un dispositivo a otro. La manera correcta de protegerse contra esto es aplicando cifrado en transito.

- **wiretapping:** conocido como chuponeo. Tambien es un ataque de escucha electrónica.

- **social engineer:** el atacante usa trucos psicológicos para persuadir a un empleado a que le de información confidencial o acceso a sistemas internos

Es muy difícil protegerse contra los ataques de ingenieria social, la mejor defensa contra estos ataques es educar a los usuarios para que reconozcan los peligros de la ingeniería social y capacitarlos para intervenir cada vez que sospechen que se esta produciendo un ataque.

##### Para la Integridad
- **Unauthorized modification:** se produce cuando un atacante obtiene acceso a un sistema y realiza cambios que violan una política de seguridad, este atacante puede ser un atacante externo que irrumpe un sistema financiero y se emite cheques, o un atacante interno que acceso al sistema de nóminas y se aumenta su propio salario. Seguir el [principio del privilegio minimo](metodologias/principio-del-minimo-privilegio) es una forma de protegerse contra ataques de integridad.

- **Impersonation attack:** en un ataque de suplantación, el atacante pretende hacerse pasar por un gerente, ejecutivo, etc para ganar acceso elevado de alguna manera. El modus operandi de este ataque se relaciona con la Ingienería Social.

- **Man-in-the-middle (MITM):** es un ataque que intercepta el mensaje de un usuario hacia un sistema en la red, y luego pretende ser ese usuario, haciendole creer al sistema que puede responder con total confianza y luego se hace pasar por el sistema y le envia el mensaje recepcionado al usuario, de esa manera logra monitorear toda la conversación entre ambos. Por ejemplo, podria robar la contraseña del usuarios para iniciar sesion en el sistema mas adelante.

- **Replay attack:** Los ataques de repeticion, a diferencia del MITM, solo tiene que encontrar la manera de observar a que un usuario legítimo inicie sesión en un sistema para luego acceder ellos mismos.

##### Para la Disponibilidad
- **Denial of Services (DoS):** Sucede cuando una persona malitencionada envía una cantidad abrumadora de tráfico al servidor con la finalidad de que no pueda responder solicitudes de usuarios legítimos. Se puede proteger haciendo uso de un firewall.

- **Power outages:** Nos podemos defender con tener fuentes de poder redundantes y generadores (grupos electrógenos).

- **Hardware failures:** Nos podemos proteger con componentes redundantes, haciendo que el sistema se mantenga activo con un nuevo hardware cuando cae el principal. Aplicar prácticas como Failover (Commutación por error) son un claro ejemplo de como protegerse para este problema.

- **Destrution:** Desastes naturales como terremotos, incendios, por ejemplo.

- **Services outages:** Puede deberse a errores de programación, la falla del host subyacente o muchas otras razones, lo que genera que se interrumpa el acceso de los usuarios al sistema y la información. Podemos protegernos mediante la construccion de estrategias de conmutación por error.

### Identificación, Autenticación y Autorización
Una de las cosas más importantes en la labor de un profesional de seguridad es asegurarnos que el personal autorizado sea quien tenga acceso a las redes, sistemas e información qeu este bajo nuestra protección. El cual logramos mediante el proceso de control de acceso que consta de 3 pasos: **identificación, autenticación y autorización**.

Durante la **identificación** (primer paso del proceso de control de acceso), el usuario hace un "reclamo" sobre su indentidad y dice ser "Gerardo Castro". Pero este reclamo, al no venir acompañado de ninguna prueba que lo identifique correctamente, puede ser falsa ¿cierto?.

Entonces, cuando los usuarios han declarado/reclamado su identidad, es necesario validar que son los legítimos propietarios de esa identidad. Este proceso de **verificación** o **prueba de la identificación** del usuario se conoce como **autenticación** (segundo paso del proceso del control de acceso).

En pocas palabras, la autenticación es un proceso para probar la identidad del solicitante y existen tres métodos comunes de autenticación:

- Algo que sabes Contraseñas o paráfrasis.
- Algo que tiene: Tokens, tarjetas de memoria, tarjetas inteligentes
- Algo que es: biometría, características medibles

#### Métodos de autenticación
Hay dos tipos de autenticación. Usar solo uno de los métodos de autenticación mencionados anteriormente se conoce como autenticación de un solo factor (SFA - Single Factor Authentication). Otorgar acceso a los usuarios solo después de demostrar o mostrar con éxito dos o más de estos métodos se conoce como autenticación multifactor (MFA - Multi Factor Authentication).

La mejor práctica común es implementar al menos dos de las tres técnicas comunes para la autenticación:

- Basado en el conocimiento (algo que sabes).
- basado en token (algo que tienes).
- basado en características (algo que es).

Cuando se comprueba la identificación del usuario mendiante el uso de los métodos de la autenticación, viene el último paso que es la autorización.

#### Triple AAA: Authentication, Authorization and Accounting
Adicional a esto, los sistemas de control de acceso tambien proporcionan la funcionalidad de “contabilidad” (Accounting), que permite a los administradores realizar un seguimiento de la actividad del usuario y reconstruir esas actividad a partir de registros. Cualquier seguimiento que se realice como parte del programa de monitoreo de una organizacion debe ajustarse a los limites establecidos por la ley y la politica de privacidad de la organización.

En conjunto las actividades de **autenticacion, autorizacion y contabilidad** se les conoce como **triple AAA** por su siglas en inglés.

### No Repudio
El no repudio es un término legal y se define como la protección contra un individuo que niega falsamente haber realizado una acción en particular. Brinda la capacidad de determinar si una persona determinada realizó una acción en particular, como crear información, aprobar información o enviar o recibir un mensaje.

En el mundo actual del comercio electrónico y las transacciones electrónicas, existen oportunidades para hacerse pasar por otros o negar una acción, como hacer una compra en línea y luego negarla. Es importante que todos los participantes confíen en las transacciones en línea. Las metodologías de no repudio aseguran que las personas sean responsables de las transacciones que realizaron.

### Privacidad de los datos
La privacidad es el derecho de un individuo a **controlar la distribución de la información sobre sí mismo**.

En el mundo digital de ahora, las organizaciones con las que tratamos recopilan mucha información sobre personas individuales y sus acciones. Desde transacciones con tarjeta de crédito hasta registros a sitios web, cada uno de nosotros genera un rastro realmente significativo de datos detrás de nosotros. Como profesionales de TI, tenemos algunos interéses en cómo las organizaciones recopilan y utilizan la información personal.

- Proteger nuestros propios datos, quiero entender quién tiene información sobre mí y que estan haciendo con ella.
- Educar a los usuarios de nuestras organizaciones sobre como pueden proteger su propia informacion personal.
- Proteger los datos recopilados por las organizaciones.

La informacion privada puede venir en muchas formas, dos de los elementos mas comunes son: la información de identificacion personal (PII) y la información de salud protegida (HPI).

- PII (Personal Identification Information) incluye toda la información que puede vincularse a un individuo, como: nombre, apellidos, documento de identidad nacional, licencia de conducir, numero de pasaporte, correo electrónico.

- PHI (Personal Health Information) incluye registros de atención médica que estan regulados por HIPPA (Health Insurance Portability and Accountability Act).

### Regulaciones y leyes
Cada vez que trabaje con información confidencial, como por ejemplo, PII, PHI y demás, nos debemos preguntar que leyes y regulaciones rigen la forma en la que debemos almacenar, procesar y transmitir dicha información. Es nuestro deber averiguar que leyes y que regulaciones específicas se aplican a nosotros.

Entender y llegar a buen puerto con este tema, realmente no es nada sencillo. Veamos un ejemplo 😅

Imaginemos que tenemos una empresa física en Lima (Capital de Perú), esta claro que la ley estatal de Lima (si la hubiese) y la ley federal escrita a nivel nacional en Perú aplican a nuestro caso. Ahora, que pasa si nuestra aplicacion, junto con su infraestructura esta alojada en la región de Virginia (Este de USA) en Amazon Web Services (¿la ley de USA aplicaría a nosotros?), y que nuestros clientes (quienes consumen nuestro producto) radican en algún pais de la Unión Europea ¿Nos regimos a la ley de aquí tambien?.

Como ven, no es una tarea sencilla, la Unión Europea dice que su [Reglamento General de Protección de Datos (GDPR)](https://gdpr-info.eu/), se aplica a la información personal de todos los residentes de la UE dondequiera que se encuentren. Ahora, por supuesto, GDPR, no es la única ley que deberá seguir. Los profesionales de la seguridad deben conocer las diferentes leyes nacionales, territoriales y estatales que se aplican a sus operaciones. Y algunas regulaciones provienen de fuentes distintas a la ley. 

Por ejemplo, el [Estándar de Seguridad de Datos de la Industria de Tarjetas de Pago (PCI DSS)](https://www.pcisecuritystandards.org/lang/es-es/), es un esquema de autorregulación que se aplica a las transacciones con tarjeta de crédito en todo el mundo. El cumplimiento es impuesto por los bancos que proporcionan acceso al sistema de tarjetas de pago.

Ahora no hay una respuesta fácil a todas estas preguntas jurisdiccionales. Deberá clasificar estas regulaciones a veces conflictivas con la ayuda de sus abogados y desarrollar un camino que lo ayude a evaluar los riesgos legales que sea apropiado para su entorno operativo.

### Marco de políticas de seguridad: Una hoja de ruta
Consta de 4 tipos de documentos:

- **Políticas:** es un conjunto de directrices y reglas que establecen cómo se gestionará la seguridad en la organización. Es el marco que asegura que los controles se aplican de manera coherente y efectiva. El cumplimiento es obligatorio. A menudo las politicas se aprueban en los niveles mas altos de la organizacion.

- **Estándares:** Derivan su autoridad de la politica. Una politica de seguridad de la organizacion puede incluir declaraciones especificas que otorguen al departamento de TI u otros la autoridad para crear y hacer cumplir estandares. Estos estandares son el lugar apropiado para incluir cosas como los algoritmos de cifrado aprobados por la compañia, las ubicaciones de almacenamiento de registros, los parametros de configuracion y otros detalles tecnicos y operativos que pueden cambiar con el tiempo. El cumplimiento de los estandares tambien es obligatorio.

- **Guidelines o pautas:** Es donde los profesionaes de seguridad brindan asesoramiento al resto de la organizacion, incluida las mejores prácticas para la seguridad. Solo son consejos, su cumplimiento no son obligatorios. Por ejemplo puedes recomendar a tus empleados que usen red inalambrica cifrada para conectarse a la red, o si no tienen una red inalambrica a su alcance, pueden usar una conexion via vpn para compensar.

- **Procedimientos:** son instrucciones paso a paso para que los empleados pueden seguir cuando realizan una tarea especifica. Dependiendo de la organización, y el tipo de procedimiento puede ser obligatorio u opcional.

#### Algunas políticas de seguridad comúnes:
Estas son algunas políticas de seguridad comúnes que se encuentran en la mayoría de organizaciones, sin embargo cada organización decide que política es necesaria para su programa de seguridad.

- **Política de uso aceptable (AUP):** describe lo que los usuarios pueden hacer con los activos tecnológicos de la organización y lo que esta prohibído. Por ejemplo puede abordar el uso personal de computadoras y sistemas. Otro ejemplo es que las AUP les dice a los usuarios que no deben intentar acceder a información o sistemas a los que no se les haya autorizado y que consecuencias ocurriría si violan la política.

- **Data Handling policies:** describen los controles y procedimientos de seguridad que se deben usar para proteger la informacion confidencial. Definen los tipos de informacion que la organizacion considera confidencial y describen como los empleados deben proteger los registros digitales y en papel que contienen esa información confidencial.

- **Passoword Policy:** cubren la protección y el uso de contraseñas en la organización.

- **BYOD:** traer tu propio dispositivo, es una política donde la organización permite que el usuarios use su propio equipo personal para acceder a información de la empresa.

- **Change management policies:** procedimientos que incluyen información sobre como se dan los cambios en la infraestrucutra tecnologica de la organización.

## Gestion de riesgos
Insertar contenido

## Controles de seguridad
Tras abordar en un artículo previo la importancia de la Tríada CIA (Confidencialidad, Integridad, Disponibilidad) como base de la ciberseguridad, es crucial entender cómo estos principios se aplican de manera práctica. Este ámbito corresponde a los controles de seguridad, que constituyen los mecanismos por los cuales las organizaciones materializan los fundamentos de la Tríada CIA. 

### Controles de Seguridad: Concepto y tipos
Los controles de seguridad son medidas específicas implementadas para proteger la confidencialidad, integridad y disponibilidad de la información. Estos se categorizan en controles físicos, técnicos y administrativos. La implementación de controles debería reducir el riesgo a un nivel aceptable.

- **Controles Físicos:** estas son las medidas palpables que se emplean para proteger activos físicos, como las cámaras de seguridad que monitorean un centro de datos.

- **Controles Técnicos o Lógicos:** se trata de los mecanismos implementados mediante software o hardware para proteger la información, como el uso de un antivirus.

- **Controles Administrativos o Gerenciales:** son las políticas y procedimientos que guían cómo se implementan los controles de seguridad, como una política que exige revisar los registros de seguridad semanalmente.

### Desglose de Controles y Políticas: Ejemplo de un Firewall
Para ilustrar la relación entre controles y políticas, consideremos el ejemplo de un firewall, un sistema que controla el tráfico de red entre diferentes redes o dispositivos. Este tema se abordará con mayor profundidad en futuros artículos.
- **Control Técnico**: Configuración del firewall para bloquear todo tráfico entrante desde direcciones IP desconocidas y/o dudosa reputación.

- **Política de Seguridad**: Política que establece que solo los administradores de sistemas autorizados pueden realizar cambios en la configuración del firewall.

## Conclusión
La Tríada CIA no es solo un conjunto de prácticas recomendadas; es un llamado a la acción para todas las organizaciones que buscan prosperar en la era digital. La implementación efectiva de estos principios en AWS se traduce en una mayor resiliencia frente a las amenazas cibernéticas. AWS ofrece una variedad de herramientas y servicios que se alinean con los principios de la Tríada, desde la administración de identidades hasta opciones robustas de almacenamiento y recuperación de datos.
El viaje hacia una seguridad robusta en la nube es un proceso continuo y en evolución. A continuación, se examinarán los conceptos de políticas de seguridad y controles que pueden reforzar aún más la postura de seguridad.
