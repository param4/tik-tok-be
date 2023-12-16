class BaseConfig {
  public NODE_ENV: string = process.env.NODE_ENV || 'development';

  public ERROR_ON_NON_ALLOWED_KEYS: boolean =
    (process.env.ERROR_ON_NON_ALLOWED_KEYS || '').toLowerCase() === 'true';

  public isProd() {
    return this.NODE_ENV === 'production';
  }
}

export const Config = new BaseConfig();
