import { Database as BaseDb } from "@db/sqlite";
import { Database } from "@dldc/zendb";
import { expect } from "@std/expect";
import { DbDatabase } from "./mod.ts";

Deno.test("read pragma", () => {
  const sqldb = new BaseDb(":memory:");
  const db = DbDatabase(sqldb);

  const res = db.exec(Database.userVersion());
  expect(res).toEqual(0);
});

Deno.test("write pragma", () => {
  const sqldb = new BaseDb(":memory:");
  const db = DbDatabase(sqldb);

  const res = db.exec(Database.setUserVersion(42));
  expect(res).toEqual(null);
  const version = db.exec(Database.userVersion());
  expect(version).toEqual(42);
});
