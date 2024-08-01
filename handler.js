
moduler.exports.hello = async(event)=>{
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serveless',
                input: event,
            },
            null,
            2
        ),
    };
};