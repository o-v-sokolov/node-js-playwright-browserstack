export const CATEGORIES = {
	AutoGlassServices: {
		name: 'Auto Glass Services',
		url: '/auto-glass-services/',
		subcategories: {
			WindshieldRepair: {
				name: 'Windshield Repair',
				url: '/auto-glass-services/windshield-repair/'
			},
			WindshieldReplacement: {
				name: 'Windshield Replacement',
				url: '/auto-glass-services/windshield-replacement/'
			},
			CarWindowRearWindowWindshieldReplacement: {
				name: 'Car Window & Rear Window Windshield Replacement',
				url: '/auto-glass-services/car-window-rear-windshield-replacement/'
			},
			MobileAutoGlassRepair: {
				name: 'Mobile Auto Glass Repair',
				url: '/auto-glass-services/mobile-auto-glass-repair/'
			},
			Calibration: {
				name: 'Calibration',
				url: '/calibration/'
			},
		}
	},
	PaymentOptions: {
		name: 'Payment Options',
		url: '',
		subcategories: {
			BuyNowPayLater: {
				name: 'Buy Now, Pay Later',
				url: '/buy-now-pay-later/'
			},
			PaymentOptions: {
				name: 'Payment Options',
				url: '/payment-options/'
			},
			InsuranceClaimsManagement: {
				name: 'Insurance Claims Management',
				url: '/insurance-claims-management/'
			},
		}
	},
	WhyAGN: {
		name: 'Why AGN?',
		url: '',
		subcategories: {
			AboutUs: {
				name: 'About Us',
				url: '/about-us/'
			},
			NoHassleWarranty: {
				name: 'No Hassle Warranty',
				url: '/warranty/'
			},
			ContactUs: {
				name: 'Contact Us',
				url: '/contact-us/'
			},
		}
	},
} as const

