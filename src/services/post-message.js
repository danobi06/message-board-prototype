import replace from 'lodash/fp/replace'
import getConfig from './get-app-config'

export default function submit(channel, message) {
    return getConfig("submit")
        .then((data) => {
            const url = replace('__CHANNEL__', channel, data)
            return fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ channel, message })
            })
        })
        .then((res) => res.json())
        .catch((err) => console.log("err: ", err))
}
