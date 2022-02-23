import {  BehaviorSubject,  Subject } from 'rxjs';
import { Names } from '../models/INames';

const subject = new BehaviorSubject(true);
const array = new Subject();
const message = new BehaviorSubject('uno');

export const messageService = {
    sendMessage: (message:boolean) => subject.next(message),
    getMessage: () => subject.asObservable()
};

export const NameArray = {
    sendNames: (arr:Names[]) => array.next(arr),
    getNames: () => array.asObservable()
}

export const sendMessage= (msg: string) => message.next(msg)
export const getMessage = () => message.asObservable();
