// DIV элементине кайрлып аны div контстантасына сактоо 
// 1 -  document.querySelect() методун элемент селекторун (div) колдонуп окуу   
//const div = document.querySelect('div');
// 2 -  document.querySelect() методун класс селекторун (.container) колдонуп окуу
//const div = document.querySelector('.container');
// 3 -  document.querySelect() методун ID селекторун (#myDiv) колдонуп окуу
const div = document.querySelector('#myDiv');
// 4 - DIV тин туунду элементтерине childNodes жана children сыпаттары аркылуу кайрылуу
console.log(div.childNodes);
console.log(div.children);

// 'Биздин менторлор мыкты!' деген текстти баракчага кошуу
// 1 - paragraphAboutMentor константасын document.createElement ти колдонуп аныктоо
const paragraphAboutMentor = document.createElement('p');
// 2 - paragraphAboutMentor.textContent аркылуу корсотулгон текстти байлоо
paragraphAboutMentor.textContent = 'Биздин менторлор мыкты!'
// 3 - appendChild() методу аркылуу paragraphAboutMentor ду DIV ке кошуу
div.appendChild(paragraphAboutMentor);

// 'Сообщество единомышленников' деген текстти очуруп, жаны 'Ой пикирлештер коомчулугу' деген параграфты анын мурунку ордуна кошуу
// 1 - div.childNodes[4] аркылуу аталган текске кайрылып аны remove() Методу аркылуу очуруу 
div.childNodes[4].remove();
// 2 - pAboutCommunity константасын document.createElement ти колдонуп параграф катары аныктоо
const pAboutCommunity = document.createElement('p');
// 3 - pAboutCommunity.textContent аркылуу корсотулгон жаны текстти байлоо
pAboutCommunity.textContent = 'Ой пикирлештер коомчулугу';
// 4 - allP константасын аныктап аныга DIV тин ичиндеги баардык параграфтарды getElementsByTagName окуп, ыйгаруу
const allP = div.getElementsByTagName('p');
// insertBefore() ду колдонуп DIV ке pAboutCommunity ни акыркы парграфтын астында кошуу 
div.insertBefore(pAboutCommunity, allP[allP.length - 1]);

// Суротту кошуу
// 1 - img константасын жарыялап аныга document.createElement() менен img элементин аныткап, ыйргаруу 
const img = document.createElement('img');
// 2 - src сыпатына 'img/oigonuu.png' маанисин ыйгаруу
img.src = 'img/oigonuu.png'
// 3 - width сыпатына 240 мааниси ыйгаруу
img.width = 240;
// 4 - alt сыпатына 'Oigonuu' сабын ыйгаруу 
img.alt = 'Oigonuu';
// 5 - DIV тин эн башына insertAdjacentElement('afterbegin', img) деген методду колдонуп баракчага кошуу
div.insertAdjacentElement('afterbegin', img);

//  Карточкаларды кошуу
const courses = [
    {
        title: "JavaScript өнүктүрүү",
        description: "JavaScriptтин негиздерин жана өркүндөтүлгөн ыкмаларын үйрөнүп, динамикалык веб-тиркемелерди түзүңүз.",
    },
    {
        title: "Python негиздери",
        description: "Python программалоо тили менен таанышып, таза жана натыйжалуу код жазууну үйрөнүңүз.",
    },
    {
        title: "Веб-өнүктүрүү",
        description: "HTML, CSS жана JavaScript негиздерин үйрөнүп, заманбап веб-сайттарды түзүңүз.",
    },
    {
        title: "Алгоритмдер жана маалымат түзүмдөрү",
        description: "Алгоритмдер жана маалымат структуралары боюнча терең билим алып, оптималдуу код жазууну үйрөнүңүз.",
    },
    {
        title: "React өнүктүрүү",
        description: "React китепканасы менен таанышып, заманбап веб-тиркемелерди түзүү үчүн компоненттик ыкманы үйрөнүңүз.",
    }
];

// 1 - courseContainer ди жарыялап ага жаны DIV элментин аныткап, ыйгаруу 
const courseContainer = document.createElement("div");
// 2 - courseContainer ге course классын ыйгаруу
courseContainer.className = "course";
// 3 - DIV ке appendChild() менен courseContainer ди кошуу
div.appendChild(courseContainer);
// 4 - ойдонку courses массивиндеги ар бир курсту DIV ке кошо турган addCourse(course, divConatiner) функциясын аныктоо.
// 
function addCourse(course, container) {
    const card = document.createElement("div");
                /*
                card.className = "card";
                card.innerHTML = `
                    <h2>${course.title}</h2>
                    <p>${course.description}</p>
                    <button class="btn">Очур</button>
                `;
                container.appendChild(card);
                */
    const htmlElem = `<div class="card">
                    <h2>${course.title.toUpperCase()}</h2>
                    <p>${course.description}</p>
                    <button class="btn">Очур</button> 
    </div>
    `
    container.insertAdjacentHTML("beforeend", htmlElem);           
}

// 5 - addCourse() функциясын массивтеги ар бир курска forEach аркылуу чакырып аларды DIV ке кошуу 
courses.forEach(course => addCourse(course, courseContainer));

// 'Очур' деген кнопканы ар бир курска кошуп, аны басканда курсту очуруу
// 1 - .btn классы менен button деген элементти ар бир курска кошуу
// 2 - buttons озгормосуно document.querySelectorAll() менен .btn классындагы кнопкалардын баарын окуп ыйгаруу
const buttons = document.querySelectorAll('.btn');
console.log(buttons);
// 3 - кнопкны басуу окуясын угуучу handleClick функциясын аныктоо. Ал функция басылган кноканын аталык элементин очурушу керек
function handleClick(e) {
    const currentButton = e.currentTarget;
    //currentButton.closest('.card').remove();
    currentButton.parentElement.remove();
    // console.log(currentButton.parentElement)
}
// 4 - forEach ти колдонуп ар бир кнокага addEventListener('click', handleClick) аркылуу click окуясын угуучу катары handle методун ыйгаруу 
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})