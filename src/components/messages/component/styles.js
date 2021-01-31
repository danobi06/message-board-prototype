export default function styles(theme) {
    return {
        root: {
            border: `solid ${theme.palette.primary.main}`,
            borderRadius: '5%',
            display: 'flex',
            justifyContent: 'center',
            flex: 2,
            overflow: 'auto'
        },
        center: {
            alignSelf: 'center'
        },
        inline: {
            display: 'inline'
        },
        list: {
            overflowX: 'auto'
        }
    }
}
