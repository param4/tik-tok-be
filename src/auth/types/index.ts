export type JwtPayloadType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  iat?: number;
  exp?: number;
};
