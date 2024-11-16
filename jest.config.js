module.exports = {
  testEnvironment: 'node',
  verbose: true,
  roots: ["<rootDir>"], // Adicione esta linha para apontar para a pasta de serviços
  testMatch: ["**/*.spec.{ts,js}"],  // Padrão de busca para arquivos de teste
};