<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script>
let osoby = ["Andrzejczuk Piotr","Bąkowicz Patryk","Bolshakova Solomiya","Dudczak Wiktoria","Dynarowicz Mateusz","Grolik Bartosz","Gruszka Jonatan","Hedwig Fabian","Hejorz Patryk","Imiolek Sławek","Jarosz Dominik","Kaczmarczyk Jakub","Kaluga Piotr","Konewka Robert","Krasoń Olaf","Kuśnierczyk Wojciech","Letkiewicz Michał","Miratyński Piotr","Pająk Michał","Pianka Michał","Piłat Mateusz","Popenda Wiktoria","Pyka Bartłomiej","Sawicki Przemysław","Seifert Filip","Sonka Jakub","Styczeń Jakub","Surzyn Maciej","Wieczorek Karol","Zawisła Iwo",]

const startDate = new Date("2023-09-04");

const currentDate = new Date();

const daysDiff = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

const weekNumber = Math.floor(daysDiff / 7);

const dyzurny = (weekNumber * 2) % osoby.length;

var percent = (daysDiff/291*100).toFixed(2);

const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
const options2 = { weekday: 'long'}; 
</script>
<title>Kto jest dziś dyżurnym?</title>
<div class="p-6 card !bg-transparent rounded-2xl shadow-4xl sm:max-w-md m-auto md:mt-40 mt-32">
  <h1 class="text-xl leading-tight tracking-tight md:text-2xl">
  </h1>
	<h1 class="text-xl leading-tight tracking-tight md:text-2xl">Kto jest dziś dyżurnym?</h1>
  <div class="pt-3 font-light text-small">
	<p>W dniu <x class="font-medium">{currentDate.toLocaleDateString('pl-PL', options)}</x> ({currentDate.toLocaleDateString('pl-PL',options2)}) dyżurnymi są:</p>
	<div class="text-2xl font-medium text-center mt-2">
	<ul>
		<li class="mb-2">{dyzurny+". "+osoby[dyzurny]}</li>
		<li class="mb-4">{dyzurny+1+". "+osoby[dyzurny+1]}</li>
	</ul>
	</div>
	<p>Jest to <x class="font-medium">{weekNumber}</x> tydzień i <x class="font-medium">{daysDiff}</x> dzień roku szkolnego. Do zakończenia roku pozostało <x class="font-medium">{291-daysDiff}</x> dni. Innymi słowy, mineło już <x class="font-medium">{percent}%</x> roku szkolnego.</p>

</div>	
</div>