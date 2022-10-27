import { render } from './lib/ui.js';

// Listi af nemendum
// nöfn frá https://www.behindthename.com/
const students = [
  { name: 'Skadi Ferran Wang', graduation: 2020 },
  { name: 'Tacita Ranjit McGill', graduation: 2019 },
  { name: 'Heino Pavle Hornick' },
  { name: 'Sima Gunda Babcock' },
  { name: 'Shprintza Draco Hollands', graduation: 2000 },
  { name: 'Melanie Gautstafr Obama', graduation: 2020 },
  { name: 'Jirou Māui Dávid' },
  { name: 'Heard Raginald McQueen', graduation: 2019 },
  { name: 'Mani Altantsetseg Proudfoot', graduation: 2018 },
  { name: 'Rubye Lea Schumacher' },
  { name: 'Nicu Guilherme Yamashita', graduation: 2016 },
  { name: 'Vilhelmo Kaapo Zahariev', graduation: 2005 },
  { name: 'Junichi Klara Nakai' },
  { name: 'Ulf Edward Mac Uileagóid', graduation: 2009 },
  { name: 'Mirela Eadmund Cardoso ', graduation: 2010 },
  { name: 'Lidziya Thorben Noyer', graduation: 2020 },
  { name: 'Åse Abdelaziz Narváez', graduation: 2017 },
  { name: 'Ramon Violeta Van Houten', graduation: 2015 },
  { name: 'Jehovah Domitianus Janz' },
  { name: 'Umukoro Karesinda Dallas ', graduation: 2018 },
  { name: 'Kobe Mikaela Stankiewicz' },
  { name: 'Jeong-Ho Ema Ó Donndubháin', graduation: 2019 },
  { name: 'Meir Calixtus Sampson', graduation: 2000 },
  { name: 'Beate Dušan Bauers' },
  { name: 'Mikael Saam Donne ', graduation: 2020 },
];

// Þar sem við „geymum nemendur“
const studentContainer = document.querySelector('ul');

/**
 * Tvær leiðir til að nálgast:
 * 1. Gera allt strax, um leið og smellt í checkbox eða skrifaður texti þá
 *    breytum við viðmóti með nýjum gögnum
 * 2. Bregðast við þegar form er „submittað“
 * Í þessu dæmi gerum við ráð fyrir báðu, getum slökkt á því að fáum strax
 * uppfærslu með `immediateFeedback`.
 */
const immediateFeedback = true;

const formEl = document.querySelector('form');
const searchEl = document.querySelector('input[name=search]');
const hideGraduatedEl = document.querySelector('input[name=hideGraduated]');
const hideNotGraduatedEl = document.querySelector('input[name=hideNotGraduated]');
const sortEl = document.querySelector('select');

// Finnur út hver staða á formi sé og skilar á formi sem `filterStudents` og
// `sortStudents` kann á
function formState() {
  const search = searchEl.value;
  const hideGraduated = hideGraduatedEl.checked;
  const hideNotGraduated = hideNotGraduatedEl.checked;
  const sort = sortEl.value;

  return {
    search, hideGraduated, hideNotGraduated, sort,
  };
}

function filterStudents(
  students,
  { search, hideGraduated, hideNotGraduated } = {}
) {
  // Nokkrar leiðir að þessu, við förum ekki þá „bestu“
  return students
    // Burt með útskrifaða ef svo ber við
    .filter((student) => hideGraduated ? !student.graduation : true)

    // Burt með óútskrifaða ef svo ber við
    .filter((student) => hideNotGraduated ? student.graduation : true)

    // Finnum alla sem leit á við
    .reduce((previous, current) => {
      // Viljum leita eftir litlum stöfum sérstaklega
      const matchesSearch = search.length > 0 ?
        current.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0 : true;
      return previous.concat(matchesSearch ? current : null);
    }, [])
    // Burt með öll null gildi
    .filter(Boolean);
}

function sortStudents(students, sort) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_non-ascii_characters
  let sortFunc = (a, b) => a.name.localeCompare(b.name);

  switch (sort) {
    case 'graduation':
      // Túlkum óútskrifaða með hæsta mögulega svo þau komi seinast
      sortFunc = (a, b) => (a.graduation || 9999) - (b.graduation || 9999);
      break;
    case 'graduation-reverse':
      // Túlkum óútskrifaða með lægsta mögulega svo þau komi seinast
      sortFunc = (a, b) => (b.graduation || 0) - (a.graduation || 0);
      break;
    case 'name-reverse':
      sortFunc = (a, b) => b.name.localeCompare(a.name);
      break;
    case 'name':
    default:
  }

  return students.sort(sortFunc);
}

function renderBasedOnFormState() {
  const state = formState();
  const filteredStudents = filterStudents(students, state);
  const filteredSortedStudents = sortStudents(filteredStudents, state.sort);
  render(filteredSortedStudents, studentContainer);
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  renderBasedOnFormState()
});

if (immediateFeedback) {
  // Ef við viljum leita strax, tengjum við öll input!
  searchEl.addEventListener('input', renderBasedOnFormState)
  hideGraduatedEl.addEventListener('input', renderBasedOnFormState)
  hideNotGraduatedEl.addEventListener('input', renderBasedOnFormState)
  sortEl.addEventListener('input', renderBasedOnFormState)
}

// Í byrjun renderum við allt, í default röðun
render(sortStudents(students, 'name'), studentContainer);
