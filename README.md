# Boas vindas ao repositório do projeto de Receitas!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## O que deverá ser desenvolvido

Você irá desenvolver um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

Nela será possível ver, buscar, filtrar, favoritar e acompanhar o processo de preparação de receitas e drinks!

A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.

O layout tem como foco dispositivos móveis, então todos os protótipos vão estar desenvolvidos em telas menores.

Você pode acessar um protótipo no link abaixo:

https://www.figma.com/file/WatDxtKl7g54QxhDi9qdbq/App-Receitas?node-id=0%3A1

Lembre-se de escrever testes unitários e sinta-se livre para alterar a UI, só respeite os atributos `data-testid`, eles serão usados na correção do exercício.

Você pode ler mais sobre atributos para testes [nesse link](https://www.eduardopedroso.com.br/?p=494)

#### ⚠️ Lembre-se de escrever testes unitários e sinta-se livre para alterar a UI, só respeite os atributos `data-testid`, eles serão usados na correção do exercício.

#### ⚠️ Para ver os comentários sobre cada componente, basta clicar no ícone de comentários no Figma (lado esquerdo superior).

![image](https://res.cloudinary.com/drdpedroso/image/upload/c_scale,w_400/v1575815877/Screenshot_2019-12-08_at_11.37.25_kzt7rl.png)

---

## Desenvolvimento e testes

Este repositório já contem um _template_ com um App React criado, configurado e com os testes automatizados.

Esses [testes E2E](https://www.guru99.com/end-to-end-testing.html) automatizados podem ser utilizados para ajudar a validar as funcionalidades do projeto. Porém, não são pré-requisitos para a avaliação; ou seja, não é necessário que todos esses testes passem. É possível executar os testes localmente via `npm run cy`. Esse comando roda a suite de testes do [Cypress](https://www.cypress.io/how-it-works/) que valida se o fluxo geral e os requisitos funcionais estão funcionando.

Esses testes não consideram o layout de maneira geral, mas sim os atributos e informações corretas, então preste atenção nos atributos definidos no protótipo.

Os testes te darão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉

#### Além dos testes automatizados, um dos requisitos do projeto se baseia em **escrever testes unitários que cubram pelo menos 90% do projeto**. Na [documentação do Jest CLI](https://jestjs.io/docs/en/cli) é possível ver como essa cobertura é coletada.

## APIs

### TheMealDB API

O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

Os end-points são bastante ricos, você pode [vê-los aqui](https://www.themealdb.com/api.php)

O modelo de resposta para uma `meal` é o seguinte:
```json
{
   "meals":[
      {
         "idMeal":"52882",
         "strMeal":"Three Fish Pie",
         "strDrinkAlternate":null,
         "strCategory":"Seafood",
         "strArea":"British",
         "strInstructions":"Preheat the oven to 200C\/400F\/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.",
         "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg",
         "strTags":"Fish,Seafood,Dairy,Pie",
         "strYoutube":"https:\/\/www.youtube.com\/watch?v=Ds1Jb8H5Sg8",
         "strIngredient1":"Potatoes",
         "strIngredient2":"Butter",
         "strIngredient3":"Milk",
         "strIngredient4":"Gruy\u00e8re",
         "strIngredient5":"Butter",
         "strIngredient6":"Leek",
         "strIngredient7":"Plain Flour",
         "strIngredient8":"White Wine",
         "strIngredient9":"Milk",
         "strIngredient10":"Parsley",
         "strIngredient11":"Salmon",
         "strIngredient12":"Haddock",
         "strIngredient13":"Smoked Haddock",
         "strIngredient14":"Eggs",
         "strIngredient15":"",
         "strIngredient16":"",
         "strIngredient17":"",
         "strIngredient18":"",
         "strIngredient19":"",
         "strIngredient20":"",
         "strMeasure1":"1kg",
         "strMeasure2":"Knob",
         "strMeasure3":"Dash",
         "strMeasure4":"50g",
         "strMeasure5":"75g",
         "strMeasure6":"2 sliced",
         "strMeasure7":"75g",
         "strMeasure8":"150ml",
         "strMeasure9":"568ml",
         "strMeasure10":"2 tbs chopped",
         "strMeasure11":"250g",
         "strMeasure12":"250g",
         "strMeasure13":"250g",
         "strMeasure14":"6",
         "strMeasure15":"",
         "strMeasure16":"",
         "strMeasure17":"",
         "strMeasure18":"",
         "strMeasure19":"",
         "strMeasure20":"",
         "strSource":"https:\/\/www.bbc.co.uk\/food\/recipes\/three_fish_pie_58875",
         "dateModified":null
      }
   ]
}
```

Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

É possível listar todas as `categorias`, `áreas` e `ingredientes`:

```
categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
areas: https://www.themealdb.com/api/json/v1/1/list.php?a=list
ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
```

As fotos dos ingredientes vêm de um end-point padronizado com a seguinte lógica:

```
https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}.png
// exemplo com "lime
https://www.themealdb.com/images/ingredients/Lime.png
```

### The CockTailDB API

Bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.

Os end-points também são bastante ricos, você pode [vê-los aqui](https://www.thecocktaildb.com/api.php)

As respostas seguem a mesma estrutura, com algumas particularidade relativas as bebidas (como ser ou não alcoólica, por exemplo)

```json
{
   "drinks":[
      {
         "idDrink":"17256",
         "strDrink":"Martinez 2",
         "strDrinkAlternate":null,
         "strDrinkES":null,
         "strDrinkDE":null,
         "strDrinkFR":null,
         "strDrinkZH-HANS":null,
         "strDrinkZH-HANT":null,
         "strTags":null,
         "strVideo":null,
         "strCategory":"Cocktail",
         "strIBA":null,
         "strAlcoholic":"Alcoholic",
         "strGlass":"Cocktail glass",
         "strInstructions":"Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
         "strInstructionsES":null,
         "strInstructionsDE":"Alle Zutaten in ein Mischglas geben und mit Eis f\u00fcllen. Bis zum Abk\u00fchlen umr\u00fchren und in ein gek\u00fchltes Coup\u00e9glas abseihen.",
         "strInstructionsFR":null,
         "strInstructionsZH-HANS":null,
         "strInstructionsZH-HANT":null,
         "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/fs6kiq1513708455.jpg",
         "strIngredient1":"Gin",
         "strIngredient2":"Sweet Vermouth",
         "strIngredient3":"Maraschino Liqueur",
         "strIngredient4":"Angostura Bitters",
         "strIngredient5":null,
         "strIngredient6":null,
         "strIngredient7":null,
         "strIngredient8":null,
         "strIngredient9":null,
         "strIngredient10":null,
         "strIngredient11":null,
         "strIngredient12":null,
         "strIngredient13":null,
         "strIngredient14":null,
         "strIngredient15":null,
         "strMeasure1":"1 1\/2 oz",
         "strMeasure2":"1 1\/2 oz",
         "strMeasure3":"1 tsp",
         "strMeasure4":"2 dashes",
         "strMeasure5":null,
         "strMeasure6":null,
         "strMeasure7":null,
         "strMeasure8":null,
         "strMeasure9":null,
         "strMeasure10":null,
         "strMeasure11":null,
         "strMeasure12":null,
         "strMeasure13":null,
         "strMeasure14":null,
         "strMeasure15":null,
         "strCreativeCommonsConfirmed":"No",
         "dateModified":"2017-12-19 18:34:15"
      }
   ]
}
```

Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

---

# Requisitos do projeto

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos _checks_ do **CodeClimate**.

Nesse projeto, a pessoa que estiver utilizando o app pode procurar uma receita especifica, explorar receitas baseado em diferentes critérios, favoritar e fazer as receitas entre outras funcionalidades.

As telas sofrem variações dependendo do tipo da receita (se é comida ou bebida, no caso).

#### O projeto sera composto por duas entregas, cada uma especificada abaixo com seus respectivos requisitos e o prazo decidido com o especialista.

## Requisitos Entrega 1

1. A cobertura de testes unitários deve ser de no mínimo 90%;

#### Tela de login

2. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de login;

3. A pessoa deve conseguir escrever seu email no input de email;

4. A pessoa deve conseguir escrever sua senha no input de senha;

5. O formulário só fica válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos;

6. Caso o formulário esteja inválido, o botão de submeter deve estar desativado. Caso contrário, deve estar ativado;

7. Após a submissão, 2 tokens devem ser salvos em `localStorage` identificados pelas chaves `meals-token` e `cocktails-token` (o token de teste é sempre "1");

8. Após a submissão, o e-mail do usuário deve ser salvo em `localStorage` no formato `user: {email: email-do-usuário}`;

9. Após a submissão e validação com sucesso do login, o usuário deve ser redirecionado para a tela de listagem de receitas _("Android  - 1" no protótipo )_.

#### Header

10. Todos os elementos devem respeitar os atributos descritos no protótipo para o header;

11. Deve apresentar um ícone para a tela de perfil e um para a busca (caso exista no protótipo);

12. Ao clicar no botão de perfil, a rota deve mudar para a tela de perfil;

13. Ao clicar no botão de busca, a barra de busca deve aparecer; O mesmo serve para escondê-la;

### Barra de busca - Header

14. Todos os elementos devem respeitar os atributos descritos no protótipo para a barra de busca;

15. A barra de busca deve possuir 3 _radio buttons_: `Ingrediente`, `Nome` e `Primeira letra`. Eles devem mudar a forma como serão filtradas as receitas.  Os _endpoints_ da API que você deve usar podem ser consultados [aqui para a API de comidas](https://www.themealdb.com/api.php) e [aqui para a API de bebidas](https://www.thecocktaildb.com/api.php). _Exemplo_: Selecionar `Ingrediente` e buscar por `chicken`.
`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`.

15. A busca deve ocorrer 600 milissegundos após a última interação com o input. (Pesquise por debounce);

16. A busca deve ocorrer na API de comidas caso a pessoa esteja na página de comidas e na de bebidas caso esteja na de bebidas;

17. Caso apenas uma receita seja encontrada, a rota deve mudar para a tela de detalhes da receita com o ID da mesma na URL. Exemplo: `receitasbr.com/receita/{id-da-receita}`;

18. Caso mais de uma receita seja encontrada, mostrar as receitas em cards da mesma maneira que a tela principal de receitas;

19. Caso nenhuma receita seja encontrada, uma mensagem deve ser exibida;

#### Menu inferior

21. Todos os elementos devem respeitar os atributos descritos no protótipo para o menu inferior;

21. Deve apresentar 3 ícones, um para comidas, um para bebidas e outro para exploração;

22. Ao clicar no ícone de comidas, a pessoa deve ser redirecionada para uma lista de comidas;

23. Ao clicar no ícone de bebidas, a pessoa deve ser redirecionada para uma lista de cocktails;

24. Ao clicar no ícone de exploração, a rota deve mudar para a tela de exploração;

#### Tela principal de Receitas

26. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de receitas;

27. Devem ser carregadas 12 receitas aleatórias, uma em cada card;

28. A pessoa deve conseguir filtrar por categoria utilizando botões. Cada um com o atributo prefixado: `data-testid=${categoryName}-category-filter`;

29. Ao clicar no filtro de categoria, todas as receitas devem mudar para os dados filtrados da API. Caso o filtro seja selecionado de novo, o app deve retornar as receitas sem nenhum filtro _(como se fosse um toggle)_. As categorias disponíveis devem ser obtidas através da API de [comidas](https://www.themealdb.com/api.php) ou [bebidas](https://www.thecocktaildb.com/api.php).

30. Apenas um filtro de categoria deve poder ser selecionado por vez.

31. Mostrar apenas as 5 primeiras categorias retornadas da API.

32. No filtro de categorias deve existir a opção de filtrar por Todas as categorias.

33. As receitas que serão carregadas dependem de qual ícone a pessoa clicou: comidas acessa a API de comidas e bebidas acessa a API de bebidas.

34. Se a API utilizada for a de comidas, a URl deve ser `/comidas`, caso seja bebidas `/bebidas`;

35. O título da página mostrado vai depender também de qual ícone a pessoa clicou; (Comidas ou Bebidas)

36. Cada receita que voltar da API deve virar um card dentro de uma Grid.

37. O Card de receita deve conter uma foto (`strMealThumb` ou `strDrinkThumb`), o nome (`strMeal` ou `strDrink`) e a categoria da receita (`strCategory`).

38. Ao clicar no card, a rota deve mudar para a tela de detalhes da receita com o ID da mesma na URL, além de dizer se a pessoa veio da tela de comidas ou de bebidas.
Exemplo: `/receitas/comida/{id-da-receita}`

39. O Header e o menu inferior devem estar presentes.

#### Tela de detalhes de uma receita

40. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de detalhes de uma receita;

41. Uma request para a API deve ser feita passando o `id` da receita que deve estar disponível nos parâmetros da URL.

42. Essa tela deve conter uma imagem da receita, o titulo, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades instruções, um video do youtube "embedado" e recomendações.

43. As recomendações para receitas de comida deverão ser bebidas e vice versa. Dica: Explore os ingredientes.

44. Deverão ser mostrados 6 cards de recomendação, onde apenas 2 são mostrados e o scroll é horizontal, similar a um `carousel`;

45. Um botão de "Iniciar Receita" deve ficar fixo na parte de baixo da tela o tempo todo.

46. Caso a receita ja tenha sido feita, o botão deve sumir;

47. Caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continuar receita";

48. Quando "Iniciar Receita" for clicado, a rota deve mudar para a tela de realização de receita.

49. Um botão de compartilhar e um de favoritar a receita devem estar disponíveis.

50. Ao clicar no botão de compartilhar, o link da receita deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer.

51. O ícone do coração (favorito) deve vir preenchido caso a receita esteja favoritada, e _"despreenchido"_ caso contrário;

52. Ao clicar no botão de favoritar, o ícone do coração deve mudar de seu estado atual, caso esteja preenchido deve mudar para _"despreenchido"_ e vice versa.

53. As receitas favoritas devem ser salvas em `localStorage` no formato: `favoriteRecipes: [{id, category, image}]`

---

## Requisitos Entrega 2

54. A cobertura de testes unitários deve ser de no mínimo 90%;

#### Tela de receita em processo

55. Essa tela deve contar uma imagem da receita, o titulo, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades e instruções;

56. A lista de ingredientes deve conter um checkbox para cada um dos items;

57. Ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista.

58. O estado do progresso deve ser mantido caso a pessoa atualize a pagina ou volte para a mesma receita.

59. A mesma lógica de favoritar e compartilhar da `Tela de detalhes` se aplica aqui.

60. O botão de finalizar receita só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_.

61. Após clicar no botão "Finalizar receita", a rota deve mudar para a página de receitas realizadas.

#### Tela de receitas feitas

62. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de receitas feitas;

63. A tela deve conter cards horizontais, um para cada receita feita;

64. Caso a receita do card seja uma comida: a foto da receita, o nome, a categoria, a area, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar.

65. Caso a receita do card seja uma bebida: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar.

66. O Botão de compartilhar deve copiar a URL da tela de detalhes daquela receita para o clipboard.

67. Devem existir 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros.

68. Ao clicar na foto ou no titulo, a rota deve mudar para a tela de detalhes daquela receita;

69. A rota dessa página deve ser: `/receitas-feitas`

#### Tela de receitas favoritas

70. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de receitas favoritas;

71. A tela deve conter cards horizontais, um para cada receita feita;

72. Caso a receita do card seja uma comida: a foto da receita, o nome, a categoria, a area, um botão de compartilhar e um de _"desfavoritar"_;

73. Caso a receita do card seja uma bebida: a foto da receita, o nome, se é alcoólica, um botão de compartilhar e um de _"desfavoritar"_;

74. O botão de compartilhar deve copiar a URL da tela de detalhes daquela receita para o clipboard.

75. O botão de _"desfavoritar"_ deve remover a receita da lista.

76. Devem existir 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros.

77. Ao clicar na foto ou no titulo, a rota deve mudar para a tela de detalhes daquela receita.

78. A rota dessa página deve ser: `/receitas-favoritas`.

#### Tela de explorar

79. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de explorar.

80. A tela deve ter dois botões: um para explorar comidas e o outro para explorar bebidas.

81. Ao clicar em um dos botões, a rota deve mudar para a pagina de explorar comidas ou de explorar bebidas.

#### Tela de explorar bebidas ou comidas

82. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de explorar bebidas ou comidas.

83. Caso na tela de explorar a pessoa tenha clicado em comidas, o titulo deve mostrar "Explorar - Comidas". O mesmo para bebidas.

84. A tela deve ter três botões: um para explorar por ingrediente, um para explorar por local de origem e um para pegar uma receita aleatória. Obs: se a opção escolhida for explorar bebidas, o botão para explorar por local de origem não deve estar disponível.

85. Ao clicar em "Por ingredientes", a rota deve mudar para tela de explorar ingredientes.

86. Ao clicar em "Por local de origem", a rota deve mudar para tela de explorar por local de origem.

87. Ao clicar em "Me surpreenda", a rota deve mudar para os detalhes de uma receita aleatória vinda da API.

88. A rota deve ser `/explorar/comidas` ou `/explorar/bebidas`, dependendo de qual é a origem.

#### Tela de explorar ingredientes

89. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de explorar ingredientes.

90. A tela deve ter cards que contem: O nome do ingrediente e uma foto.

91. Ao clicar no card do ingrediente, a rota deve mudar para tela principal de receitas, mas mostrando apenas as receitas que contem o ingrediente escolhido.

92. As receitas mostradas devem representar o tipo escolhido antes na tela de explorar: se é comida ou bebida.

93. A rota deve ser `/explorar/comidas/ingredientes` ou `/explorar/bebidas/ingredientes`.

#### Tela de explorar por local de origem/area

94. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de explorar por local de origem. Obs: se a opção escolhida for explorar bebidas, esta tela não deve estar disponível.

95. A tela segue as mesmas especificações da tela de receitas principal, a única diferença é que os filtros de categoria são substituídos por um dropdown. Obs: se a opção escolhida for explorar bebidas, esta tela não deve estar disponível.

96. No dropdown devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "Todas", que retorna as receitas sem nenhum filtro. Obs: se a opção escolhida for explorar bebidas, esta tela não deve estar disponível.

97. A rota deve ser `/explorar/comidas/area`. Obs: se a opção escolhida for explorar bebidas, esta rota não deve estar disponível.

#### Tela de perfil

98. Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de perfil.

99. O e-mail do usuário deve estar visível.

100. Essa tela deve conter 3 botões: um de receitas favoritas, um de receitas feitas e um para sair.

101. Ao clicar no botão de "Receitas Favoritas", a rota deve mudar para a tela de receitas favoritas;

102. Ao clicar no botão de "Receitas Feitas", a rota deve mudar para a tela de receitas feitas;

103. Ao clicar no botão de "Sair", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login.

---

***Obs: A maneira como as APIs devem ser estruturadas segue os seguintes modelos: https://www.themealdb.com/api.php e https://www.thecocktaildb.com/api.php***

---

### Implementações técnicas

Algumas coisas devem seguir um padrão pré-estabelecido para que os teste de correção funcionem corretamente.

O uso de `localStorage` é necessário para que as informações não se percam caso a pessoa atualize a página.
O correto é usar os valores para iniciar sua store ou seu context.

No `localStorage` do navegador:
* a chave `done-recipes` deve conter a seguinte estrutura:
```
[{
    ...dados-da-receita,
    doneDate: quando-a-receita-foi-concluida
}]
```

* a chave `favorite-recipes` deve conter a seguinte estrutura:
```
[{
    ...dados-da-receita,
}]
```

* a chave `in-proggress` deve conter a seguinte estrutura:
```
[
    id-da-receita
]
```

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-02-block19-project-recipes-app-3.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-02-block19-project-recipes-app-3`

2. Instale as dependências, inicialize o projeto e rode os testes
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
  * Verifique que os testes E2E estão executando:
    * `npm run cy` (os testes devem rodar e falhar)
    * `npm run cy:open` (os testes devem rodar e falhar, legal caso queira ver o Cypress funcionando)

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuário-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-movie-card-library`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _components_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _components/Header.jsx_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-movie-cards-library`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-02-block19-project-recipes-app-3/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-02-block19-project-recipes-app-3/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠


* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-02`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e os outros alunos forem entregando os projetos, vocês serão alertados **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Os monitores também farão a revisão de todos os projetos, e irão avaliar tanto o seu _Pull Request_, quanto as revisões que você fizer nos _Pull Requests_ dos seus colegas!!!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
