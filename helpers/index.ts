import { config } from 'dotenv';

config();

import { compare, genSalt, hash } from 'bcryptjs';

const DEFAULT_SALT_ROUNDS = 5;

const SALT_ROUNDS =
  process.env.SALT_ROUNDS && !isNaN(parseInt(process.env.SALT_ROUNDS))
    ? parseInt(process.env.SALT_ROUNDS)
    : DEFAULT_SALT_ROUNDS;

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await genSalt(SALT_ROUNDS);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

export const isPasswordCorrect = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await compare(password, hashedPassword);
};
