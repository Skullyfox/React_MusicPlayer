/**
 * Websocket Service.
 * Handles websockets connection through Socket.io.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import io from 'socket.io-client';
import BaseUrl from './UrlService';

const socket = io(BaseUrl.get(), {transports: ['websocket']});

export { socket };
