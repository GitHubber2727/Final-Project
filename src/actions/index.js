import $ from 'jquery-ajax';


export function popup(number) {
    return{
        type: "POPUP",
        number: number
    }
}

export function pay() {
    return{
        type: "PAY"
    }
}


export function fetchVideos() {
    return function (dispatch) {
        $.get("/api.json", function (data) {
            dispatch(receiveVideos(data));
        })
    }
}

function receiveVideos(videos) {
    return {
        type: "RECEIVE_VIDEOS",
        videos
    }
}