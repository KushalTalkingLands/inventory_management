export class appConfig{
    public static readonly Port = 3002
    public static readonly jwtToken = "This is a test secret key"

    //user config
    public static readonly userController = "user"
    public static readonly SignUp = "signup"
    public static readonly SignIn = "signin"
    public static readonly usernamePath = ":username"
    public static readonly usernameParam = "username"
    public static readonly changePasswordPath = ":username/change-password"
    public static readonly newPassword = "newPassword"

    //restaurant Config
    public static readonly restaurantController = "inventory"
    public static readonly restaurantParamId = ":id"
    public static readonly restaurantId = "id"
}