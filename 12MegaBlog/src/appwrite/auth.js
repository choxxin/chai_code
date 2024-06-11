import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteurl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //
        //call another function
        return this.login({ email, password }); //we would login the user once he registered
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite getcurrent user :::error", error);
    }
    return null; // For emergencvy case if try catch doent get error
  }

  async Logout(str) {
    try {
      await this.account.deleteSession(str);
    } catch (error) {
      console.log("Appwrite error :: logout :::", error);
    }
  }
}
const authService = new AuthService();

export default authService;
