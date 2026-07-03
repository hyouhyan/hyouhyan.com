
default:
	$(MAKE) init
	$(MAKE) run

init:
	pnpm install

run:
	pnpm run dev --host=0.0.0.0

build:
	pnpm run build
