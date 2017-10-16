$(function () {

	load();

	function load() {
		var fetch = new XMLHttpRequest();

		fetch.open('GET', 'elements.json', true);
		fetch.onload = function () {
			if (this.status == 200) {
				var elem = JSON.parse(this.responseText);
				var prev = $('.prev'),
					next = $('.next'),
					type = $('.type'),
					number = $('.number'),
					name = $('.name'),
					symbol = $('.symbol'),
					atomicMassData = $('.atomicMassData'),
					densityData = $('.densityData'),
					discoveryData = $('.discoveryData'),
					meltingData = $('.meltingData'),
					boilingData = $('.boilingData'),
					summaryData = $('.summaryData'),
					start = 1,
					end = 1;

				// Insert data for first element
				//data(0);

				//Insert data for next element
				next.on('click', function () {
					data(end);
					start++;
					end++;
				});

				//Insert data for previous element
				prev.on('click', function () {
					start--;
					end--;
					data(start);
				});

				//Data to be inserted
				function data(n) {
					type.text(elem.elements[n].category);
					number.text(elem.elements[n].number);
					name.text(elem.elements[n].name);
					symbol.text(elem.elements[n].symbol);
					atomicMassData.text(elem.elements[n].atomic_mass);
					densityData.text(elem.elements[n].density);
					discoveryData.text(elem.elements[n].discovered_by);
					meltingData.text(elem.elements[n].melt);
					boilingData.text(elem.elements[n].boil);
					summaryData.text(elem.elements[n].summary);
				}
			}
		}
		fetch.send();
	}

});