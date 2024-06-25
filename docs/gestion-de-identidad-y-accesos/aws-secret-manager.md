---
sidebar_label: 'AWS Secrets Manager'
tags: [nivel 300,aws-secrets-manager]
---
import ReactPlayer from 'react-player'

# Introducción a AWS Secrets Manager

En esta clase sobre AWS Secrets Manager, aprenderás:

- Introduccion a AWS Secrets Manager
- Almacenamiento de un Secret
- Recuperación de un Secret
- Replicación de un Secret a otra región
- Eliminación de un Secret
- Rotación automática de un Secret

## AWS Secrets Manager

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="https://www.youtube.com/live/W9fwMZICNRU?feature=shared&t=250" width="100%" />
</div>

### Comandos utilizados en clase

- Cómo instalar Boto3 en una instancia con Amazon Linux 2

```bash
$ pip3 install boto3
```

- Cómo verificar si Boto3 esta instalado en una instancia con Amazon Linux 2

```bash
$ python3 -c "import boto3; print(boto3.__version__)"
```

- Crea un archivo `retrieve_secret.py` y guarda este script python

```python
# -*- coding: utf-8 -*-

import boto3
import json
import os
from botocore.exceptions import NoCredentialsError, PartialCredentialsError

def get_secret():
    secret_name = "MyTestSecret"
    region_name = os.getenv('AWS_REGION', 'us-east-1’)

    # Crear un cliente de Secrets Manager
    session = boto3.session.Session()
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )

    try:
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
    except NoCredentialsError:
        print("Error: No se encontraron las credenciales de AWS.")
        return
    except PartialCredentialsError:
        print("Error: Credenciales incompletas de AWS.")
        return
    except client.exceptions.ResourceNotFoundException:
        print("El secreto no se encontró.")
        return
    except client.exceptions.InvalidRequestException as e:
        print("El request no es válido:", e)
        return
    except client.exceptions.InvalidParameterException as e:
        print("El parámetro no es válido:", e)
        return

    # Decodificar y retornar el secreto
    secret = get_secret_value_response['SecretString']
    secret_dict = json.loads(secret)
    print("El valor del secreto es:", secret_dict)

if __name__ == "__main__":
    get_secret()
```

- IAM Identity policy que debe tener tu user o role iam para acceder al secreto

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "secretsmanager:GetSecretValue"
            ],
            "Resource": [
                "arn:aws:secretsmanager:us-east-1:<cuenta-aws>:secret:<tu-screto>"
            ]
        }
    ]
}
```

- IAM Resource policy que debe tener tu secreto para que un principal acceda

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::<cuenta-aws>:role/<tu-role-aws>"
            },
            "Action": "secretsmanager:GetSecretValue",
            "Resource": "arn:aws:secretsmanager:us-east-2:<cuenta-aws>:secret:<tu-screto>"
        }
    ]
}
```