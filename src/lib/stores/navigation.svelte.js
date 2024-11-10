function navigationPreference() {
	let isSidemenuOpen = $state(false);
	let toolName = $state('Tool Name');

	function toggleSidemenu() {
		isSidemenuOpen = !isSidemenuOpen;
	}

	return {
		get isSidemenuOpen() {
			return isSidemenuOpen;
		},
		toggleSidemenu,
		get toolName() {
			return toolName;
		},
		set toolName(name) {
			toolName = name;
		}
	};
}

export const navigationPreferences = navigationPreference();
