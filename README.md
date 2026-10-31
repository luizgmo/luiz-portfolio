# Portfólio — Luiz Gustavo Monico

Aplicação Angular standalone, com portfólio filtrável, capas conceituais, detalhes de projetos, navegação móvel.

## Executar

```sh
npm install
npm start
```

## Produção

```sh
npm run build
```

Saída: `dist/portfolio/browser`. Conteúdo baseado no currículo `cv_luizgustavomonico.pdf` e na documentação dos projetos locais.

## Compatibilidade local

`npm start` compila o Angular e serve a aplicação em http://localhost:4200 com Node.js, sem depender do servidor Vite. Após editar arquivos, interrompa com Ctrl+C e execute novamente. `npm run start:angular` mantém disponível o servidor original com recarga automática para máquinas compatíveis. A importação do Vite instalado foi reproduzida com encerramento SIGILL neste ambiente; a causa específica no binário nativo não foi determinada.
