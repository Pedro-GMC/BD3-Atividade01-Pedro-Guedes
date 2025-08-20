const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use (database);

db['bd3-nosql-atv1'].deleteOne(
    {'cod_aluno': 9}
)    


//db['bd3-nosql-atv1'].find({'cod_aluno': 9})