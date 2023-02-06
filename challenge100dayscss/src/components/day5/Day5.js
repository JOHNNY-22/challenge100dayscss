import './Day5.css'
import React from 'react';
function day5() {
    return(
<div className="frame">
  <div className="center">
	<div className="card">
		<div className="header">
			<div className="left-info">
				<p className="title"> WEEKLY REPORT </p>
				<p className="date"> 01. Feb - 07. Feb </p>
			</div>
			<div className="right-info">
				<p className="revenue"> Revenue </p>
				<p className="amount"> $ 3621.79 </p>
			</div>
		</div>
		<div className="body">
			<div className="parameters"> 
				<div className="lineRed"> </div>
				<span className="red">Views </span>
				<div className="lineBlue"> </div>
				<span className="blue">Purchases</span>
			</div> 
			<div className="statistic">
				<div className="line-1"></div>
				<div className="line-2"></div>
				<div className="line-3"></div>
				<div className="Redline">
					<svg height="200" width="500">
 			 			<polyline points="0,55 50,15 100,25 150,12 200,50 250,60 300,20"/>
					</svg>
				</div>
				<div className="RedPoints">
						<div className="point-1"><div className="expand"><span>458</span></div></div>
						<div className="point-2"><div className="expand"><span>812</span></div></div>
						<div className="point-3"><div className="expand"><span>746</span></div></div>
						<div className="point-4"><div className="expand"><span>877</span></div></div>
						<div className="point-5"><div className="expand"><span>517</span></div></div>
						<div className="point-6"><div className="expand"><span>434</span></div></div>
						<div className="point-7"><div className="expand"><span>458</span></div></div>
				</div> 
				<div className="Blueline">
					<svg height="200" width="500">
 			 			<polyline points="0,75 50,65 100,90 150,80 200,83 250,100 300,85"/>
					</svg>
				</div>
				<div className="bluePoints">
				        <div className="point-1"><div className="expand">743</div>  </div>
						<div className="point-2"><div className="expand">458</div>  </div>
						<div className="point-3"><div className="expand">127</div>  </div>
						<div className="point-4"><div className="expand">974</div>  </div>
						<div className="point-5"><div className="expand">497</div>  </div>
						<div className="point-6"><div className="expand">312</div>  </div>
						<div className="point-7"><div className="expand">769</div>  </div>
				</div>
            </div> 
		    <div className="week"> 
                <span className="day">MON</span>
                <span className="day">TUE</span>
                <span className="day">WED</span>
                <span className="day">THU</span>
                <span className="day">FRI</span>
                <span className="day">SAT</span>
                <span className="day">SUN</span>
		    </div>
        </div>
    </div>
    </div>
    </div>);
}

export default day5;