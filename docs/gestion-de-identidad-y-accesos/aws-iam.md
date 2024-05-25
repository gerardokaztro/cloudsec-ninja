---
sidebar_label: 'AWS IAM'
tags: [nivel 200,aws-iam]
---
import ReactPlayer from 'react-player'

# Introducción a AWS IAM

En esta serie de videos hablaremos sobre AWS IAM, aprenderás:

- IAM Users, Groups, Roles
- Long-Term Credentials vs. Temporay Security Credentials
- Security Token Service
- Identity-based Policy vs. Resource-based Policy
- Permissions Boundary
- RBAC vs ABAC
- 4D Policies

## AWS IAM Users & Groups

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="https://www.youtube.com/live/JpGrd510olI?si=JTnP5oHVHgWKhhjL&t=3396" width="100%" />
</div>

### Comandos utilizados en clase

- Como configurar tu entorno local con Access Key de AWS IAM
```bash
$ aws configure
AWS Access Key ID [****************YIFD]: INGRESA TU ACCESS KEY
AWS Secret Access Key [****************tGic]: INGRESA TU SECRET ACCESS KEY
Default region name [us-east-1]: INGRESA LA REGION AWS
Default output format [json]: INGRESA EL FORMATO DE SALIDA 'json', 'yaml', 'table' 'none'
```

- Este archivo contiene las credenciales de acceso de cada perfil configurado.
```bash
$ cat ~/.aws/credentials
[default]
region = us-east-1
output = json
```

- Este archivo contiene configuraciones adicionales como la región y el formato de salida.
```bash
$ cat ~/.aws/config
[default]
aws_access_key_id = AKIA...
aws_secret_access_key = ksej...
```

- Combinar ambos para ver todos los perfiles
```bash
$ cat ~/.aws/credentials ~/.aws/config
[default]
aws_access_key_id = AKIA...
aws_secret_access_key = ksej...

[default]
region = us-east-1
output = json
```

- Configurar un nuevo perfil IAM en tu AWS CLI
```bash
$ aws configure --profile new-profile-name
AWS Access Key ID [None]:
AWS Secret Access Key [None]:
Default region name [None]:
Default output format [None]:
```

- Muestra las configuracion del perfil default
```bash
$ aws configure list
      Name                    Value             Type    Location
      ----                    -----             ----    --------
   profile                <not set>             None    None
access_key     ****************YIFD shared-credentials-file
secret_key     ****************tGic shared-credentials-file
    region                us-east-1      config-file    ~/.aws/config
```

- Muestra las configuracion del perfil que especifiques
```bash
$ aws configure list --profile new-profile-name
      Name                    Value             Type    Location
      ----                    -----             ----    --------
   profile         new-profile-name           manual    --profile
access_key      ****************sss shared-credentials-file
secret_key     ****************ssss shared-credentials-file
    region                      sss      config-file    ~/.aws/config
```

- Muestra la lista de perfiles configurados en tu entorno local
```bash
$ aws configure list-profiles
default
new-profile-name
```

- Ejemplo si requieres administrar tus recursos aws desde un perfil específico
```bash
$ aws s3 ls --profile <nombre-de-perfil>
```

## AWS IAM Role & Mejores prácticas para la Root Account

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="https://www.youtube.com/live/paX8BHTRSwE?si=u3mDPMu44xbfTeXy&t=475" width="100%" />
</div>

## AWS STS, Resources-based Policy, Permissions Boundaries, RBAC vs ABAC, Políticas 4D

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="https://www.youtube.com/live/ewq06xHAqME?si=EcFGkffhAR7kiRuV&t=363" width="100%" />
</div>

### Comandos utilizados en clase

- Te permite saber con que identidad estas autenticado a tus recursos de AWS
```bash
$ aws sts get-caller-identity
```

- Te permite asumir un role IAM
```bash
$ aws sts assume-role --role-arn arn:aws:iam::123456789012:role/RoleName --role-session-name MySessionName
```
- Te permite obtener un token de seguridad con periodo de caducidad especificado
```bash
$ aws sts get-session-token --duration-seconds 3600
```

- Ejemplo de permiso que debe tener un principal para asumir un IAM Role
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "sts:AssumeRole",
            "Resource": "arn:aws:iam::123456789012:role/RoleName"
        }
    ]
}
```

- Ejemplo de un trust relationship que debe tener un IAM Role para ser asumido por `usr_dev1`
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::431204497982:user/usr_dev1"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
```

- Ejemplo de un Identity-based policy con permisos ABAC
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::sales-bucket/*",
            "Condition": {
                "StringEquals": {
                    "aws:RequestTag/department": "sales",
                    "aws:RequestTag/project": "projectX"
                },
                "IpAddress": {
                    "aws:SourceIp": "192.0.2.0/24"
                }
            }
        }
    ]
}
```