const INITIAL_STATE = {
    videos: [ {
        url: "https://player.vimeo.com/video/97832025",thumbnail: 'images/thumbnail01.png', locked: false,
        title: "Get a Job: Artist"
    },
             {
        url: "https://player.vimeo.com/video/196296139", thumbnail: 'images/thumbnail02.png', locked: true,
        title: "Get a Job: Landscape Architect"
    },
             {
        url: "https://player.vimeo.com/video/48029630", thumbnail: 'images/thumbnail03.png', locked: true,
        title: "Get a Job: Assembly Line Technician"
    },
               {
        url: "https://player.vimeo.com/video/178079171", thumbnail: 'images/thumbnail04.png', locked: true,
        title: "Get a Job: Barber"
    },
               {
        url: "https://player.vimeo.com/video/75023672", thumbnail: 'images/thumbnail05.png', locked: true,
        title: "Get a Job: Actor"
    }, 
             {
        url: "https://player.vimeo.com/video/47950465", thumbnail: 'images/thumbnail06.png', locked: true,
        title: "Get a Job: Biomaterials Scientist"
    }
            
            ]
    
    
  }



export default function (state = INITIAL_STATE, action) {
     switch(action.type) {
        case "UNLOCK_SUCCESS":
            return Object.assign({}, state, {
                loggedInUser:action.loggedInUser,
                
            });
        default:
            return state;
    }
}