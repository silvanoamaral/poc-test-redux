import { rest } from "msw";

export const responseMocks = {
  cep: "01001-000",
  logradouro: "Praça da Sé",
  complemento: "lado ímpar",
  bairro: "Sé",
  localidade: "São Paulo",
  uf: "SP",
  ibge: "3550308",
  gia: "1004",
  ddd: "11",
  siafi: "7107",
};

export const handlers = [
  rest.get(`https://viacep.com.br/ws/01234568/json/`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(responseMocks))
  ),
];
