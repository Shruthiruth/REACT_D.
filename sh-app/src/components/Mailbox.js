function MailBox()
{   const msg = ["msg1","msg2","msg3"]
    // const msg= [];
    return(
        <>
            <h3>unread messages</h3>
            {
                msg.length > 0 &&
                <h4>you have {msg.length} unread messages in your inbox</h4>
            }
        </>
    )
}
export default MailBox