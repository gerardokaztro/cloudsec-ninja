---
sidebar_label: '📋 Principio del minimo privilegio'
tags: [nivel 100, ciberseguridad, metodologia]
---

# 📋 Introducción al Principio del minimo privilegio
Imaginemos por un momento que estamos organizando una gran fiesta en casa. Para que todo salga perfecto, contratamos a algunas personas: un DJ para la música, un bartender para las bebidas y un chef para la comida. Ahora, una pregunta clave: ¿le daríamos una llave maestra de nuestra casa a todos ellos? La respuesta es obvia: no. A cada uno le daríamos acceso solo a las áreas que necesita para realizar su trabajo y nada más. No queremos que el DJ entre en nuestra habitación privada ni que el chef tenga acceso al estudio, ¿verdad?  
Este mismo concepto, llevado al mundo digital, es lo que conocemos como el principio del mínimo privilegio. En esencia, se trata de otorgar a los usuarios y aplicaciones solo los permisos y accesos estrictamente necesarios para realizar sus tareas, y no uno más.
En otras palabras, es una estrategia de seguridad que otorga a los usuarios solo los privilegios necesarios para realizar su trabajo, minimizando el riesgo si se compromete una cuenta.  

:::tip Datos estadisticos relacionadas a las brechas de seguridad
[Este informe de delinea, destaca que el 74% de las brechas de seguridad ocurren debido al acceso privilegiado. 
](
https://delinea.com/hubfs/Delinea/ebooks/delinea-ebook-zero-trust-privilege-for-dummies.pdf).
:::

## ¿Por qué es tan importante este principio? 

**Reducción del riesgo:** Si un atacante logra comprometer una cuenta o aplicación con permisos limitados, el daño potencial que puede hacer es, en teoría, mucho menor que si tuviera acceso total.

**Simplificación de sistemas:** Al otorgar solo los permisos necesarios, es más fácil gestionar y auditar esos sistemas y aplicaciones. Menos complicaciones significan menos posibilidades de errores.

**Protección contra errores internos:** No todos los problemas provienen de atacantes malintencionados. A veces, un error humano puede causar daños significativos. Al limitar los privilegios, también reducimos el impacto potencial de estos errores.

## ¿Cómo podemos aplicar el principio del mínimo privilegio?
**Evaluación y auditoría regular:** Es vital revisar regularmente los permisos otorgados a usuarios y aplicaciones. ¿Realmente necesitan todos los accesos que tienen?

**Usar roles predefinidos:** Muchas plataformas ofrecen roles con permisos predefinidos que facilitan la gestión del acceso.

**Educación y formación:** Asegúrese de que todos en la organización comprendan la importancia de este principio y sepan cómo aplicarlo en su trabajo diario.

**Herramientas y soluciones:** Aproveche las herramientas disponibles que facilitan la gestión de permisos y privilegios. Estas herramientas pueden ayudar a automatizar la gestión y reducir errores.

## Ejemplo practico aplicado en politicas de IAM de AWS
¿Cuál sería la política de IAM más adecuada si se nos solicita crear un usuario que tenga únicamente permisos para encender y apagar una instancia EC2?  
**Para la primera opcion tenemos:**
```json
// POLITICA #1
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:StartInstances",
                "ec2:StopInstances"
            ],
            "Resource": "arn:aws:ec2:region:account-id:instance/instance-id"
        }
    ]
}
```

**Para la segunda opcion tenemos:**  
```json
// POLITICA #2
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "ec2:*",
            "Resource": "*"
        }
    ]
}
```

<details>
  <summary>Click para ver la respuesta correcta</summary>
  Ambas politicas de IAM le permiten al usuario encender y apagar una EC2, sin embargo la politica #2 estaria entregando todos los permisos para el servicio de EC2. Por lo anterior, la politica mas adecuada respetando el principio del minimo privilegio seria la politica #1.
</details>


### Referencias

- IBM: https://www.ibm.com/docs/es/aix/7.3?topic=privileges-least-privilege-principle
