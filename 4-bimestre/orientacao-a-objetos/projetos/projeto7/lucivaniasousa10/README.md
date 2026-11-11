# API de alugueis da locadora

API REST em Express para consultar e cadastrar alugueis em memória.

## Instalar e testar

```bash
npm install
npm test
```

## Executar

O `index.js` exporta a aplicação sem iniciar o servidor. Para executá-la localmente:

```bash
node --watch servidor.js
```

A API fica disponível em `http://localhost:3000`.

## Rotas

- `GET /alugueis`: lista alugueis. Aceita `situacao` e `diasMin` como filtros opcionais.
- `GET /alugueis/:id`: busca um aluguel pelo id; retorna 404 quando não encontrado.
- `POST /alugueis`: cadastra um aluguel com `assinante`, `jogo` e `dias`.

Os registros são mantidos apenas em memória e são reiniciados quando a aplicação reinicia.
