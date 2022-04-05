import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './StatsPage.scss';

const state = {
	labels: ['2008', '2015', '2021'],
	datasets: [{
		label: '# Graduates',
		data: [20, 130, 500],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
		],
		borderColor: [
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
		],
		borderWidth: 3,
		tension: 0.4,
		pointRadius: 5,

	}],
};

function StatsPage() {
	return (
		<div id="metrics-page" className="metrics-page section page">
			<div className="text-area">
				<div className="row-content">
					<div className="column-content">
						<div className="page-title metrics-title"> O TEU LUGAR É AQUI! </div>
						<div className="metrics-stats column-content">
							<div className="row-content">
								<div className="metrics-stat">
									<div className="metrics-bigstext"> 500+ </div>
									<div className="metrics-smallstext"> alunos formados desde 2008. Mais de 140 inscrições em 2020. </div>
								</div>
							</div>
						</div>
					</div>

					<div className="metrics-par">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non eos id neque
						amet. Vero quaerat soluta ratione facere maxime, odio nemo magnam perspiciatis sunt eum
						atque! Earum adipisci suscipit asperiores, placeat qui cumque. Nostrum corrupti
						veritatis at veniam id odio, nisi incidunt nobis vitae laudantium laboriosam officiis
						saepe dolores architecto nesciunt tempore nihil, quos voluptates tenetur cumque natus
						voluptatum? Dicta vitae repellendus cupiditate eum iste earum velit ex cumque sequi
						accusantium.
					</div>
				</div>
			</div>

			<div className="graph">
				{/* <canvas id="myChart" /> */}
				<Line
  data={state}
  options={{
						responsive: true,
						maintainAspectRatio: false,
						scales: {
							x: {
								grid: {
									display: false,
									borderColor: 'white',
								},
								drawOnChartArea: true,
								drawTicks: true,
							},
							y: {
								beginAtZero: true,
								grid: {
									display: false,
									borderColor: 'white',
								},
							},
						},
					}}
				/>
			</div>
		</div>
	);
}

export default StatsPage;
