declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      DB_URL: string
      SECRET_KEY: string
    }
  }
}
export { };