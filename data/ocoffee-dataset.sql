CREATE TABLE IF NOT EXISTS coffee (
    id SERIAL PRIMARY KEY,
    description TEXT,
    reference TEXT,
    origin TEXT,
    price_per_kg NUMERIC,
    main_characteristic TEXT,
    available BOOLEAN
);

INSERT INTO coffee (description, reference, origin, price_per_kg, main_characteristic, available) VALUES
('Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', '100955890', 'Italie', 20.99, 'Corsé', true),
('Café moyennement corsé avec une acidité vive et une saveur riche.', '100955894', 'Colombie', 18.75, 'Acide', true),
('Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', '105589090', 'Éthiopie', 22.50, 'Fruité', true),
('Café doux et lisse avec un profil de saveur de noisette.', '134009550', 'Brésil', 17.80, 'Doux', true),
('Café corsé avec des nuances chocolatées et une pointe d''épice.', '256505890', 'Guatemala', 21.25, 'Corsé', true),
('Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', '295432730', 'Kenya', 23.70, 'Acide', true),
('Café profond et terreux avec un corps lourd et une faible acidité.', '302932754', 'Indonésie', 19.95, 'Corsé', true),
('Café vif et net avec une finition propre et une acidité vive.', '327302954', 'Costa Rica', 24.50, 'Acide', true),
('Café audacieux et fort avec une saveur robuste distinctive.', '549549090', 'Vietnam', 16.75, 'Épicé', true),
('Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', '582954954', 'Tanzanie', 26.80, 'Fruité', true),
('Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', '589100954', 'Jamaïque', 39.25, 'Doux', true),
('Café avec des notes florales prononcées, une acidité vive et un corps moyen.', '650753915', 'Rwanda', 21.90, 'Fruité', true),
('Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', '795501340', 'Panama', 42.00, 'Fruité', true),
('Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', '954589100', 'Pérou', 19.40, 'Chocolaté', false),
('Café rare au goût riche, une acidité douce et des nuances subtiles.', '958090105', 'Hawaï', 55.75, 'Doux', false),
('Café avec des notes de fruits, une acidité vive et un corps plein.', '691550753', 'Nicaragua', 28.60, 'Fruité', false);