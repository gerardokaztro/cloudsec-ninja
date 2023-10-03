---
sidebar_label: 'Cómo ser parte'
---

# 🗣️ Únete, sé parte y deja huella
¿Te gustaría ser parte del equipo de co-autores para este proyecto open-source? Es muy sencillo, solo sigue las instrucciones a continuación y aporta a la comunidad parte de tu conocimiento y experiencia, ante cualquier duda puedes ponerte en contacto con el autor.

## Instrucciones para contribuidores

Esta plataforma esta basada en [Docusaurus](https://docusaurus.io) un generador de sitios estáticos hecho en React, una de las principales bibliotecas de JavaScript, como biblioteca de interfaz de usuario para la creación de páginas.

Y se ha utilizado [Vercel](https://vercel.com/) como hosting debido a su capacidad de desplegar, gestionar y escalar aplicaciones y sitios web. Además que Vercel proporciona una amplia gama de funciones, como despliegues automatizados, entre otras funciones interesantes.

Con esto, la fase `build` se encuentra automatizada al momento de merguear los cambios a la rama `main`,

> Asegúrate de echarle un vistazo a nuestra [guía para contribuidores](https://github.com/gerardokaztro/cloudsec-ninja/blob/main/CONTRIBUTING.md) antes de empezar como contributor.

### Pre requisitos

- Tener instalado Git
- Tener instalado Node.js v18.x.x o superior
- Forkear este [repositorio](https://github.com/gerardokaztro/cloudsec-ninja)
- Despues de tener el repositorio en nuestra cuenta personal de Github, clonarlo
```bash
$ git clone https://github.com/<tu-nombre-de-usuario>/cloudsec-ninja.git
```
- Dentro de la carpeta local que genera, comprobar la URL del repositorio:
```bash
$ git remote -v
```
- Antes de realizar modificaciones agregar la URL del repositorio **original** del proyecto:
```bash
$ git remote add upstream https://github.com/gerardokaztro/cloudsec-ninja
```
- Comprobar:
```bash
$ git remote -v
```
- Antes de empezar a trabajar, obtener los últimos cambios del repo Original:
```bash
$ git pull -r upstream main
```
- Crear rama `developement` en tu local
```bash
$ git checkout -b development
```
- Obtén un preview de la plataforma en tu localhost
```bash
$ npm start
```

> Esto permite obtener una previsualización de tus cambios en tu `localhost`
<browser url="localhost:3000">
  <img src={require('@site/docs/bienvenida/img/preview_localhost.png').default}/>
</browser>

- Cambia a la carpeta `docs` y [añade tu contenido](#cómo-añadir-mi-contenido)
```bash
$ cd docs/
```
- Envía tus cambios al repositorio
```bash
$ git push origin development
```

Finalmente, crea un **Pull Request** desde tu rama `development` a `main` del repositorio original.

> Esto será revisado por los *code owners* y presta atención por si dejan algún comentario que debas revisar y responder, para que decidan aprobar tu cambio. 


##### Cómo añadir mi contenido

Todo contenido que deseen añadir como contribuidores, debe estar alineado a cualquiera de las secciones o dominios que se presentan en [Ruta de Aprendizaje](/docs/bienvenida/ruta-de-aprendizaje).

Sin embargo, si quieres proponer un nuevo tema asegúrate de contactar con el autor para que pueda revisar tu nueva propuesta y realice una actualización en el roadmap.

1. Si vas añadir contenido dentro de un archivo existente, entonces ubica el archivo y empeza a escribir.

  1.1 Por ejemplo, quieres añadir un video sobre AWS Control Tower, o quizas hacer una correción sobre una característica mal explicada, entonces la ruta seria [`docs/gobierno/aws-control-tower.md`](https://github.com/gerardokaztro/cloudsec-ninja/blob/development/docs/gobierno/aws-control-tower.md)

2. Si vas a añadir contenido sobre una página aun no creada y ya validaste que forma parte del roadmap, entonces puedes crearla tu mismo, asi:

  2.1 Por ejemplo si quieres escribir sobre AWS Organization, la ruta seria [`docs/gobierno/`](https://github.com/gerardokaztro/cloudsec-ninja/blob/development/docs/gobierno/)

  2.2 Luego, crear el nuevo fichero, y colocar un nombre con el formato `titulo-del-post.md` o `titulo-del-post.md`. No incluyas ni tildes, ni espacios, ni mayúsculas, ni underscope (_). Un ejemplo de título válido es `aws-organizations.md` o `awsorganizations.md` o `organizations.md`.

3. Un artículo está compuesto de dos secciones, metadatos y contenido, separadas por dos líneas vacías. Los metadatos **son obligatorios** y sirven para clasificar el artículo y son los siguientes:

  | Clave   | Descripción                                  |
  |---------|----------------------------------------------|
  | sidebar_label: | Nombre del artículo de como se verá reflejado en el sidebar de la página |
  | tags: | Array que contiene las etiquetas para clasificar el contenido |

> 💡 Usa este artículo como referencia, contiene la [estructura de un artículo](https://raw.githubusercontent.com/gerardokaztro/cloudsec-ninja/development/docs/fundamentos-de-tecnologia/redes.md) que debes seguir al momento de escribir tu contenido.
