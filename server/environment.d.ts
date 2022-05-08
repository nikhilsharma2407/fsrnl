declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      DB_URL: string
      SECRET_KEY: string
    }
  }
}
export { };