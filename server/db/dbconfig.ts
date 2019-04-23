

interface DbConfig {
  user: string;
  host: string;
  password: string;
  database: string;
  port: number;
  max?: number
}

const dbconfig: DbConfig = {
  user: 'mcnibyku',
  host: 'otto.db.elephantsql.com',
  password: 's9gEok0TOTmV_8iBaykdPlGH3gI3_vdQ',
  database: 'mcnibyku',
  port: 5432,
  max: 1
}

export default dbconfig;