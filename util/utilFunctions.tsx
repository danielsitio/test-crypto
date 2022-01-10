export const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)


export const getDateFromString = (dateString: string) => {
    var b = dateString.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}