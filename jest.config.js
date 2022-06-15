module.exports = {
	verbose: true,
	roots: ['<rootDir>/test'],
	transform: {
		'^.+\\.ts?$': 'ts-jest',
	},
	testMatch: ['**/test/*spec.+(ts)', '**/test/**/*spec.+(ts)'],
	collectCoverage: true,
	coverageThreshold: {
		global: {
			branches: 60,
			functions: 60,
			lines: 60,
			statements: 60,
		},
	},
	coveragePathIgnorePatterns: ['./node_modules/', './test/'],
	coverageReporters: ['json-summary', 'text', 'lcov'],
	globals: {
		'ts-jest': {
			diagnostics: false,
		},
	},
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};