function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('Номер первого вопроса: '+ getRandomInRange(1, 16));
console.log('Номер второго вопроса: '+ getRandomInRange(1, 10));
console.log('Номер третьего вопроса: '+ getRandomInRange(1, 10));
