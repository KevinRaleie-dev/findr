export type Status = 'success' | 'info' | 'warning' | 'error' | undefined;

export interface IHandleSubmit {
    status: Status;
    duration: number;
    title: string;
    description: string;
}
