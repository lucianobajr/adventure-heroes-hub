# Adventure Heroes Hub

🦹‍♀️🧙‍♀️ A plataforma **Adventure Heroes Hub** reúne heróis em jornadas épicas e aventuras incríveis! 🦸‍♂️✨

## Descrição

O **Adventure Heroes Hub** é um aplicativo que oferece uma experiência envolvente para os fãs de Pokémon, permitindo a seleção de dois Pokémon para uma batalha emocionante. O aplicativo utiliza a abordagem de design Atomic Design para organizar seus componentes de forma escalável e estruturada.

## Atomic Design

![1677002524035](https://github.com/lucianobajr/adventure-heroes-hub/assets/45442173/029eaf22-9fc4-45a0-b1c8-a29b786944d7)

O projeto segue os princípios do *Atomic Design*, uma metodologia que organiza componentes de interface de usuário em cinco níveis distintos:

1. **Átomos:** Componentes básicos e indivisíveis, como botões, inputs, etc.
2. **Moléculas:** Combinação de átomos para criar componentes mais complexos e reutilizáveis.
3. **Organismos:** Combinação de moléculas para formar seções ou componentes mais autossuficientes.
4. **Templates:** Arranjo estrutural que define a organização dos organismos na página.
5. **Páginas:** Implementação final do design com dados específicos.

A estrutura organizacional facilita a manutenção, reutilização e escalabilidade dos componentes.

## Tecnologias Utilizadas

- **Tailwind CSS:** Framework de estilo utilitário para criação de interfaces elegantes e responsivas.
- **Shadcn UI:** Biblioteca de componentes estilizados para consistência visual.
- **Radix:** Biblioteca de componentes de interface de usuário acessíveis e personalizáveis.

## Funcionalidades

- **Dark Mode:** Suporte ao modo escuro para uma experiência visual agradável.
- **Sessão de Usuários:** Gerenciamento eficiente das informações do jogador para uma experiência personalizada.
- **API de Cartas do Pokémon:** Utilização da API de cartas do Pokémon para obter informações sobre os Pokémon disponíveis.
- **Batalha Pokémon:** Seleção de dois Pokémon para uma batalha virtual, calculando o vencedor com base nos pontos de vida (HP) dos Pokémon escolhidos.

## Como Iniciar

1. Certifique-se de que você está usando o Node.js na versão 18 ou superior.
2. Clone o repositório: `git clone https://github.com/lucianobajr/adventure-heroes-hub.git`
3. Instale as dependências: `npm install`
4. Inicie o aplicativo: `npm run dev`
5. Abra o navegador e acesse `http://localhost:5173`

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.