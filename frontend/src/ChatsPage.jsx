
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '8ab88d72 - 74fe - 4acd - ab67 - c986cbcec566',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    )
}
export default ChatsPage