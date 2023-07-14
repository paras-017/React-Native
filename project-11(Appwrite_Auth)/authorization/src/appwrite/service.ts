import { ID, Account, Client} from 'appwrite'
import Config from 'react-native-config'
import Snackbar from 'react-native-snackbar'

const client = new Client()

const APPWRITE_ENDPOINTS: string = Config.APPRWRITE_ENDPOINTS!
const APPWRITE_PROJECT_ID: string = Config.APPRWRITE_PROJECT_ID!

// type for registring/login a user
type CreateUserAccount = {
    email:string,
    password:string,
    name:string
}
type LoginUserAccount = {
    email:string,
    password:string,
}

//creating a service
class Appwrite{
    account;
    constructor(){
        client.setEndpoint(APPWRITE_ENDPOINTS).setProject(APPWRITE_PROJECT_ID)
        this.account = new Account(client)
    }
    async createAccount({email, password, name}:CreateUserAccount){
        try {
              const userAccount = await this.account.create(ID.unique(), email,password,name);
              if(userAccount){
                return this.login({email, password})
              }else{
                return userAccount
              }
        } catch (error) {
            Snackbar.show({
                text:String(error),
                duration:Snackbar.LENGTH_LONG
            })
            console.log('Appwrite service :: createAccount() ::' + error);
        }
    }
    async  login({email, password}:LoginUserAccount) {
        try {
            return await this.account.createEmailSession(email, password);
        }  catch (error) {
            Snackbar.show({
                text:String(error),
                duration:Snackbar.LENGTH_LONG
            })
            console.log('Appwrite service :: loginAccount() ::' + error);
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log('Appwrite service :: getCurrentUser() ::' + error);
        }
    }
    async logout(){
     try {
        return await this.account.deleteSession('current')
     } catch (error) {
        console.log('Appwrite service :: logout() ::' + error);
     }
    }
}

export default Appwrite