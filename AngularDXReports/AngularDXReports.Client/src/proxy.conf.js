const PROXY_CONFIG = [
  {
    context: [
      "/DXXRD", "/DXXQB", "DXXRDV"
    ],
    target: "https://localhost:64522/",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
