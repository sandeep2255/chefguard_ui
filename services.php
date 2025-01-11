<?php include("include/header.php")?>
<?php include("include/innerpage-slider.php")?>
<section class="inr-content-wrp">
<div id="carousel8" class="container main-service-list">


	<div style="clear:both;"></div>

	</div>

</div>
</section>
<script>
	console.log("API response received:");
	fetch('https://chefguardkitchenservices.com/backend/api/v1/serviceApi/Services')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		if (data.success) {
		var services = data.data[0];
		var carousel = document.getElementById('carousel8');

		services.forEach(function(service) {
			var serviceItem = document.createElement('div');
			serviceItem.classList.add('item');

			var serviceContent = `
			<div class="main-serv-inr wow fadeInUp animated">
				<img src="${service.images[0].image_url}" class="img-fluid"> 
				<img src="${service.Logo_url}" class="img-fluid sec-icn hvr-bounce-in">
				<div class="cont-sec">
				<h4>${service.Service_name}</h4>
				<p>${service.Description || 'Description not available'}</p>
				</div>
			</div>
			`;

			serviceItem.innerHTML = serviceContent;
			carousel.appendChild(serviceItem);
		});
		} else {
		console.error('API call failed');
		}
	})
	.catch(function(error) {
		console.error('Error fetching the data:', error);
	});

</script>
<?php include("include/footer.php")?>