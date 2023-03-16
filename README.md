# **Estudos Angular**
## **Fonte de Estudos: [Hora de Codar](https://www.youtube.com/playlist?list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw)**

## **Aula 03 - Estrutura do angular**
### **Após um ng new:** 
- nome modules -  dependências do projeto
- src - diretório raiz do projeto, configurações
    - app - diretório onde se encontrarão os componentes, services e etc,; onde iremos programar a aplicação
        - app.component.html - arquivo de template, logo, o que adicionarmos neste arquivo será adicionado na página do aplicativo
        - app.component.spec.ts - arquivo de testes do componente
        - app.component.ts - arquivo de configuração do componente, além de armazenar o código de lógica
        - app.module.ts - arquivo central de configuração da aplicação; funciona como um mapeador de importação de componentes
    - assets - diretório onde ficam as imagens estáticas
    - enviroments - diretório onde ficam os ambientes que o angular rodará (ambiente de desenvolvimento, de produção)
    - index.html - arquivo principal de acesso ao usuário
    - styles.css - estilos globais da aplicação
- componentes - divididos em partes:
    - TypeScript
    - HTML
    - CSS
    - testes
- angular.json - configurações do projeto
- karma.conf.js - configurações de testes do projeto
- package.json - exibição de todas dependências do projeto, scripts

### **Após um ng serve:** 
- Inicia a aplicação

## **Aula 04 - Criando um componente**
### **O que é um componente?** 
> *Segundo a documentação do Angular, o componente é o principal bloco de construção para aplicativos, e é composto por um template, um estilo e uma classe. É no template que encontraremos toda a estrutura HTML, a árvore DOM do componente. Já o estilo é onde será feita a estilização, e a classe onde é definido o comportamento e a lógica feita em Typescript.* [*(Alura)*](https://www.alura.com.br/artigos/angular-como-funciona-um-componente)
### **Com CLI** 
- **ng generate component <nome_do_componente>** - cria o componente avulso, sem perdido no projeto
- **ng generate component components/<nome_do_componente>** - cria o componente dentro uma um diretório chamado **components**. Ideal usar este:
> ` ng generate component components/first-component`
- independente de qual dos dois utilizar, ele cria 4 arquivos e atualiza um:
    - cria um arquivo html
    - cria um arquivo de testes
    - cria um arquivo typescript
    - cria um arquivo e um css
    - atualiza arquivo app.module.ts
- todos arquivos necessários são criados no projeto
- p/ importar o componente basta utilizar o seu **selector** em um HTML de outro componente

### **No arquivo <nome_do_componente>.component.ts**
- Há um decorator chamado *@Component*, e dentro dele:
    - selector: nome do componente para usar no arquivo html. O nome do componente sempre inicia com app
    - templateUrl: caminho para encontrar o componente
    - styleUrls: caminho para encontrar a folha de estilo do componente; recebe um array, logo, é possível alocar várias folhas de estilo;este arquivo reflete somente sobre o componente; 

### **Para importar o component**
- abrir o arquivo html desejado
- alocar uma tag html com o nome do selector do componente, sempre fechando a tag 

## **Aula 05 - Dados no template**
### **O que é a interpolação de dados?** 
> *A interpolação de texto permite incorporar valores dinâmicos nos modelos HTML. Com a interpolação, pode alterar dinamicamente o que aparece em uma visualização do aplicativo, como a exibição de uma saudação personalizada que inclui o nome do usuário.* [*(Studocu - Angular - Data Binding)*](https://www.studocu.com/pt-br/document/centro-universitario-eniac/framework-angular/livro-banco-de-framework-angular-part5/16371183)
### **Interpolação de dados** 
- recurso que ensina a trabalhar com os componentes do Angular
- criaremos variáveis no arquivo .ts, dentro da classe
- essas variáveis são propriedades da class
- teremos acesso a todos esses dados no arquivo .html, o template
- a impressão é feita através de `{{ dado }}`
### **Criando a interpolação** 
1º - No arquivo *__`.component.ts`__* do componente, criar a variável/propriedade dentro do escopo da classe do componente. Também podemos usar dados mais complexos, como listas, arrays ou mesmo objetos.
```
export class FirstComponentComponent {
  name: string = "Maleus";
  age: number = 30;
  job = 'Rapaz do computador!'
  hobbies = ["Correr", "Estudar", "Dormir"];
  car = {
    name: "Polus",
    year: 2077,
  };
}
```
2º - No arquivo *__`.component.html`__* do componente, adicionar dentro de uma tag html o nome da variável/propriedade criada no arquivo *__`.component.ts`__* do componente.
```
<h1>Nome: {{ name }}</h1>
<h3>Idade: {{ age }}</h3>
<h4>Profissão: {{ job }}</h4>
<p>Hobbie que mais gosta: {{ hobbies[2] }}</p>
<h2>Nome do carro: {{ car.name }}</h2>
<h3>Ano do carro: {{ car.year }}</h3>
```
- O que é passado para a interpolação torna-se uma string
- Geralmente, esses dados de interpolação são extraídos de uma tabela de um Banco de Dados, sendo assim, é mais que necessário usar interpolação, pois isso permitirá que os dados recuperados sejam atualizados na página dinamicamente

## **Aula 06 - CSS no Angular**
### **CSS** 
Duas formas de estilizar com CSS em Angular:
- **Global** - usar arquivo styles.css que se encontra no diretório src
- **Scoped** - estilizando a nível de componente, um arquivo *nome-componente.css* é criado quando usamos o generate e ele tem escopo somente naquele componente
