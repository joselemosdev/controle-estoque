create table if not exists geral.fornecedor(
	id uuid not null PRIMARY KEY DEFAULT uuidv7(),
	nome text,
	cnpj text,
	telefone text,
	email text
);

create table if not exists geral.categoria(
	id uuid not null primary key default uuidv7(),
	nome text,
	descricao text
);

create table if not exists geral.produto(
	id uuid not null primary key default uuidv7(),
	nome text,
	descricao text,
	valor float,
	codigo_barras text,
	preco_compra float,
	preco_venda float,
	quantidade_estoque int,
	estoque_minimo int,
	categoria_id uuid,
	fornecedor_id uuid,
	constraint fk_categoria foreign key (categoria_id) references geral.categoria(id),
	constraint fk_fornecedor foreign key (fornecedor_id) references geral.fornecedor(id)
);
create index if not exists idx_produto_categoria on geral.produto(categoria_id);
create index if not exists idx_produto_fornecedor on geral.produto(fornecedor_id);

create table if not exists geral.movimentacao_estoque(
	id uuid not null primary key default uuidv7(),
	tipo text,
	quantidade int,
	data timestamp,
	observacao text,
	produto_id uuid,
	constraint fk_produto foreign key (produto_id) references geral.produto(id)
);
create index if not exists idx_movimentacao_estoque_produto on geral.movimentacao_estoque(produto_id);