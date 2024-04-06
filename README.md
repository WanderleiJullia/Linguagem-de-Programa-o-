# Listas de Exercicios, referente a AC1. 

## Exercicio 1 - JavaScript 
Lista 01 – Exercícios Javascript
1.	Escreva um programa que declare duas variáveis numéricas e realize as quatro operações matemáticas básicas (+, -, *, /). Imprima os resultados no console.
2.	Faça um programa que mostre os números impares em um intervalo de 0 a 100.
3.	Faça um programa que mostre a quantidade de caracteres para o texto “Disciplina de Programação para web”.
4.	Faça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br
Por exemplo:
A variável nome possui o conteúdo “Edson Martin Feitosa”.
Deve mostrar edson.feitosa@facens.br

5.	Escreva um programa que imprima os números de 1 a 10 no console usando um loop. Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10. Observação: após o número 10 não pode ter um traço.
6.	Faça uma função que mostre o dobro do número passado. Caso o número seja menor ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que zero”.
7.	Escreva uma função que receba uma string como argumento e retorne a string invertida.
8.	Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).
9.	Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto '.' após o '@'.
10.	Escreva uma função que verifique se uma determinada string é um palíndromo (ou seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda).
Exemplo: arara

## Exercicio 2 - JavaScript;
Lista 02 – Exercícios Javascript
1.	Crie uma classe Usuario com os atributos nome e idade. Em seguida, crie um array de objetos Usuario e crie um novo array apenas com os nomes dos usuários em letras maiúsculas.Faça um programa que mostre os números impares em um intervalo de 0 a 100.
2.	Continuando com a classe Usuario, filtre os usuários com idade superior a 18 anos.
3.	Utilizando a classe Usuario, encontre o primeiro usuário com idade entre 25 e 30 anos.
4.	Crie um array de números e filtre apenas os números pares. Em seguida, mapeie esses números para o dobro de seus valores.
5.	Crie uma classe Animal com os métodos emitirSom e correr. Crie subclasses Cachorro e Gato que herdam de Animal e implementam o método emitirSom de forma diferente para cada classe.
6.	Crie uma classe Livro com os atributos titulo e paginas. Crie um array de objetos Livro e filtre os livros com mais de 300 páginas.
7.	Crie uma classe Carro com os atributos marca e ano. Crie um array de objetos Carro e encontre o primeiro carro da marca "Toyota" e filtre os carros fabricados após 2010.
8.	Crie uma classe Produto com os atributos nome e preco. Crie um array de objetos Produto e mapeie esses produtos para um novo array com os preços aumentados em 10%.
9.	Utilizando a classe Produto, encontre o primeiro produto com preço superior a R$ 100,00 e altere o nome desse produto para "Produto Caro".
10.	Crie um array de números e filtre apenas os números divisíveis por 3. Em seguida, mapeie esses números para o quadrado de seus valores.


## Exercicio 3 - HTML;
Atividades - HTMLj
1 - Utilizando as tags para a marcação de texto definidas no slide “4- Web02 HTML 5”, crie uma página html com o formato abaixo:
![image](https://github.com/WanderleiJullia/Linguagem-de-Programa-o-/assets/144744092/012ddb32-5dd2-408f-b6ef-e9f199c750a9)
2 - Crie a seguinte página abaixo:
![image](https://github.com/WanderleiJullia/Linguagem-de-Programa-o-/assets/144744092/e91551aa-cb1a-4814-935d-d3a03ef1241e)

## Exercicio 4 - HTML; 
Exercício – HTML - Formulário
Cursos e Inscrição
Uma escola infantil de cursos de extensão precisa criar uma página HTML para listar os cursos que ela possui. Essa página deve mostrar os campos: o nome do curso, sua descrição, turno/horário, professores e valor.
Cada curso deverá ter um link para o usuário se inscrever, esse enviará para a tela de inscrição, passando como parâmetro na querystring o código do curso.
Para inscrever-se o usuário precisa informar os dados abaixo:
•	Dados do aluno: Nome*, endereço, bairro, cidade, numero, cep, complemento, estado, telefone, celular*, e-mail* e cor* (Branca, Preta, Parda, Amarela, Indígena)
•	Dados do Pai: Nome*, data nascimento, naturalidade, instrução, profissão, celular*, email*, cpf* e se é ou não responsável financeiro
•	Dados do Mãe: Nome*, data nascimento, naturalidade, instrução, profissão celular*, email*,  cpf* e se é ou não responsável financeiro
•	Dados do curso: Nome do curso escolhido*, data de ingresso*, valor* e forma de pagamento (qtde de parcelas)*
•	Os campos em * são obrigatórios e não pode deixar salvar se não estiver sido preenchido.
Os dados deverão ser salvos em um API (utilize o mockapi.io).

## Exercicio 5 - CSS;
Exercícios CSS - Fundamentos
Crie uma página HTML e acrescente o texto abaixo em seu body:
Cascading Style Sheets (CSS): Uma Introdução

Cascading Style Sheets (CSS) é uma linguagem de estilo usada para descrever a apresentação de um documento HTML (ou XML). Enquanto o HTML fornece a estrutura de uma página da web, o CSS permite que você altere a aparência dessa estrutura. 
Com CSS, você pode controlar coisas como cores, fontes, espaçamento, layout e muito mais. A separação de conteúdo (HTML) e estilo (CSS) é uma prática essencial para o desenvolvimento web moderno, pois permite uma manutenção mais fácil, reutilização de código e flexibilidade de design.

Conceitos Fundamentais de CSS:
1.	Seletor: Um seletor é usado para selecionar os elementos HTML aos quais você deseja aplicar estilos. Pode ser um elemento HTML específico, uma classe ou um ID.
2.	Propriedades: As propriedades são características individuais que você deseja alterar, como cor, tamanho da fonte, margens, etc.
3.	Valor: Cada propriedade tem um valor associado que define como essa propriedade deve ser aplicada. Por exemplo, uma cor pode ser definida como "vermelho" ou um tamanho de fonte como "14px".
4.	Declaração: Uma declaração é composta por uma propriedade e um valor, separados por dois pontos, e terminados por um ponto e vírgula. Por exemplo, color: blue; é uma declaração que define a cor do texto como azul.
5.	Regras CSS: As regras CSS consistem em um seletor e um conjunto de declarações. Quando um navegador encontra uma regra CSS, ele aplica as declarações associadas aos elementos correspondentes.

Faça as seguintes alterações no texto com o auxílio do CSS
1.	Altere a cor do fundo para uma tonalidade de marrom claro, o tamanho do texto para 40px, cor da letra branca, alinhe o texto no centro e a fonte da letra para “Lucida Sans”
2.	Ao passar o mouse sobre o título o fundo deve mudar para a cor preta.
3.	O conteúdo da página deve ser mostrado com a fonte “Arial”.
4.	Todos os parágrafos devem ter um recuo de 20px.
5.	O título introdutório da lista ordenada que possui a escrita: “Conceitos Fundamentais de CSS:” deve estar com seu texto em negrito e a letra deve ter o tamanho de 20x.
6.	Os itens da lista devem estar com alinhamento justificado.
7.	Todo o conteúdo da página precisa ter um espaçamento superior e inferior de 50px e os lados precisam ter um espaçamento de 200px
Como exemplo, segue um print de como a página ficará:
 
## Exercicio 6 - CSS;
Exercícios CSS
1.	Crie uma estrutura HTML básica com uma <div> para a barra lateral e outra <div> para o conteúdo principal.
2.	Estilize a barra lateral com as seguintes propriedades:
•	Largura de 20% da largura total da página.
•	Altura de 100% da altura da janela de visualização.
•	Cor de fundo diferente da cor de fundo do conteúdo principal.
•	Conteúdo de texto dentro da barra lateral, como links de navegação.
3.	Estilize o conteúdo principal com as seguintes propriedades:
•	Largura de 80% da largura total da página.
•	Altura de 100% da altura da janela de visualização.
•	Cor de fundo diferente da cor de fundo da barra lateral.
•	Alinhe o conteúdo no centro vertical e horizontalmente.
4.	Use a propriedade float para fazer com que a barra lateral flutue à esquerda e o conteúdo principal flutue à direita.
5.	Use a propriedade position para posicionar a barra lateral e o conteúdo principal de forma que eles ocupem toda a altura da janela de visualização, independentemente do tamanho do conteúdo.
6.	Teste o layout redimensionando a janela do navegador para verificar se ele é responsivo.

Segue um exemplo:
![image](https://github.com/WanderleiJullia/Linguagem-de-Programa-o-/assets/144744092/ef56ddd0-9601-4d42-986d-4d7ce4fcc153)
## 

Crie uma página HTML que tenha a seguinte estrutura de layout:
1.	Um menu superior fixo no topo da página.
2.	Um menu lateral à esquerda que ocupe uma parte da largura da página.
3.	Uma área de conteúdo à direita do menu lateral.
4.	Um rodapé fixo na parte inferior da página.
Use a propriedade position do CSS para posicionar os elementos da seguinte maneira:
•	O menu superior deve ter position: fixed; para permanecer fixo no topo da página.
•	O menu lateral deve ter position: fixed; para permanecer fixo à esquerda da página.
•	A área de conteúdo deve ter margin-left para deixar espaço para o menu lateral e não ser ocultada por ele.
•	O rodapé deve ter position: fixed; para permanecer fixo na parte inferior da página.
Personalize os estilos e os conteúdos dos menus e do conteúdo conforme desejar.
Segue um exemplo:
![image](https://github.com/WanderleiJullia/Linguagem-de-Programa-o-/assets/144744092/c450e0ab-1831-4ffe-a212-b8dc4f70d621)






