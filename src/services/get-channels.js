import appConfig from './get-app-config'

export default function channels() {
    return appConfig("channels")
        .then((url) => fetch(url))
        .then((res) => res.json())
        .catch((err) => console.log("err: ", err))
}
