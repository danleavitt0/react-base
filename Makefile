#
# Vars
#

NODE_BIN = ./node_modules/.bin

#
# Tasks
# 

clean: 
	@rm -rf node_modules/lib &> /dev/null || true

reactify: clean
	@${NODE_BIN}/jsx --watch ${PWD}/src ${PWD}/lib &
	@wait
	
link: reactify
	@ln -rs lib node_modules/lib

reload: link
	@${NODE_BIN}/watchify node_modules/lib/Index.js -o ./public/bundle.js &
	@wait

dev: reload
	@${NODE_BIN}/nodemon app.js

prod: clean
	@${NODE_BIN}/browserify src/index.jsx | ${NODE_BIN}/uglifyjs > ./public/bundle.js

.PHONY: clean link reactify reload dev prod