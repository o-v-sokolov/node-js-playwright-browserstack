import dotenv from 'dotenv'
dotenv.config()

const config = {
	retries: 1,
	testDir: 'tests',
	testMatch: '**/*.spec.ts',
	fullyParallel: true,
	reportSlowTests: null,
	timeout: 60 * 60 * 1000,
	globalTimeout: 60 * 60 * 1000,
	use: {
		baseURL: process.env.BASE_URL,
		headless: false,
		actionTimeout: 60 * 1000,
		navigationTimeout: 2 * 60 * 1000,
		viewport: { width: 1920, height: 1080 },
		args: ["--start-maximized"],
		ignoreHTTPSErrors: true,
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

