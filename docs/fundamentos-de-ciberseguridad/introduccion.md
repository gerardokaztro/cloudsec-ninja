---
sidebar_label: 'Introducción a la Ciberseguridad'
tags: [nivel 100, ciberseguridad]
---

# 🔒 Introducción a la Ciberseguridad

En un mundo cada vez más interconectado, la seguridad de la información ha pasado de ser un lujo a una necesidad imperante. La globalización digital nos ofrece infinitas posibilidades, pero también nos expone a riesgos y amenazas que evolucionan constantemente. Imaginemos un incidente en el que un importante actor del sector financiero sufre una violación de datos significativa, afectando a millones de usuarios. Este tipo de eventos subrayan la importancia de tomar medidas proactivas y preventivas en ciberseguridad. No podemos darnos el lujo de confiar únicamente en sistemas y protocolos estándar; es esencial una sólida comprensión y aplicación de principios de seguridad como la Tríada CIA (Confidencialidad, Integridad, Disponibilidad), especialmente en entornos complejos como los proporcionados por servicios de nube. Situaciones como la que hemos planteado sirven como puntos de inflexión, enfatizando la necesidad de que todas las organizaciones integren la **Tríada CIA** como parte fundamental de su estrategia de seguridad.

:::info
**Seguridad de la información** y **Ciberseguridad** son términos que se relacionan entre sí pero tienen algunas diferencias.
:::

## Principios de seguridad
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

La informacion privada puede venir en muchas formas, dos de los elementos mas comunes son: la [información de identificacion personal](https://www.proofpoint.com/es/threat-reference/personal-identifiable-information#:~:text=trabajar%20con%20PII-,Significado,en%20el%20robo%20de%20identidades.) (PII) y la [información de salud protegida](https://www.linkedin.com/pulse/informaci%C3%B3n-de-salud-protegida-phi-o-personal-health-javier/?originalSubdomain=es) (PHI).

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

#### Algunas políticas de seguridad comúnes

Estas son algunas políticas de seguridad comúnes que se encuentran en la mayoría de organizaciones, sin embargo cada organización decide que política es necesaria para su programa de seguridad.

- **Política de uso aceptable (AUP):** describe lo que los usuarios pueden hacer con los activos tecnológicos de la organización y lo que esta prohibído. Por ejemplo puede abordar el uso personal de computadoras y sistemas. Otro ejemplo es que las AUP les dice a los usuarios que no deben intentar acceder a información o sistemas a los que no se les haya autorizado y que consecuencias ocurriría si violan la política.

- **Data Handling policies:** describen los controles y procedimientos de seguridad que se deben usar para proteger la informacion confidencial. Definen los tipos de informacion que la organizacion considera confidencial y describen como los empleados deben proteger los registros digitales y en papel que contienen esa información confidencial.

- **Passoword Policy:** cubren la protección y el uso de contraseñas en la organización.

- **BYOD:** traer tu propio dispositivo, es una política donde la organización permite que el usuarios use su propio equipo personal para acceder a información de la empresa.

- **Change management policies:** procedimientos que incluyen información sobre como se dan los cambios en la infraestrucutra tecnologica de la organización.

## Gestión de riesgos
### Entendiendo que es un riesgo

Gestionar los riesgos dentro de una organización, es una de las principales sino la principal tarea que tiene un profesional de seguridad. ¿Porqué?, pues las organizaciones enfrentan muchos tipos diferentes de riesgos y es nuestro trabajo **identificar, evaluar y administrar** esos riesgos para proteger nuestra **información y activos**.

Para tener un mejor entendimiento de qué cosa son los riesgos, vamos a dividir los riesgos en las categorias de **riesgo interno y riesgo externo**.

Los **riesgos internos** son aquellos que surgen desde adentro de nuestra organización y los **riesgos externos** desde afuera de la organización, por ejemplo:
- Tenemos el riesgo externo de que un **actor malicioso (bad actor en inglés)** ataque a nuestra organización con un ataque de ransomware.

- Tenemos el riesgo interno donde ocurre un incendio en nuestras instalaciones provocada por un corto-circuito.

> No podemos hacer mucho para evitar que un atacante intente o inicie el ataque, pero si podemos crear controles que reduzcan la probabilidad de que el ataque en cuestion tenga éxito.

También estan los **riesgos de multiples partes**, estos riesgos se comparten entre muchas organizaciones diferentes. Por ejemplo si un proveedor de software como servicio se ve comprometido, ese es un riesgo de multiples partes, porque ese compromiso representa un riesgo para todos los clientes del proveedor de software.

### Algunas terminologías de la Gestión de Riesgos

Términos como amenazas, vulnerabilidades y activos son familiares para la mayoría de los profesionales de ciberseguridad.

- Un activo es algo que necesita protección.
- Una vulnerabilidad es una brecha o debilidad en esos esfuerzos de protección.
- Una amenaza es algo o alguien que tiene como objetivo explotar una vulnerabilidad para frustrar los esfuerzos de protección.

El riesgo es la intersección de estos términos. Veámoslos más de cerca:
- **Una amenaza es una fuerza externa que pone en peligro la seguridad de su información y sistemas**. Una amenaza es una persona o cosa que toma medidas para explotar (o hacer uso de) las vulnerabilidades del sistema de una organización objetivo, como parte del logro o la promoción de su meta u objetivos. Para comprender mejor las amenazas, considere el siguiente escenario:

  En el contexto de la ciberseguridad, los actores de amenazas típicos incluyen lo siguiente:
  - Insiders (ya sea deliberadamente, por simple error humano, o por incompetencia grave).
  - Individuos externos o grupos informales (ya sea planificados u oportunistas, descubriendo la vulnerabilidad).
  - Entidades formales que no son políticas (como competidores comerciales y ciberdelincuentes).
  - Entidades formales que son políticas (como terroristas, estados-nación y hacktivistas).
  - Recolectores de inteligencia o información (podría ser cualquiera de los anteriores).
  - Tecnología (como bots de ejecución libre e inteligencia artificial, que podrían ser parte de cualquiera de los anteriores).

- **Un vector de amenaza es el método que utiliza un atacante para llegar a su objetivo**. Esto podría ser un kit de herramientas de hackers, ingeniería social o incluso intrusión física.

- **Las vulnerabilidades son debilidades en sus controles de seguridad que una amenaza podría explotar** para socavar la confidencialidad, integridad o disponibilidad de su información o sistemas.

Ejemplo: 
- Si no ha actualizado sus firmas antivirus recientemente y los actores maliciosos lanzan un nuevo virus en Internet, corre un riesgo. Eres vulnerable porque te falta un control de seguridad. Y hay una amenaza, el nuevo virus. 

### Evaluacion del riesgo

Los riesgos están presentes en todas partes en el mundo de la seguridad de la información. Desde actores maliciosos y malware hasta dispositivos perdidos y parches de seguridad faltantes, hay mucho en el plato de profesionales de seguridad de la información. Por supuesto, abordar cada uno de estos riesgos requiere tiempo y dinero.

Los profesionales de la seguridad de la información deben priorizar sus listas de riesgos para gastar estos valiosos recursos (tiempo y dinero) donde tendrán el mayor efecto de seguridad. Ahí es donde entra en juego la **evaluación de riesgos**.

La evaluación de riesgos es el **proceso de identificar y clasificar los riesgos** que enfrenta una organización en **función de la probabilidad de que ocurran y su impacto** esperado en la organización.

Una vez que haya evaluado los riesgos que enfrenta su organización, probablemente todavía tenga una lista algo abrumadora. La siguiente etapa del proceso clasifica esos riesgos por dos factores: **probabilidad e impacto.** La probabilidad de un riesgo es la **probabilidad de que el riesgo realmente ocurra** y el impacto de un riesgo es la **cantidad de daño que ocurrirá** si el riesgo se materializa.

Por ejemplo, un terremoto puede causar daños devastadores a un centro de datos, mientras que una tormenta puede no causar ningún daño en absoluto. Cuando realizamos una evaluación de riesgos, tenemos dos categorías diferentes de técnicas que podemos utilizar para evaluar la probabilidad y el impacto de un riesgo, **técnicas cualitativas** y **técnicas cuantitativas**.

Las técnicas cualitativas utilizan el juicio subjetivo para evaluar los riesgos. Por lo general, categorizar los riesgos como bajos, medios o altos en las escalas de probabilidad e impacto. Las técnicas cuantitativas utilizan calificaciones numéricas objetivas para evaluar la probabilidad y el impacto. Aquí hay un ejemplo de un gráfico cualitativo de evaluación de riesgos. Cuando se considera un riesgo específico, el evaluador primero califica la probabilidad como baja, media o alta, y luego hace lo mismo para el impacto. Luego, el gráfico categoriza el riesgo general. Por ejemplo, un riesgo de alta probabilidad y alto impacto se clasificaría como un riesgo alto, mientras que un riesgo de probabilidad media y bajo impacto se clasificaría en general como un riesgo bajo. Cuando realice una evaluación cuantitativa de riesgos, hará algunos cálculos para calcular la cantidad exacta de daño financiero que puede esperar de un riesgo determinado en un año típico.

> Una vez que complete una evaluación de riesgos para su organización, le quedará una lista priorizada de riesgos que debera atender.

### Tratamiento del riesgo

El tratamiento de riesgos es el proceso de analizar las posibles respuestas a esos riesgos e implementar estrategias para controlar cada riesgo de manera adecuada.

Existen 4 maneras de poder atender los riesgos:

- **Risk Avoindance o Evitación del riesgo**: se refiere a cambiar la práctica de cambiar algo para no tener presente el riesgo. Por ejemplo, si tienes tu oficina física en la costa, tienes el riesgo de que ocurra una inundación, entonces decides moverte a la Sierra para evitar dicho riesgo.

- **Risk Treatment o Transferencia del riesgo**: practicamente es transferir o cambiar el impacto de un riesgo de su organización a otra. El ejemplo mas común es que muchas organizaciones consideran la compra de pólizas de seguro de seguridad cibernética para protegerse contra el daño financiero causado por los actores maliciosos y el robo de identidad.

- **Risk Mitigation Mitigación del riesgo**: Aquí la organización toma medidas para reducir la probabilidad y/o el impacto de un riesgo. Por ejemplo, si queremos mitigar el riesgo de inundación de nuestros centro de datos, podriamos contratar a un especialista en control de inundaciones para instalar sistemas diseñados para desviar el agua de nuestras instalaciones hacia el drenaje.

- **Aceptación del riesgo**: Esta es la última manera de gestionar un riesgo. A medida de que sea dificil poder evitar, transferir o miitgar un riesgo. Las organizaciones deciden aceptar algunos riesgos después de hacer un profundo análisis reflexivo que determine que el costo de realizar otra acción de gestión de riesgos, supere por mucho el beneficio de controlarlo. Por ejemplo, siguiendo con el caso de la inundación, podriamos decir moverse a la Sierra o contratar a un especialista de inundaciones es mucho mas costoso que el daño que provocaria que nuestras instalaciones en la Costa se inunde.

#### Perfil de riesgo

Cada organización debe elegir la combinación adecuada de estas estrategias de gestión de riesgos para su propio entorno técnico y empresarial. La **combinación de riesgos que afectan a una organización** se conoce como su perfil de riesgo, y la organización adopta estrategias de gestión de riesgos para abordar los riesgos en ese perfil.

El nivel inicial de riesgo que existe en una organización antes de que se implementen controles es el **riesgo inherente** de la organización. Luego se aplican controles para **reducir ese riesgo**. Pero, por supuesto, no todos los riesgos pueden eliminarse por completo. **El riesgo que permanece después de que el riesgo inherente se reduce mediante los controles** se conoce como el **riesgo residual**. Y los controles mismos pueden introducir algunos riesgos nuevos.

Por ejemplo, si instala un firewall para reducir el riesgo inherente de no tener control sobre el tráfico de red de su organizacion, es un buen enfoque, pero eso puede también agrega un nuevo riesgo de que el firewall en sí pueda fallar. Ese nuevo riesgo que resulta de agregar controles (como la implementación de un firewall) se conoce como *riesgo de control o control de riesgo*.

La realidad es que la organización tendrá que aceptar algún riesgo continuo para continuar las operaciones. Los altos mandos tienen que decidir cuánto riesgo eligen aceptar. Este es un proceso conocido como determinar la tolerancia al riesgo de la organización. El objetivo de la gestión de riesgos es asegurarse de que la combinación del riesgo residual y el riesgo de control esté por debajo de la tolerancia al riesgo de la organización.

## Controles de seguridad

Tras abordar en un artículo previo la importancia de la Tríada CIA (Confidencialidad, Integridad, Disponibilidad) como base de la ciberseguridad, es crucial entender cómo estos principios se aplican de manera práctica. Este ámbito corresponde a los controles de seguridad, que constituyen los mecanismos por los cuales las organizaciones materializan los fundamentos de la Tríada CIA. 

### Controles de Seguridad: Concepto y tipos
Los controles de seguridad son medidas específicas implementadas para proteger la confidencialidad, integridad y disponibilidad de la información. Estos controles se categorizan por su propósito, ya sea que estén diseñados para prevenir, detectar o corregir problemas de seguridad, y por su mecanismo de acción, es decir la forma en que funcionan y se clasifican en [controles técnicos, administrativos y físicos](#controles-de-seguridad-concepto-y-tipos). La implementación de controles debería reducir el riesgo a un nivel aceptable.

#### Por su funcionamiento

- **Controles Físicos:** estas son las medidas palpables que se emplean para proteger activos físicos, como las cámaras de seguridad que monitorean un centro de datos.

- **Controles Técnicos o Lógicos:** se trata de los mecanismos implementados mediante software o hardware para proteger la información, como el uso de un antivirus.

- **Controles Administrativos o Gerenciales:** son las políticas y procedimientos que guían cómo se implementan los controles de seguridad, como una política que exige revisar los registros de seguridad semanalmente.

#### Por su propósito

- **Preventivo**: De prevenir y actúa sobre la probabilidad. Se enfoca en evitar que una amenaza o situación se materialice u ocurra.
  > *ISO 27002:2022 define este control como: El control destinado a evitar que se produzca un incidente de seguridad de la información.*

    - Una valla, que impide que personas pasen directamente hacia una zona.

    - Un firewall, que bloquea conexiones o ciertos ataques hacia una red.

    - Un IPS (Intrusion Prevention System), que detecta comportamientos anómalos en la red para detectar intrusiones en los sistemas y los previene al descartar paquetes y desconectar sesiones.

    - Control de accesos, que pueden ser físicos o lógicos; pero permiten que accedan únicamente quienes lo tienen permitido.

- **Detectivo**: De detectar y actúa sobre la probabilidad. Este tipo de control está en funcionamiento constante y emite una alarma o registro de la actividad a monitorear para que luego otro control opere.
  > ISO 27002:2022 define este control como: las acciones de control cuando se produce un incidente de seguridad de la información.

    - Una cámara de vigilancia, que registra la actividad en una zona y puede servir como evidencia, o con un guardia que observa comportamientos inusuales.

    - Un sensor de movimiento, que detecta cuando hay movimiento en cierta zona u horario donde no está permitido el acceso.

    - Un IDS (Intrusion Detection System), que detecta comportamientos anómalos en la red para detectar intrusiones en los sistemas.

    - Un análisis de vulnerabilidades, para detectar vulnerabilidades técnicas en los sistemas.

- **Correctivo**: De Corregir y actúa sobre el impacto. Suele ser más costoso y difícil de mantener por lo que se debe ser selectivo en tecnologías, activos, estrategia y frecuencia. Suele tener pérdidas de información desde la toma hasta su restauración, y para disminuir esta brecha suele aumentar el costo del control.
  > ISO 27002:2022 define este control como: los actos de control después de que se produzca un incidente de seguridad de la información.

    Este tipo de control es la última barrera que no busca reducir probabilidad, pero si impacto o el daño causado en caso tal de que una amenaza tenga éxito, sea por evasión o porque controles previos no fueron suficientes.

    - Una copia de seguridad, respaldo o backup, es el control estrella de este tipo. Si la información fue comprometida o afectada, se puede recuperar la información desde el último respaldo.

    - Personal alterno, cuando una persona no puede continuar su labor y esto puede afectar un servicio, una persona que pueda suplir parcial o totalmente puede minimizar el impacto.

    - Mitigar/Corregir vulnerabilidad, se toman acciones para reducir vulnerabilidades en los sistemas que hayan sido detectadas o explotadas.

### Desglose de Controles y Políticas: Ejemplo de un Firewall

Para ilustrar la relación entre controles y políticas, consideremos el ejemplo de un firewall, un sistema que controla el tráfico de red entre diferentes redes o dispositivos. Este tema se abordará con mayor profundidad en futuros artículos.
- **Control Técnico**: Configuración del firewall para bloquear todo tráfico entrante desde direcciones IP desconocidas y/o dudosa reputación.

- **Política de Seguridad**: Política que establece que solo los administradores de sistemas autorizados pueden realizar cambios en la configuración del firewall.

### Seleccionando controles de seguridad

Recuerda que los controles de seguridad son procedimientos y mecanismos que una organización implementa como contramedida para abordar los riesgos de seguridad de alguna manera. Esto podría incluir tratar de reducir la probabilidad de que se materialice un riesgo, minimizar el impacto del riesgo si ocurre o detectar problemas de seguridad que tienen lugar.

Ahora, pensemos por un momento en la forma en que protege su hogar. Probablemente utilice una variedad de controles de seguridad diferentes como:
- Cerraduras en sus puertas y ventanas diseñadas para mantener alejados a los intrusos, minimizando el riesgo de robo.
- Tener una alarma antirrobo diseñada para detectar intrusiones.
- Cámaras de seguridad para registrar la actividad dentro y fuera de su hogar.
- Interruptores de luz automáticos para disuadir a un ladrón simulando la actividad humana y cualquier número de otros controles.

Algunos de estos controles están diseñados para lograr el mismo propósito o, en el lenguaje de los profesionales de la seguridad, el mismo objetivo de control. Por ejemplo, tanto una alarma antirrobo como las cámaras de seguridad están diseñadas para detectar intrusos. A veces usamos más de un control para lograr el mismo objetivo porque queremos estar seguros de que permanecemos seguros incluso si un control falla. Si un ladrón logra abrir una ventana sin disparar la alarma antirrobo, aún puede ser captado por sus cámaras de seguridad. Esto se conoce como el principio de **defensa en profundidad** aplicando múltiples controles superpuestos para lograr el mismo objetivo.

## Conclusión

La Tríada CIA no es solo un conjunto de prácticas recomendadas; es un llamado a la acción para todas las organizaciones que buscan prosperar en la era digital. La implementación efectiva de estos principios en AWS se traduce en una mayor resiliencia frente a las amenazas cibernéticas. AWS ofrece una variedad de herramientas y servicios que se alinean con los principios de la Tríada, desde la administración de identidades hasta opciones robustas de almacenamiento y recuperación de datos.
El viaje hacia una seguridad robusta en la nube es un proceso continuo y en evolución. A continuación, se examinarán los conceptos de políticas de seguridad y controles que pueden reforzar aún más la postura de seguridad.
