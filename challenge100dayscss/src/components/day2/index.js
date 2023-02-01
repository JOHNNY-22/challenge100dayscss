import './index.css'
function day2() {
    let isMenuOpen = false;
	const menuItem = document.querySelector('.menu-item');
	menuItem.addEventListener('click', () => {
 		isMenuOpen = !isMenuOpen; 
                            
  		if (isMenuOpen) { 
			menuItem.classList.add('open');
		} 
		else {
		menuItem.classList.remove('open');
		}
	});
return (
    <div class="frame">
  <div class="center">
		<div class="menu-item">
			<div class="line1"> </div>
			 <div class="line2"> </div>
			 <div class="line3"> </div>
		</div>
  </div>
</div>
)
}
export default day2;