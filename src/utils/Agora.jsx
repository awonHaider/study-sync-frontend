import * as AgoraRTM from "agora-rtm-sdk";
import AgoraRTC from "agora-rtc-sdk-ng";

// Replace with your Agora App ID
export const appId = "f61c050e65eb466b8c10aa84fb628020";
// export const appId = "7b3e072fa18d4e95aa0f4e31e48272f8";

// RTC Client for Video/Audio
export const rtcClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

// Initialize RTM Client
export const rtmClient = AgoraRTM.createInstance(appId); // Replace with your actual App ID

export const joinRtcChannel = async (channel, uid) => {
  await rtcClient.join(appId, channel, null, uid);
  console.log("AgoraRTM:", AgoraRTM);
  console.log("RTM Client:", rtmClient);
  return await AgoraRTC.createMicrophoneAndCameraTracks();
};

export const joinRtmChannel = async (channel, uid) => {
  await rtmClient.login({ uid: `${uid}` });
  const rtmChannel = rtmClient.createChannel(channel);
  await rtmChannel.join();
  return rtmChannel;
};
