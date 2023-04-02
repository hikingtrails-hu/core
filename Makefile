.PHONY: test format-code check-code-format verify

BIN=node_modules/.bin
PRETTIER=$(BIN)/prettier

default: dist .npmignore

.npmignore: node_modules
	$(BIN)/npmignore --auto

node_modules: package.json yarn.lock
	yarn --frozen-lockfile
	touch node_modules

format-code: node_modules
	$(PRETTIER) --write .

check-code-format: node_modules
	$(PRETTIER) --check .
	$(BIN)/eslint

verify: check-code-format check-types test

test: node_modules
	$(BIN)/jest

dist: node_modules
	$(BIN)/tsc -p src --pretty

check-types: node_modules
	$(BIN)/tsc -p . --pretty --noEmit
