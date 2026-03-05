import { useSelector, useDispatch } from "react-redux";
import { removeStudent } from "./studentSlice";

export default function ListStudent() {
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Daftar Siswa</h2>

      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.nama}</td>
              <td>{student.kelas}</td>
              <td>{student.alamat}</td>
              <td>
                <button
                  className="delete"
                  onClick={() =>
                    dispatch(removeStudent({ id: student.id }))
                  }
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}