import axios from 'axios';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { baseHeaders, baseUrl } from "../constants/urls";

export default class MessagesService {
    private static messagesUrl: string = `${baseUrl}/messages`;

    public static getFriendMessages = ( friend: string ) => {
        const urlWithParams = `${MessagesService.messagesUrl}?friend=${friend}`;

        return ajax.getJSON(urlWithParams);
    };

    public static postFriendMessage =  ( friend, message ) =>
        Observable.create( async ( observer ) => {
            try {
                const response = await axios.post(MessagesService.messagesUrl, { friend, message }, {
                    headers: {
                        ...baseHeaders
                    }
                });

                observer.next(response);
                observer.complete();
            }
            catch (error) {
                observer.error(error);
            }
        });
}
