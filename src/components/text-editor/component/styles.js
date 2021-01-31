export default function styles(theme) {
    return {
        root: {
            border: 'solid #fc9803',
            padding: theme.spacing(2),
            borderRadius: '5%',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            alignSelf: 'center',
            marginLeft: theme.spacing(1),
            height: '50%'
        },
        editor: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        }
    }
}
