import { Database } from "@db/sqlite";
import { Driver } from "@dldc/zendb";

export const DbSqliteDriver = Driver.createDriverFromPrepare<Database>({
  exec: (db, sql) => db.exec(sql),
  prepare: (db, sql) => db.prepare(sql),
  createDatabase: () => new Database(":memory:"),
});
