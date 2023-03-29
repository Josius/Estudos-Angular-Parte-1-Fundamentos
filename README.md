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
```ts
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
```html
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

## **Aula 07 - Compartilhamento de dados**
### **Definição** 
- podemos compartilhar dados hierarquicamente do componente pai ao componente filho
- disponibilizamos nas chamada do componente o nome do dado que será recebido com a seguinte sintaxe: **[dado]**
- no código .ts do componente filho utilizamos o decorator **@Input**, o qual entrega os dados para o template
### **Explicação** 
1º Criamos o componente com:
> `ng generate component <diretório-que-armazena-os-compentes>/<nome-do-componente>`

Exemplo:
~~~
ng generate component components/parent-data
~~~

2º No arquivo .ts do componente criado adicionamos *Input* nos imports para chamar esse módulo e criamos uma propriedade:
> `@Input() nome-da-propriedade: tipo-da-propriedade = inicializador-da-propriedade;`

no caso do exemplo, em *__parent-data.component.ts__*:
~~~
import { Component, Input } from '@angular/core';
~~~
e no mesmpo arquivo .ts:
~~~
export class ParentDataComponent {

  @Input() name: string = '';
}
~~~

No caso do vídeo, o app.component.html é o pai, então inserimos o componente criado no app.component.ts, mas o pai poderia ser qualquer outro componente, então:

3º no *__app.component.html__* adicionamos o componente criado com a sua tag:
> `<componente-criado></componente-criado>`

no caso do exemplo:
~~~html
<app-parent-data></app-parent-data>
~~~

4º Agora criaremos os dados no componente pai, então em *__app.component.ts__* conterá os dados que serão compartilhados, logo, só precisamos criar uma propriedade, no caso criamos *userName*:

~~~ts
export class AppComponent {

  userName = 'Joloaquim';
  title = 'Estudos-Angular';
}
~~~

5º Na declaração de HTML iremos fazer a exportação desse dado, então em *__app.component.html__* adicionamos dentro da tag do componente criado o seguinte:
> `<componente-criado [nome-da-propriedade-compartilhada-no-componente-criado]="nome-da-propriedade-em-componente.component.ts"></componente-criado>`

> nome-da-propriedade-compartilhada-no-componente-criado -> 2º passo

> nome-da-propriedade-em-componente.component.ts -> 4º passo

no caso do exemplo:
~~~html
<app-parent-data [name]="userName"></app-parent-data>
~~~

6º Por fim, adicionamos em *__componente-criado.component.html__* dentro de uma tag o seguinte: 
> `<tag> NOME DA PROPRIEDADE COMPARTILHA NO COMPONENTE CRIADO: {{ nome-da-propriedade-compartilhada-no-componente-criado }}</tag>`

> nome-da-propriedade-compartilhada-no-componente-criado -> 2º passo

no caso do exemplo, em *__parent-data.component.html__*:
~~~html
<app-parent-data [name]="userName"></app-parent-data>
~~~

**OBS:** para iniciar qualquer propriedade tipada, pode usar *__!__*, por exemplo:
~~~ts
@Input() userData!: {
    email: string,
    role: string
  };
~~~
o *_!_* após *userData* inicializa o objeto. Essa é uma síntaxe do TypeScript para iniciar uma propriedade/variável/dado.

## **Aula 08 - Diretivas em Angular**
### **Definição** 
- aplicacão estilos a um elemento
- **síntaxe:** começam sempre com **ng**, o nome fica como: **ngNomeDaFunçãoDaDiretiva**

1º Criamos um componente para a diretiva:
> `ng generate component components/directives`

2º Importamos o componente para a classe principal (no caso, app.component.html)

3º **In line** - Esta é uma forma de usar a diretiva, em algum arquivo.html que precise receber a diretiva:
- sem diretiva:
> `<h2>testando diretiva de estilos / style</h2>`
- com diretiva:
> `<h2 [ngStyle]="{ 'font-size':'12px' }">testando diretiva de estilos / style</h2>`

4º Esta é outra forma. Em algum arquivo.ts:
```ts
export class DirectivesComponent {

  size = 40;
  font = 'Arial';
  color = 'red';
}
```
E no arquivo.html:
```html
<h3 [ngStyle]="{ 'font-size': size + 'px',
                 'font-family': font, 
                 'color': color }">
                 testando diretiva de estilos / style
</h3>
```
### **Diretiva de Classe**
No arquivo.html:
```html
<h4 [ngClass]="classes">
    Testando diretiva de classe 1
</h4>
```
No arquivo.ts:
```ts
export class DirectivesComponent {

  classes = ['green-title', 'small-title'];
}
```
O que acontece é que o h4 receberá a lista de classes acima. Como ideal, criamos as classes no arquivo.css para surgir efeito.

## **Aula 09 - Renderização condicional**
### **Definição** 
Quando vamos imprimir algo no template baseado em alguma condição de um **if-else**.
- é possível exibir determinado conteúdo por meio de uma **condicional**
- usamos a diretiva **ngIf** para isso
- os valores podem ser dinâmicos (**propriedades**), mas podemos realizar outros tipos de comparação
- há a possibilidade de imprimir um cenário para validação de falso, com o **else**

1º Dentro de algum componente que usará a renderização condicional, no arquivo.ts, dentro do bloco da classe, criamos uma variável, por exemplo:
```ts
export class IfRenderComponent {
  canShow: boolean = true;
  name = "Teste";
  nomeExemploIfElse = "notFound";
}
```
2º No arquivo.html do componente, dentro da tag, alocamos a diretiva ngIf:
```html
<div *ngIf="canShow">1º caso - Está sendo apresentado esse texto porque foi permitido</div>

<h2 *ngIf="name === 'Teste'">2º caso - Esta renderização só será mostrada se como resultado do ngIf for true ao comparar um atributo da classe com o valor presente na tag, no caso, "Teste"</h2>

<h3 *ngIf="nomeExemploIfElse === 'ifElse'; else nomeExemploIfElseNotFound">3º caso - Usando if else para retornar respostas diferentes</h3>
<ng-template #nomeExemploIfElseNotFound>
  <div>
    <h2>nomeExemploIfElseNotFound não foi encontrado</h2>
  </div>
</ng-template>
```
- geralmente a validação é feita na própria lógica da classe do componente ao invés de usar no template, como no 2º caso, na tag h2.
- na tag h3, que é o 3º caso, acontece algo interessante; podemos exibir algo como resultado de um if-else, onde será exibido algo se a 1ª condição for satisfeita, caso contrário, exibirá alguma outra coisa que está no else 
- no 3º caso estamos o *__ng-template__*, o qual permite criar rapidamente um template somente para exibição. E dentro dele, podemos criar um template html para suprir a necessidade.

## **Aula 10 - Eventos no Angular**
### **Definição** 
Algum tipo de interação com o servidor, por exemplo, um upload de algum arquivo, isso é um tipo de gatilho que faz com que o framework entenda que algo deve ser realizado com o servidor.
- podemos ativar eventos nos componentes para disparar algum método
- um evento clássico que usamos é o click
- a síntaxe é: *__(nome-do-evento-que-disparará-alguma-função)="nome-da-funçã-que-será-disparada()"__*
- os métodos ficam na classe
- futuramente, utilizaremos esse recurso para acessar uma **API**
- a maioria dos métodos que trabalham com Eventos retornam void
- **toggle -** recurso usado para inverter valor de uma variável sem utilizar um if-else ou operador ternário. Ex:
> `this.show = !this.show;`

arquivo.html:
```html
    <p *ngIf="show">Você clicou em mim!</p>
    <button (click)="showMessage()">Clique em mim!</button>

```
arquivo.ts:
```ts
export class EventosComponent {
  show: boolean = false;
  showMessage(): void {
    this.show = !this.show; // toogle
  }
}
```

## **Aula 11 - Emitindo Eventos**
### **Definição** 
- podemos comunicar eventos de um componente filho para o pai
- para isso, usamos o **@Output**, o qual fará a saída do evento do componente filho
- na tag de invocação do componente no template, escolhemos um método para executar quando o evento for emitido
- Exemplo: **(emit)="onEmit()"**
- componente emitter: recebe o evento sendo emitido do componente filho
- componente change-number: componente filho que envia o evento para o componente pai
- chamamos o componente filho dentro do componente pai para sincronização dos efeitos
- o evento está no componente filho, mas a execução da lógica estará no componente pai
- com **Output** enviamos algo
- com **EventEmitter**, enviamos um evento

### **Arquivos filho**
```html
<button (click)="hadleClick()">Alterar o número!</button>
```
```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  hadleClick() {
    this.changeNumber.emit();
  }
}
```
### **Arquivos pai**
```html
<h2>O número aleatório da vez é: {{ myNumber }}</h2>
<app-change-number (changeNumber)="onChanceNumber()"></app-change-number>
```
```ts
export class EmitterComponent {
  myNumber: number = 0;

  onChanceNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
```

## **Aula 12 - Renderização de Listas**
### **Definição**
- outro recurso importante é o **loop** em listas, o qual usamos para imprimir um array de objetos no template
- para isso vamos precisar de uma propriedade com os itens da lista
- e no template do componente vamos utilizar a diretiva **\*ngFor**
- a sintaxe é? *\*ngFor="let item of items"*; no caso, *items* precisar ser o nome da propriedade, já *item* é um nome independente, sem relação nenhuma entretanto, por boas práticas, utilizamos o nome da propriedade no singular, como na sintaxe
- desta maneira, podemos renderizar templates baseado em dados, ou seja, podemos pegar no BD uma lista de itens/objetos e renderizar no front-end
```html
<ul>
    <li *ngFor="let animal of animals">
      <p>Nome: {{ animal.name }}</p>
      <p>Tipo: {{ animal.type }}</p>
    </li>
</ul>
```
```ts
export class ListRenderComponent {
  animals = [
    {name:"Turca", type:"Dog"},
    {name:"Tom", type:"Cat"},
    {name:"Jerry", type:"Mouse"},
    {name:"Cookie", type:"Dogo"}
  ];
}
```