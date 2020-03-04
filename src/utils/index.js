import randomstring from 'randomstring'
import socketio from 'socket.io-client'

import { apiUrl, socketConfig } from '../config'

export const providerGenerator = () => randomstring.generate({ length: 4, charset: 'alphanumeric' })

export const socket = () => socketio(apiUrl, socketConfig)
