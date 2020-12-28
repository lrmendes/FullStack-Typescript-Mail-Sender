export default interface IAlert {
    message: string,
    type: 'success' | 'info' | 'warning' | 'error',
    show: boolean,
}