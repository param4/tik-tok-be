export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  profilePic: string;
  username: string;
  verificationCode?: string;
  isVerified?: boolean;
  isActive?: boolean;
};

export type UserWithIdType = UserType & { id: string };
