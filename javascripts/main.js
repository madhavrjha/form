const learnerBtn = document.querySelector('#learnerBtn'); 
const teacherBtn = document.querySelector('#teacherBtn');

const learnerForm = document.querySelector('#learnerForm'); 
const teacherForm = document.querySelector('#teacherForm');

teacherBtn.addEventListener('click', function (e) {
  learnerBtn.classList.remove('active');
  teacherBtn.classList.add('active');
  learnerForm.classList.add('hidden');
  teacherForm.classList.remove('hidden');
});

learnerBtn.addEventListener('click', function (e) {
  learnerBtn.classList.add('active');
  teacherBtn.classList.remove('active');
  learnerForm.classList.remove('hidden');
  teacherForm.classList.add('hidden');
});