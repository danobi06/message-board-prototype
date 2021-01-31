import once from 'lodash/fp/once'

const config = once(() => fetch("./app-config.json", { cache: "force-cache" })
    .then((res) => res.json())
    .catch((err) => console.log(err))
)

export default function getURL(att) {
    return config().then((data) => data[att])
}
