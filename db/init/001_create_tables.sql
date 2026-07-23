-- このファイルはPostgreSQLコンテナの初回起動時に自動実行されます。
-- （2回目以降の起動時は db_data ボリュームにデータが残っているため実行されません）

CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now()
);

INSERT INTO items (name) VALUES
    ('サンプルデータ1'),
    ('サンプルデータ2');
