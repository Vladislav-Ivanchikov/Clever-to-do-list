import React from 'react';
import s from "./Calendar.module.scss";
import moment from "moment";


const CalendarItem = ({day, selectDate, date, tasks}) => {
    let className = s.calendarItem
    let selectDay = moment().add(day, 'day').format('DD.MM.YYYY')
    // const [id, setId] = useState()
    // const [complete, setCompleted] = useState(false)
    // const {getCompleted} = useContext(FirebaseContext)

    // useEffect(() => {
    //     tasks.map(task => setId(task.id))
    // }, [])

    // useEffect(() => {
    //     if (id) {
    //         getCompleted(id).then(complete => setCompleted(complete))
    //     }
    // }, [id])

    const selectedDate = (e) => {
        selectDate(e)
    }

    if (selectDay === date) {
        className += ' ' + s.active;
    }

    return (
        <div>
            <div className={className}
                 key={day}
                 data-date={moment().add(day, 'day').format('DD.MM.YYYY')}
                 onClick={(e) => {
                     (e) = selectedDate(e)
                 }}>
                {moment().add(day, 'day').format('DD.MM.YYYY dddd')}
            </div>
            <div className={s.dots}>
                    <div className={s.completeDot}></div>
                    <div className={s.noCompleteDot}></div>
            </div>
        </div>

    );
};

export default CalendarItem;