export interface IAuthAuthenticateResponseModel {
  sessionId: string
  credentials: {
    encrypted_username: string
    encrypted_password: string
  }
}
