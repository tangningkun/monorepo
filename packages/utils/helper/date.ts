/**
 * 独立的时间操作工具，方便后续切换到dayjs
 */
import dayjs from 'dayjs';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT = 'YYYY-MM-DD';

export function formatToDateTime(date: dayjs.Dayjs | Date | undefined = undefined, format = DATE_TIME_FORMAT): string {
    return dayjs(date).format(format);
}

export function formatToDate(date: dayjs.Dayjs | undefined = undefined, format = DATE_FORMAT): string {
    return dayjs(date).format(format);
}

export const dateUtil = dayjs;
