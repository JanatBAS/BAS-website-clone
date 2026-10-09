export const env = {
  get JWT_SECRET(): string {
    const v = process.env.JWT_SECRET;
    if (!v) throw new Error('Missing required environment variable: JWT_SECRET');
    return v;
  },
  get ADMIN_PASSWORD_HASH(): string {
    const v = process.env.ADMIN_PASSWORD_HASH;
    if (!v) throw new Error('Missing required environment variable: ADMIN_PASSWORD_HASH');
    return v;
  },
};
