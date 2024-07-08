import dotenv from 'dotenv'
dotenv.config()

const config = {
	retries: 1,
	testDir: 'tests',
	testMatch: '**/*.spec.ts',
	fullyParallel: true,
	reportSlowTests: null,
	timeout: 30 * 60 * 1000,
	use: {
		baseURL: process.env.BASE_URL,
		headless: false,
		actionTimeout: 60_000,
		navigationTimeout: 60_000,
		viewport: { width: 1920, height: 1080 },
		args: ["--start-maximized"]
	},
	expect: {
		timeout: 40_000,
	},
	workers: 1,
	reporter: 'line',
	projects: [
		{
			name: 'chrome',
			use: {
				browserName: 'chromium',
				viewport: { width: 1920, height: 1080 }
			},
		},
	],
}

