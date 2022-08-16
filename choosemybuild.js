const builds = [
  "Blade Blast/Blade Fall",
  "Blade Vortex Poison",
  "Blade Vortex Cold Conversion",
  "Poisonous Concoction"
];
let buildsCount = [0, 0, 0, 0];
for (let i = 0; i < 100; i++) {
  let pickABuild = Math.floor(Math.random() * builds.length);
  //console.log(builds[pickABuild]);
  if (builds[pickABuild] === "Blade Blast/Blade Fall") {
    buildsCount[pickABuild]++;
  } else if (builds[pickABuild] === "Blade Vortex Poison") {
    buildsCount[pickABuild]++;
  } else if (builds[pickABuild] === "Blade Vortex Cold Conversion") {
    buildsCount[pickABuild]++;
  } else if (builds[pickABuild] === "Poisonous Concoction") {
    buildsCount[pickABuild]++;
  }
}
const tableElement = document.querySelector("#buildsTable");
for (let j = 0; j < builds.length; j++) {
  console.log(builds[j] + " " + buildsCount[j]);
  const rowTable = tableElement.insertRow(1);
  let cellLeft = rowTable.insertCell(0);
  let cellRight = rowTable.insertCell(1);
  cellLeft.innerHTML = builds[j];
  cellRight.innerHTML = buildsCount[j];
}
const barColors = ["#91469E","#19691A","#31C1B2","#A5C131"];
new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: builds,
    datasets: [{
  		backgroundColor: barColors,
  		data: buildsCount
    }],
    hoverOffset: 4
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: "Choosing a build for PoE 3.19 Lake of Kalandra League"
      }
    }
  },
});