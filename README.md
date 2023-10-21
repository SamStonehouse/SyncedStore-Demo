# SyncedStore Demo Project

A test project for [SyncedStore](https://syncedstore.org/docs/basics/example)

## Notes

- Firefox has issues with WebRTC when on localhost, using --host 0.0.0.0 and your local IP address seems to partially solve the issue but refreshing the page doesn't resync with other tabs: https://stackoverflow.com/questions/72862092/webrtc-ice-failed-in-firefox-but-working-in-ms-edge

- After experimentation, I would recommend using a centralised server (y-websocket) over WebRTC (y-webrtc)
