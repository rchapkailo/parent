import { describe, expect, it, mock } from "bun:test";

import { getAllRepoNames, logAllRepoNames } from "./index";

describe("parent repo aggregation", () => {
  it("returns all repo names", () => {
    expect(getAllRepoNames()).toEqual({
      parent: "parent",
      childX: "child-x",
      childY: "child-y",
      shared: "shared",
    });
  });

  it("logs one aggregated summary", () => {
    const spy = mock(() => {});
    const originalLog = console.log;
    console.log = spy;

    const summary = logAllRepoNames();

    expect(summary).toBe("Repos: parent=parent, child-x=child-x, child-y=child-y, shared=shared");
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(summary);

    console.log = originalLog;
  });
});
