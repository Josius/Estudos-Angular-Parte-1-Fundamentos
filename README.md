# **Estudos Angular**

## **Fonte de Estudos: [Hora de Codar](https://www.youtube.com/playlist?list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw)**


## **Ferramentas Utilizadas:**
> - Angular CLI: 15.2.1
> - Node: 18.14.2
> - Package Manager: npm 9.6.0
> - OS: win32 x64
> - [Package Json-Server](#json-server)

## **Instalação**
Partindo do princípio que as ferramentas acima estão instaladas: 
- baixe o repositório
- no diretório raiz do repositório abre um terminal/bash
- execute o comando **npm install**
- execute o comando **ng serve**
- no diretório raiz do repositório abra um novo terminal/bash
- execute o comando **npm run server**
- acesse *http://localhost:4200/* para visualizar as páginas de estudos funcionando

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
~~~ts
import { Component, Input } from '@angular/core';
~~~
e no mesmpo arquivo .ts:
~~~ts
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

## **Aula 13 - Importância das Interfaces**
### **Definição**
- toda entidade que vamos trabalhar precisa de uma interface, não é obrigatório, mas é um padrão em Angular
- isso torna o código mais simples ao longo do programa
- padronizando e facilitando a manutenção
- vamos implementar uma interface a lista de animais
- e fazer um evento que utilizará esse recurso
- criamos a interface no nível do diretório *app*
- podemos criar um diretório para armazenar as interfaces

1º Criamos a interface:
```ts
export interface Animal {
    name: string;
    type: string;
    age: number;
    sex: string;
}
```

2º Importamos a interface para o *arquivo.ts* que utilizará a interface, no caso, para *list-render.component.ts*.

3º Ainda no mesmo *arquivo.ts*, tipamos o que iremos usar com a interface:

Antes:
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

Depois:
```ts
import { Animal } from 'src/app/interfaces/Animal';

export class ListRenderComponent {
  animals: Animal[] = [
    {name:"Turca", type:"Dog", age: 4, sex:"F"},
    {name:"Tom", type:"Cat", age: 3, sex:"M"},
    {name:"Jerry", type:"Mouse", age: 2, sex:"M"},
    {name:"Cookie", type:"Dogo", age: 5, sex:"M"}
  ];
}
```
**NOTA:** Obrigatoriamente precisamos usar os atributos da interface, ou seja, alinhamos o código a interface.

4º Criando um evento quando clicar em algum animal:

No arquivo *list-render.component.html*:
```html
<ul>
  <li *ngFor="let animal of animals">
    <p>Nome: {{ animal.name }}</p>
    <p>Tipo: {{ animal.type }}</p>
    <button (click)="showAge(animal)">Show age</button>
  </li>
</ul>
```

5º No arquivo *list-render.component.ts* criamos a propriedade *showAge*:
```ts
animalDetails = '';
showAge(animal: Animal){
    
    this.animalDetails = `O pet ${animal.type} ${animal.name} tem ${animal.age} anos`;
  }
```

6º Por fim, criamos uma exibição no arquivo *list-render.component.html*:
```html
<ul>
  <li *ngFor="let animal of animals">
    <p>Nome: {{ animal.name }}</p>
    <p>Tipo: {{ animal.type }}</p>
    <button (click)="showAge(animal)">Show age</button>
  </li>
</ul>
<h3>{{ animalDetails }}</h3>
```

**PS:** Fiz uma alteração na propriedade showPet, onde ao invés de usar o artigo 'o' para todos os animais, usei uma lógica para retornar um artigo conforme o sexo do animal:
```ts
animalDetails = '';
artigo = '';

showAge(animal: Animal){
  (animal.sex == "F") ? this.artigo = 'A' : this.artigo = 'O';
  
  this.animalDetails = `${this.artigo} ${animal.type} ${animal.name} tem ${animal.age} anos`;
}
```

## **Aula 14 - Pipe Operators**
### **Definição**
- são recursos para trabalhar com strings nos templates
- realizão várias funções, como deixar o texto em caixa alta
- sintaxe: {{ dado | algumPipeOperator }}
- desta forma, evitamos as regras de CSS ou manipulação de strings com JS

No código exemplo, estamos utilizando um texto no *arquivo.html*, mas esse texto pode vir de alguma outra origem. 

### **Exemplo de caixa alta com texto no *arquivo.html*:**
No arquivo *pipes.component.html:*
```html
<h2>{{ "Algum texto" | uppercase }}</h2>
```
Saída na página web:
> `ALGUM TEXTO`

### **Exemplo de caixa baixa e 1ªs letras maiúsculas, com texto oriundo de alguma propriedade:**
No arquivo *pipes.component.ts*:
```ts
export class PipesComponent {
  someText = 'TESTANDO O PIPE OPERATOR';
}
```
No arquivo *pipes.component.html:*
```html
<h3>{{ someText | lowercase}}</h3>
<h4>{{ someText | titlecase}}</h4>
```
Saída do lowercase na página web:
> `testando o pipe operator`

Saída do titlecase na página web:
> `Testando O Pipe Operator`

### **Exemplo de data:**
No arquivo *pipes.component.ts*:
```ts
export class PipesComponent {
  today = new Date();
}
```
No arquivo *pipes.component.html:*
```html
<h5>{{ today | date: "fullDate" }}</h5>
```
Saída original na página web:
> `Fri Mar 31 2023 10:14:14 GMT-0300 (Horário Padrão de Brasília)`

Saída após uso do pipe operator na página web:
> `Friday, March 31, 2023`

## **Aula 15 - Two Way Data Binding**
### **Definição**
- interessante para trabalhar com formulários
- conseguimos alterar props e o template com o preenchimento de inputs
- é necessário importar o **FormsModule** no componente principal
- também precisa declarar o **ngModel** no input, além de preencher o atributo name, todos com o mesmo valor

Após criar o componente e atribuí-lo ao arquivo *app.component.html*, vamos seguir o seguintes passos:

1º Importar o componente **FormsModule** no arquivo *app.module.ts* para termos acesso ao recurso de formulário:
```ts
import { FormsModule } from '@angular/forms';
...
imports: [
    BrowserModule,
    FormsModule
  ],
...
```

2º No *arquivo.html*:
```html
<div class="aula">
  <h1>Aula 15 - Two Way Data Binding</h1>
  <form action="">
    <input type="text"[(ngModel)]="name">
  </form>
</div>
```
Em **[(ngModel)]="name"**, o "name" é o nome do input o qual é bindado automaticamente, então, precisamos ir no *arquivo.ts* e declarar a propriedade "name":

3º No *arquivo.ts* podemos criar a propriedade do tipo string e vazia:
```ts
export class TwoWayBindingComponent {
  name: string = '';
}
```

4º De volta no *arquivo.html*, adicionamos mais alguns parâmetros e ele ficará dessa forma:
```html
<div class="aula">
  <h1>Aula 15 - Two Way Data Binding</h1>
  <form action="">
    <input type="text"[(ngModel)]="name"
        name="nameInput"
        placeholder="Digite seu nome">
    <input type="submit" value="Enviar">
  </form>
  <div *ngIf="name != ''" >
    <p>O nome é: {{ name }}</p>
  </div>
</div>
```
Desta forma, o Angular está mapeando uma propriedade chamada *nomeDoInput* em seu módulo. 

Outro ponto importante é que o mesmo dado sendo enviado pelo formulário também é acessível, como podemos ver em: 
```html
<div *ngIf="name != ''" >
  <p>O nome é: {{ name }}</p>
</div>
```
O qual será apresentado na página web conforme é preenchido o campo. Esta é a função do *__two way data binding__*.

## **Aula 16 - Services do Angular**
### **Definição**
- é uma parte fundamental do Angular
- comumente, ficam as requisições para as **APIs** que utilizamos no projeto, ou seja, ele se comunicará com BDs
  - com isso, delegamos a responsabilidade de comunicação para o service ao invés de usar o *__arquivo.ts__* do componente
  - geralmente temos um service para cada componente que trabalha com requisições
  - geralmente, o nome do service é bem parecido com o nome do componente ou sua entidade; por exemplo:
    - User == UserService
- precisamos criar o service com: **ng generate service \<nome>**
- importar no componente e iniciar no constructor
- após isso, é possível acessar os métodos dele

### **O que vamos fazer**
- usaremos o componente *__list-render__*
- vamos fazer uma ação para excluir os animais, ou seja, haverá um delete para apagar o dado do BD

1º Criamos o service:
> `$ ng generate service services/list`
 
2º Importamos o service no arquivo *__list.render.component.ts__*:
> `import { ListService } from 'src/app/services/list.service';`

3º Iniciamos no construtor do componente:
> `constructor(private listService: ListService) { }`

Com isso, o angular entenderá que estamos criando um novo serviço *(listService)* e de onde é oriundo *(ListService)*

4º Criamos o método para deletar os dados:
```ts
removeAnimal(animal: Animal) {
  console.log('Removendo o animal...');
}
```

5º no *arquivo.html* criamos o botão de excluir:
```html
<button (click)="removeAnimal(animal)">Excluir</button>
```

6º criaremos o método de exclusão no service:

Importando:
> `import { Animal } from '../interfaces/Animal';`

Criando o método de exclusão:
```ts
remove(animals: Animal[], animal: Animal) {
  console.log("Ativando service");
}
```
Em *__animals: Animal[]__* recebemos a lista de objetos.

Em *__animal: Animal__* recebemos o objeto que iremos remover.

7º criaremos a ligação com o service no *__arquivo.ts__* do componente chamando o método criado no 6º passo:
```ts
removeAnimal(animal: Animal) {
  console.log('Removendo o animal...');
  this.listService.remove(this.animals, animal)
}
```

8º Por último:

No *__arquivo.ts__* do service:
```ts
remove(animals: Animal[], animal: Animal) {
  console.log("Ativando service");
  return animals.filter((a) => animal.name !== a.name);
}
```
Em:
> `return animals.filter((a) => animal.name !== a.name);`

usamos uma função lambda com filter para retornar da lista todos os objetos, com exceção do objeto que foi passado para exclusão.

No *__arquivo.ts__* do componente:
```ts
removeAnimal(animal: Animal) {
  console.log('Removendo o animal...');
  this.animals = this.listService.remove(this.animals, animal)
}
```
Em:
> `this.animals = this.listService.remove(this.animals, animal)`

a lista de objetos recebe o retorno do método *.remove()* do service com a nova lista sem o objeto excluído.

## **Aula 17 - Angular Router**
### **Definição**
- criaremos um novo arquivo para declarar as rotas
- nele importaremos os módulos **RouterModules** e **Routes**
- após a definição, estas rotas precisam ser importadas em **app.module.ts**
- por fim, no template principal criamos as rotas
- e substituímos os componentes por: **\<router-outlet>**
 
1º Criamos o arquivo de rotas. No exemplo, criamos no nível do diretório app:
>`app-routing.module.ts`

2º Importamos uma série de coisas:
- ngModule
- RouterModule
- Routes

3º Definimos as rotas em uma constante a qual recebe um array de objetos:
- **path: ''** - este é o caminho da rota, no caso a *raiz* da rota
- **component: FirstComponentComponent** - este é o componente que será exibido quando acessar a rota determinada em path, no caso *FirstComponentComponent*

4º Configuramos o arquivo de rotas para exportação:
- imports: [RouterModule.forRoot(routes)] - indicam que as rotas iniciam na raiz

```ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
```

5º Importamos e declaramos as rotas em **app.module.ts**:
Importando:
>`import { AppRoutingModule } from './app-routing.module';`

Declarando em imports:
```ts
...
imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule
],
...
```

6º Declaramos onde serão alteradas as rotas do template, para mudar a view. No caso, usaremos o arquivo **app.component.html**:

Antes:
```html
<h1>Hello There.</h1>
<h2>General Kenobi!</h2>
<p>parágrafo do app.component.html</p>
<div>
    <a href="#">Cliqueste akiue</a>
</div>
<app-first-component></app-first-component>
<app-parent-data [name]="userName" [userData]="userData"></app-parent-data>
<app-directives></app-directives>
<app-if-render></app-if-render>
<app-eventos></app-eventos>
<app-emitter></app-emitter>
<app-list-render></app-list-render>
<app-pipes></app-pipes>
<app-two-way-binding></app-two-way-binding>
```
Depois:
```html
<header>header</header>
<h1>Hello There.</h1>
<h2>General Kenobi!</h2>
<p>Início do meio do site</p>
<router-outlet></router-outlet>
<p>Fim do meio do site</p>
<footer>footer</footer>
```

Inicialmente, o que será apresentado é o componente *__FirstComponentComponent__*, pois ele foi definido como a página inicial do site, e se no url colocarmos **/list**, seremos redirecionados para o componente *__ListRenderComponent__*.

Podemos usar um navbar para direcionamento das rotas:
```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/list">Lista</a>
</nav>
```
Note que ao invés de **\<a href="">** usamos **\<a routerLink="/">** que é um parâmetro do angular.

## **Aula 18 - Requisições HTTP** <a id="json-server"></a>
### **Definição**
- realizaremos requisições HTTP nos services
- importaremos 2 pacotes: **HttpCliente** e **HttpHeaders**
- usaremos um API local p/simular as requests com **json-server**
- é necessário inicializar o módulo **HttpClienteModule** em *__app.module.ts__*
 
### **Primeira parte**
1. Instalaremos o pacote **json-server** com o comando:
> ``npm i json-server``

2. Para mockar os dados, criaremos um arquivo chamado *__db.json__* no nível da raiz do projeto com alguns dados.

3. Alteraremos *__package.json__* para rodar os dados mockados. Em *"scripts"*, após a última linha *"test": "ng test"*, colocamos:
> `"server": "json-server --watch db.json"`

4. Executaremos o **json-server** com o comando:
> ``npm run server``

Ou seja, teremos o servidor Node rodando na porta 4200 e também o servidor json-server para simular uma API na porta 3000. Ambos funcionando ao mesmo tempo.

Concluida essas configurações, vamos para a 2ª parte.

### **Segunda parte**
Importaremos *__HttpClientModule__* em *__app.module.ts__*. Precisamos declarar primeiramente *from '@angular/common/http'* e depois, *import { HttpClientModule }*, pois como começa com *@*, o angular não reconhece o import automático:
```ts
import { HttpClientModule } from '@angular/common/http'
```

Declaramos o *__HttpClientModule__* nos imports do arquivo *__app.module.ts__*:
```ts
imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  HttpClientModule
],
```

Feitas essas últimas configurações, iremos trabalhar com os componentes, no caso, o arquivo *__list-render.component.ts__*.

### **Terceira parte**
Utilizaremos uma lista vazia:
```ts
export class ListRenderComponent {
  animals: Animal[] = [];
```
  
Puxaremos os dados da API pelo service:
```ts
constructor(private listService: ListService) {
  this.getAnimals();
}
```
  
3. Criaremos um método *__.getAnimals()__* que acessa o método service, chamando o método *__.getAll()__* que retornará a lista de objetos mockados:

```ts
getAnimals(): void{
  this.listService.getAll();
}
```

Nesta 4ª parte, alteraremos o arquivo *__list.service.ts__*.

### **Quarta parte**
Importamos **HttpCliente** e **HttpHeaders** no arquivo *__list.service.ts__*:
```ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
```

Importamos **Observable** no arquivo *__list.service.ts__* para que as requisições ocorram da melhor maneira possível:
```ts
import { Observable } from 'rxjs';
```
   
Declararemos a **url da API\***:
```ts
private apiUrl = 'http://localhost:3000/animals'
```

Como não temos acesso direto da importação, precisamos passar pelo constructor, semelhante ao service, onde iremos declarar o **HttpCliente** para permitir usar os métodos GET, PUT, POST, DELETE, etc., para usar no método *__.getAll()__*:
```ts
constructor(private http: HttpClient) { }
```

Criamos o método *__.getAll()__* no arquivo *__list.service.ts__*:
```ts
getAll(): Observable<Animal[]> {
  return this.http.get<Animal[]>(this.apiUrl);
}
```

**url da API\*:** Geralmente recebemos essa **url da API** de um arquivo de configuração, mas como estamos mockando os dados, ela é configurada no aqruivo *__list.service.ts__*.

Nesta 5ª parte, voltamos para o arquivo *__list-render.component.ts__*.

### **Quinta parte**
Alteraremos o método *__.getAnimals()__*, pois não estamos preenchendo o array, somente chamando a lista dos dados mockados. Por estarmos usando **Observable**, precisaremos usar *__.subscribe()__*, o qual informa que o evento será concretizado:
```ts
getAnimals(): void{
  this.listService.getAll().subscribe((animals) => (this.animals = animals));
}
```

## **Aula 19 - Dynamic Routes**
### **Definição**
- para recuperar um dado do BD vamos precisar criar uma rota dinâmica no router
- baseado no id do item, teremos a seleção de dado no BD, geralmente o id vem pela URL
- p/ recuperar parâmetros da URL utilizaremos o *módulo* **ActivedRoute**
- a lógica p/ requisição HTTP ficará no **service**

### **Primeira parte**
1º Criaremos um novo componente:
> `ng generate component components/item-detail `

E a partir desse componente recém criado elaboraremos uma rota.

2º Criamos uma nova rota no arquivo *__app-routing.module.ts__*:
> `{path: 'list-render/:id', component: ItemDetailComponent},`

Note que agora temos */:id* após o *list-render*, isso é uma rota dinâmica, pois o id poderá mudar sempre que a rota for acessada. Perceba também que agora usaremos o componente recém criado *ItemDetailComponent* ao invés do *ListRenderComponent*, o qual utilizamos em aulas anteriores.

3º Em *__list-render.component.html__* faremos uma alteração no campo que renderiza os dados recebidos do BD:

>`Nome: <a routerLink="/list-render/{{ animal.id }}">{{ animal.name }}</a> -   Tipo: {{ animal.type }}`

**NOTA:** Isso gerará um erro pois na interface não ha um campo *id*. Para corrigir isso é só acrescentar um atributo *id*.

### **Segunda parte**
Agora vamos alterar o componente *ItemDetailComponent*:

1º Em *__item-detail.component.ts__* importamos:
- a interface Animal
- ActivatedRoute, para as rotas
- ListService, para interação com o service
```ts
import { Animal } from 'src/app/interfaces/Animal';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';
```

2º Ainda em *__item-detail.component.ts__*, dentro do escopo da declaração da classe:
- criamos um método *__.getAnimal()__* para recuperar os dados do BD
- criamos um atributo animal com **?** para indicar que o dado pode ser ou não recuperado do BD
- inicializamos o que precisamos no constructor
  - ListService
  - ActivatedRoute
- chamamos o método *__.getAnimal()__*
```ts
export class ItemDetailComponent {

  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
```

3º Em *__list.service.ts__* criaremos o método *__.getItem()__*, o qual é chamado dentro do método *__.getAnimal()__*, do componente *__item-detail.component.ts__*:
```ts
getItem(id: number): Observable<Animal> {
  return this.http.get<Animal>(`${this.apiUrl}/id`);
}
```

4º Agora trabalharemos com *__item-detail.component.html__* entretanto, como colocamos uma **?** no atributo animal do arquivo *__item-detail.component.ts__*, isso quer dizer que pode ou não vir esse dado para ser renderizado logo, precisamos usar o **\*ngIf** para que não dê erro ao tentar renderizar o dado:
```html
<div *ngIf="animal" class="aula">
	<h1>Aula 19 - Dynamic Routes</h1>
	<p>ID: {{ animal.id }}</p>
	<h2>Nome: {{ animal.name }}</h2>
	<h2>Tipo: {{ animal.type }}</h2>
	<h2>Idade: {{ animal.age }}</h2>
	<h2>Sexo: {{ animal.sex }}</h2>
</div>
```

## **Aula 20 - Excluíndo Dados pelo Service**
### **Definição**
- refatoraremos a ação de remover registro com a execução HTTP
- criaremos outro método service
- ajustaremos a maneira que o método da classe do componente é executado
- com essas mudanças estaremos interagindo com a API

1º Entraremos em *__list.service.ts__* e no método *remove* iremos recortar a lógica do *return* e alocar no arquivo *__list-render.component.ts__*, no método *removeAnimal*, este método ficará da seguinte forma:
```ts
removeAnimal(animal: Animal) {
  this.animals = this.animals.filter((a) => animal.name !== a.name);
  // abaixo, código usado nas aulas anteriores a aula 20
  // this.animals = this.listService.remove(this.animals, animal)
}
```
Segundo o vídeo, esta lógica tem que ficar no arquivo *__list-render.component.ts__*, no método *removeAnimal*, pois irá excluir no front-end. Para exclusão no back-end, iremos alterar no arquivo *__list.service.ts__* o método *remove*.

2º No método *remove* do arquivo *__list.service.ts__*, originalmente nós recebíamos a lista completa de animais para a remoção. Após a refatoração, precisaremos somente receber o *id* do animal. Então vamos alterar novamente o método *removeAnimal* do arquivo *__list-render.component.ts__*:

```ts
removeAnimal(animal: Animal) {
  this.animals = this.animals.filter((a) => animal.name !== a.name);
  this.listService.remove(animal.id).subscribe();
}
```
Esta linha exclui do front-end:
> `this.animals = this.animals.filter((a) => animal.name !== a.name);`

Esta linha envia requisição para o service para exclusão no back-end:
> `this.listService.remove(animal.id).subscribe();`

**NOTA 1:** no service, tanto o método *getAll* quanto o *getItem* utilizamos o *Observable*, porém no método *remove* não precisaremos dele, pois não estamos atribuindo nada ao front-end.
**NOTA 2:** já no arquivo *__list-render.component.ts__*, no método *removeAnimal* precisamos usar o *subscribe*, porque o ocorrerá um evento com o BD, pois este será alterado. É uma maneira do Angular dizer que o evento foi executado.

E no método *remove* do arquivo *__list.service.ts__*:

```ts
remove(id: number) {
  return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
}
```

Concluído esses passos, teremos a exclusão do objeto, tanto no front-end *(sem precisar recarregar a página, buscando dados no back-end)* quanto no back-end.