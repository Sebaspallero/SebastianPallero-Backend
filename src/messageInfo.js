import moment from 'moment'

const messageInfo = (userName,text,id)=>{
    return {
        userName,
        text,
        id,
        time: moment().format('h:mm a')
    }
}

export default messageInfo;