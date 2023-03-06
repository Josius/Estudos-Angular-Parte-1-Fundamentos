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