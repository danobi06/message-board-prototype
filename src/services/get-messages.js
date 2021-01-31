import replace from 'lodash/fp/replace'
import getConfig from './get-app-config'

export default function messages(channel) {
    return getConfig("messages")
        .then((data) => {
            const url = replace('__CHANNEL__', channel, data)
            return fetch(url)
        })
        .then((res) => res.json())
        .catch((err) => console.log("err: ", err))
}