function summToGet(amountRequired) {
    const banknotes = [1000, 500, 200, 100, 50];
    const result = [];
    if (amountRequired > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            let note = banknotes[i];
            while (banknotes - note >= 0) {
                amountRequired -= note;
                result.push(note);
            }
        }
    } else {
        return -1;
    }
    return result;
}

console.log(summToGet(1350));