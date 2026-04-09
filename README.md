# Visualizador de Perfil do GitHub

## Descrição

Este é um projeto simples de uma aplicação web que permite visualizar perfis do GitHub. O usuário pode inserir o nome de usuário de uma conta do GitHub e obter informações sobre o perfil, como avatar, bio, número de seguidores e seguindo, além de uma lista dos últimos repositórios criados, com estatísticas como estrelas, forks, watchers e linguagem principal.

O projeto foi desenvolvido como parte de um aprendizado em desenvolvimento web, utilizando JavaScript moderno com módulos ES6, HTML e CSS.

## Funcionalidades

- Busca de perfis do GitHub por nome de usuário
- Exibição de informações básicas do usuário (avatar, nome, bio, seguidores, seguindo)
- Lista dos últimos 10 repositórios ordenados por data de criação
- Estatísticas dos repositórios (estrelas, forks, watchers, linguagem)
- Interface responsiva e amigável
- Tratamento de erros para usuários não encontrados ou problemas de rede

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e layout responsivo, com variáveis CSS para temas
- **JavaScript (ES6)**: Lógica da aplicação, utilizando módulos para organização do código
  - Módulos: `api.js` (chamadas para a API do GitHub), `dom.js` (manipulação do DOM), `events.js` (gerenciamento de eventos), `validation.js` (validação de entrada), `index.js` (inicialização)

## Estrutura do Projeto

```
vizualizaddor-perfil-github/
├── index.html          # Arquivo principal HTML
├── README.md           # Este arquivo
└── src/
    ├── css/
    │   ├── animations.css  # Animações CSS
    │   ├── reset.css       # Reset de estilos
    │   ├── responsive.css  # Estilos responsivos
    │   └── styles.css      # Estilos principais
    └── js/
        ├── api.js          # Módulo para API do GitHub
        ├── dom.js          # Módulo para manipulação do DOM
        ├── events.js       # Módulo para eventos
        ├── index.js        # Arquivo principal de inicialização
        └── validation.js   # Módulo de validação
```
## VISUALIZE O PROJETO 
https://menzomo.github.io/vizualizaddor-perfil-github/AA

## Como Executar

1. **Clone ou baixe o repositório** para o seu computador.

2. **Abra o arquivo `index.html`** em um navegador web moderno (Chrome, Firefox, Edge, etc.).
   - Você pode simplesmente clicar duas vezes no arquivo ou arrastá-lo para o navegador.

3. **Para desenvolvimento local com servidor** (recomendado para evitar problemas de CORS em algumas configurações):
   - Instale um servidor local simples, como o `live-server` via npm:
     ```
     npm install -g live-server
     ```
   - Navegue até a pasta do projeto e execute:
     ```
     live-server
     ```
   - O navegador abrirá automaticamente com a aplicação rodando.

4. **Uso**:
   - Digite o nome de usuário do GitHub no campo de busca.
   - Clique em "Buscar" ou pressione Enter.
   - Visualize as informações do perfil e repositórios.

## API Utilizada

O projeto utiliza a [GitHub REST API](https://docs.github.com/en/rest) para buscar dados dos usuários e repositórios. Não requer autenticação para buscas públicas, mas esteja ciente dos limites de taxa da API (60 requisições por hora para IPs não autenticados).

## Dependências

Nenhuma dependência externa é necessária. O projeto utiliza apenas APIs nativas do navegador (fetch) e CSS/HTML padrão.

## Melhorias Futuras

- Adicionar paginação para repositórios
- Implementar busca por organizações
- Adicionar gráficos ou visualizações para estatísticas
- Suporte a temas escuros/claros
- Cache de resultados para melhorar performance

## Contribuição

Sinta-se à vontade para contribuir com melhorias! Abra issues para bugs ou sugestões, e pull requests para novas funcionalidades.

## Licença

Este projeto é de código aberto e está sob a licença MIT.
