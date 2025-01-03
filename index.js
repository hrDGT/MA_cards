let questionNumber = 1

getAnswer = () => {
    document.querySelector(".card__question").style.display = "none"
    document.querySelector(".card__answer").src = `img/${questionNumber}.png`
    document.querySelector(".card__answer").style.display = "block"
    document.querySelector(".card__button-answer").style.display = "none"
    document.querySelector(".card__button-question").style.display = "block"
}

getQuestion = () => {
    questionNumber = randomizeQuestion()
    document.querySelector(".card__question").textContent = `${questionsList[questionNumber]}`
    document.querySelector(".card__question").style.display = "block"
    document.querySelector(".card__answer").style.display = "none"
    document.querySelector(".card__button-answer").style.display = "block"
    document.querySelector(".card__button-question").style.display = "none"
}

function randomizeQuestion() {
    if (questionsAsked.length == questionsListLength) {
        questionsAsked = []
    }
    rndNum = Math.floor(1 + Math.random() * questionsListLength)
    while (true) {
        rndNum = Math.floor(1 + Math.random() * questionsListLength)
        if (!questionsAsked.includes(rndNum)) {
            questionsAsked.push(rndNum)
            return rndNum
        }
    }
}

let questionsAsked = []

//Terrifying object
const questionsList = {
    1: "Правило де Моргана",
    2: "Теорема о гранях",
    3: "Связь ограниченности остатка последовательности и последовательности (с док)",
    4: "M-лемма для последовательности (с док)",
    5: "Единственность предела (с док)",
    6: "Ограниченность сходящейся последовательности (с док)",
    7: "Предел суммы, произведения и частного п-тей (с док)",
    8: "Предел и неравенсво для последовательностей (с док)",
    9: "Лемма о зажатой последовательности (с док)",
    10: "!!!Предел произведения бесконечно малой на ограниченную (с док)",
    11: "Связь беск. малой и беск. большой п-тей",
    12: "Т. о сходимости монотонной ограниченной последовательности (с док)",
    13: "///Т. О выборе монотонной подпоследовательности и принцип выбора.",
    14: "Число e (с док)",
    15: "Критерий Коши для предела последовательности (с док)",
    16: "M-лемма для предела функции.",
    17: "Критерий равенства односторонних пределов",
    18: "???Единственность предела функции (с док)",
    19: "Предел суммы, произведения, частного функций (c док)",
    20: "???Предел и неравенство функций (с док)",
    21: "!!!Лемма о зажатой функции (с док)",
    22: "!!!Предел бесконечно малой функции на ограниченную (с док)",
    23: "Критерий Гейне для предела функции.",
    24: "!!!Критерий Коши для предела функции.",
    25: "Тригонометрический предел sin(x)/x.",
    26: "Показательно-степенной предел (1+x)^{1/x}",
    27: "Логарифмический предел \ln(1+x)/x",
    28: "Показательный предел (e^x-1)/x.",
    29: "Степенной предел ((1+x)^\mu-1)/x.",
    30: "!!!Критерий Гейне непрерывности.",
    31: "!!!Критерий непрерывности монотонной функции.",
    32: "Непрерывность обратной функции.",
    33: "Непрерывность сложной функции.",
    34: "Теорема о стабилизации знака (с док).",
    35: "Теорема о локальной ограниченности непрерывной функции (с док).",
    36: "///Непрерывность суммы, произведения, частного функций (и арифм.комбинации)",
    37: "Непрерывность элементарных функций.",
    38: "Теорема о промежуточных значениях непрерывной функции.",
    39: "Теорема Вейерштрасса.",
    40: "Теорема о производных линейной комбинации, произведения, частного функций (с док).",
    41: "Теорема о производной обратной функции.",
    42: "Теорема о производной сложной функции.",
    43: "Производные основных тригонометрических функций и обратным к ним (с док).",
    44: "Производные степенной, показательной и логарифмической функций (с док).",
    45: "критерий дифференцируемости.",
    46: "Правило Лейбница",
    47: "Внесение множителя под знак дифференциала и замена переменной в неопределенном интеграле.",
    48: "Интегрирование по частям.",
    49: "Теорема о разложении рациональной функции в сумму простейших дробей.",
    50: "///Интегрирование простейших дробей.",
    51: "Интегрирование произвольных рациональных функций.",
    52: "Интегрирование дробно-линейных иррациональностей",
    53: "Рационализация с помощью подстановок Эйлера.",
    54: "Интегрирование рационально-тригонометрических функций.",
    55: "Теорема Ферма (необходимое условие экстремума).",
    56: "Теорема Лагранжа.",
    57: "Правила Лопиталя.",
    58: "Разложение e^x, sin(x), cos(x), ln(1+x), (1+x)^\mu по формуле Тейлора.",
    59: "Критерии монотонности и строгой монотонности.",
    60: "Необходимое условие локального экстремума.",
    61: "Первое достаточное условие локального экстремума (через изменение знака производной).",
    62: "Второе достаточное условие локального экстремума (с ненулевой второй производной в точке).",
    63: "Третье достаточное условие локального экстремума (с нулевой второй производной в точке).",
    64: "Критерий выпуклости дифференцируемой функции.",
    65: "Критерий выпуклости дважды дифференцируемой функции.",
    66: "необходимое условие перегиба.",
    67: "Первое достаточное условие точки перегиба (через изменение знака второй производной).",
    68: "Второе достаточное условие точки перегиба (с ненулевой третьей производной в точке).",
    69: "Третье достаточное условие точки перегиба (с нулевой третьей производной в точке).",
    70: "Нахождение наклонных асимптот",
    71: "необходимое условие интегрируемости (ограниченность интегрируемой функции).",
    72: "Классы интегрируемых функций (достат.усл)",
    73: "Площадь криволинейной трапеции.",
    74: "Площадь криволинейного сектора.",
    75: "Теорема о длине кривой.",
    76: "Линейность, монотонность, аддитивность, монотонность, оценки определенного интеграла.",
    77: "Теорема о среднем и её геометрический смысл.",
    78: "Теорема Барроу (с док-вом)",
    79: "Формула Ньютона-Лейбница (с подробным док-вом)",
    80: "Замена переменных в определенном интеграле (две теоремы с док).",
    81: "Формула интегрирования по частям для определенного интеграла (с док).",
    82: "///Классы интегрируемых по Риману функций.",
    83: "Связь непрерывности по совокупности переменных и по каждой переменной",
    84: "Свойства непрерывности ф2п",
    85: "Локальная ограниченность, лок.сохранение знака",
    86: "Т.Вейерштрасса для ф2п",
    87: "Связь диффереренцируемости и непрерывности ф2п ( с док)",
    88: "Необходимое условие дифференцируемости",
    89: "Достаточное условие дифференцируемости",
    90: "Теорема о равенстве смешаных производных",
    91: "Необходимое условие лок. Экстремума фнп",
    92: "Достоточное условие лок.экстремума фнп",
    93: "Необходимое условие условного лок.экстремума фнп",
    94: "///Достаточное условие условного лок.экстремума фнп",
}

const questionsListLength = Object.values(questionsList).length