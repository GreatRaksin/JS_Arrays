let Column1 = [
    'Коллеги!',
    'Помните, как помнит блокчен, что',
    'Опыт майнинга говорит о том, что',
    'Вот почему',
    'Как показывает практика разработки',
    'Из чего следует, что ',
    'Господа Айтишники!',
    'С другой стороны',
    'Поэтому',
    'И, тем не менее,'
];
let Column2 = [
    'криптографические схемы',
    'держатели токенов',
    'частые хард-форки',
    'надежная система генерации случайностей',
    'хэш-функции',
    'уникальные приватные ключи',
    'прогрессивные майнинговые пулы',
    'доступность ICO',
    'постоянное шифрование',
    'детальная програботка white paper'
];
let Column3 = [
    'подтверждают транзакцию согласно алгоритму',
    'ставят под сомнение возможность консесуса для',
    'способствуют дальнейшей популяризации',
    'обеспечивают непревзойденный уровень безопасности',
    'проводят двухфакторную аутентификацию в интересах',
    'позволяют решать актуальные проблемы',
    'представляют собой результат вычисления',
    'систематизируют данные по критериям',
    'провоцирует неизбежные потери',
    'требуют подтверждения валидности'
];
let Column4 = [
    'вычисления новых блоков.',
    'соблюдения сценариев смарт-контрактов.',
    'структуры распределенного реестра.',
    'деревьев Меркля.',
    'глобальной финтех индустрии.',
    'абсолютного большинства участников цепи.',
    'биткоина и эфириума.',
    'децентрализованной системы управления.',
    'иерархических кошельков.',
    'растущих комиссий за транзакции.'
];

let GetFirstPart = Column1[Math.floor(Math.random() * 10)];
let GetSecondPart = Column2[Math.floor(Math.random() * 10)];
let GetThirdPart = Column3[Math.floor(Math.random() * 10)];
let GetForthPart = Column4[Math.floor(Math.random() * 10)];

// Соединяем случайные строки в предложение:
let randomInsult = GetFirstPart + ' ' + GetSecondPart + ' ' + GetThirdPart + ' ' + GetForthPart;



