# Mobile <img align="center" alt="Marcos-Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg">

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/SquadUninove/API/blob/main/LICENSE)

## Api do sistema de cardapio para restaurantes!

## Sobre o Projeto

Back-end do sistema de cardápio para restaurantes,
desenvolvido para a aula de Projetos do curso de ADS da Universidade Nove de Julho

## Tecnologias

- Python
- Django
- Django Rest Framework
- PostegreSQL
- Heroku

## Setup

- Criar diretório do projeto (mkdir nome_projeto)
- Criar venv (python -m venv venv)
- Add arquivos:

.gitignore

requirements.txt

- Install o Django
- Criar um projeto django (django-admin.py startproject setup .)
- Criar app das rotas (python manage.py startapp cardapio)
- Rodar o comando no terminal (python manage.py migrate) - criar as tabelas auth_user
- Cadastrar um super user (python manage.py createsuperuser)
- Install Rest Framework
- Rodar o comando (python manage.py runserver)

# Documentação das Rotas

## GetCardapio:

    [

    {
        "id": 1,
        "nome": "Fritas",
        "descricao": "Batata frita com cheddar e bacon"
    },

    {
        "id": 2,
        "nome": "Strogonoff",
        "descricao": "Arroz, e fritas"
    },

    ]
