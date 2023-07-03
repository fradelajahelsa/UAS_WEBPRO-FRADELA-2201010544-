<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $nama = $_POST['nama'];
    $Tgl_berangkat = $_POST['tgl_berangkat'];
    $jam_berangkat = $_POST['jam_berangkat'];
    $no_ktp = $_POST['ktp'];
    $pelabuhan_asal = $_POST['pelabuhan_asal'];
    $pelabuhan_tujuan = $_POST['pelabuhan_tujuan'];
    $no_tiket = $_POST['no_tiket'];

    

    // Process the data (e.g., save to a database)

    // Display a success message
    echo "pemesanan  successful. Thank you!";
}
?>