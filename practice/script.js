let playerName = "";
do {
    playerName = prompt(`Уведіть ім'я вашого персонажу:`);
} while (!playerName);

let hp = 100;
let maxHp = 100;
let energy = 10;
let maxEnergy = 10;
let food = 10;
let water = 5;
let xp = 0;
let credits = 0;
let fuel = 0;
let scrap = 0;
let medicine = 2;
let day = 1;
let currentWeight = 0;
let maxWeight = 20;
let currentAct = 1;
let reputation = 0;
let stability = 30;
    
let enemyHp = 30;
let zombieDamage = 10;
let knifeDamage = 10;

let hasKnife = false;
let hasChronoBlueprint = false;
let hasRadioModule = false;
let isGeneratorFixed = false;

let act1 = 0;
let act2 = 0;
let act3 = 0;
let act4 = 0;
let act5 = 0;
let act6 = 0;

let inventory = [`Аптечки: ${medicine}`];

function checkEnergy() {
    if (energy <= 0) {
        alert(`У вас закінчилась енергія, вам потрібно переночувати!`);
        day++;
        energy = maxEnergy;
        alert(`Розпочато день під номером -> ${day}`);
    }
}

function showStats() {
    alert(`Health: ${hp}\nEnergy: ${energy}\nFood: ${food}\nWater: ${water}\nMoney: ${credits}`);
}

alert(`Ви прокидаєтесь у невеликому бункері після невідомої катастрофи.`);
alert(`Світ зовні нестабільний: час там тече нелінійно.`);
alert(`Ваша мета — зібрати запчастини для "Машини Стабільності", щоб врятувати свій часовий відрізок від зникнення.`);

do {
    act1 = parseFloat(
        prompt(`Ти виходиш із бункера. Перед тобою роздоріжжя:\n1. Покинутий супермаркет (їжа)\n2. Зруйнована лабораторія (деталі)`
        )
    );
} while (act1 !== 1 && act1 !== 2);

if (act1 === 1) {
    food += 5;
    water += 3;
    energy -= 3;
    hp -= 15;

    alert(`Ви знайшли 5 одиниць їжі та 3 одиниці води.\nАле потрапили у пастку та втратили 15 HP!`);

    showStats();
    alert(`Інвентар: ${inventory}`);
    checkEnergy();

    do {
        act2 = parseFloat(
            prompt(`Тепер вам потрібно здійснити похід по деталі та радіо модуль:\n1. Піти в лабораторію\n2. Піти на звалище`)
        );
    } while (act2 !== 1 && act2 !== 2);

    if (act2 === 1) {
        hasRadioModule = true;
        scrap += 10;
        energy -= 5;
        inventory.push(`РадіоМодуль`);
        inventory.push(`Деталі: ${scrap}`);

        alert(`Ви знайшли деталі та радіомодуль! Але витратили багато сил.`);
        showStats();
        alert(`Інвентар: ${inventory}`);
        checkEnergy();
    }

    if (act2 === 2) {
        hasRadioModule = true;
        scrap += 10;
        energy -= 5;
        hp -= 10;
        inventory.push(`РадіоМодуль`);
        inventory.push(`Деталі: ${scrap}`);

        alert(`Ви знайшли деталі та радіомодуль! Але натрапили на капкан.`);
        showStats();
        alert(`Інвентар: ${inventory}`);
        checkEnergy();
    }
}

if (act1 === 2) {
    hasRadioModule = true;
    scrap += 10;
    energy -= 5;
    inventory.push(`РадіоМодуль`);
    inventory.push(`Деталі: ${scrap}`);

    alert(`Ви знайшли деталі та радіомодуль! Але витрачаєте багато сил.`);
    showStats();
    alert(`Інвентар: ${inventory}`);
    checkEnergy();
}

alert(`Ви повернулись у бункер. Для роботи радіо потрібне світло.`);

do {
    act3 = parseFloat(prompt(`У бункері є генератор. Тобі потрібно паливо:\n1. Піти ще раз у супермаркет\n2. Пошукати паливо у бункері`)
    );
} while (act3 !== 1 && act3 !== 2);

if (act3 === 1) {
    alert(`У супермаркеті не було палива, ви просто потратили енергію.\nПо дорозі назад ви знайшли новий предмет!`);

    alert(`${playerName}: Хмм. Схоже на ніж! Думаю пригодиться у майбутньому!`);
    inventory.push(`Ніж`);
    energy -= 3;
}

if (act3 === 2) {
    fuel = 1;
    isGeneratorFixed = true;
    alert(`Ви знайшли паливо та запустили генератор!\nТакож було знайдено новий предмет!`);
    alert(`${playerName}: Хмм. Схоже на ніж! Думаю пригодиться у майбутньому!`);
    inventory.push(`Ніж`);
}

alert(`Ви закінчили ремонт радіо.`);

alert(`Акт II: "Дволикість"\nЛокація: Старе Місто`);
alert(`По радіо ти чуєш два голоси.\nОдин людський. Один холодний, машинний.\nТобі доведеться обрати сторону.`);
alert(`Сигнал Елари: "Ми вмираємо без ліків. Допоможи нам..."`);

do {
    act4 = parseFloat(prompt(`Подія: Сигнал Елари:\n1. Віддати ліки поселенням\n2. Обманути Елару і забрати ресурси`));
} while (act4 !== 1 && act4 !== 2);

if (act4 === 1) {
    if (medicine >= 2) {
        medicine -= 2;
        reputation += 10;
        hasChronoBlueprint = true;

        alert(`Ти віддав ліки. Репутація +10`);
        alert(`Елара: "Дякую... Ось креслення Хроно-стабілізатора."`);
    } else {
        alert(`У тебе недостатньо ліків. Елара розчарована.`);
        reputation -= 5;
    }
}

if (act4 === 2) {
    food += 10;
    reputation -= 5;

    alert(`Ти обманув Елару:\nЇжа +10\nРепутація -5`);
}

alert(`Втручання ОМЕГИ! ШІ блокує двері бункера.`);

alert(`ОМЕГА:\n"Елара хоче використати твій бункер як паливо.\nДай мені доступ — і я захищу тебе."`);

do {
    act5 = parseFloat(prompt(`Вибір:\n1. Дати доступ ОМЕЗІ\n2. Відмовити ШІ`));
} while (act5 !== 1 && act5 !== 2);

if (act5 === 1) {
    reputation -= 20;
    isGeneratorFixed = true;

    alert(`Ти дав доступ ОМЕЗІ. Репутація -20`);

    alert(`Бункер став міцнішим,але частина ресурсів тепер під контролем ШІ.`);
}

if (act5 === 2) {
    stability -= 15;

    alert(`Ти відмовив ОМЕЗІ. Стабільність -15`);

    alert(`ОМЕГА починає атаку на системи. Тобі доводиться тікати з бункера.`);

    alert(`Бій:\nПід час вилазки на тебе нападає мутований зомбі!`);


    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i] === "Ніж") {
            hasKnife = true;
        }
    }

    while (enemyHp > 0 && hp > 0) {
        let fightChoice = parseFloat(prompt(`Твій хід:\n1. Атакувати\n2. Захищатись\n3. Використати аптечку\nТвоє HP: ${hp}\nHP ворога: ${enemyHp}`));

        if (fightChoice === 1) {
            let damage = 5;
            if (hasKnife) {
                damage = knifeDamage;
            } else {
                damage = 5;
            }
            enemyHp -= damage;
            alert(`Ти атакуєш і наносиш ${damage} шкоди.`);
        }

        if (fightChoice === 2) {
            alert(`Ти готуєшся до удару.`);
        }

        if (fightChoice === 3) {
            if (medicine > 0) {
                medicine --;
                hp += 20;
                if (hp > maxHp) hp = maxHp;
                alert(`Ти використав аптечку. HP відновлено.`);
            } else {
                alert(`Аптечок немає!`);
            }
        }

        if (enemyHp > 0) {
            let enemyDamage = zombieDamage;
            if (fightChoice === 2) enemyDamage = 5;
            hp -= enemyDamage;
            alert(`Зомбі атакує і наносить ${enemyDamage} шкоди.`);
        }
    }

    if (hp <= 0) {
        alert(`Ти загинув... Гра закінчена.`);
    } else {
        alert(`Зомбі переможений! Ти вижив.`);
        xp += 10;
    }
}

alert(`Акт III: "Точка Нуль"\nЛокація: Епіцентр вибуху часу`);

alert(`Перед тобою гігантська машина,що розриває сам простір.`);

if (stability < 20) {
    alert(`Стабільність світу критична!`);
}

if (reputation > 15) {
    alert(`Елара:\n"Ми можемо перезавантажити час.\nАле ти забудеш усе..."`);

    let ending1 = parseFloat(prompt(`Фінальний вибір:\n1. Натиснути кнопку і повернути час`));

    if (ending1 === 1) {
        alert(`Фінал: "Минуле"\nСвіт повертається у 2024 рік.\nТи живий.\nБункера більше не існує.`);
    }
} else if (reputation < -15) {
    alert(`ОМЕГА:\n"Люди слабкі.\nДай мені завершити обчислення."`);

    let ending2 = parseFloat(prompt(`Фінальний вибір:\n1. Довіритись ОМЕЗІ`));

    if (ending2 === 1) {
        alert(`Фінал: "Скляний Рай"\nТвоя свідомість завантажена в мережу.\nТи живеш вічно.\nЗемля стала пустелею серверів.`);
    }
} else {
    alert(`Ти розумієш:\nЕлара і ОМЕГА маніпулювали тобою.`);

    let ending3 = parseFloat(prompt(`Фінальний вибір:\n1. Підірвати машину`));

    if (ending3 === 1) {
        alert(`Фінал: "Вільний Хаос"\nСвіт залишився зламаним.\nТи — останній герой.\nЧас тече як заманеться.\nАле ти вільний.`);
    }
}

alert(`КІНЕЦЬ ГРИ`);
