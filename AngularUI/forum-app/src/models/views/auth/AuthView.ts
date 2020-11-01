

enum UserRole {
    ADMIN = 0,
    USER = 1
}

class LoginView {
    public email: string;
    public password: string;
    public AddressIP: string;
}

class RegisterView {
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public AddressIP: string;
}

class ProfilView {
    public firstName: string;
    public lastName: string;
    public birthdayDate: Date;
    public role : UserRole;
}

class AccountView {
    public _id: string;
    public pseudo: string;
    public email: string;
    public profil: string;
}

export {UserRole, LoginView, RegisterView, ProfilView, AccountView}