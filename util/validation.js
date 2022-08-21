export function validateDate() {
    const dateFormat = 'DD-MM-YYYY';
    const toDateFormat = moment(new Date(date)).format(dateFormat);
    return moment(toDateFormat, dateFormat, true).isValid();
}