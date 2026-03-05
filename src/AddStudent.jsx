import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "./studentSlice";

export default function AddStudent({ editData, setEditData }) {
  const dispatch = useDispatch();

  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    if (editData) {
      setNama(editData.nama);
      setKelas(editData.kelas);
      setAlamat(editData.alamat);
    }
  }, [editData]);

  function handleSubmit() {
    if (!nama || !kelas || !alamat) return;

    if (editData) {
      dispatch(updateStudent({
        id: editData.id,
        nama,
        kelas,
        alamat,
      }));
      setEditData(null);
    } else {
      dispatch(addStudent({ nama, kelas, alamat }));
    }

    setNama("");
    setKelas("");
    setAlamat("");
  }

  return (
    <div>
      <h2>{editData ? "Edit Siswa" : "Tambah Siswa"}</h2>

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

      <button onClick={handleSubmit}>
        {editData ? "Update" : "Simpan"}
      </button>
    </div>
  );
}