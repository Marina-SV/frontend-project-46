install:
	npm ci

publish:
	npm publish --dry-run

link:
	npm link

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

test:
	npm test
