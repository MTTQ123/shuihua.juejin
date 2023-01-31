import dayjs from './day.config'

export const fromNow = (date: string | Date) => {
    return dayjs(date).fromNow();
}