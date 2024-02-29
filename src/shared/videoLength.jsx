import React from 'react';
import moment from "moment";

const formatDuration = (time) => {
    if (time < 600) {
        return moment().startOf("day").add(time, 'seconds').format("m:ss");
    } else if (time < 3600){
        return moment().startOf("day").add(time, 'seconds').format("mm:ss");
    } else {
        return moment().startOf("day").add(time, 'seconds').format("H:mm:ss");
    }
};



const VideoLength = ({time}) => {
//   const videolengthinsec = moment()
//         ?.startOf("day")
//         ?.seconds(time)
//         ?.format("H:mm:ss")
const videolengthinsec = formatDuration(time);
        return (
            <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
                {videolengthinsec}
            </span>
        );
}

export default VideoLength
