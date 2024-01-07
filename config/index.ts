class BaseConfig {
  public PORT: number = parseInt(process.env.PORT || '3000', 10);

  public NODE_ENV: string = process.env.NODE_ENV || 'development';

  public ERROR_ON_NON_ALLOWED_KEYS: boolean =
    (process.env.ERROR_ON_NON_ALLOWED_KEYS || '').toLowerCase() === 'true';

  // DB Config
  public DB_HOST: string = process.env.DB_HOST || 'localhost';

  public DB_PORT: number = parseInt(process.env.DB_PORT || '3306', 10);

  public DB_USERNAME: string = process.env.DB_USERNAME || 'root';

  public DB_PASSWORD: string = process.env.DB_PASSWORD || '';

  public DB_DATABASE: string = process.env.DB_DATABASE || 'tik-tok-be';

  // Password Config
  public PASSWORD_REGEX: RegExp = new RegExp(
    process.env.PASSWORD_REGEX || '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
    'i',
  );

  public SALT_ROUNDS: number = parseInt(process.env.SALT_ROUNDS || '10', 10);

  public USERNAME_REGEX: RegExp = new RegExp(
    process.env.USERNAME_REGEX || '^[a-zA-Z0-9_]{4,}$',
    'i',
  );

  public isProd() {
    return this.NODE_ENV === 'production';
  }
}

export const Config = new BaseConfig();
