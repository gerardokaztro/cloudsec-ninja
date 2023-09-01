---
slug: /empezando
sidebar_position: 5
sidebar_label: 'Empezando'
---
import ReactPlayer from 'react-player'

# 🏁 Cómo iniciar este lindo viaje

Lo primero, es hacer un `git clone` al [repositorio en Github](https://github.com/gerardokaztro/cloudsec-ninja) en una carpeta de tu local. Esto es para que puedas tener todo el código de los ejercicios que se realizarán en cada tema.

```bash
$ git clone https://github.com/gerardokaztro/cloudsec-ninja.git
```

Todo el código de los ejercicios que encuentres en cada tema estará ubicado en la carpeta `code` dentro de la carpeta de cada módulo, por ejemplo: `./aws/code` o `./iam/code`

<browser url="acloudsecurity.ninja">
  <img src={require('@site/static/img/social-card.png').default}/>
</browser>

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

Si tienes dudas sobre alguno de los ejercicios, o alguna duda sobre cualquier de los temas explicados, recuerda que tenemos una comunidad en [Discord](https://discord.gg/cV7syyA5ae), donde podrás dejar todas tus dudas y ayudar a responder las consultas de los demás.