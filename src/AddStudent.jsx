import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./studentSlice";

export default function AddStudent() {
  const dispatch = useDispatch();

  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");

  function handleSubmit() {
    if (!nama || !kelas || !alamat) return;

    dispatch(addStudent({ nama, kelas, alamat }));

    setNama("");
    setKelas("");
    setAlamat("");
  }

  return (
    <div>
      <h2>Tambah Siswa</h2>

      <input
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        placeholder="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
      />

      <input
        placeholder="Alamat"
        value={alamat}
        onChange={(e) => setAlamat(e.target.value)}
      />

      <button onClick={handleSubmit}>Simpan</button>
    </div>
  );
}