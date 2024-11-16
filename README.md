# Agenda de Compromissos

Uma aplicação de agenda simples desenvolvida com **React**, **TypeScript**, **Vite** e **CSS Modules**, que permite visualizar um calendário e adicionar compromissos em datas e horários específicos.

## 🔥 Funcionalidades

- Visualizar calendário interativo.
- Selecionar uma data no calendário.
- Adicionar compromissos com descrição e horário.
- Exibir lista de compromissos organizados por data.

## 🚀 Tecnologias Utilizadas

- **Vite**: Ferramenta para inicialização rápida de projetos React.
- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **CSS Modules**: Estilização local para componentes React.
- **React-Calendar**: Biblioteca para exibição de calendários.
- **React-Modal**: Biblioteca para exibição de modais.

## 📦 Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/react-agenda.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

A aplicação estará disponível em [http://localhost:5173](http://localhost:5173).

<!--
## 🖼️ Capturas de Tela

### Calendário
> Mostra o calendário onde você pode selecionar uma data.

![Calendário](https://via.placeholder.com/800x400.png?text=Calendário+Interativo)

### Modal de Compromissos
> Interface para adicionar compromissos.

![Modal de Compromissos](https://via.placeholder.com/800x400.png?text=Adicionar+Compromissos)

### Lista de Compromissos
> Exibe os compromissos adicionados organizados por data.

![Lista de Compromissos](https://via.placeholder.com/800x400.png?text=Lista+de+Compromissos)
-->

## 🛠️ Estrutura do Projeto

```
src/
│
├── components/
│   ├── CalendarComponent.tsx       # Componente do calendário
│   ├── AppointmentModal.tsx        # Componente do modal de compromissos
│
├── styles/
│   ├── App.module.css              # Estilos do App
│   ├── CalendarComponent.module.css# Estilos do CalendarComponent
│   ├── AppointmentModal.module.css # Estilos do AppointmentModal
│
├── App.tsx                         # Componente principal
├── main.tsx                        # Arquivo de entrada
```

## ✨ Melhorias Futuras

- Editar ou remover compromissos.
- Adicionar notificações para os compromissos.
- Exportar compromissos em formatos como `.csv` ou `.ics`.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo!

---

💻 Desenvolvido com ❤️ por **[Grazziano](https://github.com/Grazziano)**.
