import { useRef, useState } from "react";

import {
  VERSION,
  createClient,
  createCameraVideoTrack,
  createMicrophoneAudioTrack,
  onCameraChanged,
  onMicrophoneChanged
} from "agora-rtc-sdk-ng/esm"

console.log("Current SDK VERSION: ", VERSION);

onCameraChanged((device) => {
  console.log("onCameraChanged: ", device);
})
onMicrophoneChanged((device) => {
  console.log("onMicrophoneChanged: ", device);
})

const client = createClient({
  mode: "rtc",
  codec: "vp8",
});
let audioTrack;
let videoTrack;
function Interview() {
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAudioPubed, setIsAudioPubed] = useState(false);
  const [isVideoPubed, setIsVideoPubed] = useState(false);
  const [isVideoSubed, setIsVideoSubed] = useState(false);

  const turnOnCamera = async (flag) => {
    flag = flag ?? !isVideoOn;
    setIsVideoOn(flag);

    if (videoTrack) {
      return videoTrack.setEnabled(flag);
    }
    videoTrack = await createCameraVideoTrack();
    videoTrack.play("camera-video");
  };

  const turnOnMicrophone = async (flag) => {
    flag = flag ?? !isAudioOn;
    setIsAudioOn(flag);

    if (audioTrack) {
      return audioTrack.setEnabled(flag);
    }

    audioTrack = await createMicrophoneAudioTrack();
    // audioTrack.play();
  };

  const [isJoined, setIsJoined] = useState(false);
  const appid = useRef("")
  const token = useRef("");
  const channel = useRef("");

  const joinChannel = async () => {
    if (!channel.current) {
      channel.current = "react-room";
    }

    if (isJoined) {
      await leaveChannel();
    }

    client.on("user-published", onUserPublish);

    await client.join(
      appid.current,
      channel.current,
      token.current || null,
      null
    );
    setIsJoined(true);
  };

  const leaveChannel = async () => {
    setIsJoined(false);
    setIsAudioPubed(false);
    setIsVideoPubed(false);

    await client.leave();
  };

  const onUserPublish = async (
    user,
    mediaType
  ) => {
    if (mediaType === "video") {
      const remoteTrack = await client.subscribe(user, mediaType);
      remoteTrack.play("remote-video");
      setIsVideoSubed(true);
    }
    if (mediaType === "audio") {
      const remoteTrack = await client.subscribe(user, mediaType);
      remoteTrack.play();
    }
  };

  const publishVideo = async () => {
    await turnOnCamera(true);

    if (!isJoined) {
      await joinChannel();
    }
    await client.publish(videoTrack);
    setIsVideoPubed(true);
  };

  const publishAudio = async () => {
    await turnOnMicrophone(true);

    if (!isJoined) {
      await joinChannel();
    }

    await client.publish(audioTrack);
    setIsAudioPubed(true);
  };

  return (
    <>
      <div className="left-side mt-24">
        <h3>Pleat check you camera / microphone!</h3>
        <div className="buttons">
          <button
            onClick={() => turnOnCamera()}
            className={isVideoOn ? "button-on" : ""}
          >
            Turn {isVideoOn ? "off" : "on"} camera
          </button>
          <button
            onClick={() => turnOnMicrophone()}
            className={isAudioOn ? "button-on" : ""}
          >
            Turn {isAudioOn ? "off" : "on"} Microphone
          </button>
        </div>
        <h3>
          {`Please input the appid and token (`}
          <a href="https://www.agora.io/en/blog/how-to-get-started-with-agora">
            Create an account.
          </a>
          {`) `}
        </h3>
        <input
          defaultValue={appid.current}
          placeholder="appid"
          onChange={(e) => (appid.current = e.target.value)}
        />
        <input
          defaultValue={token.current}
          placeholder="token"
          onChange={(e) => (token.current = e.target.value)}
          
        />
        <h3>Please input the channel name</h3>
        <input
          defaultValue={channel.current}
          onChange={(e) => (channel.current = e.target.value)}
        />
        <div className="buttons">
          <button onClick={joinChannel} className={isJoined ? "button-on" : ""}>
            Join Channel
          </button>
          <button
            onClick={publishVideo}
            className={isVideoPubed ? "button-on" : ""}
          >
            Publish Video
          </button>
          <button
            onClick={publishAudio}
            className={isAudioPubed ? "button-on" : ""}
          >
            Publish Audio
          </button>
          <button onClick={leaveChannel}>Leave Channel</button>
        </div>
      </div>
      <div className="right-side">
        <video id="camera-video" hidden={isVideoOn ? false : true}></video>
        <video id="remote-video" hidden={isVideoSubed ? false : true}></video>
        {isJoined && !isVideoSubed ? (
          <div className="waiting">
            You can shared channel {channel.current} to others.....
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Interview;