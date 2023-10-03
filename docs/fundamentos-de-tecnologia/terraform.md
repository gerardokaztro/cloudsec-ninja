---
sidebar_label: 'Fundamentos de Terraform'
tags: [nivel 100, terraform, iac]
---
import ReactPlayer from 'react-player'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fundamentos de terraform

En este vídeo, cortito y al pie, tienes la explicación de que ¿qué es terraform?
<ReactPlayer controls url='https://www.youtube.com/watch?v=Xc9Vb2ERdaw' width="auto" /> <br/>

## Sintaxis Haschicorp Configuration Language (HCL)

La estructura HCL de terraform es muy sencilla de entender, se expresa en formato `json`
```json
<block name> <resource type> <resource name> {
	key1 = value1 //argumento
	key2 = value2 //argumento
}
```

Vamos a entender la estructura HCL
```json
resource "local_file" "pet" { // "local" -> representa al provider y "file" -> el recurso de ese provider
	filename = "/root/pets.txt" // dentro de los {} vienen todos los argunmentos que miraremos mas adelante
	content = "Hola mundo" // cabe decir, que cada provider, maneja sus propios argumentos
}
```

Un ejemplo de un recurso de bloque terraform usando como provider a `ÀWS`
```json
resource "aws_vpc" "example" { //"aws" -> representa el provider y "vpc" -> el recurso a utilizar
  cidr_block = "10.0.0.0/16" // argumento del recurso a desplegar
}
```
💡 Interpretamos el siguiente bloque de recurso, como un bloque que va a declarar la configuracion de un recursos llamado VPC del proveedor AWS.

## Usando Providers en Terraform

Los providers en terraform son un plugin que habilita la interacción con una API, esto incluye proveedores de nube como AWS, GCP, Azure entra oras, como proveedores de Software-as-a-Services. En esta [guía](https://registry.terraform.io/browse/providers) encontrarás todos los providers que puedes usar en terraform.

El primer comando que se usa para desplegar los recursos declarados en nuestros archivos de terraform es `terraform init`. Con este comando se descargan el o los providers de una ruta similar a esta: [registriy.terraform.io/hashicorp/local](https://registry.terraform.io/providers/hashicorp/local/latest) donde [registry.terraform.io](https://registry.terraform.io/) es el **hostname**, `hashicorp` el **Organizational Namespace** y `local` el **type**.

Ejemplo de `terraform init`

![terraform init](https://k21academy.com/wp-content/uploads/2020/12/terraform-inittttt.webp)

### Configuración del directorio

Antes de continuar, estos son algunos de los archivos terraforms que debes conocer:

- `main.tf`  archivo de configuración principal que contiene la definición de los recursos.
- `variables.tf`  contiene la declaración de las variables que son leídas por los recursos declarados en main.tf
- `outputs.tf`  contiene la salida de los recursos, cada recursos en terraform genera un id del recurso o de sus argumentos.
- `provider.tf`  contiene la definición de los providers.
- `terraform.tfvars` contiene la definición de tus variables que son leidas desde el `variables.tf`. Usar este archivo es una buena práctica.

- `locals.tf`  son valores con nombre que se pueden asignar y utilizar en su código. Sirve principalmente para reducir la duplicación dentro del código Terraform. 

- `data.tf`  este objeto permite extraer y obtener datos desde diversas fuentes locales o de servicios externos para ser usados en los archivos de Configuración de Terraform

⚠️ No te preocupes por entender el qué y cómo de los archivos terraform, los veremos a mas detalle en adelante. Pero, si familizarizate con los nombres de dichos archivos, ya que los verás en cualquier proyecto terraform.

### Trabajar con múltiples providers

Puedes hacer uso de múltiples providers en tu proyecto terraform. Por ejemplo puedes tener un un proyecto donde debas hacer uso de proveedores como AWS, Okta y Docker.

Para lograrlo, debes especificar todos estos proveedores en el archivo `providers.tf`. En este archivo es donde va la configuración de todos los proveedores que usarás para tu proyecto.

Entonces la configuración de los recursos de esos proveedores, podría ir en un archivo llamado `main.tf` o algún otro (mas adelante entenderás el porqué) y desde aquí busca obtener la información del proveedor al leer tu archivo `providers.tf`.

Ejemplo de tu estructura de archivos terraform hasta este punto:

<Tabs>
  <TabItem value="main" label="main.tf">

```json
resource "local_file" "pet" {
  filename = "/root/pets.txt"
  content = "Hola mundo"
}

resource "random_pet" "my-pet" {
  prefix = "Mrs"
  separator = "."
  length = "1"
}
```
  </TabItem>
  <TabItem value="provider" label="providers.tf">

```json
terraform {
  required_providers {
    local = {
      source = "hashicorp/local"
      version = "2.4.0"
    }

	random = {
      source = "hashicorp/random"
      version = "3.5.1"
    }
  }
}
```
  </TabItem>
</Tabs>

☝️ Si te fijas, en main.tf estamos declarando dos recursos de dos providers diferentes, entonces en nuestro `providers.tf` tenemos la obligación de mencionarlo.

### Cómo instalar terraform

Esta [guía](https://developer.hashicorp.com/terraform/downloads) contiene la instalación de terraform en tu local para cualquier sistema operativo.

## Usando variables de entrada

Las variables de entrada en terraform nos permiten almacenar valores en un archivo llamado `variables.tf` que son instanciadas desde otro archivo como `main.tf` u otro de configuración de recursos.

Por ejemplo, puedes tener un archivo de configuracion con los valores fijos o seteados dentro del código, así:
```json
resource "aws_instance" "webserver" { // en este recursos intentamos crear una instancia EC2 en AWS
  ami = "ami-123" // aquií indicamos cual es el ami-id que necesitamos para nuestra instancia
  instance_type = t2.micro // aquí el tamaño de dicha instancia
}
```
Sin embargo, NO es la mejor práctica.

Entonces, ¿cómo mejoramos ese código?, aquí es donde entra en juego las variables de entorno:

<Tabs>
  <TabItem value="main" label="main.tf">

```json
resource "aws_instance" "webserver" {
  ami = var.ami
  instance_type = var.instance_type
}
```
  </TabItem>
  <TabItem value="variables" label="variables.tf">

```json
variable "ami" {
  default = "ami-123"
}

variable "instance_type" {
  default = "t2.micro"
}
```
  </TabItem>
  <TabItem value="provider" label="providers.tf">

```json
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.19.0"
    }
  }
}
```
  </TabItem>
</Tabs>


### Entendiendo las variables

💡 Se pueden aplicar las variables de diferentes maneras:
- Hacer el `terraform apply` y luego ir escribiendo el valor de cada variable en la terminal. Suponiendo que no especificaste algun archivo con dichas variables
- Se puede aplicar `export TF_VAR_nombrevariable="Valor de variable"` en tu local y al momento de hacer el `terraform apply` Terraform tomara el valor de las variables que exportaste en tu local
- Hacer uso del archivo `terraform.tfvars`

Se pueden usar diferentes tipos de variables en terraform
- `string` 
- `number`
- `bool`
- `any`

- `list`
```json
resource "random_pet" "my-pet"{
	prefix = var.prefix[0] // obtiene el valor "Mr"
}

variable "prefix" {
// al ser un array, cada valor se posiciona en un index:
			//  0      1     2    
	default = ["Mr", "Mrs", "Sir"]
	type = list(string) // el type de list puede ser string o number
}
```

- `map`
```json
resource "local_file" "my-pet"{
	filename = "/root/pets.txt"
	content = var.file-content["statement2"] //indicas el key para tomar solo su value
}

variable "file-content" { 
	type = map(string) // el type del map puede ser string o number
	default = {
		"statement1" = "Hola mundo"
		"statement2" = "Aprende a usar terraform"
	}
}
```

## Atributos de recursos

Cada bloque de recurso nos permite crear un recurso, por ejemplo, con el recurso `random_pet` buscamos crear un recurso para `my-pet` que puede resultar en "Mr. Cat".

Dicho valor, se almacena en un id dentro de terraform, el cual podemos instanciar para poder usar en algún otro recurso:
```json
resource "local_file" "pet" {
	filename = var.filename
	// obtenemos el valor del recurso que se almacena en random_pet.my-pet
	content = "Mi mascota favorita es ${random_pet.my-pet.id}" 
}

resource "random_pet" "my-pet" {
  prefix = var.prefix
  separator = var.separator
  length = var.length
}
```

## Variable de salida

Nos permite exportar el valor de un bloque de recurso
```json
resource "local_file" "pet" {
	filename = var.filename
	content = "Mi mascota favorita es ${random_pet.my-pet.id}" 
}

resource "random_pet" "my-pet" {
  prefix = var.prefix
  separator = var.separator
  length = var.length
}

output pet-name {
value = random_pet.my-pet.id
description = "Obtiene el valor de Pet ID generado por el recurso random_pet"
}
```

## Introducción a terraform State

El estado de terraform es una propiedad que le permite a Terraform saber cuales son los recursos de la infraestructura deseada que declaras en los archivos de configuración y la compara con la infraestructura real en el proveedor con el que estes trabajando.

Con el comando `terraform plan` puedes verificar el resultado de ese versus, para saber con exactitud cuales son los cambios a realizar.

Sin embargo, es cuando se ejecuta el `terraform apply` donde se escribe todo la información de este estado dentro de un archivo llamado `terraform.state` el cual no debes eliminar ni modificar.

Dicha información es almacenada en un archivo.

Por temas de seguridad, cuando la configuración de tus recursos contiene datos sensibles, estos pueden ser legibles en ese archivo local por lo que se recomienda tener un state almacenado en un repositorio remoto como Terraform Cloud o un Bucket S3.

## Algunos comandos terraform

- `terraform validate`
- `terraform fmt`
- `terraform show`
- `terraform providers`
- `terraform providers mirror <path>` copia la info de los providers en algun archivo de otra ruta
- `terraform output`
- `terraform output <nombre-recurso>`
- `terraform refresh` muestra los cambios, similar al `terraform plan`
- `terraform graph` crea una representacion visual de tus archivos de configuración

## Reglas de ciclo de vida

Estas reglas te permiten personalizar el comportamiento después de la ejecución de un `terraform apply`

Existen 3 tipos de Lifecycle Rules:
- `create_before_destroy` el cual crea el recurso primero y destruye el antiguo después
- `prevent_destroy` el cual previene la destrucción de un recurso, no aplica para el `terraform destroy`
- `ignore changes` el cual ignora cambios en los atributos de recursos que pueden aplicar a algunos o todos

```json
resource "local_file" "pet" {
	filename = var.filename
	content = "Mi mascota favorita es ${random_pet.my-pet.id}"

	lifecycle {
		create_before_destroy = true
	}
}

resource "random_pet" "my-pet" {
  prefix = var.prefix
  separator = var.separator
  length = var.length

	lifecycle {
		prevent_destroy = true
	}
}

resource "local_file" "pet" {
	filename = var.filename
	content = "Mi mascota favorita es ${random_pet.my-pet.id}"
	tags = {
		Name = "ProjectA-webserver"
	}
//ignora cambios en atributos especificos
	lifecycle {
		ignore_changes = [
			filename,
			tags
		]
	}
}

resource "local_file" "pet" {
	filename = var.filename
	content = "Mi mascota favorita es ${random_pet.my-pet.id}"
	tags = {
		Name = "ProjectA-webserver"
	}
// ignora cualquier cambio en cualquiera de los atributos
	lifecycle {
		ignore_changes = all
	}
}
```

## Datasources

Los bloques data sources nos permiten leer infraestructura existente, a diferencia de los bloques de recursos que crean, actualizan y destruyen infraestructura.

```json
resource "local_file" "pet" {
	filename = var.filename
	content = data.local_file.dog.content
}

data "local_file" "dog" {
	filename = "/root/dog.txt"
}
```

## Count & For-each

El meta-argumento **count** te permite poder recorrer los elementos dentro de un array y crear la cantidad de recursos que especifiques.

Si te fijas en este bloque de código, tenemos 5 objetos en nuestro recursos de variable. 
Y al declarar *count* dentro de nuestro bloque de recurso, podemos especificarle cuantos recursos en total queremos que cree en base a los objetos dentro de nuestra variable
```json
resource "local_file" "pet" {
	filename = var.filename
	content = var.filename[count.index]

	count = 3 // creara un total de 3 recursos que tomara de la variable
}

variable "filename" {
	default = {
	"/root/pets.txt", //index 0
	"/root/dogs.txt", // index 1
	"/root/cats.txt", // ..
	"/root/cows.txt", // ..
	"/root/ducks.txt" // indenx 4
	}
}
```

También podemos utilizar la `función lenght` que nos permite tomar el total de objetos dentro de nuestra variable, esto nos ayuda a que si queremos añadir mas recursos en el futuro, solo bastaría agregarlas en el array de la variable, y en el próximo terraform apply, se crearan los recursos añadidos.

```json
resource "local_file" "pet" {
	filename = var.filename
	content = var.filename[count.index]

	count = lenght(var.filename) // toma el total de valores de var.filena
}

variable "filename" {
	default = {
	"/root/pets.txt",
	"/root/dogs.txt",
	"/root/cats.txt",
	"/root/cows.txt", // nuevo valor añadido
	"/root/ducks.txt" // nuevo valor añadido
	}
}
```

Con `for-each`

```json
resource "local_file" "pet" {
	filename = each.value
	for_each = var.filename // recorre cada valor de tu variable y los crea
}

variable "filename" {
	type = set(string) // se usa set
	
	default = {
	"/root/pets.txt",
	"/root/dogs.txt"
	}
}

resource "local_file" "pet" {
	filename = each.value
	for_each = toset(var.filename) // hace que Terraform convierta a set cuando declaras un list en tu variable
}

variable "filename" {
	type = list(string)
	default = {
	"/root/pets.txt",
	"/root/dogs.txt"
	}
}
```

## Constrains

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