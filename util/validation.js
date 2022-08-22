import Moment from 'moment';
export function validateDate(date) {
    const dateFormat = 'YYYY-MM-DD';
    const toDateFormat = Moment(new Date(date)).format(dateFormat);
    return Moment(toDateFormat, dateFormat, true).isValid();
}
