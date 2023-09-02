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
    Visita la <b><a href="https://acloudsecurity.ninja/docs">📚 Documentación</a></b> para inciar tu carrera como Cloud Security Engineer.
</p>

[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCmWuXyjXOJOpikS4MHmJAcQ?style=social)](https://youtube.com/channel/UCmWuXyjXOJOpikS4MHmJAcQ?sub_confirmation=1)
[![Discord](https://img.shields.io/discord/1143323924172652705?style=social&label=Discord&logo=discord)](https://discord.gg/cV7syyA5ae)
[![Twitter Follow](https://img.shields.io/twitter/follow/gerardokaztro?style=social)](https://twitter.com/gerardokaztro)
![GitHub Followers](https://img.shields.io/github/followers/gerardokaztro?style=social)
![GitHub Repo Stars](https://img.shields.io/github/stars/gerardokaztro?style=social)

<h2 align="center">
  Cómo iniciar este lindo viaje 🚀
</h2>

### 👨‍💻 Sigue estas instrucciones si eres end-user
Lo primero, es hacer un `git clone` a este [repositorio](https://github.com/gerardokaztro/cloudsec-ninja) en una carpeta de tu local. Esto es para que puedas tener todo el código de los ejercicios que se realizarán en cada tema.

```bash
git clone https://github.com/gerardokaztro/cloudsec-ninja.git
```

Todo el código de los ejercicios que encuentres en cada tema estará ubicado en la carpeta `code` dentro de la carpeta de cada módulo, por ejemplo: `docs/aws/code` o `docs/iam/code` luego sigue las instrucciones del laboratorio.

> Si te gusta el contenido que ves aquì, no dudes en regalarle una 🌟 al repo

### 👷‍♀️ Sigue estas instrucciones si eres contributor
Esta plataforma esta basada en [Docusaurus](https://docusaurus.io) un generador de sitios estáticos hecho en React, una de las principales bibliotecas de JavaScript, como biblioteca de interfaz de usuario para la creación de páginas.

Y se ha utilizado [Vercel](https://vercel.com/) como hosting debido a su capacidad de desplegar, gestionar y escalar aplicaciones y sitios web. Además que Vercel proporciona una amplia gama de funciones, como despliegues automatizados, entre otras funciones interesantes.

Con esto, la fase `build` se encuentra automatizada al momento de merguear los cambios a la rama `main`,

> Asegúrate de echarle un vistazo a nuestra [guía para contribuidores](https://github.com/gerardokaztro/cloudsec-ninja/blob/main/CONTRIBUTING.md) antes de empezar como contributor.

#### Pre requisitos

- Tener instalado Git
- Tener instalado Node.js version 18.x.x o superior
- Clonar este repositorio
```bash
git clone https://github.com/gerardokaztro/cloudsec-ninja.git
```
- Crear rama `developement` en tu local
```bash
git checkout -b development
```
- Obtén un preview de la plataforma en tu localhost
```bash
npm start
```
##### Añade tu contenido
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

## 🚨 Descargo de responsabilidad
> **NO** ejecute ninguno de los laboratorios junto con sus entornos e infraestructura de producción. Recomendamos ejecutar esto en un entorno seguro y aislado.

> Esta plataforma **NO** ofrece cuentas sandbox ni se hace responsable por los gastos que pueden llegar a generar los laboratorios que se compartan aquí.

> Recuerda que esta plataforma es gratuita y usted asume toda la responsabilidad de los recursos que utilice para el desarrollo de los ejercicios.

## ✋ Reglas de la casa
[Código de conducta](https://github.com/gerardokaztro/cloudsec-ninja/blob/main/CODE_OF_CONDUCT.md)

## 📜 Licencia
[GNU General Public License v3.0](https://github.com/gerardokaztro/cloudsec-ninja/blob/main/LICENSE)