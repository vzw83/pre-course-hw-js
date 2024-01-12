// Исправь функцию так что бы она работала? и получи 'Something wrong!' передав числа, которые вызовут это условие.
// Обрати внимание здесь «и» (&&), а не или(||)

// const giveMeRightCondition = (value1, value2, maximum) => {
//     if (ЕСЛИ value1 РАВНО value2 И МЕНЬШЕ ИЛИ РАВНО  maximum) {
//         console.log('Success!');
//     } else {
//         console.log('Something wrong!');
//     }
// }

// giveMeRightCondition(100, 100, 200)

const giveMeRightCondition = (value1, value2, maximum) => {
  if (value1 === value2 && value1 <= maximum) {
    console.log("Success!");
  } else {
    console.log("Something wrong!");
  }
};

giveMeRightCondition(50, 100, 500);
