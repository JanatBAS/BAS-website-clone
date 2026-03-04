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
  get BLOB_READ_WRITE_TOKEN(): string {
    const v = process.env.BLOB_READ_WRITE_TOKEN;
    if (!v) throw new Error('Missing required environment variable: BLOB_READ_WRITE_TOKEN');
    return v;
  },
};
