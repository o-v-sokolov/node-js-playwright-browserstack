import { Locator } from '@playwright/test'
import { CATEGORIES } from '@lib/data/categories'
import { Button } from '@lib/elements/button'
import { BaseComponent } from '@lib/elements/base_component'

export class Menu extends BaseComponent {
	private categoriesMenuLocator: Locator

	constructor(container: Locator) {
		super('Menu', container, true)

		this.categoriesMenuLocator = this.page.locator('.css-c4lalm:visible')
	}

	getCategoryByText(text: string) {
		return new Category(
			`Category by text - "${text}"`,
			this.categoriesMenuLocator.getByText(text)
		)
	}

	override async isOk() {
		if (!(await super.isOk())) return false

		for (const categoryKey in CATEGORIES) {
			const categoryName = categoryKey as keyof typeof CATEGORIES
			const subCategories = CATEGORIES[categoryName].subcategories
			const category = await this.getCategoryByText(CATEGORIES[categoryName].name)
			if (!(category.isOk())) return false
			await category.hover()

			for (const subCategoryKey in subCategories) {
				const subCategoryName = subCategoryKey as keyof typeof subCategories
				const subCategory =
					await this.getCategoryByText(CATEGORIES[categoryName].name)
					.getSubCategoryByText((subCategories[subCategoryName] as { name: string }).name)
				if (!(subCategory.isOk())) return false
				await subCategory.hover()
			}
		}

		return true
	}
}

export class Category extends BaseComponent {
	private subCategoryMenuLocator: Locator

	constructor(name: string, container: Locator) {
		super(name, container, true)

		this.subCategoryMenuLocator = this.page.locator('.css-zmrfmj:visible')
	}

	getSubCategoryByText(text: string) {
		return new BaseComponent(
			`Sub category by text - "${text}"`,
			this.subCategoryMenuLocator.locator(`.css-c4lalm >> text="${text}"`)
		)
	}
}
