---
tags: [nivel 100, IaC]
---

# 🏗️ Introducción a Infraestructura como Código

La infraestructura como código (IaC) (en inglés: Infrastructure as Code) es el proceso de gestión y aprovisionamiento de recursos informáticos como máquinas virtuales, repositorios de almacenamientos, topologías de red, y muchos mas etcéteras, que se despliega a través de archivos de definición entendibles por máquina, en lugar de configurarlas y desplegarlas de forma física o usando herramientas de configuración interactiva como una consola de administración basada en web. Estas definiciones pueden estar almacenadas en un sistema de control de versiones como Github, Gilab, BitBucket, etc.

## Tipos de enfoques

Cuando se declara la definición de una infraestructura mendiante la escritura de código, se utilizan dos enfoques de lenguaje:
- Lenguaje Declarativo: 
- Lenguaje Imperactivo: 


![IaC - Flujo de trabajo](https://www.collidu.com/media/catalog/product/img/a/1/a11420463ca9368a180fec1f058eed07a0f3bfd93ec819a0e6fd8e5ecbcb82e5/infrastructure-as-code-slide1.png)

## Herramientas

Hay muchas herramientas que cumplen con las capacidades de automatización de la infraestructura y utilizan IaC. En términos generales, cualquier marco o herramienta que realice cambios o configure la infraestructura de forma declarativa o imperativa basada en un enfoque programático puede considerarse IaC. Tradicionalmente, se utilizaban herramientas de automatización de servidores (ciclo de vida) y de gestión de la configuración para lograr IaC. Ahora las empresas también utilizan herramientas de automatización de la configuración continua o marcos de IaC independientes, como CloudFormation de AWS o [Terraform de Hashicorp](/docs/fundamentos/terraform) entre otras.

## Relacion con DevOps
El IaC puede ser un atributo clave para permitir las mejores prácticas en los DevOps - Los desarrolladores (Dev) se involucran más en la definición de la configuración y los equipos de operaciones (Ops) se involucran más temprano en el proceso de desarrollo.

Las herramientas que utilizan IaC aportan visibilidad al estado y la configuración de los servidores y, en última instancia, proporcionan la visibilidad a los usuarios dentro de la empresa, con el objetivo de reunir a los equipos para maximizar sus esfuerzos. IaC tiene como objetivo reducir la complejidad que mata la eficiencia de la configuración manual. La automatización y la colaboración se consideran puntos centrales en DevOps; las herramientas de automatización de la infraestructura a menudo se incluyen como componentes de una cadena de herramientas de DevOps.

>  *Fuente Wikipedia: [Infraestructura como código](https://es.wikipedia.org/wiki/Infraestructura_como_c%C3%B3digo)*

Aprende mas sobre Iac leyendo este [blogpost](https://www.atlassian.com/es/microservices/cloud-computing/infrastructure-as-code) escrito por *Ian Buchalan*.
