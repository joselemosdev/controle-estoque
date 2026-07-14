DO $$
BEGIN
    IF EXISTS (
       SELECT 1
       FROM INFORMATION_SCHEMA.TABLES
       WHERE TABLE_SCHEMA = 'geral'
       AND TABLE_NAME = 'fornecedor'
    ) THEN
        INSERT INTO geral.fornecedor(
        id, nome, cnpj, telefone, email)
        VALUES (gen_random_uuid(),
                'José Eduardo',
                '11.059.400.0001-69',
                '(44)998016956',
                'jose.lemos.dev@gmail.com'
       );
ELSE
    	RAISE NOTICE 'SCHEMA GERAL OU TABELA FORNECEDOR INEXISTENTES';
END IF;

	IF EXISTS (
		SELECT 1
		FROM INFORMATION_SCHEMA.TABLES
		WHERE TABLE_SCHEMA = 'geral'
		AND TABLE_NAME = 'categoria'
	) THEN
		INSERT INTO geral.categoria(
		id, nome, descricao)
		VALUES (gen_random_uuid(),
				'Eletrônicos',
				'Quaisquer objetos que utilizam uma fonte de energia elétrica'
		);
ELSE
    	RAISE NOTICE 'SCHEMA GERAL OU TABELA CATEGORIA INEXISTENTES';
END IF;

	IF EXISTS (
		SELECT 1
		FROM INFORMATION_SCHEMA.TABLES
		WHERE TABLE_SCHEMA = 'geral'
		AND TABLE_NAME = 'produto'
	) THEN
		INSERT INTO geral.produto(
		id,
	    nome,
	    descricao,
	    valor,
	    codigo_barras,
		preco_compra,
	    preco_venda,
	    quantidade_estoque,
		estoque_minimo,
	    categoria_id,
	    fornecedor_id
		)
		VALUES (gen_random_uuid(),
				'WebCam - P220 - Logitech',
				'Câmera para computadora, com resolução 1080p e conexão USB',
				299.90,
				'000388951220002',
				169.90,
				299.90,
				32,
				1,
				null,
				null
		);
ELSE
    	RAISE NOTICE 'SCHEMA GERAL OU TABELA PRODUTO INEXISTENTES';
END IF;

	IF EXISTS (
		SELECT 1
		FROM INFORMATION_SCHEMA.TABLES
		WHERE TABLE_SCHEMA = 'geral'
		AND TABLE_NAME = 'movimentacao_estoque'
	) THEN
		INSERT INTO geral.movimentacao_estoque(
		id,
		tipo,
		quantidade,
		"data",
		observacao,
		produto_id
		)
		VALUES (gen_random_uuid(),
			'saida',
			1,
			now(),
			'Venda',
			null
		);
ELSE
    	RAISE NOTICE 'SCHEMA GERAL OU TABELA MOVIMENTACAO_ESTOQUE INEXISTENTES';
END IF;
END $$;