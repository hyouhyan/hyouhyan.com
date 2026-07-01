
default:
	$(MAKE) init
	$(MAKE) run

init:
	pnpm install

run:
	pnpm run dev

build:
	pnpm run build
