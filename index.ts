import { getRepoName as getChildXRepoName } from "@rchapkailo/child-x";
import { getRepoName as getChildYRepoName } from "@rchapkailo/child-y";
import { getRepoName as getSharedRepoName } from "@rchapkailo/shared";

export const REPO_NAME = "parent";

export type RepoNames = {
	parent: string;
	childX: string;
	childY: string;
	shared: string;
};

export function getAllRepoNames(): RepoNames {
	return {
		parent: REPO_NAME,
		childX: getChildXRepoName(),
		childY: getChildYRepoName(),
		shared: getSharedRepoName(),
	};
}

export function logAllRepoNames(): string {
	const names = getAllRepoNames();
	const summary = `Repos: parent=${names.parent}, child-x=${names.childX}, child-y=${names.childY}, shared=${names.shared}`;
	console.log(summary);
	return summary;
}

logAllRepoNames();