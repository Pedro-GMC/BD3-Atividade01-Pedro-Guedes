const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

use (database);

db.createCollection(collection);

db['bd3-nosql-atv1'].insertMany(
    [
        {
            "cod_aluno": 1,
            "nome": "Ana Silva",
            "cpf": "12345678901",
            "rg": "123456789",
            "telefone_aluno": "11987654321",
            "telefone_responsavel": "11912345678",
            "email": "ana.silva@gmail.com",
            "data_nascimento": "2005-01-15T00:00:00"
        },
        {
            "cod_aluno": 2,
            "nome": "Bruno Santos",
            "cpf": "23456789012",
            "rg": "234567890",
            "telefone_aluno": "11987654322",
            "telefone_responsavel": "11912345679",
            "email": "bruno.santos@hotmail.com",
            "data_nascimento": "2004-02-20T00:00:00"
        },
        {
            "cod_aluno": 3,
            "nome": "Carlos Oliveira",
            "cpf": "34567890123",
            "rg": "345678901",
            "telefone_aluno": "11987654323",
            "telefone_responsavel": "11912345680",
            "email": "carlos.oliveira@gmail.com",
            "data_nascimento": "2003-03-25T00:00:00"
        },
        {
            "cod_aluno": 4,
            "nome": "Daniela Costa",
            "cpf": "45678901234",
            "rg": "456789012",
            "telefone_aluno": "11987654324",
            "telefone_responsavel": "11912345681",
            "email": "daniela.costa@hotmail.com",
            "data_nascimento": "2002-04-30T00:00:00"
        },
        {
            "cod_aluno": 5,
            "nome": "Eduardo Lima",
            "cpf": "56789012345",
            "rg": "567890123",
            "telefone_aluno": "11987654325",
            "telefone_responsavel": "11912345682",
            "email": "eduardo.lima@gmail.com",
            "data_nascimento": "2001-05-05T00:00:00"
        },
        {
            "cod_aluno": 6,
            "nome": "Fernanda Almeida",
            "cpf": "67890123456",
            "rg": "678901234",
            "telefone_aluno": "11987654326",
            "telefone_responsavel": "11912345683",
            "email": "fernanda.almeida@hotmail.com",
            "data_nascimento": "2000-06-10T00:00:00"
        },
        {
            "cod_aluno": 7,
            "nome": "Gabriel Pereira",
            "cpf": "78901234567",
            "rg": "789012345",
            "telefone_aluno": "11987654327",
            "telefone_responsavel": "11912345684",
            "email": "gabriel.pereira@gmail.com",
            "data_nascimento": "1999-07-15T00:00:00"
        },
        {
            "cod_aluno": 8,
            "nome": "Helena Martins",
            "cpf": "89012345678",
            "rg": "890123456",
            "telefone_aluno": "11987654328",
            "telefone_responsavel": "11912345685",
            "email": "helena.martins@hotmail.com",
            "data_nascimento": "1998-08-20T00:00:00"
        },
        {
            "cod_aluno": 9,
            "nome": "Igor Rocha",
            "cpf": "90123456789",
            "rg": "901234567",
            "telefone_aluno": "11987654329",
            "telefone_responsavel": "11912345686",
            "email": "igor.rocha@gmail.com",
            "data_nascimento": "1997-09-25T00:00:00"
        },
        {
            "cod_aluno": 10,
            "nome": "Juliana Ferreira",
            "cpf": "01234567890",
            "rg": "012345678",
            "telefone_aluno": "11987654330",
            "telefone_responsavel": "11912345687",
            "email": "juliana.ferreira@hotmail.com",
            "data _nascimento": "1996-10-30T00:00:00"
        },

    ]
)