DROP TABLE IF EXISTS alunos;

CREATE TABLE alunos (
    id INTEGER PRIMARY KEY,
    nome VARCHAR (255),
    turma VARCHAR(255),
    idade INTEGER,
    cpf CHAR(11),
    genero VARCHAR(63),
    telefone VARCHAR(18),
    email VARCHAR (255)
);

INSERT INTO alunos (id, nome, turma, idade, cpf, genero, telefone, email)
VALUES
(1, "Fulano", "Programador de Sistema", 34, "000.000.000-00", "Masculino", "(62)9234-5678", "fulano.magnata@exemplo.com"),
(2, "Ana Souza", "Desenvolvedora Frontend", 28, "12345678901", "Feminino", "(61)98765-4321", "ana.souza@exemplo.com"),
(3, "Carlos Silva", "Analista de Dados", 30, "23456789012", "Masculino", "(21)97654-3210", "carlos.silva@exemplo.com"),
(4, "Beatriz Costa", "Designer Gráfico", 25, "34567890123", "Feminino", "(11)96543-2109", "beatriz.costa@exemplo.com"),
(5, "Eduardo Almeida", "Administrador de Sistemas", 40, "45678901234", "Masculino", "(31)95432-1098", "eduardo.almeida@exemplo.com"),
(6, "Juliana Martins", "Engenheira de Software", 29, "56789012345", "Feminino", "(71)94321-0987", "juliana.martins@exemplo.com"),
(7, "Roberto Lima", "Especialista em Segurança", 35, "67890123456", "Masculino", "(81)93210-9876", "roberto.lima@exemplo.com"),
(8, "Camila Pereira", "Gerente de Projetos", 32, "78901234567", "Feminino", "(51)92109-8765", "camila.pereira@exemplo.com"),
(9, "Lucas Ferreira", "Analista de Suporte", 27, "89012345678", "Masculino", "(41)91234-5678", "lucas.ferreira@exemplo.com"),
(10, "Mariana Oliveira", "Consultora de TI", 31, "90123456789", "Feminino", "(19)92345-6789", "mariana.oliveira@exemplo.com");

UPDATE alunos SET idade = 40, email= "tutu.yudi@gmail.com" WHERE id = 1;
-- DELETE FROM alunos WHERE id = 2;



SELECT * FROM alunos;