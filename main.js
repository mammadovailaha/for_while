// Tapşırıq 1: Ən Böyük Ədədi Tapın
// Üç ədəd qəbul edən və onlardan ən böyüyünü çap edən proqram yazın.(Promt-dan qəbul)

let UserNumber = prompt("en boyuk 3 reqemli eded daxil edin");
UserNumber = Number(UserNumber);
if (UserNumber === 999) {
    alert("duzgun eded daxil edildi" + UserNumber);

}
else {
    alert("eded duzgun deyil");

}
// Tapşırıq 2: Artıq İl Yoxlamaq
// İstifadəçidən bir il istəyin və onun artıq il olub-olmadığını yoxlayan proqram yazın.
// Copy code
// // Tələbələr üçün ipucu:
// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
// console.log("Artıq il");
// }

let year = 2029;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log('artiq il');

}
else {
    console.log('ariq il deyil');

}

// Tapşırıq 3: Qiymətləndirmə Sistemi
// Bir tələbənin balını qəbul edən və aşağıdakı qaydalara əsasən qiymət təyin edən proqram yazın:
// 90+ → A
// 80-89 → B
// 70-79 → C
// 60-69 → D
// 60-dan aşağı → F

let StudentScore = 50;
if (StudentScore >= 90) {
    console.log("A");
}
else if (StudentScore >= 80 && StudentScore <= 89) {
    console.log("B");

}
else if (StudentScore >= 70 && StudentScore <= 79) {
    console.log("C");

}
else if (StudentScore >= 60 && StudentScore <= 69) {
    console.log("D");

}
else if (StudentScore < 60) {
    console.log("F")
}

//  Tapşırıq 4: Tək və ya Cüt
// İstifadəçidən bir ədəd istəyin və onun tək və ya cüt olduğunu müəyyən edən proqram yazın.

let EnterNumber = 121;
if (EnterNumber % 2 === 0) {
    console.log(`even ---> ${EnterNumber}`);
}
else {
    console.log(`odd ---> ${EnterNumber}`);
}

// Tapşırıq 5: FizzBuzz Problemi
// 1-dən 50-yə qədər ədədləri çap edən proqram yazın. Amma:
// Əgər ədəd 3-ə bölünürsə, "Fizz" çap edin.
// Əgər ədəd 5-ə bölünürsə, "Buzz" çap edin.
// Həm 3-ə, həm də 5-ə bölünürsə, "FizzBuzz" çap edin.

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");

    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
}

// Tapşırıq 6: Vurma Cədvəli
// İstifadəçidən bir ədəd istəyin və onun 10-a qədər vurma cədvəlini çap edin.
let WriteNumber = 10;
let result;
for (i = 1; i <= 10; i++) {
    if (WriteNumber * i) {
        result = WriteNumber * i
        console.log(result);
    }
}

// Tapşırıq 7: Təbii Ədədlərin Cəmi
// 1-dən verilən bir ədədə qədər olan bütün ədədlərin cəmini hesablayan proqram yazın.
let sum = 0;
for (i = 1; i < 250; i++) {
    sum += i
}
console.log('sum', sum);
// Tapşırıq 8: Sadə Kalkulyator
// Əsas riyazi əməliyyatları (toplama, çıxma, vurma, bölmə) həyata keçirən proqram yaradın.
// switch ifadəsindən istifadə edin.
let x = 6;
let y = 8;
let z = x + y;
switch (z) {
    case z = x + y:
        console.log(z);
        break;
    case z = x - y:
        break;
    case z = x * y:
        console.log(z);
        break;
    case z = x / y:
        console.log(z);
        break;



}
