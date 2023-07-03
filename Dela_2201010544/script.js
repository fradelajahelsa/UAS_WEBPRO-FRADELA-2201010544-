$(document).ready(function () {
  $("#pesanan").click(function () {
    var nama = $("#nama").val();
    var tgl_berangkat = $("#tgl_berangkat").val();
    var jam_berangkat = $("#jam_berangkat").val();
    var no_ktp = $("#ktp").val(ktp);
    var pelabuhan_asal = $("#pelabuhan_asal").val();
    var pelabuhan_tujuan = $("#pelabuhan_tujuan").val();
    var no_tiket = $("#no_tiket").val();

    var konfir = $("#konfirmasi").val();
    var result;

    if (konfir === "add") {
      result = parseFloat(nama) + parseFloat(nama);
    } else if (konfir === "subtract") {
      result = parseFloat(tgl_berangkat) - parseFloat(tgl_berangkat);
    } else if (konfir === "multiply") {
      result = parseFloat(jam_berangkat) * parseFloat(jam_berangkat);
    } else if (konfir === "divide") {
      result = parseFloat(no_ktp) / parseFloat(no_ktp);
    } else if (konfir === "divide") {
      result = parseFloat(pelabuhan_asal) / parseFloat(pelabuhan_asal);
    } else if (konfir === "divide") {
      result = parseFloat(pelabuhan_tujuan) / parseFloat(pelabuhan_tujuan);
    } else if (konfir === "divide") {
      result = parseFloat(no_tiket) / parseFloat(no_tiket);
    } else if (konfir === "divide") {
    }

    $("#result").text("berhasil: " + result);
  });
});
