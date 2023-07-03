CREATE DATABASE pesanan;
USE pesanan;

CREATE TABLE pesanan (
    nama DATE NOT NULL,
    no_tiket INT AUTO_INCREMENT PRIMARY KEY,
    tgl_berangkat date,
    jam_berangkat time,
    no_ktp INT NOT NULL,
    pelabuhan_asal VARCHAR(100) NOT NULL,
    pelabuhan_tujuan VARCHAR(100) NOT NULL,
    
);