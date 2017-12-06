const INITIAL_STATE = {
    videos: [],
    popupVideoNumber: null
    
    
    
  }



export default function (state = INITIAL_STATE, action) {
     switch(action.type) {
        case "POPUP":
            return Object.assign({}, state, {
                popupVideoNumber:action.number
                
            });
             case "PAY":
             //unlock video based on popupVideoNumber
             //copy video array
             //find video and change locked to false
            return Object.assign({}, state, {
                popupVideoNumber:null,
                //update video property with new array
                videos: state.videos.map(video => {
                    if (video.number === state.popupVideoNumber) {
                        return Object.assign({}, video, {
                            locked: false
                        });
                    } else {
                        return video;
                    }
                })
            });
             
         case "RECEIVE_VIDEOS":
             return Object.assign({}, state, {
                 videos: action.videos
             });
        default:
            return state;
    }
}