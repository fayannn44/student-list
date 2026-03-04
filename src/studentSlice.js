import { createSlice } from "@reduxjs/toolkit";

let id = 1;

const studentSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      const { nama, kelas, alamat } = action.payload;

      state.push({
        id: id++,
        nama,
        kelas,
        alamat,
      });
    },

    removeStudent: (state, action) => {
      return state.filter(student => student.id !== action.payload.id);
    },

    updateStudent: (state, action) => {
      const { id, nama, kelas, alamat } = action.payload;

      return state.map(student =>
        student.id === id
          ? { ...student, nama, kelas, alamat }
          : student
      );
    },
  },
});

export const {
  addStudent,
  removeStudent,
  updateStudent,
} = studentSlice.actions;

export default studentSlice.reducer;