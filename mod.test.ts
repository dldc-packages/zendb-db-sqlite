import { Database } from "@db/sqlite";
import { Utils } from "@dldc/zendb";
import { expect } from "@std/expect";
import { DbSqliteDriver } from "./mod.ts";

Deno.test("read pragma", () => {
  const db = new Database(":memory:");

  const res = DbSqliteDriver.exec(db, Utils.userVersion());
  expect(res).toEqual(0);
});

Deno.test("write pragma", () => {
  const db = new Database(":memory:");

  const res = DbSqliteDriver.exec(db, Utils.setUserVersion(42));
  expect(res).toEqual(null);
  const version = DbSqliteDriver.exec(db, Utils.userVersion());
  expect(version).toEqual(42);
});
