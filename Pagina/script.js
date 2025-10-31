document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('encuestaForm');
	const success = document.getElementById('mensajeExito');
	const interes = document.getElementById('interes');
	const interesOutput = document.getElementById('interesOutput');

	if (interes && interesOutput) {
		interes.addEventListener('input', () => {
			interesOutput.textContent = interes.value;
		});
	}

	form?.addEventListener('submit', (ev) => {
		ev.preventDefault();

		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		// Aquí podrías enviar 'data' a tu backend si lo tuvieras.
		// Simulamos un envío asíncrono breve.
		Promise.resolve().then(() => new Promise((r) => setTimeout(r, 350)))
			.then(() => {
				form.reset();
				interesOutput.textContent = '3';
				success.hidden = false;
				success.focus?.();
				success.scrollIntoView({ behavior: 'smooth', block: 'center' });
				setTimeout(() => { success.hidden = true; }, 4000);
			})
			.catch(() => {
				// En un escenario real, mostrarías un mensaje de error
			});
	});
});

