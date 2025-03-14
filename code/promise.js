function divideNumber(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) reject("can not perform this action");
    else resolve(num1 / num2);
  });
}
divideNumber(10, 2)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
