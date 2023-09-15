---
sidebar_label: 'Terraform'
tags: [nivel 100, terraform, iac]
---

# 🏗️ Introducción a Terraform

##  Tipos de herramientas de IAC
- Gestión de la configuración como Ansible y Puppet
	- Diseñados para instalar y administrar software
	- Mantener una estructura estandar
	- Control de versiones
	- Idempotencia

- Plantillas de servidor como Docker, Packer y Vagrant
	- Pre instalar software y dependencias
	- Maquinar virtuales e imágenes docker
	- Infraestructura inmutable

- Herramientas de aprovisionamiento como Terraform, CloudFormation y Pulumi
	- Despliegan recursos de infraestructura inmutable
	- Servidores, bases de datos, componentes de redes, etc
	- Soporta múltiples proveedores

## Cómo instalar terraform

Esta [guía](https://developer.hashicorp.com/terraform/downloads) contiene la instalación de terraform en tu local para cualquier sistema operativo.

## Sintaxis Haschicorp Configuration Language (HCL)

Estructura HCL terraform
```json
<block name> <resource type> <resource name> {
	key1 = value1 //argumento
	key2 = value2 //argumento
}
```

Entendiendo la estructura HCL
```json
//"local" -> representa al provider y "file" -> el recurso de ese provider
resource "local_file" "pet" {
	filename = "/root/pets.txt"
	content = "Hola mundo"
}
```

```json
//"aws" -> representa el provider y "vpc" -> el recurso a utilizar
resource "aws_vpc" "example" {
  cidr_block = "10.0.0.0/16" // argumento del recurso a desplegar
}
```

## Usando Providers en Terraform

En esta [guía](https://registry.terraform.io/browse/providers) encontrarás todos los providers que puedes usar en terraform

💡 Cuando se ejecuta el `terraform init` se descargan el o los providers de una ruta similar a esta: `registriy.terraform.io/hashicorp/local` donde `registry.terraform.io` es el **hostname**, `hashicorp` el **Organizational Namespace** y `local` el **type**.

## Configuración del directorio

- `main.tf`  archivo de configuración principal que contiene la definición de los recursos 
- `variables.tf`  contiene la declaración de las variables 
- `outputs.tf`  contiene la salida de los recursos
- `provider.tf`  contiene la definición de los providers
- `terraform.tfvars` contiene la definición de tus variables que son leidas desde el `variables.tf`
- `locals.tf`  lorem 
- `data.tf`  lorem 

## Trabajar con múltiples providers

Para lograrlos debes especificarlos en el `providers.tf` para que en un archivo como `main.tf` u algun otro donde declares la configuracion de tus recursos puedas hacer algo tipo:

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

## Usando variables de entrada

Básicamente te permite pasar de esto
```json
resource "aws_instance" "webserver" {
  ami = "ami-123"
  instance_type = t2.micro
}
```
a esto
```json
resource "aws_instance" "webserver" {
  ami = var.ami
  instance_type = var.instance_type
}
```

Gracias a que almacenaste el valor de los argumentos en variables dentro tu archivo `variables.tf`
```json
variable "ami" {
  default = "ami-123"
}

variable "instance_type" {
  default = "t2.micro"
}
```

## Entendiendo las variables

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