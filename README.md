## Color Palette ✍️

A way to generate colors from images including but not limited to (jpg, jpeg, png, webp)

## Installation 🛠️

After cloning the project, you need to run `npm install`, then `npm run dev` 🔧

## Process 💪

Extended the default Next.js Configuration to include custom Sass options allowing the usage of Sass files located in specified paths.

```jsx
const nextConfig = {};

module.exports = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig)
    defaultConfig["sassOptions"] = {
      includePaths: [path.join(__dirname, "src/styles")],
    };
  const config = {
    ...defaultConfig,
    ...nextConfig,
  };

  return config;
};

```

Adding images to generate color palettes returns values which was converted to hex using the utility function

```jsx
export function convertRgbToHex(rgb: string) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }

  return hex;
}

```

## Notes 🗒️

- Drag and drop was implemented
- Application in some parts is still a work in progress
- Project was not written with responsiveness in mind (esp. on mobile devices)
- Colors generated can be copied on the palette
- My main inspiration for this project was Github Project 😁

## Tools ⚒️

- Building: React, TypeScript, SCSS, React Dropzone, Color Thief

## Next Steps 🖌️

- Implementing a reponsive UI
- Focus on accessibility

## Demo 🎥

https://ik.imagekit.io/xitvuuh9spa/Color_palette_screen_recording_1Wdj67po8.mp4


