.SILENT: run fetch push

all: run

run:
	@echo "Network access: http://$$(hostname -I | awk '{print $$1}'):8000"
	@echo ""
	python3 -m http.server --bind 0.0.0.0
