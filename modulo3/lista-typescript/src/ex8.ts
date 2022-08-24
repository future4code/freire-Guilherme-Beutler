const dateValidate = (birthDate: string, docDate: string): boolean | string => {
    const currentDateTimestamp: number = new Date().getTime();
    const [birthDay, birthMonth, birthYear] = birthDate.split('/');
    const [docDay, docMonth, docYear] = docDate.split('/');
    const birthYearTimestamp: number = new Date(`${birthYear}-${birthMonth}-${birthDay}T00:00:00`).getTime();
    const docDateTimestamp: number = new Date(`${docYear}-${docMonth}-${docDay}T00:00:00`).getTime();
    const age: number = currentDateTimestamp - birthYearTimestamp;
    const lastRenovation: number = currentDateTimestamp - docDateTimestamp;
    const oneYearTimestamp: number = 31556926000;

    if (age <= 20 * oneYearTimestamp) {
        return lastRenovation >= 5 * oneYearTimestamp ? true : false;
    } else if (age >= 20 * oneYearTimestamp && age <= 50 * oneYearTimestamp) {
        return lastRenovation >= 10 * oneYearTimestamp ? true : false
    } else if (age >= 50 * oneYearTimestamp) {
        return lastRenovation >= 15 * oneYearTimestamp ? true : false
    } else {
        return "Verifique as informações passadas!"
    }
}
console.log(dateValidate('01/12/1992', '25/12/2000'))