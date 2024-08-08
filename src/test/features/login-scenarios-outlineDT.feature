Feature: Verifica login con escenario outline

  Scenario Outline: Verificar mensaje despues de login
    Given el ingresa en la pagina web
    When ingresa el user "<username>" y el password "<password>"
    Then da click en login
    And puede ver el texto "<message>"

    Examples:
      | username      | password     | message  |
      | standard_user | secret_sauce | Products |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |
