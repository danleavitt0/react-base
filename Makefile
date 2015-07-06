#
# Vars
#

NODE_BIN = ./node_modules/.bin

#
# Tasks
#

clean:
	@rm -rf lib &> /dev/null || true

reactify: clean
	@${NODE_BIN}/babel ${PWD}/src --out-dir  ${PWD}/lib
	@${NODE_BIN}/babel ${PWD}/src --watch --out-dir  ${PWD}/lib &
	@wait

watchify: link
	@${NODE_BIN}/watchify lib/Main.js -d -o ./public/bundle.js &
	@wait

dev: watchify
	@${NODE_BIN}/babel-node app.js

prod: clean
	@${NODE_BIN}/browserify src/index.jsx | ${NODE_BIN}/uglifyjs > ./public/bundle.js

.PHONY: clean link reactify reload dev prod
