import {  BehaviorSubject,  Subject } from 'rxjs';
import { Names } from '../models/INames';

const userName = new BehaviorSubject<string>('User');
export const setUserName = (name:string) => userName.next(name)
export const getUserName = () => userName.asObservable()


const subject = new BehaviorSubject(true);
export const messageService = {
    sendMessage: (message:boolean) => subject.next(message),
    getMessage: () => subject.asObservable()
};

const array = new Subject();
export const NameArray = {
    sendNames: (arr:Names[]) => array.next(arr),
    getNames: () => array.asObservable()
}

const message = new BehaviorSubject('uno');
export const sendMessage= (msg: string) => message.next(msg)
export const getMessage = () => message.asObservable()
