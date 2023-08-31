declare module 'git-get-history' {
	export function getHistory(filename: string): Promise<{
		commit: string;
		file: string;
	}[]>;
}

//# sourceMappingURL=index.d.ts.map