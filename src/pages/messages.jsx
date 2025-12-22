function MessagesPage(){
    return(
        <div>
            <h2 className="text-center text-3xl my-5">Messages Page</h2>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl"/>
                <div className="bg-muted/50 aspect-video rounded-xl"/>
                <div className="bg-muted/50 aspect-video rounded-xl"/>
            </div>
        </div>
    )
}

export default MessagesPage;