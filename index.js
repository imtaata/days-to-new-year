const today = new Date();
const newYear = new Date(today.getFullYear() + 1, 0, 1); 
const diffTime = Math.abs(newYear - today);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log(`Осталось ${diffDays} дней до Нового года!`);
