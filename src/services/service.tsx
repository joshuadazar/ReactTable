import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(false);

export const messageService = {
    sendMessage: (message:boolean) => subject.next(message),
    getMessage: () => subject.asObservable()
};