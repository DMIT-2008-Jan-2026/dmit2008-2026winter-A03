/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Strict Mode is basically a debug mode that will test-fire
  // component rendering twice, effects twice (old state -> new state), etc.
  // to ensure proper cleanup etc. and give you more debug feedback than usual.

  // Docs if you're curious: https://react.dev/reference/react/StrictMode

  // It also means that all API calls get duplicated (if they're made by effects/components),
  // so I'm turning it off in this case because I'm dealing with an external API and I don't
  // wanna accidentally get rate-limited (low risk in this case, but could happen if we accidentally
  // code something where an effect runs in an infinite loop, etc.)
  reactStrictMode: false,
}

module.exports = nextConfig
