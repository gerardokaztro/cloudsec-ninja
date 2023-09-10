---
sidebar_label: 'Empezando'
---
import ReactPlayer from 'react-player'

# 🏁 Cómo iniciar este lindo viaje

## Instrucciones para end-user

Lo primero, es hacer un `git clone` a este [repositorio](https://github.com/gerardokaztro/cloudsec-ninja) en una carpeta de tu local. Esto es para que puedas tener todo el código de los ejercicios que se realizarán en cada tema.

```bash
$ git clone https://github.com/gerardokaztro/cloudsec-ninja.git
```

> Si te gusta el contenido que ves aquì, no dudes en regalarle una 🌟 al repo

Todo el código de los ejercicios que encuentres en cada tema estará ubicado en la carpeta `code` dentro de la carpeta de cada módulo, por ejemplo: `docs/fundamentos/code` o `docs/cloud/code` luego sigue las instrucciones del laboratorio.

## Instrucciones para contributor

Esta plataforma esta basada en [Docusaurus](https://docusaurus.io) un generador de sitios estáticos hecho en React, una de las principales bibliotecas de JavaScript, como biblioteca de interfaz de usuario para la creación de páginas.

Y se ha utilizado [Vercel](https://vercel.com/) como hosting debido a su capacidad de desplegar, gestionar y escalar aplicaciones y sitios web. Además que Vercel proporciona una amplia gama de funciones, como despliegues automatizados, entre otras funciones interesantes.

Con esto, la fase `build` se encuentra automatizada al momento de merguear los cambios a la rama `main`,

> Asegúrate de echarle un vistazo a nuestra [guía para contribuidores](https://github.com/gerardokaztro/cloudsec-ninja/blob/main/CONTRIBUTING.md) antes de empezar como contributor.

### Pre requisitos

- Tener instalado Git
- Tener instalado Node.js version 18.x.x o superior
- Clonar este repositorio
```bash
$ git clone https://github.com/gerardokaztro/cloudsec-ninja.git
```
- Crear rama `developement` en tu local y [agrega tus cambios](https://github.com/gerardokaztro/cloudsec-ninja/tree/main#-a%C3%B1ade-tu-contenido)
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

- Envia tus cambios a la rama `development` del repositorio
```bash
$ git push origin development
```

Finalmente, crea un **Pull Request** a `main`

#### Bonus

En algunos casos, tendras referencias de cómo debes tener el código
```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

Algunos de los temas de esta plataforma, tendran secciones explicadas en formato de vídeo.

<ReactPlayer controls url='https://www.youtube.com/watch?v=B2FNRK3gZWE' /> <br/>

Si tienes dudas sobre alguno de los ejercicios, o alguna duda sobre cualquier de los temas explicados, recuerda que tenemos una comunidad en [Discord](/docs/bienvenida/comunidad.md), donde podrás dejar todas tus dudas y ayudar a responder las consultas de los demás.
