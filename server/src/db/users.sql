CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid DEFAULT uuid_generate_v4(),
    first_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    google_id VARCHAR NOT NULL,
    PRIMARY KEY (id)
);

