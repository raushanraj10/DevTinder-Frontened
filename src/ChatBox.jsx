const Chat =({ele})=>{
    console.log(ele.firstName)
    return (<div className="toast toast-center toast-middle">
  <div className="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
    )
}

export default Chat