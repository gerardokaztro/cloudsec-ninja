# ¿Cómo contribuir en este proyecto?
Existen muchas maneras de contribuir con [Cloud Security Ninja](http://acloudsecurity.ninja).
Escribir contenido para la página web, mantener la información contenida actualizada, [detectar problemas](https://github.com/gerardokaztro/cloudsec-ninja/issues/new) o corregirlos son formas efectivas de mejorar la comunidad.

Recuerda que, tanto contribuir a este repositorio como administrarlo, supone la aceptación de nuestro [código de conducta](https://github.com/gerardokaztro/cloudsec-ninja/blob/main/CODE_OF_CONDUCT.md).

## Informando de un problema
La forma más sencilla de contribuir con la página web es informar de un error detectado. Introduce un título corto y, en el espacio para comentarios, indica la dirección web donde detectaste el problema, y añade una pequeña descripción del mismo. Recuerda que puedes **añadir imágenes**, como capturas de pantalla, arrastrando la imagen sobre el editor.

## Editando contenido
Todo el contenido de Cloud Security Ninja se encuentra en el directorio [`docs`](https://github.com/gerardokaztro/cloudsec-ninja/tree/main/docs) y está escrito en **[Markdown](https://www.markdownguide.org/)** pero también podrás hacer uso de **[MDX](https://mdxjs.com/).** 

Es importante saber que cualquier cambio que se realize sobre algún otro fichero fuera de la carpeta `docs` **no** será aprobado, ya que puede producir algun error sobre la compilación de la plataforma y son ficheros que únicamente administra el autor de este proyecto.

### Editando contenido ya existente
Es probable que el contenido de esta plataforma no sea perfecto y que muy seguramente existan mejores formas de explicar algunos de los temas. Siéntete libre de proponer una mejor forma de explicar cualquiera de nuestros temas. Puedes incluir diagramas, imágenes, vídeos, código, entre otras.

Explora esta [ruta](https://github.com/gerardokaztro/cloudsec-ninja/tree/main/docs) y localiza la página donde se encuentre el error o el contenido que quieras mejorar.

Una vez hayas encontrado el fichero, edita el contenido desde tu local o Github, corrige el error pertinente y envía el **Pull Request.**

### Añadiendo contenido nuevo
Si quieres añadir o proponer un nuevo tema, entra en la carpeta [`docs`](https://github.com/gerardokaztro/cloudsec-ninja/tree/main/docs).

Introduce un nombre para el nuevo archivo con el formato `AAAA-MM-DD-titulo-del-post.md` (donde `AAAA-MM-DD` es la fecha en la que te gustaría publicar el post). No incluyas ni tildes, ni espacios, y si no estás seguro sobre la fecha, pon la de hoy. Un ejemplo de título válido es `2017-09-03-domiciliacion-cuotas.md`.

Un artículo está compuesto de dos secciones, metadatos y contenido, separadas por dos líneas vacías. Los metadatos **son obligatorios** y sirven para clasificar el artículo. Son los siguientes:

| Clave   | Descripción                                  |
|---------|----------------------------------------------|
| Title   | Título del artículo                          |
| Date    | Fecha de publicación en formato `AAAA-MM-DD` |
| Summary | Resúmen o extracto del artículo              |
| Author  | Nombre del autor                             |

El contenido se ha de escribir utilizando [Markdown](https://daringfireball.net/projects/markdown/syntax). Un [ejemplo de artículo](https://raw.githubusercontent.com/python-spain/web/master/content/2017-09-03-domiciliacion-cuotas.md) sería:

```md
Title: Ya se puede domiciliar la cuota de Python España
Date: 2017-09-03
Summary: Los socios y las socias lleváis tiempo pidiendo poder domiciliar la cuota de la Asociación. Tras mucho esfuerzo, al fin podemos comunicaros que ¡ya se puede hacer!
Author: Yamila Moreno


Los socios y las socias lleváis tiempo pidiendo poder domiciliar la cuota de la Asociación. Tras mucho esfuerzo, al fin podemos comunicaros que ¡ya se puede hacer!

Hasta hace poco la asociación estaba atada a un banco con condiciones draconianas para varias operaciones, entre ellas la domiciliación. Desde la Junta Directiva no veíamos bien que de los 30€ de la cuota, una parte significativa se fuera para pagar la comisión del banco.
```

Cuando hayas terminado de editar, haz click sobre el botón "_Propose new file_"

## Manteniendo el sitio web
Otra forma de contribuir con este proyecto es echando un [vistazo a las _issues_ abiertas](https://github.com/gerardokaztro/cloudsec-ninja/issues), escoger una y solucionarla.

## ¿Qué pasa si no tengo perfil técnico? ¿Puedo contribuir?
Si, puedes mejorar los ficheros [`README.md`](https://github.com/gerardokaztro/cloudsec-ninja/tree/main/README.md) y [`CONTRIBUTING.md`](https://github.com/gerardokaztro/cloudsec-ninja/tree/main/CONTRIBUTING.md) para que pueda ser entendible por todo tipo de perfil, a lo mejor mientras redacto estos ficheros, lo estoy haciendo desde un punto de vista muy técnico. Utiliza el mismo procedimiento explicado en la sección [Editando contenido ya existente](#editando-contenido-ya-existente) para proponer cambios en estos ficheros.

## Proceso de revisión
Cuando propongas algún cambio, GitHub creará un _pull request_. Un _pull request_ es una petición en tu nombre, con las alteraciones propuestas, que permite discutir sobre las mismas. El equipo editorial realizará una revisión de la petición y GitHub te irá notificando en tu correo electrónico conforme se añadan nuevos comentarios.

Atiende los cambios que te hayan pedido y discute cívicamente aquellos en los que no estés de acuerdo, añadiendo tus propios comentarios (podrás utilizar la [variante GitHub de Markdown](https://guides.github.com/features/mastering-markdown/) para ello).

Recuerda que puedes editar el fichero directamente desde el navegador, situándote en la página del _pull request_, pestaña "_Files changed_", y haciendo click en el botón etiquetado "_Change this file using the online editor_" y representado con el icono del lápiz.

Solucionar los problemas de un _pull request_ puede no ser el paso final. El proceso de revisión puede repetirse. Atiende las sucesivas revisiones y el equipo editorial aceptará tus cambios cuando todos los problemas se hayan resuelto.

Recuerda que tanto los editores y administradores del repositorio, como tú, somos parte de esta comunidad y estamos sujetos al [código de conducta](https://github.com/python-spain/web/blob/master/CODE_OF_CONDUCT.md#code-of-conduct). Informa de los abusos que observes en las _pull request_ (incluso cuando no sean las tuyas) en contacto2018@es.python.org
