#
# Vars
#

NODE_BIN = ./node_modules/.bin

#
# Tasks
#

clean:
	@rm -rf node_modules/lib &> /dev/null || true &
	@rm -rf lib &> /dev/null || true

reactify: clean
	@${NODE_BIN}/babel ${PWD}/src --out-dir  ${PWD}/lib
	@${NODE_BIN}/babel ${PWD}/src --watch --out-dir  ${PWD}/lib &
	@wait

lint: reactify
	@${NODE_BIN}/standard ${PWD}/src

link: lint
	@ln -s ${PWD}/lib ${PWD}/node_modules

watchify: link
	@${NODE_BIN}/watchify lib/Main.js -d -g livereactload -o ./public/bundle.js &
	@wait

reload: watchify
	@node_modules/.bin/livereactload monitor -n ${PWD}/public/bundle.js &
	@wait

dev: reload
	@${NODE_BIN}/babel-node app.js

prod: clean
	@${NODE_BIN}/browserify src/index.jsx | ${NODE_BIN}/uglifyjs > ./public/bundle.js

.PHONY: clean link reactify reload dev prod
