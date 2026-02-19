Please analyze the current directory. This is an old side project of mine: a sound map of Wrocław (audio recordings placed on Google Maps). It is currently live and working at https://dzwiekowamapa.pl (please take a look to understand the current UI and style).

My main goals are to modernize the codebase, simplify it, and make it cheaper to host by converting it into a static website. However, I want to keep the visual style and UI as close to the current live version as possible. 

Additionally, I moved my media hosting from SoundCloud to Cloudinary, which introduced some bugs. We no longer use SoundCloud, so ignore/remove `tracks.json.old` and any legacy SoundCloud logic. 

Please perform the following tasks:

1. FIX CLOUDINARY PATHS:
The asset paths have changed and the current ones are broken. Update the code to generate or use the correct Cloudinary URL formats:
- CURRENT BROKEN IMAGE PATH (Example): 
  https://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/budowa1.jpg
- CORRECT IMAGE PATH (Example): 
  https://res.cloudinary.com/endziu/image/upload/v1509013300/mapa/images/budowa1.jpg
- CORRECT SOUND PATH (Example): 
  https://res.cloudinary.com/endziu/video/upload/v1633510669/mapa/sounds/rooks.mp3
- CORRECT WAVEFORM PATH (Example): 
  https://res.cloudinary.com/endziu/image/upload/v1633510919/mapa/waveforms/wroclaw-in-the-rain-waveform.png

2. MODERNIZE & SIMPLIFY (STATIC SITE):
- Refactor the current setup into a clean, modern static website (e.g., plain HTML/CSS/JS, or a lightweight bundler like Vite if necessary). 
- Ensure the Google Maps integration and custom map markers/audio players still function perfectly.
- Strictly preserve the existing CSS/styling.

3. ADMIN PAGE PROPOSAL/CREATION:
- I need a way to upload new sounds, images, and waveforms to Cloudinary easily.
- Create or outline a simple, secure admin page (or a lightweight local script) that handles these uploads and updates the main static site's data source (e.g., a new JSON file).

Please start by exploring the directory, reading the main entry files, and mapping out the current architecture. Once you have a grasp of the files, give me a brief plan of action before you start rewriting code. Ask me any clarifying questions you might need regarding the Google Maps API key, current data structures, or hosting preferences.
