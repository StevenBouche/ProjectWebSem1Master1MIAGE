
export class Config {

  public static readonly isDev = true;

  public  static readonly API_URL : string = Config.getURLAPI() +":7000";
  public static API_WS: string = Config.getURLAPI() + ":8081";

  private static getURLAPI(): string {
    if(Config.isDev) return "http://localhost";
    else return "http://51.210.181.145";
  }

}


