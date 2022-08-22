import Moment from 'moment';

// This function validate date if its in correct format or not which is YYYY-MM-DD. 
export function validateDate(date) {
    var dateToCheck = new Date(date);
        const dateFormat = 'YYYY-MM-DD';
        const toDateFormat = Moment(dateToCheck).format(dateFormat);
        return Moment(toDateFormat, dateFormat, true).isValid(); 
}
export function validateNoFutureDate(date){
    var dateToCheck = new Date(date);
    return dateToCheck.getTime()  <= (new Date).getTime()
}
export function validateNoBeforeFirstDayDate(date){
    var dateToCheck = new Date(date);
    return dateToCheck.getTime()  >= new Date("1995-06-16").getTime()
}
