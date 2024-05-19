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
	npx jest

run:
	gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json
