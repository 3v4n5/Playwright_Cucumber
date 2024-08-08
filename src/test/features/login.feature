
Feature: Login

Scenario: Login con usuario y password validos

Given un usuario esta en la pagina de Login
When ingresa el username y password
Then click en boton Login

Scenario: Login con usuario y password validos con parametros

Given un usuario esta en la pagina de Login
When ingresa el username 'standard_user' y password 'secret_sauce'
Then click en boton Login
