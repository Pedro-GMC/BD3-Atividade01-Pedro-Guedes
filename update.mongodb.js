const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use (database);

db['bd3-nosql-atv1'].find({"cod_aluno": 6});

db['bd3-nosql-atv1'].updateOne(
  { cod_aluno: 6 },
  { $set: { nome: "Rafael Moreira", cpf: "11901234567", rg: "789012300" } }
)