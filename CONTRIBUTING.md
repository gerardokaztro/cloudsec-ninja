# ¿Cómo contribuir en este proyecto?
Existen muchas maneras de contribuir con [Cloud Security Ninja](http://acloudsecurity.ninja).
Escribir contenido para la página web, mantener la información contenida actualizada, [detectar problemas](https://github.com/gerardokaztro/cloudsec-ninja/issues/new) o corregirlos son formas efectivas de mejorar la comunidad.

Recuerda que, tanto contribuir a este repositorio como administrarlo, supone la aceptación de nuestro [código de conducta](https://github.com/gerardokaztro/cloudsec-ninja/blob/main/CODE_OF_CONDUCT.md).

## Informando un problema
La forma más sencilla de contribuir con la página web es informar de un error detectado. Introduce un título corto y, en el espacio para comentarios, indica la dirección web donde detectaste el problema, y añade una pequeña descripción del mismo. Recuerda que puedes **añadir imágenes**, como capturas de pantalla, arrastrando la imagen sobre el editor.

## Editando contenido
Todo el contenido de Cloud Security Ninja se encuentra en el directorio [`docs`](https://github.com/gerardokaztro/cloudsec-ninja/tree/main/docs) y está escrito en **[Markdown](https://www.markdownguide.org/)** pero también podrás hacer uso de **[MDX](https://mdxjs.com/).** 

Es importante saber que cualquier cambio que se realize sobre algún otro fichero fuera de la carpeta `docs` **no** será aprobado, ya que puede producir algun error sobre la compilación de la plataforma y son ficheros que únicamente administra el autor de este proyecto.

### Editando contenido ya existente
Es probable que el contenido de esta plataforma no sea perfecto y que muy seguramente existan mejores formas de explicar algunos de los temas. Siéntete libre de proponer una mejor forma de explicar cualquiera de nuestros temas. Puedes incluir diagramas, imágenes, vídeos, código, entre otras.

Explora esta [ruta](https://github.com/gerardokaztro/cloudsec-ninja/tree/main/docs) y localiza la página donde se encuentre el error o el contenido que quieras mejorar.

Una vez hayas encontrado el fichero, edita el contenido desde tu local o Github, corrige el error pertinente y envía el **Pull Request.**

### Añadiendo contenido nuevo
Si quieres añadir o proponer un nuevo tema, entra en la carpeta [`docs`](https://github.com/gerardokaztro/cloudsec-ninja/tree/main/docs). Y crea un archivo markdown dentro de la sub-carpeta tópico del tema que quieres introducir. Por ejemplo si quieres añadir tema sobre *Detección de amenazas* es importante que tu archivo se encuentre dentro de `docs/Detección%20de%20Amenazas`.

Luego, introduce un nombre para el nuevo archivo con el formato `titulo-del-post.md`. No incluyas ni tildes, ni espacios, ni mayúsculas. Un ejemplo de título válido es `oauth-vs-saml2.md`.

Un artículo está compuesto de dos secciones, metadatos y contenido, separadas por dos líneas vacías. Los metadatos **son obligatorios** y sirven para clasificar el artículo. Son los siguientes:

| Clave   | Descripción                                  |
|---------|----------------------------------------------|
| slug   | define la parte final de la URL que identifica una página dentro de un sitio web |
| sidebar_position    | Orden del artículo dentro del sidebar de la página |
| sidebar_label: | Nombre del artículo de como se vera reflejado en la página |

Aquí tienes un ejemplo de la [estructura de un artículo](https://raw.githubusercontent.com/gerardokaztro/cloudsec-ninja/main/docs/%F0%9F%91%8B%20Bienvenida/empezando.md).

Cuando hayas terminado de editar, envía tu "*Pull Request*"

> Intenta que el slug y sidebar_label tengan un nombre cortito. Luego en el contenido de la página puedes usar un H1 con un title mas largo.

Antes de envíar tus Pull Requests, puedes ejecutar un ambiente de prueba en tu local que te permita previsualizar los cambios. Para eso deberás hacer uso de `npm`

Teniendo en cuenta de que clonaste el repositorio y estás ubicado dentro del directorio, primero instala node.js versión minima requerida 18.x.x

Luego podrás ejecutar este comando que te permitirá tener un preview en `localhost`

```bash
npm start
```

De estar a gusto, siéntete a gusto de enviar el *Pull Request*.

> No es necesario ejecutar `npm run build` debido a que la parte del `build` ya esta automatizada en Vercel.

## Manteniendo el sitio web
Otra forma de contribuir con este proyecto es echando un [vistazo a las _issues_ abiertas](https://github.com/gerardokaztro/cloudsec-ninja/issues), escoger una y solucionarla.

## ¿Qué pasa si no tengo perfil técnico? ¿Puedo contribuir?
Si, puedes mejorar los ficheros [`README.md`](https://github.com/gerardokaztro/cloudsec-ninja/tree/main/README.md) y [`CONTRIBUTING.md`](https://github.com/gerardokaztro/cloudsec-ninja/tree/main/CONTRIBUTING.md) para que pueda ser entendible por todo tipo de perfil, a lo mejor mientras redacto estos ficheros, lo estoy haciendo desde un punto de vista muy técnico. Utiliza el mismo procedimiento explicado en la sección [Editando contenido ya existente](#editando-contenido-ya-existente) para proponer cambios en estos ficheros.

## Proceso de revisión
Cuando propongas algún cambio, GitHub creará un _pull request_. Un _pull request_ es una petición en tu nombre, con las alteraciones propuestas, que permite discutir sobre las mismas. Se realizará una revisión de la petición y GitHub te irá notificando en tu correo electrónico conforme se añadan nuevos comentarios.

Atiende los cambios que te hayan pedido y discute respetuosamente aquellos en los que no estés de acuerdo, añadiendo tus propios comentarios (podrás utilizar la [variante GitHub de Markdown](https://guides.github.com/features/mastering-markdown/) para ello).

Solucionar los problemas de un _pull request_ puede no ser el paso final. El proceso de revisión puede repetirse. Atiende las sucesivas revisiones y el equipo editorial aceptará tus cambios cuando todos los problemas se hayan resuelto.
