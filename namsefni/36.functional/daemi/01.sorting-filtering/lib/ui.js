import { el, empty } from './helpers.js';

// Tekur inn lista af nemendum og birtir í HTML
// Hreinsum og birtum allan lista aftur, virkar vel fyrir minni lista
// fer að verða hægt við hundruði staka
export function render(students, studentContainer) {
  empty(studentContainer);
  students.forEach((student) => {
    const studentName = el('strong', student.name);
    let studentGraduation = null;

    if (student.graduation) {
      studentGraduation = el('em', ` útskrifaðist ${student.graduation}`);
    }
    const studentElement = el('li', studentName, studentGraduation);
    studentContainer.appendChild(studentElement);
  });
}
