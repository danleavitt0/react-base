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

reload: link
	@${NODE_BIN}/watchify node_modules/lib/Index.js -d -o ./public/bundle.js &
	@wait

dev: reload
	@${NODE_BIN}/nodemon app.js

prod: clean
	@${NODE_BIN}/browserify src/index.jsx | ${NODE_BIN}/uglifyjs > ./public/bundle.js

.PHONY: clean link reactify reload dev prod
