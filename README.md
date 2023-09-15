<p align="center">
  <a href="https://acloudsecurity.ninja">
    <img alt="Cloud Security Ninja" src="static/img/portada_readme.png" />
  </a>
</p>

<h1 align="center">
  Bienvenido/a 👋
</h1>

<p align="center">
   Cloud Security Ninja es una plataforma de aprendizaje de Seguridad en nube que ha sido diseñada para ayudar a quienes deseen dar sus primeros pasos en el apasionante mundo de la Ciberseguridad y que esto les permita generar nuevas oportunidades profesionales en una área con muchísima demanda laboral.
</p>

<p align="center">
    Visita la <b><a href="https://acloudsecurity.ninja/docs/index">📚 Documentación</a></b> para inciar tu carrera como Cloud Security Engineer.
</p>

[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCmWuXyjXOJOpikS4MHmJAcQ?style=social)](https://youtube.com/channel/UCmWuXyjXOJOpikS4MHmJAcQ?sub_confirmation=1)
[![Discord](https://img.shields.io/discord/1143323924172652705?style=social&label=Discord&logo=discord)](https://discord.gg/cV7syyA5ae)
[![Twitter Follow](https://img.shields.io/twitter/follow/gerardokaztro?style=social)](https://twitter.com/gerardokaztro)
![GitHub Followers](https://img.shields.io/github/followers/gerardokaztro?style=social)
![GitHub Repo Stars](https://img.shields.io/github/stars/gerardokaztro?style=social)

<h2 align="center">
  Cómo iniciar este lindo viaje 🚀
</h2>

### 👨‍💻 Sigue estas instrucciones si eres usuario
Lo primero, es hacer un `git clone` a este [repositorio](https://github.com/gerardokaztro/cloudsec-ninja) en una carpeta de tu local. Esto es para que puedas tener todo el código de los ejercicios que se realizarán en cada tema.

```bash
$ git clone https://github.com/gerardokaztro/cloudsec-ninja.git
```

> Si te gusta el contenido que ves aquí, no dudes en regalarle una 🌟 al repo

Todo el contenido de las diferentes secciones de aprendizaje de la plataforma se encuentran dentro de la carpeta `docs`. Algunas secciones tendran código que podras usar para realizar los laboratorios, podrñas encontralo dentro de ruta carpeta `code`. Por ejemplo: `docs/fundamentos/code` o `docs/cloud/code`.

```
.docs
├── cloud
│   ├── code/
│   ├── img/
│   └── .
├── fundamentos
│   ├── code/
│   ├── img/
│   └── .
└── gobierno
    ├── code/
    ├── img/
    └── .
```

### 👷‍♀️ Sigue estas instrucciones si eres contribuidor
Esta plataforma esta basada en [Docusaurus](https://docusaurus.io) un generador de sitios estáticos hecho en React, una de las principales bibliotecas de JavaScript, como biblioteca de interfaz de usuario para la creación de páginas.

Y se ha utilizado [Vercel](https://vercel.com/) como hosting debido a su capacidad de desplegar, gestionar y escalar aplicaciones y sitios web. Además que Vercel proporciona una amplia gama de funciones, como despliegues automatizados, entre otras funciones interesantes.

Con esto, la fase `build` se encuentra automatizada al momento de merguear los cambios a la rama `main`,

> Asegúrate de echarle un vistazo a nuestra [guía para contribuidores](https://github.com/gerardokaztro/cloudsec-ninja/blob/main/CONTRIBUTING.md) antes de empezar como contributor.

#### 🎮 Pre requisitos

- Tener instalado Git
- Tener instalado Node.js version 18.x.x o superior
- Clonar este repositorio
```bash
git clone https://github.com/gerardokaztro/cloudsec-ninja.git
```
- Crear rama `developement` en tu local y [agrega tus cambios](#-añade-tu-contenido)
```bash
git checkout -b development
```
- Obtén un preview de la plataforma en tu localhost
```bash
npm start
```

> Esto permite obtener una previsualización de tus cambios en tu `localhost`

- Cambia a la carpeta `docs`
```bash
$ cd docs/
```
- Ubica la sección donde quieras agregar tus cambios y envíalos a la rama `development` del repositorio
```bash
$ git push origin development
```

Finalmente, crea un **[Pull Request](https://github.com/gerardokaztro/cloudsec-ninja/compare/main...development)** a `main`.
Esto será revisado por los *code owners* y presta atención por si dejan algún comentario que debas revisar antes de aprobar tu cambio. 

##### 📝 Añade tu contenido
Dirígete hacia la carpeta [`docs/`](https://github.com/gerardokaztro/cloudsec-ninja/tree/main/docs) y crea un archivo markdown dentro de la sub-carpeta del tema en el que quieras contribuir. Por ejemplo si quieres añadir tema sobre *Detección de amenazas* es importante que tu archivo se encuentre dentro de `docs/deteccion/`.

Luego, introduce un nombre para el nuevo archivo con el formato `titulo-del-post.md`. No incluyas ni tildes, ni espacios, ni mayúsculas. Un ejemplo de título válido es `oauth-vs-saml2.md`.

Un artículo está compuesto de dos secciones, metadatos y contenido, separadas por dos líneas vacías. Los metadatos **son obligatorios** y sirven para clasificar el artículo y son los siguientes:

| Clave   | Descripción                                  |
|---------|----------------------------------------------|
| sidebar_label: | Nombre del artículo de como se vera reflejado en la página |
| tags: | Array que contiene las etiquetas para clasificar el contenido|

> Intenta que el slug y sidebar_label tengan un nombre cortito. Luego en el contenido de la página puedes usar un H1 con un title mas largo.

Aquí tienes un ejemplo de la [estructura de un artículo](https://raw.githubusercontent.com/gerardokaztro/cloudsec-ninja/main/docs/Bienvenida/empezando.md).

<h2 align="center">
  Descargo de responsabilidad 🚨
</h2>

> **NO** ejecute ninguno de los laboratorios junto con sus entornos e infraestructura de producción. Recomendamos ejecutar esto en un entorno seguro y aislado.

> Esta plataforma **NO** ofrece cuentas sandbox ni se hace responsable por los gastos que pueden llegar a generar los laboratorios que se compartan aquí.

> Recuerda que esta plataforma es gratuita y usted asume toda la responsabilidad de los recursos que utilice para el desarrollo de los ejercicios.

<h2 align="center">
  Reglas de la casa ✋
</h2>

[Código de conducta](https://github.com/gerardokaztro/cloudsec-ninja/blob/main/CODE_OF_CONDUCT.md)

<h2 align="center">
  Licencia 📜
</h2>

[GNU General Public License v3.0](https://github.com/gerardokaztro/cloudsec-ninja/blob/main/LICENSE)
