import react from '@vitejs/plugin-react'

const config = {
  plugins: [
    react({
      babel: {
        plugins: ["react-native-web"]
      }
    }),
  ],
}

export default config