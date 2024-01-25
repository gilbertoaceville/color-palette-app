/** @type {import('next').NextConfig} */
const path = require("path");

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
